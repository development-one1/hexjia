import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

import "./background.css";

export default function BackgroundNet() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    let effect = NET({
      el: ref.current,
      THREE,

      // 🎯 azul principal
  color: 0x00aaff,

  // 🔵 fondo oscuro
  backgroundColor: 0x050814,

  // 🌐 densidad equilibrada
  points: 16,
  maxDistance: 0,
  spacing: 16,

  mouseControls: true,
  touchControls: true,
  gyroControls: false,

  showDots: true,
  scale: 1.0,
  scaleMobile: 0.85,

  // 🔥 clave para evitar “blanco sucio”
  colorMode: "lerp"
    });

    // 🔄 resize handler (evita glitches visuales)
    const handleResize = () => {
      effect?.resize?.();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      effect?.destroy();
      effect = null;
    };
  }, []);

  return <div ref={ref} className="vanta-net" aria-hidden="true" />;
}