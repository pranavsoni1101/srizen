import GetInTouchButton from "@/components/contact-button";
import { Container } from "@/components/container";
import { MovingBorderStyle } from "@/components/moving-border";
import { ArrowUpRight, Layers, Monitor, Smartphone } from "lucide-react";
import ServicesCard from "@/components/services-card";
import ProcessSection from "@/components/process-timeline";
import Clientele from "@/components/clientel";
import ShowcaseCard from "@/components/showcase-card";
import TestimonialCard from "@/components/testimonial-card";
import ContactForm from "@/components/contact-form";
import { PointerHighlight } from "@/components/ui/pointer-highlight";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Srizen – From Vision Through Srizen Into Reality",
  description:
    "Srizen transforms ideas into seamless digital experiences. We design and build custom websites, intuitive apps, and impactful interfaces — where every pixel matters.",
  keywords: [
    "Srizen",
    "web development agency",
    "React development",
    "Next.js websites",
    "UI UX design",
    "frontend development",
    "backend development",
    "mobile apps",
    "custom web apps",
    "digital experiences",
  ],
  openGraph: {
    title: "Srizen – Crafting Seamless Digital Experiences",
    description:
      "From startups to growing businesses, Srizen builds websites, apps, and experiences that captivate users and deliver measurable impact.",
    url: "https://srizen.com", // update with your real domain
    siteName: "Srizen",
    images: [
      {
        url: "/og-image.png", // place an image in /public for OG
        width: 1200,
        height: 630,
        alt: "Srizen Web Development & Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Srizen – Web Development & Design Agency",
    description:
      "We design and build custom websites, mobile apps, and seamless digital products that deliver impact.",
    images: ["/og-image.png"],
  },
};
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
      title: "Pranav Soni Portfolio",
      description:
        "A personal portfolio built with Next.js and deployed on Vercel, showcasing eye for UI detail and responsiveness.",
      image: "pranav-soni-portfolio.png",
      link: "/showcase/pranavsoni-portfolio",
    },
    {
      title: "Srizen Creative Studio",
      description: "Brand design & digital presence revamp.",
      image:
        "https://images.pexels.com/photos/6538918/pexels-photo-6538918.jpeg",
      link: "https://example.com",
    },
    {
      title: "ERP SaaS MVP",
      description: "AI-first ERP with plug-and-play modules.",
      image:
        "https://images.pexels.com/photos/6538918/pexels-photo-6538918.jpeg",
      link: "https://example.com",
    },
    {
      title: "Healthcare Data Annotation",
      description: "Static site with Strapi CMS + GraphQL.",
      image:
        "https://images.pexels.com/photos/6538918/pexels-photo-6538918.jpeg",
      link: "https://example.com",
    },
  ];

  const testimonials = [
    {
      name: "Willis Cummings",
      role: "Forward Accountability Liaison",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "This library is complete garbage.",
    },
    {
      name: "Lillie Green",
      role: "Global Factors Producer",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "I don't believe there are people who will actually use this lmao.",
    },
  ];

  const testimonials2 = [
    {
      name: "Willis Cummings",
      role: "Forward Accountability Liaison",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "This library is complete garbage.",
    },
    {
      name: "Lillie Green",
      role: "Global Factors Producer",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "I don't believe there are people who will actually use this lmao.",
    },
    {
      name: "Willis Cummings",
      role: "Forward Accountability Liaison",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?q=80&w=1143&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial: "This library is complete garbage.",
    },
    {
      name: "Lillie Green",
      role: "Global Factors Producer",
      image:
        "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      testimonial:
        "I don't believe there are people who will actually use this lmao.",
    },
  ];
  return (
    <>
      <div className="bag-grid">
        <Container className="min-h-[calc(100vh-76px)] sm:min-h-[calc(100vh-72px)] flex  items-center justify-center">
          <section className="flex  items-center justify-center">
            <div className="text-center">
              <h1
                className="scroll-m-20 
             text-4xl/12 sm:text-5xl/14 md:text-6xl/18 lg:text-7xl/22  
             font-bold tracking-tight 
             max-w-4xl mx-auto text-balance"
              >
                From Vision Through{" "}
                {/* <MovingBorderStyle
                borderRadius="10px"
                className="inline-block bg-main text-3xl/12 sm:text-4xl/14 md:text-5xl/18 lg:text-6xl/22 text-foreground font-bold px-4 py-2 rounded-base border-1 border-gray-600 w-full capitalize"
              >
                Srizen
              </MovingBorderStyle> */}
                <PointerHighlight
                  containerClassName="inline-block mr-1"
                  rectangleClassName="bg-main/60"
                  pointerClassName="text-main"
                >
                  <span className="relative px-4 z-40">Srizen</span>
                </PointerHighlight>
                {/* <span className="text-foreground bg-main p-2 rounded-base border-2 border-gray-400">
                Srizen
              </span>{" "} */}
                Into Reality
              </h1>
              <p className="mt-6 text-base sm:text-lg md:text-xl text-foreground opacity-80 max-w-4xl mx-auto">
                We design digital experiences where every interaction feels
                seamless. From custom interfaces to powerful apps, Srizen
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
      </div>
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
      <section className="bg-grid min-h-screen pt-16 bg-secondary border-border border-t-4">
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
              className={`bag-grid p-8 border-border ${
                i % 2 === 0 ? "border-r-4 border-b-4" : "border-b-4"
              } ${i >= showcases.length - 2 ? "border-b-0" : ""}`}
            >
              <ShowcaseCard {...showcase} />
            </div>
          ))}
        </div>
      </section>

      {/* Testimonial Section */}
      <section className=" py-16 bg-secondary-background">
        <Container>
          <h2 className="text-3xl font-bold text-center">
            What Our Clients Really Think (Spoiler: They&apos;re Happy)
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8 pt-16">
            <div className="group flex flex-col justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
              {testimonials.map((t, i) => (
                <TestimonialCard key={i + "1"} {...t} />
              ))}
              {/* </div> */}
            </div>
            <div className="group flex flex-col justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
              {testimonials2.map((t, i) => (
                <TestimonialCard key={i + "2"} {...t} />
              ))}
              {/* </div> */}
            </div>
            <div className="group flex flex-col justify-center">
              {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
              {testimonials.map((t, i) => (
                <TestimonialCard key={i + "3"} {...t} />
              ))}
              {/* </div> */}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="bag-grid py-16 bg-main border-border border-t-4">
        <Container>
          <div className="text-center text-black ">
            <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
            <p className="mt-2">
              Supercharge your workflow with our neo-brutalist components. Build
              faster, stay consistent, and ship beautiful apps.
            </p>
          </div>
          <ContactForm />
        </Container>
      </section>
    </>
  );
};

export default Home;
