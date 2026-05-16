import "../Hero/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">

        <h1>
          Código que escala.{" "}
          <br />
          <span className="texto">Negocios que crecen.</span>
        </h1>

        <p className="subtitulo">
          Diseñamos software, automatizaciones y estrategias digitales para empresas que quieren escalar, reducir trabajo manual y aumentar ingresos con tecnología real.
        </p>

        <div className="buttons">
          <button>Ver proyectos</button>
          <button className="outline">Contactar</button>
        </div>

      </div>

      <div className="hero-glow"></div>
    </section>
  );
}