import "../Features/features.css";

export default function Features() {
  return (
    <section className="features" id="servicios">
      <div className="card">
        <span className="icon">📱</span>
        <h3>Software a medida</h3>
        <p>Desarrollo de sistemas escalables diseñados para crecer contigo.</p>
      </div>

      <div className="card">
        <span className="icon">🤖</span>
        <h3>Automatizaciones reales</h3>
        <p>Reducimos tareas manuales y aumentamos la eficiencia de tu negocio.</p>
      </div>

      <div className="card">
        <span className="icon">🧠</span>
        <h3>IA funcional</h3>
        <p>Integramos inteligencia artificial aplicada a resultados reales.</p>
      </div>

      <div className="card">
        <span className="icon">📊</span>
        <h3>Resultados medibles</h3>
        <p>Métricas claras, crecimiento visible y decisiones basadas en datos.</p>
      </div>
    </section>
  );
}