"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { PROJECTS } from "@/lib/data";

const FILTERS = ["All", "Enterprise", "Full Stack", "Freelance"];

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);

  const filtered = PROJECTS.filter((p) => {
    if (active === "All") return true;
    if (active === "Enterprise") return p.tag.includes("Enterprise");
    if (active === "Full Stack") return p.tag.includes("Full Stack");
    if (active === "Freelance") return p.tag.includes("Freelance");
    return true;
  });

  return (
    <SectionWrapper id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Portfolio"
          title="Featured "
          highlight="Projects"
          subtitle="Enterprise applications, freelance builds, and everything in between"
        />

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                active === f
                  ? "text-white scale-105"
                  : "text-[var(--text-muted)] border border-[var(--border)] hover:border-violet-500/30 hover:text-[var(--text)]"
              }`}
              style={
                active === f
                  ? {
                      background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                      boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                    }
                  : { background: "var(--surface)" }
              }
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <div
              key={project.id}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl border border-[var(--border)] overflow-hidden cursor-pointer
              transition-all duration-400 group"
              style={{
                background: "var(--surface)",
                transform: hovered === project.id ? "translateY(-6px)" : "translateY(0)",
                borderColor:
                  hovered === project.id
                    ? `${project.color}40`
                    : "var(--border)",
                boxShadow:
                  hovered === project.id
                    ? `0 20px 60px ${project.color}15`
                    : "none",
                transition: "all 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 w-full bg-gradient-to-r ${project.gradient}`}
              />

              {/* Card glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at 50% 0%, ${project.color}08, transparent 60%)`,
                }}
              />

              <div className="p-6 relative">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${project.color}15` }}
                  >
                    {project.emoji}
                  </div>
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full"
                    style={{
                      color: project.color,
                      background: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.tag}
                  </span>
                </div>

                {/* Title & desc */}
                <h3 className="font-display font-bold text-lg text-white mb-1 leading-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--text-muted)] font-mono mb-3">
                  {project.subtitle}
                </p>
                <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-5 line-clamp-3">
                  {project.desc}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t, j) => (
                    <span key={j} className="tag-pill text-[10px]">{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold transition-colors hover:text-violet-300"
                      style={{ color: project.color }}
                    >
                      ↗ Live Demo
                    </a>
                  ) : (
                    <span className="text-xs text-[var(--text-muted)] font-mono">
                      🔒 Enterprise / Private
                    </span>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[var(--text-muted)] hover:text-[var(--text)] transition-colors ml-auto"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-[var(--text-muted)] text-sm mb-4 font-mono">
            Most enterprise work is under NDA. These represent what I can share.
          </p>
          <a
            href={`mailto:parasharversha27@gmail.com`}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold
            text-violet-300 border border-violet-500/30 hover:bg-violet-500/10 transition-all"
          >
            Ask about my full portfolio →
          </a>
        </div>
      </div>
    </SectionWrapper>
  );
}
