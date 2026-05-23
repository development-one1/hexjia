import { useState } from "react";
import "./diagnostic.css";

export default function AIDiagnosticModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");

  const phoneNumber = "573238733372";

  // 🔒 control anti-curiosos (1 sola vez)
  const hasUsed = sessionStorage.getItem("diagnostic_used");

  if (hasUsed) {
    return (
      <div className="modal-box">
        <h2>Diagnóstico ya utilizado</h2>
        <p>Ya realizaste el diagnóstico. Contáctanos para recibir asesoría directa.</p>

        <button className="cta" onClick={() => {
          window.open(`https://wa.me/${phoneNumber}`, "_blank");
        }}>
          Ir a WhatsApp
        </button>
      </div>
    );
  }

  // 🧠 filtro de calificación por servicio
  const isQualified = () => {
    if (goal === "App Móvil") return budget !== "Menos $1.500";
    if (goal === "Anuncios") return budget !== "Menos $817";
    if (goal === "Landing Page") return budget !== "Menos $200";
    if (business === "Ecommerce") return budget !== "Menos $600.000 COP";
    return budget !== "Menos $1.500";
  };

  const getResult = () => {
    if (business === "Emprendedor") {
      return "Recomendamos iniciar con un MVP o landing page de validación para probar la idea en el mercado con inversión mínima antes de escalar.";
    }

    if (goal === "App Móvil") {
      return "Desarrollo de App Móvil iOS + Android con backend escalable.";
    }

    if (goal === "Anuncios") {
      return "Estrategia de anuncios optimizada para generar leads y conversiones.";
    }

    if (goal === "Landing Page") {
      return "Landing page optimizada para conversión y captación de clientes.";
    }

    if (budget === "Menos $1.500") {
      return "Recomendamos iniciar con un MVP para validar el mercado antes de escalar.";
    }

    if (business === "Ecommerce" && goal === "Ventas") {
      return "Sistema de ecommerce optimizado con conversión, CRM y remarketing.";
    }

    if (goal === "Automatización") {
      return "Sistema de automatización para escalar sin aumentar personal.";
    }

    return "Solución de software a medida para escalar tu negocio.";
  };

  const handleWhatsApp = () => {
    const message = `
Hola, acabo de hacer el diagnóstico:

- Negocio: ${business}
- Objetivo: ${goal}
- Presupuesto: ${budget}

Resultado:
${getResult()}

Quiero agendar consultoría.
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const sendInternalReport = () => {
    const internalMessage = `
📊 NUEVO LEAD

🧩 Negocio: ${business}
🎯 Objetivo: ${goal}
💰 Presupuesto: ${budget}

🧠 Diagnóstico:
${getResult()}

📌 Nivel:
${
  business === "Emprendedor"
    ? "Emprendedor (idea)"
    : budget === "Menos $1.500"
    ? "Frío"
    : budget === "$5K+"
    ? "Alto valor"
    : "Medio"
}

⚡ Acción: Contactar rápido
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(internalMessage)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">

        <button className="close-btn" onClick={onClose}>✕</button>

        <h2>Diagnóstico de Negocio</h2>

        {/* STEP 1 */}
        {step === 0 && (
          <div>
            <p>¿Qué tipo de negocio tienes?</p>
            <select onChange={(e) => setBusiness(e.target.value)}>
              <option value="">Selecciona</option>
              <option>Startup</option>
              <option>Empresa</option>
              <option>Ecommerce</option>
              <option>Emprendedor</option>
            </select>

            <button disabled={!business} onClick={() => setStep(1)}>
              Siguiente
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 1 && (
          <div>
            <p>¿Qué quieres mejorar?</p>
            <select onChange={(e) => setGoal(e.target.value)}>
              <option value="">Selecciona</option>
              <option>Ventas</option>
              <option>Automatización</option>
              <option>Procesos</option>
              <option>App Móvil</option>
              <option>Landing Page</option>
              <option>Anuncios</option>
            </select>

            <button onClick={() => setStep(0)}>Atrás</button>
            <button disabled={!goal} onClick={() => setStep(2)}>
              Siguiente
            </button>
          </div>
        )}

        {/* STEP 3 */}
        {step === 2 && (
          <div>
            <p>Presupuesto estimado</p>
            <select onChange={(e) => setBudget(e.target.value)}>
              <option value="">Selecciona</option>
              <option>Menos $200</option>
              <option>Menos $817</option>
              <option>Menos $1.500</option>
              <option>$1.500 - $5K</option>
              <option>$5K+</option>
              <option>Menos $600.000 COP</option>
            </select>

            <button onClick={() => setStep(1)}>Atrás</button>

            <button
              disabled={!budget}
              onClick={() => setStep(3)}
            >
              Ver resultado
            </button>
          </div>
        )}

        {/* RESULTADO FINAL */}
        {step === 3 && (
          <div className="result">

            <h3>Diagnóstico completado</h3>

            {isQualified() ? (
              <>
                <p className="typing">{getResult()}</p>

                <div className="price-box">
                  Proyectos desde <strong>$200 - $1.500+ USD</strong>
                </div>

                <button className="cta" onClick={() => {
                  handleWhatsApp();
                  sendInternalReport();
                  sessionStorage.setItem("diagnostic_used", "true");
                }}>
                  Agendar consultoría →
                </button>
              </>
            ) : (
              <>
                <p>
                  Tu proyecto requiere una revisión de alcance antes de generar una propuesta.
                </p>

                <div className="price-box">
                  Podemos ayudarte con una versión MVP o validación inicial.
                </div>

                <button className="cta" onClick={() => {
                  sendInternalReport();
                  sessionStorage.setItem("diagnostic_used", "true");
                }}>
                  Solicitar revisión →
                </button>
              </>
            )}

          </div>
        )}

      </div>
    </div>
  );
}