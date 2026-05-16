import { useEffect, useRef } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

export default function BackgroundNet() {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const effect = NET({
      el: ref.current,
      THREE: THREE,

       color: 0x00ffff,
      backgroundColor: 0x050814,

      points: 19,
      maxDistance: 10.00,
      spacing: 15.00,

      mouseControls: true,
      touchControls: true,
      gyroControls: false,

      showDots: true,
      scale: 1.00,
      scaleMobile: 1.00
    });

    return () => effect?.destroy();
  }, []);

  return <div ref={ref} className="vanta-net" />;
}