import "../Showcase/showcase.css";

import { projects } from "../../data/projects";

export default function Showcase() {
  return (
    <section className="showcase" id="proyectos">
      <h2>Proyectos</h2>

      <p className="subtitle">
        Sistemas reales diseñados para escalar operaciones, automatizar procesos
        y aumentar ingresos.
      </p>

      <div className="grid">
        {projects.map((project, index) => (
          <div className="project" key={index}>

            {project.img && (
              <img
                src={project.img}
                alt={project.title}
                className="project-img"
                loading="lazy"
              />
            )}

            <div className="tag">{project.tag}</div>

            <h3>{project.title}</h3>

            <p>{project.desc}</p>

            <div className="meta">{project.tech}</div>
          </div>
        ))}
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