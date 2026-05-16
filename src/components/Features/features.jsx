import "../Features/features.css";

export default function Features() {
  return (
    <section className="features" id="servicios">
      <div className="card">
        <span className="icon">📱</span>
        <h3>Software a medida</h3>
        <p>Sistemas diseñados para generar ingresos, no solo para existir.
          Construimos plataformas escalables que se adaptan a tu negocio y lo hacen crecer con cada usuario.
          </p>
      </div>

      <div className="card">
        <span className="icon">🤖</span>
        <h3>Automatizaciones que ahorran dinero</h3>
        <p>Eliminamos trabajo manual y lo convertimos en procesos automáticos.
Menos operaciones, más ventas, más tiempo para decisiones importantes.</p>
      </div>

      <div className="card">
        <span className="icon">🧠</span>
        <h3>IA aplicada a negocio real</h3>
        <p>Inteligencia artificial enfocada en resultados, no en moda.
Automatizamos atención, procesos y decisiones para aumentar eficiencia y conversión.</p>
      </div>

      <div className="card">
        <span className="icon">📊</span>
        <h3>Resultados que puedes medir</h3>
        <p>Cada sistema que creamos está orientado a una métrica de negocio.
Más clientes, más conversiones, menos costo operativo.</p>
      </div>
    </section>
  );
}