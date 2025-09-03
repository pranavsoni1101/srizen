import type { Metadata } from "next";
import ContactForm from "@/components/contact-form";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Hammer,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Srizen — a remote-first design and development studio crafting pixel-perfect experiences. Whether it’s a project idea, collaboration, or just a hello, we’d love to hear from you.",
  keywords: [
    "Srizen contact",
    "design studio contact",
    "web development contact",
    "hire Srizen",
    "UI UX agency contact",
    "remote design team",
  ],
  openGraph: {
    title: "Contact Srizen",
    description:
      "Have a project in mind? Reach out to Srizen — a remote-first studio blending design & development into seamless digital experiences.",
    url: "https://srizen.com/contact",
    siteName: "Srizen",
    images: [
      {
        url: "https://srizen.com/contact-banner.png", // (replace with your actual OG image)
        width: 1200,
        height: 630,
        alt: "Contact Srizen",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Srizen",
    description:
      "We’re remote-first and always a message away. Let’s collaborate to forge your vision into reality.",
    images: ["https://srizen.com/og/contact-banner.png"],
  },
};

export default function Contact() {
  return (
    <>
      <section className="bg-secondary-background">
        <div className="py-6 text-center bg-background text-foreground border-border border-b-4 bag-grid">
          <Container>
            <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl/18 font-bold tracking-tight mx-auto text-balance italic max-w-3xl">
              Get in Touch!
            </h1>
          </Container>
        </div>
      </section>

      <section className="min-h-screen bg-secondary-background text-foreground py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-foreground/70 text-lg">
              Have a project in mind? Or just want to say hello? Fill out the
              form below and we&apos;ll get back to you soon.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact Form */}
            <div className="h-full">
              <ContactForm />
            </div>

            {/* Info Cards */}
            <div className="lg:mt-8 w-full my-auto space-y-6">
              {/* First Card: Email, Phone, Address */}
              <Card className="bg-background text-foreground max-w-full shadow-lg rounded-2xl">
                <CardContent className="space-y-4">
                  <div className="relative w-full max-w-md mx-auto rounded-xl overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019214456306!2d-122.41941528468126!3d37.77492977975927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c5b6c5bb3%3A0xcca3e7f7c9344ed7!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1692872189711!5m2!1sen!2sin"
                      loading="lazy"
                      className="w-full h-full border-0"
                    ></iframe>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
                      <h2 className="text-2xl font-bold">
                        We&apos;re Everywhere 🌍
                      </h2>
                      <p className="mt-2 text-base">
                        Remote-first, so our{" "}
                        <span className="font-semibold">HQ</span> is still
                        finding its spot on the map 😉
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Second Card: Socials with Icons */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-main text-black max-w-full shadow-lg rounded-2xl">
                  <CardContent className=" my-auto mx-auto p-4 space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5" />
                      <a
                        href="mailto:hello@Srizen.com"
                        className="hover:underline"
                      >
                        hello@Srizen.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5" />
                      <a href="tel:+917588255113" className="hover:underline">
                        +91 75882 55113
                      </a>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-main text-black max-w-full shadow-lg rounded-2xl">
                  <CardContent className="mx-auto my-auto p-12 space-y-4">
                    <div className="flex items-center gap-3">
                      <Linkedin className="w-5 h-5" />
                      <a
                        href="https://linkedin.com/company/Srizen"
                        className="hover:underline"
                      >
                        LinkedIn
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <Twitter className="w-5 h-5" />
                      <a
                        href="https://twitter.com/Srizen"
                        className="hover:underline"
                      >
                        Twitter
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bag-grid bg-main text-main-foreground py-16 border-border border-t-4">
        <Container className="text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to forge your vision to life?
          </h2>
          <p className="text-black/70 sm:text-lg max-w-2xl mx-auto mb-8">
            Whether it&apos;s crafting pixel-perfect interfaces or building
            scalable systems — let&apos;s create something remarkable together.
          </p>
          <Link href="https://calendly.com/pranavsoni1101/30min" passHref>
            <Button
              size="lg"
              className="text-lg p-6 flex items-center gap-2 mx-auto bg-secondary text-foreground"
            >
              Claim Your Free Consultation
              <Hammer className="h-8 w-8" />
            </Button>
          </Link>
        </Container>
      </section>
    </>
  );
}
