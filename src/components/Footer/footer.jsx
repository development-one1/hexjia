import "../Footer/footer.css";
import {
  FaInstagram,
  FaLinkedinIn,
  FaVideo,
} from "react-icons/fa";
import {
  useEffect,
  useState,
} from "react";

export default function Footer() {
  const [showModal, setShowModal] =
    useState(false);

  const [formData, setFormData] =
    useState({
      projectType: "",
      budget: "",
      business: "",
      urgency: "",
    });

  useEffect(() => {
    const scriptExists =
      document.querySelector(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]'
      );

    if (!scriptExists) {
      const link =
        document.createElement(
          "link"
        );

      link.href =
        "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";

      document.head.appendChild(
        link
      );

      const script =
        document.createElement(
          "script"
        );

      script.src =
        "https://assets.calendly.com/assets/external/widget.js";

      script.async = true;

      script.onload = () => {
        console.log(
          "Calendly cargado correctamente"
        );
      };

      document.body.appendChild(
        script
      );
    }
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.value,
    }));
  };

  const qualifiesLead = () => {
    const highBudget =
      formData.budget ===
        "3000-10000" ||
      formData.budget ===
        "10000+";

    const mediumBudget =
      formData.budget ===
      "1500-3000";

    const notSureBudget =
      formData.budget ===
      "not-sure";

    const premiumService =
      formData.projectType ===
        "app" ||
      formData.projectType ===
        "software" ||
      formData.projectType ===
        "automation";

    const validatedBusiness =
      formData.business ===
      "validated";

    // ✅ Ahora "Este mes" también agenda
    const urgent =
      formData.urgency ===
        "now" ||
      formData.urgency ===
        "month";

    // Clientes ideales
    if (
      highBudget ||
      premiumService ||
      (validatedBusiness &&
        mediumBudget) ||
      (validatedBusiness &&
        notSureBudget) ||
      urgent
    ) {
      return true;
    }

    return false;
  };

  const openCalendly = () => {
    const qualified =
      qualifiesLead();

    if (qualified) {
      if (window.Calendly) {
        window.Calendly.showPopupWidget(
          "https://calendly.com/andrescamcho6/nueva-reunion"
        );
      } else {
        window.open(
          "https://calendly.com/andrescamcho6/nueva-reunion",
          "_blank"
        );
      }

      setShowModal(false);
    } else {
      alert(
        "Por ahora parece que tu proyecto aún está en una etapa inicial. Escríbenos y te orientamos sobre la mejor opción para empezar 🚀"
      );
    }
  };

  return (
    <footer
      className="footer"
      id="contacto"
    >
      <div className="footer-glow"></div>

      <div className="footer-container">
        {/* BRAND */}
        <div className="footer-brand">
          <h3>HEXJIA</h3>

          <p className="footer-description">
            Construimos software y
            sistemas digitales
            para negocios que
            quieren automatizar
            procesos y escalar
            con tecnología.
          </p>

          <div className="footer-badges">
            <span>
              Software a medida
            </span>

            <span>
              Automatización
            </span>

            <span>
              IA aplicada
            </span>
          </div>

          <button
            onClick={() =>
              setShowModal(true)
            }
            className="footer-cta"
          >
            <FaVideo />
            Agendar reunión
          </button>
        </div>

        {/* LINKS */}
        <div className="footer-links">
          <h4>Navegación</h4>

          <a href="#servicios">
            Servicios
          </a>

          <a href="#certifications">
            Certificados
          </a>

          <a href="#">
            Trabaja con nosotros
          </a>
        </div>

        {/* REDES */}
        <div className="footer-social">
          <h4>Redes</h4>

          <div className="social-icons">
            <a
              href="https://www.instagram.com/felipe_develop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.linkedin.com/in/camacho-rodriguez/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* MODAL FILTRO */}
      {showModal && (
        <div className="lead-modal">
          <div className="lead-card">
            <h2>
              Antes de agendar
            </h2>

            <p>
              Queremos entender
              tu proyecto para
              darte una mejor
              asesoría.
            </p>

            {/* Tipo de proyecto */}
            <select
              name="projectType"
              onChange={
                handleChange
              }
              value={
                formData.projectType
              }
            >
              <option value="">
                ¿Qué necesitas?
              </option>

              <option value="landing">
                Landing page
              </option>

              <option value="ecommerce">
                Ecommerce
              </option>

              <option value="app">
                App móvil
              </option>

              <option value="software">
                Sistema interno
              </option>

              <option value="automation">
                IA /
                Automatización
              </option>
            </select>

            {/* Presupuesto */}
            <select
              name="budget"
              onChange={
                handleChange
              }
              value={
                formData.budget
              }
            >
              <option value="">
                Presupuesto
                estimado
              </option>

              <option value="0-1000">
                Menos de
                $1,000 USD
              </option>

              <option value="1500-3000">
                $1,500 -
                $3,000 USD
              </option>

              <option value="3000-10000">
                $3,000 -
                $10,000 USD
              </option>

              <option value="10000+">
                +$10,000 USD
              </option>

              <option value="not-sure">
                No estoy seguro
              </option>
            </select>

            {/* Negocio validado */}
            <select
              name="business"
              onChange={
                handleChange
              }
              value={
                formData.business
              }
            >
              <option value="">
                ¿Tu negocio ya
                factura?
              </option>

              <option value="validated">
                Sí, ya vendo
              </option>

              <option value="new">
                No aún
              </option>
            </select>

            {/* Urgencia */}
            <select
              name="urgency"
              onChange={
                handleChange
              }
              value={
                formData.urgency
              }
            >
              <option value="">
                ¿Cuándo quieres
                iniciar?
              </option>

              <option value="now">
                Inmediatamente
              </option>

              <option value="month">
                Este mes
              </option>

              <option value="exploring">
                Solo estoy
                explorando
              </option>
            </select>

            <div className="modal-buttons">
              <button
                onClick={() =>
                  setShowModal(
                    false
                  )
                }
              >
                Cerrar
              </button>

              <button
                onClick={
                  openCalendly
                }
              >
                Continuar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="footer-bottom">
        <p>
          HEXJIA © 2026 —
          Software que impulsa
          negocios digitales.
        </p>
      </div>
    </footer>
  );
}