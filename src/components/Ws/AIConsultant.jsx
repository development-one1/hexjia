import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import "../Ws/Ws.css";

function AIConsultant({ onOpen }) {

  const hasUsed =
    typeof window !== "undefined"
      ? sessionStorage.getItem("diagnostic_used")
      : null;

  const handleClick = () => {
    // 🚫 si ya lo usó, no hace nada (SIN MENSAJES)
    if (hasUsed) return;

    onOpen();
  };

  return (
    <div className="ai-floating">
      <button className="ai-icon" onClick={handleClick}>
        <FontAwesomeIcon icon={faBrain} size="2x" />
      </button>
    </div>
  );
}

AIConsultant.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default AIConsultant;