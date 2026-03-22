"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          eyebrow="Career"
          title="Work "
          highlight="Experience"
          subtitle="Building real-world enterprise solutions that scale"
        />

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px hidden md:block"
            style={{
              background: "linear-gradient(180deg, #7c3aed, rgba(124,58,237,0.1))",
            }}
          />

          {EXPERIENCE.map((exp, i) => (
            <div key={exp.id} className="relative md:pl-20 mb-10">
              {/* Timeline dot */}
              <div
                className="absolute left-4 top-7 w-5 h-5 rounded-full hidden md:flex items-center justify-center -translate-x-1/2"
                style={{
                  background: "linear-gradient(135deg, #7c3aed, #c084fc)",
                  boxShadow: "0 0 16px rgba(124,58,237,0.6)",
                }}
              >
                <div className="w-2 h-2 rounded-full bg-white" />
              </div>

              {/* Card */}
              <div
                className="rounded-2xl p-8 border border-[var(--border)] hover:border-violet-500/30
                transition-all duration-300 group"
                style={{ background: "var(--surface)" }}
              >
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="font-display font-bold text-xl text-white mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-violet-400 font-semibold text-base">{exp.company}</div>
                    <div className="text-[var(--text-muted)] text-sm mt-1 font-mono">📍 {exp.location}</div>
                  </div>
                  <div className="flex flex-col gap-2 items-start md:items-end shrink-0">
                    <span
                      className="px-4 py-1.5 rounded-full text-xs font-mono font-semibold text-violet-300"
                      style={{
                        background: "rgba(124,58,237,0.12)",
                        border: "1px solid rgba(124,58,237,0.25)",
                      }}
                    >
                      {exp.period}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-xs font-mono text-green-400"
                      style={{
                        background: "rgba(74,222,128,0.08)",
                        border: "1px solid rgba(74,222,128,0.2)",
                      }}
                    >
                      ● {exp.type}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[var(--text-dim)] text-sm leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Highlights */}
                <div className="space-y-3 mb-6">
                  {exp.highlights.map((point, j) => (
                    <div key={j} className="flex gap-3">
                      <span className="text-violet-400 mt-0.5 shrink-0 font-mono text-sm">▹</span>
                      <span className="text-[var(--text-dim)] text-sm leading-relaxed">{point}</span>
                    </div>
                  ))}
                </div>

                {/* Project tags */}
                <div className="border-t border-[var(--border)] pt-4">
                  <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-3">
                    Key Projects
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.projects.map((p, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full text-xs font-medium text-violet-300"
                        style={{
                          background: "rgba(124,58,237,0.1)",
                          border: "1px solid rgba(124,58,237,0.2)",
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Education card */}
          <div className="relative md:pl-20">
            <div
              className="absolute left-4 top-7 w-5 h-5 rounded-full hidden md:flex items-center justify-center -translate-x-1/2"
              style={{
                background: "rgba(124,58,237,0.3)",
                border: "1px solid rgba(124,58,237,0.5)",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-violet-400" />
            </div>

            <div
              className="rounded-2xl p-6 border border-[var(--border)] border-dashed"
              style={{ background: "rgba(124,58,237,0.03)" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl shrink-0"
                  style={{ background: "rgba(124,58,237,0.1)" }}
                >
                  🎓
                </div>
                <div>
                  <div className="text-white font-semibold">Bachelor of Technology</div>
                  <div className="text-violet-400 text-sm">UPES, Dehradun</div>
                  <div className="text-[var(--text-muted)] text-xs font-mono mt-1">Graduated 2024</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
