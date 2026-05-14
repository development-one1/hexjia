import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import '../Ws/Ws.css';

function WhatsApp() {
  return (
    <div className="whatsapp-flotante">
      <a
        href="https://wa.me/573238733372?text=Hola%20quiero%20información"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon
          className="whatsapp-icono-img"
          icon={faWhatsapp}
          size="3x"
        />
      </a>
    </div>
  );
}

export default WhatsApp;