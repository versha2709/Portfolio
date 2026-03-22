"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { PERSONAL } from "@/lib/data";

const contactLinks = [
  {
    icon: "📧",
    label: "Email",
    value: PERSONAL.email,
    href: `mailto:${PERSONAL.email}`,
    color: "#7c3aed",
    desc: "Best way to reach me",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "versha-parashar-8450201b9",
    href: PERSONAL.linkedin,
    color: "#0891b2",
    desc: "Let's connect professionally",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "versha2709",
    href: "https://github.com/versha2709",
    color: "#6b7280",
    desc: "Browse my code",
  },
  {
    icon: "📞",
    label: "Phone",
    value: PERSONAL.phone,
    href: `tel:${PERSONAL.phone}`,
    color: "#d97706",
    desc: "Mon – Sat, 10am – 7pm IST",
  },
];

export default function ContactSection() {
  return (
    <SectionWrapper id="contact" className="py-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-violet-400 mb-4
            px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
            Get In Touch
          </span>
          <h2
            className="font-display text-4xl md:text-5xl font-bold text-white leading-tight"
            style={{ letterSpacing: "-0.02em" }}
          >
            Let's build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="mt-4 text-[var(--text-dim)] text-lg max-w-lg mx-auto leading-relaxed">
            Have a project in mind? I'm open to freelance work and full-time opportunities. Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {contactLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="flex items-center gap-4 p-5 rounded-2xl border border-[var(--border)]
              transition-all duration-300 group"
              style={{ background: "var(--surface)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = `${link.color}50`;
                (e.currentTarget as HTMLElement).style.background = `${link.color}08`;
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLElement).style.background = "var(--surface)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                style={{ background: `${link.color}18` }}
              >
                {link.icon}
              </div>

              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-0.5">
                  {link.label}
                </div>
                <div
                  className="text-sm font-semibold truncate transition-colors group-hover:text-white"
                  style={{ color: link.color }}
                >
                  {link.value}
                </div>
                <div className="text-xs text-[var(--text-muted)] mt-0.5">{link.desc}</div>
              </div>

              {/* Arrow */}
              <span className="text-[var(--text-muted)] group-hover:text-white transition-all duration-200 group-hover:translate-x-1 shrink-0">
                ↗
              </span>
            </a>
          ))}
        </div>

        {/* Availability banner */}
        <div
          className="rounded-2xl p-6 border text-center"
          style={{
            background: "rgba(74,222,128,0.04)",
            borderColor: "rgba(74,222,128,0.2)",
          }}
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <span
              className="w-2.5 h-2.5 rounded-full bg-green-400"
              style={{ boxShadow: "0 0 8px #4ade80" }}
            ></span>
            <span className="text-green-400 font-semibold text-sm">Currently available for projects</span>
          </div>
          <p className="text-xs text-[var(--text-muted)] leading-relaxed max-w-md mx-auto">
            Based in Noida, India — open to remote work globally. Typically respond within 24 hours.
          </p>
        </div>

      </div>
    </SectionWrapper>
  );
}
