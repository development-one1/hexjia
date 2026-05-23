import "../Navbar/navbar.css";
import icono from "../../assets/icono.png";

export default function Navbar() {
  return (
    <header className="navbar">
      
      <a href="#inicio" className="logo" aria-label="Ir al inicio">
        <img 
          src={icono} 
          alt="HEXJIA logo"
          className="hex"
          draggable="false"
        />
        <span className="logo-text">
          <span className="exx">HEX</span>
          <span className="jia">JIA</span>
        </span>
      </a>

      <nav className="nav-links">
        <a href="#servicios">Servicios</a>
        <a href="#certifications">Certificados</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>

    </header>
  );
}