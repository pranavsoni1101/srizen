import type { Metadata } from "next";
import ContactSection from "@/components/contact-section";
import { Container } from "@/components/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Srizen — a remote-first design and development studio crafting pixel-perfect experiences. Whether it's a project idea, collaboration, or just a hello, we'd love to hear from you.",
  keywords: [
    "Srizen contact",
    "design studio contact",
    "web development contact",
    "hire Srizen",
    "UI UX agency contact",
    "remote design team",
  ],
  alternates: {
    canonical: "https://srizen.com/contact",
  },
  openGraph: {
    title: "Contact Srizen",
    description:
      "Have a project in mind? Reach out to Srizen — a remote-first studio blending design & development into seamless digital experiences.",
    url: "https://srizen.com/contact",
    siteName: "Srizen",
    images: [
      {
        url: "/og-image.png",
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
      "We're remote-first and always a message away. Let's collaborate to bring your vision into reality.",
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Srizen",
  url: "https://srizen.com/contact",
  description:
    "Get in touch with Srizen — a remote-first design and development studio.",
  mainEntity: {
    "@type": "Organization",
    name: "Srizen",
    url: "https://srizen.com",
    email: "hello@srizen.com",
    telephone: "+61432670014",
    sameAs: ["https://linkedin.com/company/srizen"],
  },
};

const FAQ_ITEMS = [
  {
    q: "How long does a typical project take?",
    a: "Most projects run between 4–12 weeks depending on scope. We'll give you a clear timeline after the discovery call.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We're remote-first and have worked with clients across India and Australia. Time zones haven't stopped us yet.",
  },
  {
    q: "What does your process look like?",
    a: "Discover → Design → Develop → Launch. We keep you in the loop at every stage with regular check-ins and transparent delivery.",
  },
  {
    q: "Can I see examples of your work?",
    a: (
      <>
        Absolutely —{" "}
        <Link href="/showcase" className="underline hover:opacity-70">
          head to our Showcase page
        </Link>{" "}
        or ask us to share relevant case studies on the call.
      </>
    ),
  },
];

export default function Contact() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-secondary-background">
        <div className="py-6 text-center bg-background text-foreground border-border border-b-4 bag-grid">
          <Container>
            <h1 className="scroll-m-20 text-3xl sm:text-4xl md:text-5xl lg:text-6xl/18 font-bold tracking-tight mx-auto text-balance italic max-w-3xl">
              Contact Srizen — Let&apos;s Build Together
            </h1>
          </Container>
        </div>
      </section>

      {/* Two-column contact section */}
      <section className="bg-secondary-background text-foreground py-16 sm:py-20">
        <Container>
          <ContactSection />
        </Container>
      </section>

      {/* FAQ — permanently dark */}
      <section className="dark bg-background text-foreground border-border border-t-4 py-16 sm:py-20">
        <Container size="lg">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Container>
      </section>
    </>
  );
}
