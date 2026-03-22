import { PERSONAL } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white text-xs font-bold font-mono"
            style={{ background: "linear-gradient(135deg, #7c3aed, #c084fc)" }}
          >
            VP
          </div>
          <span className="text-[var(--text-dim)] text-sm">
            © {year} Versha Parashar. Crafted with React & Next.js.
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={PERSONAL.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-dim)] hover:text-violet-400 text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={PERSONAL.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--text-dim)] hover:text-violet-400 text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${PERSONAL.email}`}
            className="text-[var(--text-dim)] hover:text-violet-400 text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
