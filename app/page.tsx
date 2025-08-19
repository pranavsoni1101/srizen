"use client";
import GetInTouchButton from "@/components/contact-button";
import { Container } from "@/components/container";
import { MovingBorderStyle } from "@/components/moving-border";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Layers,
  Monitor,
  Smartphone,
  Lightbulb,
  Palette,
  Rocket,
} from "lucide-react";
import ServicesCard from "@/components/services-card";
import ProcessSection from "@/components/process-timeline";
import Clientele from "@/components/clientel";

const Home = () => {
  const services = [
    {
      icon: <Monitor className="inline" />,
      title: "Custom Websites",
      description: "Websites tailored to your brand, built for performance.",
    },
    {
      icon: <Layers className="inline" />,
      title: "UX & Interface Design",
      description: "Seamless, intuitive interfaces shaped for impact.",
    },
    {
      icon: <Smartphone className="inline" />,
      title: "Web & Mobile Apps",
      description: "Engaging apps that perform across devices.",
    },
  ];
  return (
    <>
      <Container className="min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-72px)] flex  items-center justify-center">
        <section className="flex  items-center justify-center">
          <div className="text-center">
            <h1
              className="scroll-m-20 
             text-3xl/12 sm:text-4xl/14 md:text-5xl/18 lg:text-6xl  
             font-bold tracking-tight 
             max-w-4xl mx-auto text-balance"
            >
              From Vision Through{" "}
              <MovingBorderStyle
                borderRadius="10px"
                className="inline-block bg-main text-3xl/12 sm:text-4xl/14 md:text-5xl/18 lg:text-6xl/22 text-foreground font-bold px-4 py-2 rounded-base border-1 border-gray-600 w-full capitalize"
              >
                PixelSmith
              </MovingBorderStyle>
              {/* <span className="text-foreground bg-main p-2 rounded-base border-2 border-gray-400">
                PixelSmith
              </span>{" "} */}
              Into Reality
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-foreground opacity-80 max-w-4xl mx-auto">
              We design digital experiences where every interaction feels
              seamless. From custom interfaces to powerful apps, PixelSmith
              shapes products that captivate users and deliver impact
            </p>
            <GetInTouchButton
              text="Design my Experience"
              className="mt-4"
              icon={<ArrowUpRight className="w-5 h-5" />}
            />
          </div>
        </section>
      </Container>
      {/* Services Section */}
      <section className="py-16 bg-secondary border-border border-t-4">
        <Container>
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Our Services</h2>
            <p className="text-muted-foreground mt-2">
              We craft tailored solutions to help your brand stand out.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {services.map((service, id) => (
              <ServicesCard
                key={id}
                title={service.title}
                icon={service.icon}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </section>

      {/* Process Section */}
      <section>
        <ProcessSection />
      </section>

      {/* Showcase section */}
      <section className="py-16 bg-secondary border-border border-t-4">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">REAL WORK. REAL BRANDS.</h2>
          <p className="text-muted-foreground mt-2">
            From startups to growing businesses — here are some we&apos;ve partnered with.
          </p>
        </Container>
        {/* <Container> */}
        <Clientele />
        {/* </Container> */}
      </section>
    </>
  );
};

export default Home;
