# Versha Parashar — Portfolio

A full Next.js 14 portfolio website — dark premium theme with violet/indigo accents.

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🌐 Deploy to Vercel (Free — Recommended)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for auto-deploys.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Design system, animations, fonts
├── lib/
│   └── data.ts             # ← ALL your content lives here
├── hooks/
│   └── useInView.ts        # Scroll reveal + typewriter hooks
└── components/
    ├── ui/
    │   ├── CursorGlow.tsx        # Mouse follower glow effect
    │   ├── SectionWrapper.tsx    # Scroll reveal wrapper
    │   └── SectionHeading.tsx    # Reusable section title
    ├── layout/
    │   ├── Navbar.tsx            # Sticky nav + mobile menu
    │   └── Footer.tsx
    └── sections/
        ├── HeroSection.tsx       # Landing + typewriter + stats
        ├── AboutSection.tsx      # Bio + marquee tech strip
        ├── SkillsSection.tsx     # Animated skill bars + tabs
        ├── ExperienceSection.tsx # Timeline
        ├── ProjectsSection.tsx   # Filterable project grid
        ├── ServicesSection.tsx   # Freelance pricing cards
        ├── TestimonialsSection.tsx
        └── ContactSection.tsx    # Form + contact links
```

---

## ✏️ Customization

**All your data is in one file: `src/lib/data.ts`**

- Update `PERSONAL` for name, email, bio, links
- Update `PROJECTS` to add/remove projects (set `live:` URL when deployed)
- Update `EXPERIENCE` for new jobs
- Update `TESTIMONIALS` with real client feedback
- Update `SERVICES` pricing as you scale rates

---

## 🎨 Design System

- **Font**: Clash Display (headings) + Cabinet Grotesk (body) + JetBrains Mono (code/tags)
- **Colors**: `#050508` bg · `#7c3aed` accent · `#a78bfa` accent-light
- **Theme**: Dark premium — dot grid, blob gradients, noise texture overlay

---

## 📦 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (ready to use — import in any component)
- **Lucide React** (icons)

---

Built with ❤️ for Versha Parashar
