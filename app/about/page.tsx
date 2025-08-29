import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Hammer, Paintbrush, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "At Srizen, we forge digital experiences pixel by pixel. Learn about our values, vision, and passion for creating user-focused websites and applications that blend creativity with performance.",
  openGraph: {
    title: "About Us | Srizen",
    description:
      "Discover the story behind Srizen — a creative studio dedicated to building seamless, functional, and beautifully designed digital experiences.",
    url: "https://srizen/about",
    siteName: "Srizen",
    images: [
      {
        url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1080&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Srizen - About Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Srizen",
    description:
      "Srizen crafts user-first digital products — blending creativity, design, and technology to deliver seamless experiences.",
    images: [
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1080&auto=format&fit=crop",
    ],
  },
};

const About = () => {
  const words = [
    "Pixel by Pixel",
    "Pixel Perfect",
    "with Impact",
    "with Creativity",
  ];
  return (
    <>
      <section className="bg-secondary-background pb-8">
        <div className="py-6 text-center bg-background text-foreground  border-border border-b-4 bag-grid">
          <Container>
            <h1
              className="scroll-m-20 
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl/18  
             font-bold tracking-tight 
            mx-auto text-balance italic max-w-3xl"
            >
              Forging Experiences, <FlipWords words={words} />
            </h1>
          </Container>
        </div>
        <Container className="bg-secondaryy-background">
          <p className="mt-4 mb-10 text-base sm:text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto text-center">
            At Srizen, we believe technology should feel effortless. Every
            click, every interaction, every pixel matters. We craft engaging,
            reliable, and safe digital experiences that blend design precision
            with engineering excellence
          </p>

          {/* Values */}
          <Container className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="shadow-lg rounded-2xl">
              <CardHeader className="flex items-center justify-center">
                <Sparkles className="h-8 w-8" />
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">Engaging Experiences</p>
                <p className="text-sm mt-2">
                  Interfaces that delight and keep users hooked.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-2xl">
              <CardHeader className="flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">Best Practices</p>
                <p className="text-sm mt-2">
                  Secure, scalable, and future-proof development.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-2xl">
              <CardHeader className="flex items-center justify-center">
                <Paintbrush className="h-8 w-8" />
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">Design Precision</p>
                <p className="text-sm mt-2">
                  Every pixel crafted with care and intention.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg rounded-2xl">
              <CardHeader className="flex items-center justify-center">
                <Code className="h-8 w-8" />
              </CardHeader>
              <CardContent className="text-center">
                <p className="font-semibold">Engineering Excellence</p>
                <p className="text-sm mt-2">
                  Clean, maintainable, and performance-first code.
                </p>
              </CardContent>
            </Card>
          </Container>

          {/* About Me */}
          <Card className="mt-10 mx-auto max-w-2xl bg-background text-foreground">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className="aspect-square relative w-full h-auto my-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Pranav Soni's image"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>
              <div className="my-auto">
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  I&apos;m <span className="font-bold">Pranav Soni</span> — a
                  full-stack developer who was tired of clunky, frustrating user
                  interfaces.
                </p>
                <p className="mt-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                  <span className="font-bold italic">Srizen</span> — inspired by
                  the Sanskrit word <span className="font-bold">"Srijan"</span>, meaning creation & innovation —
                  was born out of the belief that users deserve better. My
                  mission is simple: design and build products where{" "}
                  <span className="font-semibold underline">
                    end-user experience comes first
                  </span>
                  , without ever compromising on{" "}
                  <span className="font-semibold italic">code quality </span>
                  or <span className="font-semibold italic">safety</span>.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          {/* <div className="mt-16 flex justify-center">
                    <Button>
                        Let&apos;s Build Something Together {<Hammer className="h- w-12"/>}
                    </Button>
                </div> */}
        </Container>
      </section>
      {/* CTA Section */}
      <section className="bag-grid bg-main text-main-foreground py-16 border-border border-t-4 ">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to bring your vision to life?
          </h2>
          <p className="text-black/70 sm:text-lg max-w-2xl mx-auto mb-8">
            Whether it’s crafting pixel-perfect interfaces or building scalable
            systems — let’s create something remarkable together.
          </p>
          <Button
            size="lg"
            className="text-lg p-6 flex items-center gap-2 mx-auto bg-secondary text-foreground"
          >
            Let&apos;s Build Something Together
            <Hammer className="h-8 w-8" />
          </Button>
        </Container>
      </section>
    </>
  );
};

export default About;
