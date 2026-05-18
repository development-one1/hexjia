import "./testimonials.css";

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-header">
        <span className="section-tag">
          EXPERIENCIAS REALES
        </span>

        <h2>
          Empresas y emprendedores que
          <span> confiaron en HEXJIA</span>
        </h2>

        <p>
          Clientes reales, proyectos reales y resultados construidos con confianza.
        </p>
      </div>

      <div className="testimonials-grid">

        {/* LinkedIn */}
        <div className="testimonial-card linkedin-card">
          <div className="linkedin-badge">
                ✔ Testimonio verificado · LinkedIn · Chile
                <div className="stars">★★★★★</div>
            </div>

          <iframe
            src="https://www.linkedin.com/embed/feed/update/urn:li:share:7454710291847733248"
            frameBorder="0"
            allowFullScreen
            title="Testimonio cliente LinkedIn"
          ></iframe>
        </div>

        {/* Testimonio 1 */}
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            Excelente experiencia trabajando con HEXJIA.
            Comunicación clara y entregas muy organizadas.
          </p>

          <div className="testimonial-user">
            <div className="avatar">F</div>
            <div>
              <h4>Fernando</h4>
              <span>Chile · Founder</span>
            </div>
          </div>
        </div>

        {/* Testimonio 2 */}
        <div className="testimonial-card">
          <div className="stars">★★★★★</div>

          <p className="testimonial-text">
            El desarrollo fue estructurado y con mucha claridad.
            Se sintió como trabajar con un socio tecnológico.
          </p>

          <div className="testimonial-user">
            <div className="avatar">C</div>
            <div>
              <h4>Carlos</h4>
              <span>México · Startup</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}