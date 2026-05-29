import "../Footer/footer.css";
import { FaInstagram, FaLinkedinIn, FaVideo } from "react-icons/fa";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Cargar los scripts de Calendly solo una vez
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      script.onload = () => {
        // El script cargó correctamente
        console.log("Calendly cargado");
      };
      document.body.appendChild(script);
    }
  }, []);

  // Función para abrir el popup de Calendly
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget("https://calendly.com/andrescamcho6/nueva-reunion");
    } else {
      // Fallback: abrir en nueva pestaña si el script no cargó
      window.open("https://calendly.com/andrescamcho6/nueva-reunion", "_blank");
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

          {/* 🔥 BOTÓN AGENDAR */}
          <button onClick={openCalendly} className="footer-cta">
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
            <a href="https://instagram.com/TUUSUARIO" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/camacho-rodriguez/" target="_blank" rel="noopener noreferrer">
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