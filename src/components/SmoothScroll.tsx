"use client";

import { useEffect, useState } from "react";
import { ReactLenis, useLenis as useReactLenis } from "@studio-freight/react-lenis";
import { LenisProvider } from "@/context/LenisContext";

function LenisSync({ children }: { children: React.ReactNode }) {
  const lenis = useReactLenis();
  return <LenisProvider value={lenis ?? null}>{children}</LenisProvider>;
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
          /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
      );
    check();
  }, []);

  if (isMobile) {
    return <LenisProvider value={null}>{children}</LenisProvider>;
  }

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
      <LenisSync>{children}</LenisSync>
    </ReactLenis>
  );
}
