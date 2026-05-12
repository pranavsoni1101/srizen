import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code,
  Hammer,
  Paintbrush,
  Shield,
  Sparkles,
  Users,
  Cpu,
  Zap,
  ArrowUpRight,
} from "lucide-react";
import { FlipWords } from "@/components/ui/flip-words";
import Clientele from "@/components/clientel";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About | Srizen",
  description:
    "Srizen is a solo creative studio built around one belief: great software begins with understanding the person using it. Learn about the founder, the philosophy, and why we work the way we do.",
  openGraph: {
    title: "About | Srizen",
    description:
      "A solo studio where end-user experience is the north star — not a line item in the brief.",
    url: "https://srizen.com/about",
    siteName: "Srizen",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Srizen – About",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Srizen",
    description:
      "Srizen crafts user-first digital products — blending psychology, design, and engineering.",
    images: ["/og-image.png"],
  },
};

const words = ["Pixel by Pixel", "Pixel Perfect", "with Impact", "with Creativity"];

const values = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Engaging Experiences",
    description:
      "Interactions are choreographed so users move through your product with zero friction. Design that earns attention — and keeps it.",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Best Practices",
    description:
      "Accessible, type-safe, and tested. Code that ships today without creating technical debt you'll spend next year paying off.",
  },
  {
    icon: <Paintbrush className="h-8 w-8" />,
    title: "Design Precision",
    description:
      "Spacing, hierarchy, and motion are deliberate decisions, not afterthoughts. Every element is exactly where it needs to be.",
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Engineering Excellence",
    description:
      "Performance budgets, clean architecture, readable diffs. The product is as solid under the hood as it looks on screen.",
  },
];

const differentiators = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "No Account Manager Layer",
    description:
      "You talk directly to the person building your product. No telephone game, no brief lost in translation between handoffs.",
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "Psychology + Engineering",
    description:
      "Design decisions are grounded in how people actually think and behave — not just what looks good in a mockup.",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "End-User First, Always",
    description:
      "Every feature gets stress-tested against one question: does this make the user's life easier? If not, it doesn't ship.",
  },
  {
    icon: <ArrowUpRight className="h-6 w-6" />,
    title: "Quality Is Non-Negotiable",
    description:
      "User-experience-first doesn't mean cutting corners on code. Clean, maintainable, and scalable is the baseline — not the premium.",
  },
];

const About = () => {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="py-12 text-center bg-background text-foreground border-border border-b-4 bag-grid">
          <Container>
            <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl/18 font-bold tracking-tight mx-auto text-balance italic max-w-3xl">
              Forging Experiences, <FlipWords words={words} />
            </h1>
            <p className="mt-6 text-base sm:text-lg text-foreground/70 max-w-2xl mx-auto">
              A solo studio built around one belief: great software begins with
              understanding the person using it.
            </p>
          </Container>
        </div>
      </section>

      {/* Founder */}
      <section className="bg-secondary-background border-border border-b-4">
        <Container className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div className="aspect-square max-w-xs mx-auto w-full bg-main border-border border-4 rounded-2xl flex items-center justify-center">
              <span className="text-8xl font-bold text-black select-none tracking-tight">
                PS
              </span>
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-foreground/50 mb-2">
                Founder
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Pranav Soni
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4">
                Full-stack developer. Master of Computing student at ANU. Former
                software engineer at{" "}
                <span className="font-semibold">Intellore Systems</span>, Pune
                — where I spent years shipping production software and watching
                too many user sessions where people got lost in products that
                should have been obvious.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4">
                <span className="font-bold italic">Srizen</span> — from the
                Sanskrit{" "}
                <span className="font-semibold">&ldquo;Srijan&rdquo;</span>,
                meaning creation — is my answer to that. A studio where
                end-user experience is the{" "}
                <span className="font-semibold underline">north star</span>,
                not a line item in the brief.
              </p>
              <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                I build with React, Next.js, TypeScript, and whatever the
                problem actually calls for. The work I care about: products that
                feel inevitable — simple to use, solid in the code, impossible
                to forget.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-background border-border border-b-4">
        <Container className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              What We Stand For
            </h2>
            <p className="text-foreground/60 mt-3 max-w-xl mx-auto">
              Four principles that shape every project — from first wireframe to
              final deploy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Card key={i} className="shadow-lg rounded-2xl bg-main border-border border-2">
                <CardHeader className="flex items-center justify-center pb-2">
                  {v.icon}
                </CardHeader>
                <CardContent className="text-center">
                  <p className="font-semibold mb-2">{v.title}</p>
                  <p className="text-sm text-black/60 leading-relaxed">
                    {v.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Srizen */}
      <section className="bg-secondary-background border-border border-b-4">
        <Container className="py-16">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Why Srizen?
              </h2>
              <p className="text-base sm:text-lg text-foreground/70 max-w-2xl">
                Most agencies have layers. Account managers, project leads,
                junior devs, senior devs. Your brief passes through five hands
                before anyone writes a line of code. Srizen is different by
                design.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentiators.map((d, i) => (
                <div
                  key={i}
                  className="border-border border-2 rounded-2xl p-6 bg-background transition-colors duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-main rounded-lg p-2 border-border border-2">
                      {d.icon}
                    </div>
                    <p className="font-bold text-lg">{d.title}</p>
                  </div>
                  <p className="text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {d.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Client Logos */}
      <section className="bg-background border-border">
        <Container className="pt-16 pb-4 text-center">
          <h2 className="text-3xl font-bold">Trusted By</h2>
          <p className="text-muted-foreground mt-2">
            Startups and growing businesses that chose to build with Srizen.
          </p>
        </Container>
        <div className="pb-8">
          <Clientele noBorderBottom />

        </div>
      </section>

      {/* CTA */}
      <section className="bag-grid bg-main text-main-foreground py-16 border-border border-t-4">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s Build Something Together
          </h2>
          <p className="text-black/70 sm:text-lg max-w-2xl mx-auto mb-8">
            Whether it&apos;s a product from scratch or a system that needs
            serious work — you&apos;ll work directly with the person who ships it.
          </p>
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="text-lg p-6 flex items-center gap-2 mx-auto bg-secondary text-foreground"
            >
              Get in Touch
              <Hammer className="h-5 w-5" />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default About;
