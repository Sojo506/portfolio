import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/common/json-ld";
import { ProjectDetail } from "@/components/projects/project-detail";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/constants";
import { breadcrumbJsonLd, projectJsonLd } from "@/lib/structured-data";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

function getProjectNav(slug: string) {
  const index = projects.findIndex((project) => project.slug === slug);
  const previous = index > 0 ? projects[index - 1] : undefined;
  const next = index < projects.length - 1 ? projects[index + 1] : undefined;
  return { previous, next };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) return {};

  return {
    title: project.title,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const { previous, next } = getProjectNav(slug);

  return (
    <>
      <JsonLd
        data={[
          projectJsonLd(project),
          breadcrumbJsonLd([
            { name: "Inicio", url: siteConfig.siteUrl },
            { name: "Proyectos", url: `${siteConfig.siteUrl}/projects` },
            {
              name: project.title,
              url: `${siteConfig.siteUrl}/projects/${project.slug}`,
            },
          ]),
        ]}
      />
      <ProjectDetail project={project} previous={previous} next={next} />
    </>
  );
}
