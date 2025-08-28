import { projects } from "@/lib/projects";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/container";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return { title: "Project Not Found | PixelSmith" };

  return {
    title: `${project.title}`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 mark as Promise
}) {
  const { slug } = await params; // 👈 await it
  const project = projects.find((p) => p.slug === slug);

  if (!project) return notFound();

  return (
    <section className="bg-secondary-background bag-grid">
      <Container size="md">
        {/* Hero section */}
        <div className="mb-10">
          <Image
            src={project.image}
            alt={project.title}
            width={1200}
            height={600}
            className="rounded-base border-border border-b-5 border-r-5 border-t-1 border-l-1 object-cover w-full h-[400px]"
          />
          <h1 className="text-3xl font-bold mt-6">{project.title}</h1>
          <p className="text-foreground/70 mt-2">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.tech.map((tech, i) => (
              <Badge key={i}>{tech}</Badge>
            ))}
          </div>

          <Button asChild className="mt-6">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Live Project
            </a>
          </Button>
        </div>

        {/* Details section */}
        <div className="space-y-8">
          <section>
            <h2 className="text-xl font-semibold">Overview</h2>
            <p className="mt-2 text-foreground/70">
              {project.details.overview}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold">Role & Responsibilities</h2>
            <p className="mt-2 text-foreground/70">{project.details.role}</p>
          </section>

          <section className="grid md:grid-cols-2 gap-6">
            <div>
              <h2 className="text-xl font-semibold">Challenges</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-foreground/70">
                {project.details.challenges.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Solutions</h2>
              <ul className="list-disc pl-6 mt-2 space-y-2 text-foreground/70">
                {project.details.solutions.map((s, i) => (
                  <li key={i}>{s}</li>
                ))}
              </ul>
            </div>
          </section>

          <h2 className="text-xl font-semibold">Screenshots</h2>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            {project.details.screenshots.map((src, i) => (
              <div className="relative w-full aspect-[16/9]">
                <Image
                  key={i}
                  src={src}
                  alt={`${project.title} screenshot ${i + 1}`}
                  fill
                  className="rounded-base border-border border-b-5 border-r-5 border-t-1 border-l-1 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
