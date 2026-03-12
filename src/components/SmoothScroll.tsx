"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect touch/mobile device — native scroll is already smooth on phones
    const check = () =>
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
          /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    check();
  }, []);

  // On mobile: render children without Lenis so the OS handles scrolling natively
  if (isMobile) {
    return <>{children}</>;
  }

  // On desktop: keep the full Lenis smooth-scroll experience
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.07,
        duration: 1.4,
        smoothWheel: true,
        syncTouch: false,
        infinite: false,
        orientation: "vertical",
        gestureOrientation: "vertical",
        wheelMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  );
}
