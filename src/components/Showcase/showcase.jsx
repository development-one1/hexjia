import "../Showcase/showcase.css";

export default function Showcase() {
  return (
    <section className="showcase" id="proyectos">
      <h2>Proyectos</h2>

      <p className="subtitle">
        Sistemas reales diseñados para escalar operaciones, automatizar procesos
        y aumentar ingresos.
      </p>

      <div className="grid">

        {/* PROJECT 1 */}
        <div className="project">
          <div className="tag">Software a medida</div>

          <h3>Sistema de gestión de reservas</h3>

          <p>
            Plataforma móvil para reservas de servicios con pagos, geolocalización
            y panel de administración.
          </p>

          <div className="meta">
            Flutter · Firebase
          </div>
        </div>

        {/* PROJECT 2 */}
        <div className="project">
          <div className="tag">Inteligencia Artificial</div>

          <h3>Plataforma de análisis de negocio con IA</h3>

          <p>
            Dashboard inteligente para análisis de datos y automatización de decisiones
            operativas.
          </p>

          <div className="meta">
            React · OpenAI API
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project">
          <div className="tag">Automatización</div>

          <h3>CRM automatizado de ventas</h3>

          <p>
            Sistema de seguimiento de leads con flujos automáticos de contacto,
            clasificación y conversión.
          </p>

          <div className="meta">
            Make · APIs
          </div>
        </div>

      </div>

      {/* TRUST SECTION */}
      <div className="trust">
        <h3>Tecnología de nivel empresarial</h3>

        <div className="logos">
          <span>Firebase</span>
          <span>AWS</span>
          <span>Flutter</span>
          <span>OpenAI</span>
        </div>

        <div className="process">
          <h4>Metodología</h4>
          <p>
            Descubrimiento → Diseño → Desarrollo → Escalado
          </p>
        </div>

      </div>
    </section>
  );
}