import "../Footer/footer.css";
import { FaInstagram, FaLinkedinIn} from "react-icons/fa";
import { useEffect } from "react";

export default function Footer() {
  useEffect(() => {
    // Función para cargar el widget de Calendly
    const loadCalendlyWidget = () => {
      // Verificar si ya existe el script para no duplicarlo
      if (document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
        // Si ya existe, solo inicializamos el widget
        if (window.Calendly) {
          window.Calendly.initBadgeWidget({
            url: "https://calendly.com/andrescamcho6/nueva-reunion",
            text: "Agendar reunión",
            color: "#1d1d1d",
            textColor: "#ffffff",
            branding: false,
          });
        }
        return;
      }

      // Cargar estilos
      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);

      // Cargar script
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.type = "text/javascript";
      script.async = true;
      
      script.onload = () => {
        // Pequeño retraso para asegurar que el script se haya ejecutado completamente
        setTimeout(() => {
          if (window.Calendly) {
            window.Calendly.initBadgeWidget({
              url: "https://calendly.com/andrescamcho6/nueva-reunion",
              text: "Agendar",
              color: "#1d1d1d",
              textColor: "#ffffff",
              branding: false,
            });
          } else {
            console.warn("Calendly no se cargó correctamente");
          }
        }, 500);
      };
      
      script.onerror = () => {
        console.error("Error al cargar el script de Calendly");
      };
      
      document.body.appendChild(script);
    };

    // Ejecutar la carga después de que el componente esté montado
    loadCalendlyWidget();

    // Cleanup
    return () => {
      const badgeWidget = document.querySelector(".calendly-badge-widget");
      if (badgeWidget) badgeWidget.remove();
      
      const badgeContainer = document.querySelector(".calendly-badge-container");
      if (badgeContainer) badgeContainer.remove();
    };
  }, []);

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

          {/* 🔥 BOTÓN MANUAL DE RESPALDO (por si el widget no carga) */}
          
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
