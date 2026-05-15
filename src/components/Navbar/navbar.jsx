import "../Navbar/navbar.css";

import icono from "../../assets/icono.png";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">
        <img src={icono} alt="HEXJIA logo" className="hex" /> <span className="exx">HEX</span><span className="jia">JIA</span>
      </div>

      <nav>
        <a href="#inicio">Inicio</a>
        <a href="#servicios">Servicios</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#contacto">Contacto</a>
      </nav>
    </header>
  );
}