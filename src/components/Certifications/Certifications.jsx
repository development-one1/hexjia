import "./certifications.css";
import { certifications } from "../../data/certifications";

export default function Certifications() {
  return (
    <section className="certifications" id="certifications">

      <div className="cert-header">
        <span className="cert-tag">EXPERIENCIA TÉCNICA</span>

        

        <p className="cert-subtitle">
          Tecnologías y áreas donde construimos sistemas reales para empresas y startups.
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card" key={index}>

            <img
              src={cert.img}
              alt={cert.title}
              className="cert-img"
              loading="lazy"
            />

            <div className="cert-type">{cert.type}</div>
            <h3>{cert.title}</h3>
            <p>{cert.issuer}</p>

          </div>
        ))}
      </div>

    </section>
  );
}