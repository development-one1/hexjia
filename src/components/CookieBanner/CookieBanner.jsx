import { useEffect, useState } from "react";
import "./cookieBanner.css";

export default function CookieBanner() {
  const [show, setShow] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [language, setLanguage] = useState("en");

  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");

    if (!consent) {
      setShow(true);
    }

    // Detectar idioma del navegador
    const browserLanguage =
      navigator.language || navigator.userLanguage;

    if (browserLanguage.startsWith("es")) {
      setLanguage("es");
    } else {
      setLanguage("en");
    }
  }, []);

  const saveConsent = (settings) => {
    localStorage.setItem(
      "cookieConsent",
      JSON.stringify({
        ...settings,
        timestamp: new Date().toISOString(),
      })
    );

    setShow(false);
  };

  const acceptAll = () => {
    saveConsent({
      necessary: true,
      analytics: true,
      marketing: true,
    });
  };

  const rejectAll = () => {
    saveConsent({
      necessary: true,
      analytics: false,
      marketing: false,
    });
  };

  const savePreferences = () => {
    saveConsent(preferences);
  };

  const handleChange = (key) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const text = {
    es: {
      title: "🍪 Preferencias de Cookies",
      description:
        "Utilizamos cookies para mejorar tu experiencia, analizar tráfico y personalizar contenido. Puedes aceptar, rechazar o configurar tus preferencias.",
      customize: "Personalizar",
      reject: "Rechazar",
      accept: "Aceptar Todo",
      settings: "Configuración de Cookies",
      necessary: "Cookies Necesarias",
      necessaryDesc:
        "Requeridas para el funcionamiento correcto del sitio.",
      analytics: "Cookies Analíticas",
      analyticsDesc:
        "Nos ayudan a entender el rendimiento y uso del sitio web.",
      marketing: "Cookies de Marketing",
      marketingDesc:
        "Usadas para publicidad y campañas personalizadas.",
      back: "Volver",
      save: "Guardar Preferencias",
    },

    en: {
      title: "🍪 Cookie Preferences",
      description:
        "We use cookies to improve your experience, analyze traffic and personalize content. You can accept, reject or customize your preferences.",
      customize: "Customize",
      reject: "Reject",
      accept: "Accept All",
      settings: "Cookie Settings",
      necessary: "Necessary Cookies",
      necessaryDesc:
        "Required for the website to function properly.",
      analytics: "Analytics Cookies",
      analyticsDesc:
        "Help us understand website performance and usage.",
      marketing: "Marketing Cookies",
      marketingDesc:
        "Used for advertising and personalized campaigns.",
      back: "Back",
      save: "Save Preferences",
    },
  };

  const t = text[language];

  if (!show) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        {!showSettings ? (
          <>
            <div className="cookie-text">
              <h4>{t.title}</h4>
              <p>{t.description}</p>
            </div>

            <div className="cookie-buttons">
              <button
                className="secondary"
                onClick={() => setShowSettings(true)}
              >
                {t.customize}
              </button>

              <button className="reject" onClick={rejectAll}>
                {t.reject}
              </button>

              <button className="accept" onClick={acceptAll}>
                {t.accept}
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="cookie-text">
              <h4>{t.settings}</h4>

              <div className="cookie-option">
                <div>
                  <strong>{t.necessary}</strong>
                  <p>{t.necessaryDesc}</p>
                </div>

                <input type="checkbox" checked disabled />
              </div>

              <div className="cookie-option">
                <div>
                  <strong>{t.analytics}</strong>
                  <p>{t.analyticsDesc}</p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.analytics}
                  onChange={() => handleChange("analytics")}
                />
              </div>

              <div className="cookie-option">
                <div>
                  <strong>{t.marketing}</strong>
                  <p>{t.marketingDesc}</p>
                </div>

                <input
                  type="checkbox"
                  checked={preferences.marketing}
                  onChange={() => handleChange("marketing")}
                />
              </div>
            </div>

            <div className="cookie-buttons">
              <button
                className="secondary"
                onClick={() => setShowSettings(false)}
              >
                {t.back}
              </button>

              <button className="accept" onClick={savePreferences}>
                {t.save}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}