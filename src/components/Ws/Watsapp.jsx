import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


import '../Ws/Ws.css';

function Watsapp() {
  return (
    <div className="whatsapp-flotante">
      <a href="https://wa.me/573238733372" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon className="whatsapp-icono-img" icon={faWhatsapp} size="3x" color="#25D366" />
      </a>
    </div>
  );
}

export default Watsapp;
