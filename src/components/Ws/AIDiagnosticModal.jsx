import { useState } from "react";
import "./diagnostic.css";

export default function AIDiagnosticModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");

  const phoneNumber = "573238733372";

  // 🔒 Evitar múltiples usos (silencioso)
  const hasUsed =
    typeof window !== "undefined"
      ? sessionStorage.getItem("diagnostic_used")
      : null;

  // 💰 Convertir presupuesto a valor numérico
  const budgetValue = {
    "Menos $200": 200,
    "Menos $817": 817,
    "Menos $1.500": 1500,
    "$867 - $1.5K": 1000,
    "$1.150 USD": 1150,
    "$1.5K - $5K": 3000,
    "$5K+": 6000,
    "Menos $600.000 COP": 150
  }[budget] || 0;

  // 🧠 Filtro de calificación
  const isQualified = () => {
    if (goal === "Landing Page") return budgetValue >= 867;
    if (business === "Ecommerce") return budgetValue >= 1150;
    if (goal === "App Móvil" || goal === "Software") return budgetValue >= 1800;
    if (business === "Emprendedor") return true;
    return budgetValue >= 1500;
  };

  // 🧠 Resultado del diagnóstico
  const getResult = () => {
    if (business === "Emprendedor") {
      return "Te recomendamos iniciar con un MVP o landing page de validación antes de escalar.";
    }
    if (goal === "App Móvil") {
      return "Desarrollo de App Móvil iOS + Android con backend escalable.";
    }
    if (goal === "Landing Page") {
      return "Landing page optimizada para conversión y captación de clientes.";
    }
    if (goal === "Anuncios") {
      return "Estrategia de anuncios optimizada para generar leads y conversiones.";
    }
    if (business === "Ecommerce") {
      return "Ecommerce con checkout, CRM y campañas de conversión.";
    }
    if (goal === "Automatización") {
      return "Sistema de automatización para escalar sin aumentar personal.";
    }
    return "Solución de software a medida para escalar tu negocio.";
  };

  // 📲 WhatsApp cliente
  const handleWhatsApp = () => {
    const message = `
Hola, acabo de hacer el diagnóstico:

- Negocio: ${business}
- Objetivo: ${goal}
- Presupuesto: ${budget}

Resultado:
${getResult()}
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  // 📊 Reporte interno
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
  budgetValue >= 3000
    ? "Alto valor"
    : budgetValue >= 1150
    ? "Medio"
    : "Frío"
}

⚡ Acción: Contactar rápido
    `;

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(internalMessage)}`,
      "_blank"
    );
  };

  // 🚫 Bloqueo silencioso si ya usó
  if (hasUsed) {
    return null; // ❌ NO renderiza nada, ni mensajes, ni botones
  }

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
              <option>Software</option>
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
              <option>$867 - $1.5K</option>
              <option>$1.150 USD</option>
              <option>$1.5K - $5K</option>
              <option>$5K+</option>
              <option>Menos $600.000 COP</option>
            </select>

            <button onClick={() => setStep(1)}>Atrás</button>
            <button disabled={!budget} onClick={() => setStep(3)}>
              Ver resultado
            </button>
          </div>
        )}

        {/* RESULTADO FINAL */}
        {step === 3 && (
          <div className="result">

            <h3>Diagnóstico completado</h3>

            <p className="typing">{getResult()}</p>

            {isQualified() ? (
              <>
                <div className="price-box">
                  Proyectos desde <strong>$867 - $5.000+ USD</strong>
                </div>

                <button
                  className="cta"
                  onClick={() => {
                    handleWhatsApp();
                    sendInternalReport();
                    sessionStorage.setItem("diagnostic_used", "true");
                  }}
                >
                  Agendar consultoría →
                </button>
              </>
            ) : (
              <>
                <div className="price-box">
                  Podemos ayudarte con un MVP o validación inicial.
                </div>

                <button
                  className="cta"
                  onClick={() => {
                    sendInternalReport();
                    sessionStorage.setItem("diagnostic_used", "true");
                  }}
                >
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