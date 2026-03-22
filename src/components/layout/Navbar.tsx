"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = NAV.map((n) => n.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(5,5,8,0.85)] backdrop-blur-xl border-b border-[var(--border)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-[70px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-white font-bold text-sm font-mono
              transition-all duration-300 group-hover:scale-110"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #c084fc)",
                boxShadow: "0 0 20px rgba(124,58,237,0.4)",
              }}
            >
              VP
            </div>
            <span className="font-display font-bold text-white text-lg tracking-tight hidden sm:block">
              Versha<span className="text-violet-400">.</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV.map((n) => {
              const id = n.href.replace("#", "");
              return (
                <a
                  key={n.label}
                  href={n.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === id
                      ? "text-violet-300 bg-violet-500/10"
                      : "text-[var(--text-dim)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:parasharversha27@gmail.com"
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-all duration-300
              hover:scale-105 hover:shadow-lg"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                boxShadow: "0 0 20px rgba(124,58,237,0.3)",
              }}
            >
              Hire Me ✦
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[var(--text-dim)] hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="w-6 flex flex-col gap-[5px]">
              <span className={`block h-[2px] bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[7px]" : ""}`}></span>
              <span className={`block h-[2px] bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-[2px] bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}></span>
            </div>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[rgba(5,5,8,0.98)] backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-6">
          {NAV.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setMenuOpen(false)}
              className="font-display text-3xl font-bold text-white hover:text-violet-400 transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="mailto:parasharversha27@gmail.com"
            className="mt-4 px-8 py-3 rounded-full text-white font-semibold"
            style={{ background: "linear-gradient(135deg, #7c3aed, #9333ea)" }}
            onClick={() => setMenuOpen(false)}
          >
            Hire Me ✦
          </a>
        </nav>
      </div>
    </>
  );
}
