"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-sm">★</span>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <SectionWrapper id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients "
          highlight="say"
          subtitle="Feedback from people I've worked with"
        />

        {/* Large featured testimonial */}
        <div className="max-w-3xl mx-auto mb-12">
          <div
            className="relative rounded-3xl p-10 border transition-all duration-500"
            style={{
              background: "var(--surface)",
              borderColor: `${TESTIMONIALS[active].color}30`,
              boxShadow: `0 0 60px ${TESTIMONIALS[active].color}08`,
            }}
          >
            {/* Quote mark */}
            <div
              className="absolute top-6 right-8 font-display text-8xl font-black leading-none opacity-10 select-none"
              style={{ color: TESTIMONIALS[active].color }}
            >
              &quot;
            </div>

            {/* Stars */}
            <StarRating count={TESTIMONIALS[active].rating} />

            {/* Quote text */}
            <p className="text-[var(--text)] text-lg leading-relaxed mt-5 mb-8 relative z-10">
              &quot;{TESTIMONIALS[active].text}&quot;
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-white
                font-bold font-mono text-sm shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${TESTIMONIALS[active].color}, ${TESTIMONIALS[active].color}99)`,
                  boxShadow: `0 0 20px ${TESTIMONIALS[active].color}40`,
                }}
              >
                {TESTIMONIALS[active].avatar}
              </div>
              <div>
                <div className="font-display font-bold text-white">
                  {TESTIMONIALS[active].name}
                </div>
                <div className="text-sm text-[var(--text-dim)]">
                  {TESTIMONIALS[active].role} · {TESTIMONIALS[active].company}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots + thumbnails */}
        <div className="flex justify-center gap-4">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all duration-300"
              style={{
                background: active === i ? `${t.color}10` : "var(--surface)",
                borderColor: active === i ? `${t.color}40` : "var(--border)",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold font-mono shrink-0"
                style={{
                  background:
                    active === i
                      ? `linear-gradient(135deg, ${t.color}, ${t.color}99)`
                      : "var(--border)",
                  opacity: active === i ? 1 : 0.5,
                }}
              >
                {t.avatar}
              </div>
              <div className="text-left hidden sm:block">
                <div
                  className={`text-xs font-semibold transition-colors ${
                    active === i ? "text-white" : "text-[var(--text-muted)]"
                  }`}
                >
                  {t.name}
                </div>
                <div className="text-[10px] text-[var(--text-muted)] font-mono">{t.company}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
