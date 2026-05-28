const CLIENT_ID =
  "78892235788-j573mnvarkkrsqia3gmibmb8cesvh9t4.apps.googleusercontent.com";

const SCOPES = "https://www.googleapis.com/auth/calendar";

let tokenClient;

let gapiInited = false;
let gisInited = false;

let initCallback = null;

/* -----------------------------
   INIT PRINCIPAL
------------------------------*/
export function initGoogleCalendar(callback) {
  initCallback = callback;

  loadGapi();
  loadGis();
}

/* -----------------------------
   CARGAR GAPI
------------------------------*/
function loadGapi() {
  const script = document.createElement("script");
  script.src = "https://apis.google.com/js/api.js";

  script.onload = () => {
    window.gapi.load("client", async () => {
      try {
        await window.gapi.client.init({
          discoveryDocs: [
            "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
          ],
        });

        gapiInited = true;
        checkReady();
      } catch (err) {
        console.error("Error iniciando GAPI:", err);
      }
    });
  };

  document.body.appendChild(script);
}

/* -----------------------------
   CARGAR GIS
------------------------------*/
function loadGis() {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";

  script.onload = () => {
    tokenClient = window.google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPES,
      callback: (tokenResponse) => {
        if (tokenResponse.error) {
          console.error("Error login Google:", tokenResponse);
          return;
        }

        console.log("✅ Login exitoso con Google Calendar");
      },
    });

    gisInited = true;
    checkReady();
  };

  document.body.appendChild(script);
}

/* -----------------------------
   READY CHECK
------------------------------*/
function checkReady() {
  if (gapiInited && gisInited) {
    console.log("🚀 Google Calendar listo");
    initCallback?.();
  }
}

/* -----------------------------
   LOGIN GOOGLE
------------------------------*/
export function loginGoogle() {
  if (!tokenClient) {
    console.error("❌ TokenClient no inicializado");
    return;
  }

  tokenClient.requestAccessToken();
}

/* -----------------------------
   CREAR EVENTO + GOOGLE MEET
------------------------------*/
export async function createEvent({
  title = "Reunión",
  startTime,
  endTime,
}) {
  try {
    const event = {
      summary: title,

      start: {
        dateTime: startTime,
      },

      end: {
        dateTime: endTime,
      },

      // 🔥 GOOGLE MEET
      conferenceData: {
        createRequest: {
          requestId: crypto.randomUUID(),
          conferenceSolutionKey: {
            type: "hangoutsMeet",
          },
        },
      },
    };

    const response = await window.gapi.client.calendar.events.insert({
      calendarId: "primary",
      resource: event,

      // 🔥 OBLIGATORIO PARA MEET
      conferenceDataVersion: 1,

      // 📧 ENVÍA INVITACIÓN AL CORREO //
      sendUpdates: "all",
    });

    return response.result;
  } catch (error) {
    console.error("Error creando evento:", error);
  }
}

/* -----------------------------
   LISTAR EVENTOS
------------------------------*/
export async function listEvents() {
  try {
    const response = await window.gapi.client.calendar.events.list({
      calendarId: "primary",
      timeMin: new Date().toISOString(),
      showDeleted: false,
      singleEvents: true,
      maxResults: 10,
      orderBy: "startTime",
    });

    return response.result.items || [];
  } catch (error) {
    console.error("Error listando eventos:", error);
    return [];
  }
}