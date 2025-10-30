import { Container } from "@/components/container";
import type { Metadata } from "next";
import ShowcaseClientCarousel from "@/components/showcase-client-carousel";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Hammer } from "lucide-react";

export const metadata: Metadata = {
  title: "Showcase",
  description:
    "Explore Srizen’s creative showcase: portfolios, apps, and branding projects that highlight design, technology, and storytelling.",
  openGraph: {
    title: "Srizen Showcase",
    description:
      "See how Srizen crafts bold, raw, and built digital experiences across design, development, and branding.",
    url: "https://srizen.com/showcase",
    siteName: "Srizen",
    images: [
      {
        url: "/og-showcase.png", // add an OG image in your public folder
        width: 1200,
        height: 630,
        alt: "Srizen Showcase",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srizen Showcase",
    description:
      "Explore Srizen’s projects: design, development, and branding done right.",
    images: ["/og-showcase.png"],
  },
};

const Showcase = () => {

  const carouselOptions = {
    // Aligns the slides to the center of the viewport
    align: "center", // Allows free dragging and does not snap to the nearest slide
    dragFree: true, // Keeps the scroll within the bounds of the slides
    containScroll: "keepSnaps",
  };
  return (
    <>
      <section className="bg-secondary-background">
        <div className="py-6 text-center bg-background text-foreground border-border border-b-4 bag-grid">
          <Container>
            <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl/18 font-bold tracking-tight mx-auto text-balance italic max-w-3xl">
              The Srizen Effect: Insights & Impact
            </h1>
          </Container>
        </div>
      </section>

      <section className=" bg-secondary overflow-hidden">
        <Container>
          <blockquote className="mt-6 mb-12 border-l-2 pl-6 italic mx-auto max-w-lg">
            Stories of transformation — where design meets results.
          </blockquote>
          <ShowcaseClientCarousel />
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bag-grid bg-main text-main-foreground py-16 border-border border-t-4 ">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-black/70 sm:text-lg max-w-2xl mx-auto mb-8">
            Whether it&apos;s crafting pixel-perfect interfaces or building scalable
            systems — let&apos;s create something remarkable together.
          </p>
          <Link href="/contact" passHref>
            <Button
              size="lg"
              className="text-lg p-6 flex items-center gap-2 mx-auto bg-secondary text-foreground"
            >
              Let&apos;s Build Something Together
              <Hammer className="h-8 w-8" />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Showcase;
