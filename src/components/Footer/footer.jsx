import "../Footer/footer.css";
import { useState } from "react";
import { FaInstagram, FaLinkedinIn, FaVideo } from "react-icons/fa";

import { loginGoogle, createEvent } from "../../googleCalendar";

export default function Footer() {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleScheduleMeeting = async () => {
    try {
      // 🔐 1. LOGIN GOOGLE
      await loginGoogle();

      // ⚠️ validar inputs
      if (!date || !time) {
        alert("Selecciona fecha y hora");
        return;
      }

      // 📅 construir fecha seleccionada por usuario
      const start = new Date(`${date}T${time}:00`);
      const end = new Date(start.getTime() + 60 * 60 * 1000);

      // 🚀 2. CREAR EVENTO EN GOOGLE CALENDAR
      const event = await createEvent({
        title: "Reunión con HEXJIA",
        startTime: start.toISOString(),
        endTime: end.toISOString(),
      });

      console.log("EVENTO COMPLETO:", event);

      // 🔥 3. EXTRAER LINK DE GOOGLE MEET
      const meetLink =
        event?.hangoutLink ||
        event?.conferenceData?.entryPoints?.find(
          (e) => e.entryPointType === "video"
        )?.uri;

      if (meetLink) {
        window.open(meetLink, "_blank");
      } else {
        alert("Reunión creada, pero Google Meet no se generó");
      }

    } catch (err) {
      console.error("Error agendando reunión:", err);
    }
  };

  return (
    <footer className="footer" id="contacto">
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <h3>HEXJIA</h3>

          <p className="footer-description">
            Construimos software y sistemas digitales para negocios
            que quieren automatizar procesos y escalar con tecnología.
          </p>

          <div className="footer-badges">
            <span>Software a medida</span>
            <span>Automatización</span>
            <span>IA aplicada</span>
          </div>

          {/* 📅 INPUT FECHA Y HORA */}
          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="date"
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="time"
              onChange={(e) => setTime(e.target.value)}
            />
          </div>

          {/* 🔥 BOTÓN AGENDAR */}
          <button
            onClick={handleScheduleMeeting}
            className="footer-cta"
          >
            <FaVideo />
            Agendar reunión
          </button>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Navegación</h4>
          <a href="#servicios">Servicios</a>
          <a href="#certifications">Certificados</a>
          <a href="#proyectos">Proyectos</a>
        </div>

        {/* REDES */}
        <div className="footer-social">
          <h4>Redes</h4>

          <div className="social-icons">
            <a href="https://instagram.com/TUUSUARIO" target="_blank">
              <FaInstagram />
            </a>

            <a href="https://linkedin.com/company/TUEMPRESA" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>HEXJIA © 2026 — Software que impulsa negocios digitales.</p>
      </div>
    </footer>
  );
}
