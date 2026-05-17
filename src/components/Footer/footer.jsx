import "../Footer/footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-glow"></div>

      <div className="footer-container">
        <div className="footer-brand">
          

          <p className="footer-description">
            Infraestructura digital para empresas que quieren
            escalar con automatización, software e inteligencia
            artificial aplicada.
          </p>

          <div className="footer-badges">
            <span>Software a medida</span>
            <span>Automatización</span>
            <span>IA aplicada</span>
          </div>

          <a href="#contacto" className="footer-cta">
            Agendar llamada →
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          HEXJIA © 2026 — Sistemas que impulsan crecimiento real.
        </p>
      </div>
    </footer>
  );
}