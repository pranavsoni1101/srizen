# Srizen — Creative Design & Web Development Agency

The official website for **Srizen**, a premium creative studio offering custom websites, UX/UI design, and web & mobile app development. Built with Next.js 16 and React 19.

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| UI Components | shadcn/ui (Radix UI primitives) |
| Animation | Framer Motion 12 |
| Forms | React Hook Form + Zod + Formspree |
| Carousel | Embla Carousel |
| Fonts | Archivo Black + IBM Plex Sans |
| Themes | next-themes (dark/light mode) |
| Deployment | Vercel |

---

## Pages & Routes

| Route | Description |
|---|---|
| `/` | Landing page — hero, services, process, showcase, testimonials, CTA |
| `/about` | Company values, founder bio, animated flip-word section |
| `/contact` | Contact form (Formspree), map, Calendly scheduling |
| `/showcase` | Portfolio grid of client projects |
| `/showcase/[slug]` | Individual project case studies |
| `/srizen-effect` | Curated effect/highlight showcase |
| `/srizen-effect/[slug]` | Dynamic effect detail pages |

---

## Project Structure

```
srizen/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (fonts, navbar, footer, theme)
│   ├── page.tsx            # Home page
│   ├── about/
│   ├── contact/
│   ├── showcase/[slug]/
│   └── srizen-effect/[slug]/
├── components/             # Reusable components
│   ├── ui/                 # shadcn/ui primitives + custom animations
│   ├── navbar.tsx
│   ├── footer.tsx
│   ├── contact-form.tsx
│   ├── showcase-card.tsx
│   ├── testimonial-card.tsx
│   └── ...
├── lib/
│   ├── utils.ts            # cn() helper
│   ├── projects.ts         # Project metadata
│   └── caseStudies.ts      # Case study content
└── public/                 # Static assets & OG images
```

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other commands

```bash
npm run build    # production build
npm run start    # start production server
npm run lint     # run ESLint
```

---

## Key Configuration

- **Contact form**: Formspree — configured in [components/contact-form.tsx](components/contact-form.tsx)
- **Calendly**: configured in contact and CTA components for consultation scheduling
- **External images**: `images.unsplash.com` whitelisted in [next.config.ts](next.config.ts)
- **Colors**: oklch-based CSS variables in [app/globals.css](app/globals.css) with full dark mode support

No `.env` file required — no secrets or API keys needed locally.

---

## Deployment

Deploy via [Vercel](https://vercel.com) — import the repo and it works out of the box with zero configuration.

```bash
npm run build   # verify build passes before pushing
```
