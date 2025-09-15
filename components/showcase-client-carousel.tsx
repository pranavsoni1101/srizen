"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import ClassNames from "embla-carousel-class-names";
import Image from "next/image";
import Link from "next/link";

const ShowcaseClientCarousel = () => {
  const showcases = [
    {
      title: "Personal Portfolio",
      description:
        "A modern portfolio built with Next.js and deployed on Vercel, showcasing my eye for design and UI detailing",
      image: "/pranav-soni-portfolio.png",
      link: "/showcase/pranavsoni-portfolio",
    },
  ];

  const isSingle = showcases.length === 1;

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "center",
        loop: true, // disable looping if only 1
        skipSnaps: false,
      }}
      plugins={[
        Autoplay({ delay: 5000, stopOnInteraction: true }),
        ClassNames(),
      ]}
    >
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
            className={
              isSingle
                ? "basis-full flex justify-center" // center if single
                : "pl-4 md:pl-8 basis-[85%] md:basis-[60%]"
            }
          >
            <Card className="slide-card mx-auto shadow-lg rounded-2xl overflow-hidden max-w-3xl">
              {/* Image wrapper */}
              <div className="relative w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={0}
                  className="w-full h-auto object-contain"
                  sizes="(max-width: 640px) 100vw, 
                         (max-width: 768px) 70vw, 
                         (max-width: 1024px) 50vw, 
                         400px"
                />
              </div>
              <CardContent className="flex flex-col items-center justify-center p-6 text-black">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-black/80 mt-2 text-center">
                  {item.description}
                </p>
                <Link href={item.link} passHref>
                  <Button className="dark mt-4 bg-secondary text-foreground">
                    View Details <ArrowRight />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* {!isSingle && ( */}
      <>
        <CarouselPrevious />
        <CarouselNext />
      </>
      {/* )} */}
    </Carousel>
  );
};

export default ShowcaseClientCarousel;
