export const projects = [
  {
    slug: "pranavsoni-portfolio",
    title: "Personal Portfolio – PranavSoni.com",
    description: "A modern portfolio built with Next.js, deployed on Vercel, showcasing an eye for UI detailing.",
    image: "/pranav-soni-portfolio.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS","Vercel"],
    link: "https://pranavsoni.com",
    comingSoon: false,
    details: {
      overview: "This portfolio website is designed to highlight my work, skills, and projects with a clean minimalistic UI. The goal was to build something that is responsive, SEO friendly, and visually engaging.",
      role: "Full-stack Developer (UI/UX + Deployment)",
      challenges: [
        "Ensuring responsive design across different screen sizes",
        "Keeping the site lightweight and fast",
        "Adding subtle animations without compromising performance"
      ],
      solutions: [
        "Used Next.js Image optimization with blur placeholder",
        "Deployed on Vercel for global CDN delivery",
        "Leveraged Framer Motion for smooth and minimal animations"
      ],
      screenshots: [
        "https://images.unsplash.com/photo-1756142188854-34b1e9a9e415?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1756151224665-eba765e8c3b5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    }
  },
  {
    slug: "ascent-industrial-manufacturers",
    title: "AiM – Ascent Industrial Manufacturers Pvt Ltd",
    description: "Revamped the official website for AiM with a modern Next.js stack, improving performance, SEO, and design consistency (Coming Soon 🚀).",
    image: "/aim-website.png",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    link: "https://ascentindustries.in",
    comingSoon: true,
    details: {
      overview: "AiM, a leading industrial manufacturer, needed a complete digital transformation of their outdated WordPress website. The new build focused on performance, SEO optimization, and a consistent modern UI/UX to better represent their brand.",
      role: "Full-stack Developer (Redesign + SEO + Deployment)",
      challenges: [
        "Old WordPress website with poor performance and outdated structure",
        "Slow image and video loading times impacting user experience",
        "Weak SEO management and lack of metadata integration",
        "Poor color theming and irregular UI/UX patterns across the site"
      ],
      solutions: [
        "Rebuilt the website using Next.js + TypeScript with TailwindCSS for clean, consistent UI",
        "Implemented Next.js Image optimization for faster media loading",
        "Set up complete SEO management including metadata, Open Graph, and Twitter Card tags",
        "Refined site theming and streamlined UI/UX for consistent brand identity"
      ],
      seo: {
        keywords: [
          "Ascent Industrial Manufacturers",
          "precision machining India",
          "CNC manufacturing services",
          "sheet metal fabrication",
          "industrial manufacturing solutions"
        ],
        metaDescription: "AiM (Ascent Industrial Manufacturers Pvt Ltd) – Revamped website built with Next.js, TypeScript, and TailwindCSS. Faster, SEO-optimized, and visually consistent to reflect AiM’s industrial manufacturing excellence."
      },
      screenshots: [
        "https://images.unsplash.com/photo-1605902711622-cfb43c4437b5?q=80&w=1200&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1629904853904-5ac574b32a21?q=80&w=1200&auto=format&fit=crop"
      ]
    }
  },
  // ...add more projects
]
