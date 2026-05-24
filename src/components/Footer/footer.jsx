import "../Footer/footer.css";
import { FaInstagram, FaLinkedinIn, FaVideo } from "react-icons/fa";

import { loginGoogle, createEvent } from "../../googleCalendar";

export default function Footer() {

  const handleScheduleMeeting = async () => {
    try {
      // 1. Login Google
      loginGoogle();

      // 2. Esperar autorización (flujo simple frontend)
      setTimeout(async () => {
        const event = await createEvent({
          title: "Reunión con HEXJIA",
          startTime: new Date().toISOString(),
          endTime: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        });

        const meetLink =
          event?.hangoutLink ||
          event?.conferenceData?.entryPoints?.[0]?.uri;

        if (meetLink) {
          window.open(meetLink, "_blank");
        } else {
          alert("Reunión creada, pero no se generó Google Meet");
        }

      }, 2000);

    } catch (err) {
      console.error("Error agendando reunión:", err);
    }
  };

  return (
    <footer className="footer" id="contacto">
      <div className="footer-glow"></div>

      <div className="footer-container">

        {/* Branding */}
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

          {/* 🔥 BOTÓN NUEVO GOOGLE MEET */}
          <button
            onClick={handleScheduleMeeting}
            className="footer-cta"
          >
            <FaVideo />
            Agendar reunión
          </button>
        </div>

        {/* Navegación */}
        <div className="footer-links">
          <h4>Navegación</h4>

          <a href="#servicios">Servicios</a>
          <a href="#certifications">Certificados</a>
          <a href="#proyectos">Proyectos</a>
        </div>

        {/* Redes */}
        <div className="footer-social">
          <h4>Redes</h4>

          <div className="social-icons">
            <a
              href="https://instagram.com/TUUSUARIO"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com/company/TUEMPRESA"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          HEXJIA © 2026 — Software que impulsa negocios digitales.
        </p>
      </div>
    </footer>
  );
}