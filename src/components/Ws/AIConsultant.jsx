import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import "../Ws/Ws.css";

function AIConsultant({ onOpen }) {

  const hasUsed =
    typeof window !== "undefined"
      ? sessionStorage.getItem("diagnostic_used")
      : null;

  return (
    <div className="ai-floating">
      <button className="ai-icon" onClick={onOpen}>

        <FontAwesomeIcon icon={faBrain} size="2x" />

        {/* 🧠 SOLO mostrar texto la primera vez */}
        {!hasUsed && (
          <span className="ai-text">
            Consulta aquí
          </span>
        )}

      </button>
    </div>
  );
}

AIConsultant.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default AIConsultant;