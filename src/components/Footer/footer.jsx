import "../Footer/footer.css";
import { FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
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

          <a
            href="https://wa.me/573238733372?text=Hola%20quiero%20información"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-cta"
          >
            <FaWhatsapp />
            Agendar reunión
          </a>
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