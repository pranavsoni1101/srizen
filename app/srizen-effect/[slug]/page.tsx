import { caseStudies } from "@/lib/caseStudies";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/container";
import { Metadata } from "next";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return { title: "Case Study Not Found" };

  return {
    title: `${cs.title} | The Srizen Effect`,
    description: cs.description,
    openGraph: {
      images: [cs.image],
    },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = caseStudies.find((c) => c.slug === slug);

  if (!cs) return notFound();

  return (
    <section className="bg-secondary-background py-12 bag-grid">
      <Container >
        {/* Hero */}
        <div className="mb-10 text-center">
          <Image
            src={cs.image}
            alt={cs.title}
            width={1200}
            height={600}
            className="rounded-base border-border border-b-5 border-r-5 border-t-1 border-l-1 object-cover w-full h-[400px]"
            priority
          />
          <h1 className="text-3xl font-bold mt-6">{cs.title}</h1>
          <p className="text-black/70 mt-2">{cs.description}</p>

          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {cs.tags.map((tag, i) => (
              <Badge key={i}>{tag}</Badge>
            ))}
          </div>
        </div>

        {/* Problem → Approach → Results */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card>
            <CardHeader>
              <CardTitle>Problem</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-black/70">{cs.details.problem}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Srizen’s Approach</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 text-black/70 space-y-1">
                {cs.details.approach.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Results</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-4 text-black/70 space-y-1">
                {cs.details.results.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Insight Box */}
        <div className="p-6 rounded-base mt-12 border-l-4 border-border bg-background">
          <CardHeader>
            <CardTitle className="text-foreground">Key Insight 💡</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-foreground/70">{cs.details.insights}</p>
          </CardContent>
        </div>

        {/* Visual Proof */}
        {cs.details.screenshots.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold">Visual Proof</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              {cs.details.screenshots.map((src, i) => (
                <div key={i} className="relative w-full aspect-[16/9]">
                  <Image
                    src={src}
                    alt={`${cs.title} screenshot ${i + 1}`}
                    fill
                    className="rounded-base border-border border-b-5 border-r-5 border-t-1 border-l-1 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
