import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

import '../Ws/Ws.css';

function AIConsultant() {
  return (
    <div className="ai-floating">

      <a
        href="#diagnostico"
        aria-label="Abrir diagnóstico de negocio"
      >
        <div className="ai-icon">
          <FontAwesomeIcon
            icon={faBrain}
            size="2x"
          />
        </div>

      </a>

    </div>
  );
}

export default AIConsultant;