export const caseStudies = [
  {
    slug: "website-load-times",
    title: "Why Website Speed Impacts Business Performance",
    description:
      "How reducing a website’s load time from 7s to under 2s increased engagement and boosted conversions.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", // Laptop + code workspace
    tags: ["Performance", "UX", "SEO"],
    comingSoon: false,
    details: {
      problem:
        "Visitors were leaving because the website took 7 seconds to load on average. Mobile experience was frustrating, causing high bounce rates.",
      approach: [
        "Optimized and compressed assets",
        "Implemented server-side rendering with Next.js",
        "Lazy-loaded images and critical content",
        "Mobile-first responsive design",
      ],
      results: [
        "Load time dropped from 7s → 2s",
        "Bounce rate reduced by 40%",
        "Conversions improved by 35%",
      ],
      insights:
        "Every second counts — research shows a 1s delay in page load can reduce conversions by 7%. SMEs with outdated websites often lose trust before the page even loads.",
      screenshots: [
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80", // Before-style mock
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80", // After-style modern
      ],
    },
  },
  {
    slug: "ui-ux-mistakes",
    title: "5 Common UI/UX Mistakes That Kill Conversions",
    description:
      "Exploring how cluttered layouts, weak CTAs, and poor navigation silently cost businesses growth.",
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b6d2f13?auto=format&fit=crop&w=1200&q=80", // Abstract UI/UX design
    tags: ["UI/UX", "Design Thinking"],
    comingSoon: false,
    details: {
      problem:
        "A client’s website had low engagement due to confusing navigation and unclear CTAs.",
      approach: [
        "Redesigned navigation to match user flows",
        "Clearer CTAs with stronger copy",
        "Simplified layout with consistent spacing",
      ],
      results: [
        "Session time improved by 2x",
        "Lead form submissions increased 25%",
      ],
      insights:
        "Design isn’t just about looks — it’s about guiding users to act. Good UI/UX silently builds trust and reduces friction.",
      screenshots: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80", // Before style clutter
        "https://images.unsplash.com/photo-1504691342899-8d2d2d8d3d9f?auto=format&fit=crop&w=1200&q=80", // After clean UI
      ],
    },
  },
  {
    slug: "seo-missed-opportunities",
    title: "How SMEs Miss Out Without Proper SEO",
    description:
      "A breakdown of how poor SEO structures keep businesses invisible, and how Srizen fixes it.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80", // SEO/digital marketing themed
    tags: ["SEO", "Content Strategy"],
    comingSoon: false,
    details: {
      problem:
        "The website had no clear meta descriptions, missing alt tags, and poor keyword targeting. Ranking was stuck beyond page 5 on Google.",
      approach: [
        "Structured content hierarchy with semantic HTML",
        "Implemented metadata and schema for better indexing",
        "Researched keywords aligned with business goals",
      ],
      results: [
        "Top 3 ranking for 7 major keywords in 3 months",
        "Organic traffic increased by 60%",
        "Improved local search visibility for target city",
      ],
      insights:
        "Most SMEs underestimate SEO, but without it, even the best website remains invisible. Investing in SEO pays long-term dividends.",
      screenshots: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80", // Analytics/dashboard
        "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1200&q=80", // Graph/chart growth
      ],
    },
  },
];
