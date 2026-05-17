import { useEffect } from "react";

import BackgroundNet from "./components/BackgroundNet/BackgroundNet";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Features from "./components/Features/features";
import Showcase from "./components/Showcase/showcase";
import Footer from "./components/Footer/footer";
import Watsapp from './components/Ws/Watsapp';

import "./styles/global.css";

export default function App() {

  useEffect(() => {
    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
    };
  }, []);

  return (
    <>
      <BackgroundNet />

      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Footer />

      <Watsapp />
    </>
  );
}