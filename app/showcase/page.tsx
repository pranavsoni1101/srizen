"use client";
import { Container } from "@/components/container";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { FlipWords } from "@/components/ui/flip-words";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";

const Showcase = () => {
  const words = ["Raw.", "Bold.", "Built."];
  const showcases = [
    {
      title: "Compliance Management App 1",
      description: "Automated compliance tracking with t.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Creative Studio Branding 1",
      description: "Brand design & digital presence revamp.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "ERP SaaS MVP 1",
      description: "AI-first ERP with plug-and-play modules.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Compliance Management App 2",
      description: "Automated compliance tracking with t.",
      image: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "Creative Studio Branding 2",
      description: "Brand design & digital presence revamp.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
    {
      title: "ERP SaaS MVP 2",
      description: "AI-first ERP with plug-and-play modules.",
      image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      link: "#",
    },
  ];
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
              PixelSmith in Action. <br />
              <FlipWords words={words} />
            </h1>
          </Container>
        </div>
      </section>

      <section className=" bg-secondary overflow-hidden">
        <Container>

              <blockquote className="mt-6 mb-12 border-l-2 pl-6 italic mx-auto max-w-lg">
              Design, technology, and storytelling come together here. See how we’ve shaped brands and built products that stand out
              </blockquote>
          <Carousel
            className="w-full"
            opts={{
              align: "center",   // center the active slide
              loop: true,
              skipSnaps: false,
            }}
            plugins={[
              Autoplay({ delay: 2500, stopOnInteraction: false }),
              ClassNames(), // adds .is-snapped / .is-selected etc to slides
            ]}
          >
            {/* Peek effect + selected styling via arbitrary selectors */}
            <CarouselContent
              className="
                -ml-4 md:-ml-8
                [&_.embla__slide]:transition-all [&_.embla__slide]:duration-300
                [&_.embla__slide]:opacity-50
                [&_.embla__slide.is-snapped]:opacity-100
                [&_.slide-card]:scale-[.97]
                [&_.embla__slide.is-snapped_.slide-card]:scale-100
              "
            >
              {showcases.map((item, i) => (
                <CarouselItem
                  key={i}
                  className="
                    pl-4 md:pl-8
                    basis-[85%] md:basis-[60%]
                  "
                >
                  <Card className="slide-card mx-auto shadow-lg rounded-2xl h-[480px] overflow-hidden">
                     <div className="relative w-full h-56">
    <Image
      src={item.image}
      alt={item.title}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, 600px"
    />
  </div>
                    <CardContent className="flex flex-col items-center justify-center p-6">
                      <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                      <p className="text-muted-foreground mt-2 text-center">{item.description}</p>
                      <a
                        href={item.link}
                        className="mt-4 inline-block text-primary hover:underline"
                      >
                        View Details →
                      </a>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </Container>
      </section>
    </>
  );
};

export default Showcase;
