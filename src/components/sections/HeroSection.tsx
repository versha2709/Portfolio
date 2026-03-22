"use client";

import { useTypewriter } from "@/hooks/useInView";
import { PERSONAL, STATS } from "@/lib/data";

export default function HeroSection() {
  const typed = useTypewriter(PERSONAL.roles, 80, 2200);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6"
    >
      {/* Background: radial gradient blobs */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-pulse-glow"
        style={{
          background:
            "radial-gradient(circle, rgba(124,58,237,0.12) 0%, rgba(124,58,237,0.03) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(192,132,252,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      {/* Floating orbit ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none animate-spin-slow"
        style={{
          border: "1px solid rgba(124,58,237,0.08)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none animate-spin-slow"
        style={{
          border: "1px dashed rgba(124,58,237,0.05)",
          animationDirection: "reverse",
          animationDuration: "35s",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full border text-sm font-mono
          animate-fade-up"
          style={{
            borderColor: "rgba(124,58,237,0.3)",
            background: "rgba(124,58,237,0.08)",
            animationDelay: "0.1s",
            opacity: 0,
            animation: "fadeUp 0.6s 0.1s ease forwards",
          }}
        >
          <span
            className="w-2 h-2 rounded-full bg-green-400"
            style={{ boxShadow: "0 0 6px #4ade80" }}
          ></span>
          <span className="text-violet-300">Available for freelance projects</span>
        </div>

        {/* Name */}
        <h1
          className="font-display font-black text-white leading-none mb-4"
          style={{
            fontSize: "clamp(3rem, 8vw, 6.5rem)",
            letterSpacing: "-0.03em",
            opacity: 0,
            animation: "fadeUp 0.7s 0.2s ease forwards",
          }}
        >
          Versha{" "}
          <span className="gradient-text">Parashar</span>
        </h1>

        {/* Typewriter */}
        <div
          className="text-xl md:text-2xl text-[var(--text-dim)] mb-6 font-light h-9"
          style={{
            opacity: 0,
            animation: "fadeUp 0.7s 0.35s ease forwards",
          }}
        >
          <span className="text-violet-300 font-medium">{typed}</span>
          <span
            className="inline-block w-[2px] h-6 bg-violet-400 ml-1 align-middle"
            style={{ animation: "pulse 1s infinite" }}
          ></span>
        </div>

        {/* Bio */}
        <p
          className="text-[var(--text-dim)] text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          style={{
            opacity: 0,
            animation: "fadeUp 0.7s 0.45s ease forwards",
          }}
        >
          {PERSONAL.bio}
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-wrap gap-4 justify-center mb-16"
          style={{
            opacity: 0,
            animation: "fadeUp 0.7s 0.55s ease forwards",
          }}
        >
          <a
            href="#projects"
            className="group px-8 py-4 rounded-full text-white font-semibold text-base transition-all duration-300
            hover:scale-105"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #9333ea)",
              boxShadow: "0 0 30px rgba(124,58,237,0.35)",
            }}
          >
            View My Work
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full text-[var(--text)] font-semibold text-base transition-all duration-300
            hover:scale-105 hover:border-violet-500/50 hover:text-white"
            style={{
              border: "1px solid var(--border-light)",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            Get in Touch
          </a>
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-full text-[var(--text-dim)] font-semibold text-base transition-all duration-300
            hover:text-violet-300 hover:scale-105"
            style={{
              border: "1px solid var(--border)",
              background: "transparent",
            }}
          >
            LinkedIn ↗
          </a>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px border border-[var(--border)] rounded-2xl overflow-hidden"
          style={{
            background: "var(--border)",
            opacity: 0,
            animation: "fadeUp 0.7s 0.65s ease forwards",
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center py-5 px-4"
              style={{ background: "var(--surface)" }}
            >
              <span
                className="font-display font-black text-3xl gradient-text"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.value}
              </span>
              <span className="text-xs text-[var(--text-muted)] mt-1 text-center font-mono tracking-wide">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-xs font-mono text-[var(--text-muted)] tracking-widest uppercase">scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-violet-500 to-transparent"></div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
