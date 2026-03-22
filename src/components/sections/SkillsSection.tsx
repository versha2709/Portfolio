"use client";

import { useInView } from "@/hooks/useInView";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";
import { useState } from "react";

const TABS = ["frontend", "backend", "tools"] as const;
type Tab = typeof TABS[number];

const TAB_LABELS: Record<Tab, string> = {
  frontend: "Frontend",
  backend: "Backend",
  tools: "Tools & Libraries",
};

function SkillBar({ name, level, icon, animate }: { name: string; level: number; icon: string; animate: boolean }) {
  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-base w-6 text-center font-mono text-xs">{icon}</span>
          <span className="text-sm font-medium text-[var(--text)]">{name}</span>
        </div>
        <span className="text-xs font-mono text-violet-400">{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${level}%` : "0%" }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const { ref, inView } = useInView(0.2);
  const [activeTab, setActiveTab] = useState<Tab>("frontend");

  const skills = SKILLS[activeTab];

  return (
    <SectionWrapper id="skills" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Tech Stack"
          title="Skills & "
          highlight="Expertise"
          subtitle="Technologies I work with to build production-grade applications"
        />

        {/* Tab switcher */}
        <div className="flex justify-center mb-12">
          <div
            className="flex gap-1 p-1 rounded-xl"
            style={{ background: "var(--surface)", border: "1px solid var(--border)" }}
          >
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-[var(--text-muted)] hover:text-[var(--text)]"
                }`}
                style={
                  activeTab === tab
                    ? { background: "linear-gradient(135deg, #7c3aed, #9333ea)" }
                    : {}
                }
              >
                {TAB_LABELS[tab]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills grid */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className="grid md:grid-cols-2 gap-x-16 gap-y-7 max-w-4xl mx-auto"
        >
          {skills.map((s, i) => (
            <SkillBar key={i} {...s} animate={inView} />
          ))}
        </div>

        {/* Bottom: extra tech tags */}
        <div className="mt-16 text-center">
          <p className="text-xs font-mono text-[var(--text-muted)] uppercase tracking-widest mb-5">
            Also familiar with
          </p>
          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "GraphQL", "Docker", "Vercel", "AWS S3", "Postman",
              "Webpack", "Vite", "GitHub Actions", "Redis", "Swagger"
            ].map((t, i) => (
              <span
                key={i}
                className="tag-pill hover:border-violet-500/40 hover:text-violet-300 transition-all cursor-default"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
