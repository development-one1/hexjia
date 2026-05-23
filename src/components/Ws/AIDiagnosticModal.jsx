import { useState } from "react";
import "./diagnostic.css";

export default function AIDiagnosticModal({ onClose }) {
  const [step, setStep] = useState(0);
  const [business, setBusiness] = useState("");
  const [goal, setGoal] = useState("");
  const [budget, setBudget] = useState("");

  const phoneNumber = "573238733372"; // 👈 cambia esto por tu WhatsApp real

  const getResult = () => {
    if (budget === "Menos $1.500") {
      return "Recomendamos un MVP de automatización para validar resultados rápidamente antes de escalar.";
    }

    if (business === "Ecommerce" && goal === "Ventas") {
      return "Sistema de optimización de conversión: carrito, remarketing y CRM para aumentar ventas entre 20% y 45%.";
    }

    if (goal === "Automatización") {
      return "Sistema centralizado para eliminar tareas manuales y escalar operación sin aumentar personal.";
    }

    return "Solución de software a medida para automatizar procesos y escalar tu negocio.";
  };

  const handleWhatsApp = () => {
    const message = `
Hola, acabo de hacer el diagnóstico en la web:

- Negocio: ${business}
- Objetivo: ${goal}
- Presupuesto: ${budget}

Resultado:
${getResult()}

Quiero agendar la consultoría.
    `;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
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
              <option>desde $1.500</option>
              <option>$1.500 - $5K</option>
              <option>$5K+</option>
            </select>

            <button onClick={() => setStep(1)}>Atrás</button>

            <button disabled={!budget} onClick={() => setStep(3)}>
              Ver resultado
            </button>
          </div>
        )}

        {/* RESULTADO FINAL (OBLIGATORIO WHATSAPP) */}
        {step === 3 && (
          <div className="result">

            <h3>Diagnóstico completado</h3>

            <p className="typing">
              {getResult()}
            </p>

            <div className="price-box">
              Proyectos como este inician desde <strong>$1.500 USD</strong>
            </div>

            <button className="cta" onClick={handleWhatsApp}>
              Agendar consultoría por WhatsApp →
            </button>

          </div>
        )}

      </div>
    </div>
  );
}