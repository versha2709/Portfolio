"use client";

import { useState } from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/data";

export default function ServicesSection() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SectionWrapper id="services" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          eyebrow="Freelance Services"
          title="What I can "
          highlight="build for you"
          subtitle="Available for freelance projects — transparent pricing, clean delivery"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-2xl border p-6 flex flex-col transition-all duration-300"
              style={{
                background: service.popular
                  ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(147,51,234,0.08))"
                  : "var(--surface)",
                borderColor:
                  service.popular
                    ? "rgba(124,58,237,0.4)"
                    : hovered === i
                    ? `${service.color}40`
                    : "var(--border)",
                transform: hovered === i ? "translateY(-4px)" : "translateY(0)",
                boxShadow: service.popular
                  ? "0 0 40px rgba(124,58,237,0.15)"
                  : hovered === i
                  ? `0 16px 40px ${service.color}10`
                  : "none",
              }}
            >
              {/* Popular badge */}
              {service.popular && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full
                  text-xs font-bold text-white font-mono whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                    boxShadow: "0 0 16px rgba(124,58,237,0.5)",
                  }}
                >
                  ✦ Most Popular
                </div>
              )}

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5"
                style={{ background: `${service.color}15` }}
              >
                {service.icon}
              </div>

              {/* Title & desc */}
              <h3 className="font-display font-bold text-lg text-white mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-dim)] leading-relaxed mb-6 flex-1">
                {service.desc}
              </p>

              {/* Features */}
              <ul className="space-y-2.5 mb-7">
                {service.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-[var(--text-dim)]">
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 text-[10px]"
                      style={{
                        background: `${service.color}20`,
                        color: service.color,
                      }}
                    >
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="border-t border-[var(--border)] pt-5">
                <div className="text-xs font-mono text-[var(--text-muted)] mb-1">Starting from</div>
                <div
                  className="font-display font-black text-xl mb-4"
                  style={{ color: service.color }}
                >
                  {service.price.replace("Starting ", "")}
                </div>
                <a
                  href="mailto:parasharversha27@gmail.com"
                  className="block w-full text-center py-2.5 rounded-xl text-sm font-semibold
                  transition-all duration-200 hover:scale-105"
                  style={
                    service.popular
                      ? {
                          background: "linear-gradient(135deg, #7c3aed, #9333ea)",
                          color: "#fff",
                          boxShadow: "0 0 20px rgba(124,58,237,0.3)",
                        }
                      : {
                          border: `1px solid ${service.color}40`,
                          color: service.color,
                          background: `${service.color}08`,
                        }
                  }
                >
                  Get a Quote →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Custom work note */}
        <div
          className="mt-10 rounded-2xl p-6 text-center border border-[var(--border)] border-dashed"
          style={{ background: "rgba(124,58,237,0.03)" }}
        >
          <p className="text-[var(--text-dim)] text-sm">
            Have something custom in mind?{" "}
            <a
              href="mailto:parasharversha27@gmail.com"
              className="text-violet-400 font-semibold hover:text-violet-300 transition-colors"
            >
              Let's talk about your project →
            </a>
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
}
