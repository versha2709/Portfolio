interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = true,
}: SectionHeadingProps) {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <div className={`mb-16 ${center ? "text-center" : ""}`}>
      <span
        className="inline-block font-mono text-xs tracking-[0.2em] uppercase text-violet-400 mb-4
        px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5"
      >
        {eyebrow}
      </span>
      <h2
        className="font-display text-4xl md:text-5xl font-bold text-white leading-tight"
        style={{ letterSpacing: "-0.02em" }}
      >
        {parts[0]}
        {highlight && (
          <span className="gradient-text">{highlight}</span>
        )}
        {parts[1]}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[var(--text-dim)] text-lg max-w-xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
