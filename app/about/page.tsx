import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Paintbrush, Shield, Sparkles } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="bg-secondary-background pb-8">
        <div className="py-6 text-center bg-background text-foreground  border-border border-b-4">
          <Container>
            <h1
              className="scroll-m-20 
             text-3xl sm:text-4xl md:text-5xl lg:text-6xl  
             font-bold tracking-tight 
            mx-auto text-balance italic"
            >
              Forging Experiences, Pixel by Pixel
            </h1>
          </Container>
        </div>
        <Container className="bg-secondaryy-background">
          <p className="mt-4 mb-10 text-base sm:text-lg md:text-xl text-foreground/70 max-w-4xl mx-auto text-center">
            At Pixel Smith, we believe technology should feel effortless. Every
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
                {/* <Image
                  className="rounded-base "
                  width={500}
                  height={500}
                  alt="Pranav Soni's image"
                  src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                /> */}
              </div>
              <div className="my-auto">
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  I&apos;m <span className="font-bold">Pranav Soni</span> — a
                  full-stack developer who was tired of clunky, frustrating user
                  interfaces.
                </p>
                <p className="mt-4 text-base sm:text-lg text-foreground/80 leading-relaxed">
                  <span className="font-bold italic">PixelSmith</span> was born
                  out of the belief that users deserve better. My mission is
                  simple: design and build products where{" "}
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
                <div className="mt-16 flex justify-center">
                    <Button>
                        Let&apos;s Build Something Together
                    </Button>
                </div>
        </Container>
      </section>
    </>
  );
};

export default About;
