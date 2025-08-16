"use client";
import GetInTouchButton from "@/components/contact-button";
import { Container } from "@/components/container";
import { MovingBorderStyle } from "@/components/moving-border";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Home = () => {
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
              <MovingBorderStyle borderRadius="10px" className="inline-block bg-main text-3xl/12 sm:text-4xl/14 md:text-5xl/18 lg:text-6xl/22 text-foreground font-bold px-4 py-2 rounded-base border-1 border-gray-600 w-full;">PixelSmith</MovingBorderStyle>
              {/* <span className="text-foreground bg-main p-2 rounded-base border-2 border-gray-400">
                PixelSmith
              </span>{" "} */}
              Into Reality
            </h1>
            <p className="mt-4 text-base sm:text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto">
              We design digital experiences where every interaction feels seamless. From custom interfaces to powerful apps, PixelSmith shapes products that captivate users and deliver impact
            </p>
            <GetInTouchButton text="Design my Experience" className="mt-4" icon={<ArrowUpRight className="w-5 h-5"/>} />
          </div>
        </section>
      </Container>
      <Container>
        kajsbn
      </Container>
    </>
  );
};

export default Home;
