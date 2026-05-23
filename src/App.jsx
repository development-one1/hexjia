import { useEffect, useState } from "react";

import BackgroundNet from "./components/BackgroundNet/BackgroundNet";
import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/hero";
import Features from "./components/Features/features";
import Showcase from "./components/Showcase/showcase";
import Testimonials from "./components/Testimonials/Testimonials";
import Technologies from "./components/Technologies/Technologies";
import Certifications from "./components/Certifications/Certifications";
import Footer from "./components/Footer/footer";
import AIConsultant from "./components/Ws/AIConsultant.jsx";
import AIDiagnosticModal from "./components/Ws/AIDiagnosticModal.jsx";

import CookieBanner from "./components/CookieBanner/CookieBanner";

import "./styles/global.css";

export default function App() {

  const [open, setOpen] = useState(false);

  useEffect(() => {

    const disableRightClick = (e) => e.preventDefault();
    document.addEventListener("contextmenu", disableRightClick);

    const disableSelect = (e) => e.preventDefault();
    document.addEventListener("selectstart", disableSelect);

    const blockKeys = (e) => {
      if (e.key === "F12") e.preventDefault();

      if (e.ctrlKey && e.shiftKey && ["I", "J", "C"].includes(e.key)) {
        e.preventDefault();
      }

      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }
    };

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
      <Certifications />
      <Showcase />
      <Testimonials />
      <Technologies />
      <Footer />

      {/* 🔥 BOTÓN IA */}
      <AIConsultant onOpen={() => setOpen(true)} />

      {/* 🔥 MODAL IA */}
      {open && (
        <AIDiagnosticModal onClose={() => setOpen(false)} />
      )}

      <CookieBanner />
    </>
  );
}