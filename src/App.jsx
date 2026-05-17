import { useEffect } from "react";

import BackgroundNet from "./components/BackgroundNet/BackgroundNet";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Features from "./components/Features/features";
import Showcase from "./components/Showcase/showcase";
import Technologies from "./components/Technologies/Technologies";
import Footer from "./components/Footer/footer";
import Watsapp from "./components/Ws/Watsapp";

import "./styles/global.css";

export default function App() {

  useEffect(() => {

    // 🚫 Bloquear clic derecho
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    // 🚫 Bloquear selección de texto
    const disableSelect = (e) => e.preventDefault();
    document.addEventListener("selectstart", disableSelect);

    // 🚫 Bloquear teclas de DevTools básicas
    const blockKeys = (e) => {
      // F12
      if (e.key === "F12") e.preventDefault();

      // Ctrl + Shift + I / J / C
      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
      }

      // Ctrl + U (ver código fuente)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", blockKeys);

    // 🧠 Limpieza al desmontar
    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("selectstart", disableSelect);
      document.removeEventListener("keydown", blockKeys);
    };

  }, []);

  return (
    <>
      <BackgroundNet />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Technologies />
      <Footer />
      <Watsapp />
    </>
  );
}