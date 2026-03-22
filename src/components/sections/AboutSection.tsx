"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { PERSONAL } from "@/lib/data";

const techStrip = [
  "React.js", "Next.js", "TypeScript", "NestJS", "MongoDB",
  "Redux Toolkit", "Material UI", "Angular", "REST APIs", "Jest",
  "React.js", "Next.js", "TypeScript", "NestJS", "MongoDB",
  "Redux Toolkit", "Material UI", "Angular", "REST APIs", "Jest",
];

const highlights = [
  { label: "Education", value: "B.Tech, UPES Dehradun", icon: "🎓" },
  { label: "Location", value: "Noida, Uttar Pradesh", icon: "📍" },
  { label: "Experience", value: "2+ Years Professional", icon: "💼" },
  { label: "Domains", value: "Banking & Healthcare", icon: "🏛️" },
];

export default function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="About Me"
          title="The developer behind"
          highlight=" the work"
          subtitle="Building enterprise-grade apps with clean code and great UX"
          center={false}
        />

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <div>
            <div className="space-y-5 text-[var(--text-dim)] leading-relaxed text-[15px]">
              {PERSONAL.bioLong.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Highlights grid */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {highlights.map((h, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-[var(--border)] bg-[var(--surface)]
                  hover:border-violet-500/30 transition-all duration-300"
                >
                  <div className="text-xl mb-2">{h.icon}</div>
                  <div className="text-xs text-[var(--text-muted)] font-mono uppercase tracking-wider mb-1">
                    {h.label}
                  </div>
                  <div className="text-sm text-[var(--text)] font-medium">{h.value}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex gap-4 mt-8">
              <a
                href={`mailto:${PERSONAL.email}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white
                transition-all hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                  boxShadow: "0 0 20px rgba(124,58,237,0.25)",
                }}
              >
                📧 Email Me
              </a>
              <a
                href={PERSONAL.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold
                text-[var(--text-dim)] border border-[var(--border-light)] hover:text-violet-300
                hover:border-violet-500/40 transition-all"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* Right: Visual card */}
          <div className="relative">
            {/* Main card */}
            <div
              className="relative rounded-3xl p-8 border border-[var(--border)]"
              style={{ background: "var(--surface)" }}
            >
              {/* Glow */}
              <div
                className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
                style={{
                  background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)",
                }}
              />

              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-black text-xl font-display"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #c084fc)",
                    boxShadow: "0 0 30px rgba(124,58,237,0.4)",
                  }}
                >
                  VP
                </div>
                <div>
                  <div className="text-white font-display font-bold text-lg">{PERSONAL.name}</div>
                  <div className="text-[var(--text-dim)] text-sm">{PERSONAL.title}</div>
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="w-2 h-2 rounded-full bg-green-400" style={{ boxShadow: "0 0 5px #4ade80" }}></span>
                    <span className="text-xs text-green-400 font-mono">Open to Work</span>
                  </div>
                </div>
              </div>

              {/* Contact details */}
              <div className="space-y-3 text-sm border-t border-[var(--border)] pt-6">
                {[
                  { icon: "📧", label: PERSONAL.email },
                  { icon: "📞", label: PERSONAL.phone },
                  { icon: "📍", label: `${PERSONAL.location}` },
                  { icon: "🎓", label: `${PERSONAL.education.degree}, ${PERSONAL.education.year}` },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[var(--text-dim)]">
                    <span className="text-base w-5 text-center">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>

              {/* Floating badges */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["React.js", "Next.js", "NestJS", "TypeScript", "MongoDB"].map((t, i) => (
                  <span key={i} className="tag-pill">{t}</span>
                ))}
              </div>
            </div>

            {/* Decorative card offset */}
            <div
              className="absolute -bottom-3 -right-3 -z-10 w-full h-full rounded-3xl"
              style={{ border: "1px solid rgba(124,58,237,0.2)", background: "transparent" }}
            />
          </div>
        </div>
      </div>

      {/* Tech marquee strip */}
      <div className="mt-20 overflow-hidden border-y border-[var(--border)] py-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {techStrip.map((t, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-3 mx-6 text-sm font-mono text-[var(--text-muted)] uppercase tracking-widest"
            >
              <span
                className="w-1 h-1 rounded-full bg-violet-500"
              ></span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
