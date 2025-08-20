"use client";
import GetInTouchButton from "@/components/contact-button";
import { Container } from "@/components/container";
import { MovingBorderStyle } from "@/components/moving-border";
import { ArrowUpRight, Layers, Monitor, Smartphone } from "lucide-react";
import ServicesCard from "@/components/services-card";
import ProcessSection from "@/components/process-timeline";
import Clientele from "@/components/clientel";
import ShowcaseCard from "@/components/showcase-card";
import TestimonialCard from "@/components/testimonial-card";

const Home = () => {
  const services = [
    {
      icon: <Monitor className="inline" />,
      title: "Custom Websites",
      description: "Websites tailored to your brand, built for performance",
    },
    {
      icon: <Layers className="inline" />,
      title: "UX & Interface Design",
      description: "Seamless, intuitive interfaces shaped for impact",
    },
    {
      icon: <Smartphone className="inline" />,
      title: "Web & Mobile Apps",
      description: "Engaging apps that perform across devices",
    },
  ];
  const showcases = [
    {
      title: "Compliance Management App",
      description: "Automated compliance tracking with AWS deployment.",
      image: "/images/compliance.png",
      link: "https://example.com",
    },
    {
      title: "Pixelsmith Creative Studio",
      description: "Brand design & digital presence revamp.",
      image: "/images/pixelsmith.png",
      link: "https://example.com",
    },
    {
      title: "ERP SaaS MVP",
      description: "AI-first ERP with plug-and-play modules.",
      image: "/images/erp.png",
      link: "https://example.com",
    },
    {
      title: "Healthcare Data Annotation",
      description: "Static site with Strapi CMS + GraphQL.",
      image: "/images/health.png",
      link: "https://example.com",
    },
  ];

  const testimonials = [
    {
      name: "Willis Cummings",
      role: "Forward Accountability Liaison",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "This library is complete garbage.",
    },
    {
      name: "Lillie Green",
      role: "Global Factors Producer",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "I don't believe there are people who will actually use this lmao.",
    },
  ];

  const testimonials2 = [
    {
      name: "Willis Cummings",
      role: "Forward Accountability Liaison",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "This library is complete garbage.",
    },
    {
      name: "Lillie Green",
      role: "Global Factors Producer",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "I don't believe there are people who will actually use this lmao.",
    },
    {
      name: "Willis Cummings",
      role: "Forward Accountability Liaison",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "This library is complete garbage.",
    },
    {
      name: "Lillie Green",
      role: "Global Factors Producer",
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "I don't believe there are people who will actually use this lmao.",
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
              We craft tailored solutions to help your brand stand out
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

      {/* Clientele/Showcase section */}
      <section className="pt-16 bg-secondary border-border border-t-4">
        <Container className="text-center">
          <h2 className="text-3xl font-bold">REAL WORK. REAL BRANDS.</h2>
          <p className="text-muted-foreground mt-2">
            From startups to growing businesses — here are some we&apos;ve
            partnered with
          </p>
        </Container>
        <Clientele />
        {/* Showcase */}
        <Container className="text-center">
          <h2 className="text-3xl font-bold">What We&apos;ve Built</h2>
          <p className="text-muted-foreground mt-2">
            Hand-picked projects that highlight how we bring ideas to life —
            bold, functional, and human-focused
          </p>
        </Container>
        <div className="grid grid-cols-1 md:grid-cols-2 border-border border-t-4 bg-background">
          {showcases.map((showcase, i) => (
            <div
              key={i}
              className={`p-8 border-border ${
                i % 2 === 0 ? "border-r-4 border-b-4" : "border-b-4"
              } ${i >= showcases.length - 2 ? "border-b-0" : ""}`}
            >
              <ShowcaseCard {...showcase} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-secondary-background">
        <Container>
          <h2 className="text-3xl font-bold text-center">
            What Our Clients Really Think (Spoiler: They&apos;re Happy)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 pt-16">
            <div className="group flex flex-col justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                {testimonials.map((t, i) => (
                  <TestimonialCard key={i+"1"} {...t} />
                ))}
              {/* </div> */}
            </div>
            <div className="group flex flex-col justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                {testimonials2.map((t, i) => (
                  <TestimonialCard key={i+"2"} {...t} />
                ))}
              {/* </div> */}
            </div>
            <div className="group flex flex-col justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
                {testimonials.map((t, i) => (
                  <TestimonialCard key={i+"3"} {...t} />
                ))}
              {/* </div> */}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Home;
