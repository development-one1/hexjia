import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain } from "@fortawesome/free-solid-svg-icons";

import "../Ws/Ws.css";

function AIConsultant({ onOpen }) {
  return (
    <div className="ai-floating">
      <button className="ai-icon" onClick={onOpen}>
        <FontAwesomeIcon icon={faBrain} size="2x" />
      </button>
    </div>
  );
}

AIConsultant.propTypes = {
  onOpen: PropTypes.func.isRequired,
};

export default AIConsultant;