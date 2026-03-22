"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.left = `${e.clientX}px`;
      cursorRef.current.style.top = `${e.clientY}px`;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 transition-all duration-200"
      style={{
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(124,58,237,0.06) 0%, transparent 70%)",
        borderRadius: "50%",
        left: "-200px",
        top: "-200px",
      }}
    />
  );
}
