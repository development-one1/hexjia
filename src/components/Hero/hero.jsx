import "../Hero/hero.css";

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <h1 >
          Código que crea. 
        </h1>

        <h1>
          <span className="texto">Automatización real.</span>
        </h1>

        <p>
          Desarrollamos apps y software a medida con automatizaciones reales e IA funcional.
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