import { Container } from "@/components/container";
import { FlipWords } from "@/components/ui/flip-words";
import type { Metadata } from "next";
import ShowcaseClientCarousel from "@/components/showcase-client-carousel";

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
  const words = ["Raw.", "Bold.", "Built."];

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
              Srizen in Action. <br />
              <FlipWords words={words} />
            </h1>
          </Container>
        </div>
      </section>

      <section className=" bg-secondary overflow-hidden">
        <Container>
          <blockquote className="mt-6 mb-12 border-l-2 pl-6 italic mx-auto max-w-lg">
            Design, technology, and storytelling come together here. See how
            we’ve shaped brands and built products that stand out
          </blockquote>
          <ShowcaseClientCarousel />
        </Container>
      </section>
    </>
  );
};

export default Showcase;
