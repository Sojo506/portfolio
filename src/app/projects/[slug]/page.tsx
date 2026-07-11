import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/common/icons";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import { projects } from "@/data/projects";
import type { Project } from "@/types/project";

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
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage],
    },
  };
}

const detailSections: Array<{
  key: keyof Project;
  label: string;
}> = [
  { key: "contributions", label: "Principales aportes" },
  { key: "challenges", label: "Retos encontrados" },
  { key: "solutions", label: "Soluciones aplicadas" },
  { key: "results", label: "Resultados" },
];

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) notFound();

  const { previous, next } = getProjectNav(slug);

  return (
    <article className="mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Todos los proyectos
      </Link>

      <header className="mt-6">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <ProjectStatusBadge status={project.status} />
        </div>
        <p className="mt-3 text-muted-foreground">{project.role}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="font-normal">
              {tech}
            </Badge>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.projectUrl ? (
            <Button asChild size="sm" className="gap-1.5">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                Visitar sitio <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          ) : null}
          {project.repositoryUrl ? (
            <Button asChild size="sm" variant="outline" className="gap-1.5">
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-3.5 w-3.5" /> Repositorio
              </a>
            </Button>
          ) : null}
        </div>
      </header>

      <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden rounded-xl border bg-muted">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 896px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-10 space-y-4 leading-relaxed text-muted-foreground">
        <p>{project.fullDescription}</p>
      </div>

      <div className="mt-12 space-y-10">
        {detailSections.map(({ key, label }) => {
          const items = project[key] as string[] | undefined;
          if (!items || items.length === 0) return null;

          return (
            <div key={key}>
              <h2 className="text-lg font-semibold tracking-tight">{label}</h2>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                {items.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {project.gallery.length > 1 ? (
        <div className="mt-12">
          <h2 className="text-lg font-semibold tracking-tight">Galería</h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={image + index}
                className="relative aspect-[16/10] overflow-hidden rounded-lg border bg-muted"
              >
                <Image
                  src={image}
                  alt={`${project.title} — captura ${index + 1}`}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      ) : null}

      <nav className="mt-16 grid gap-4 border-t pt-8 sm:grid-cols-2">
        {previous ? (
          <Link
            href={`/projects/${previous.slug}`}
            className="group flex flex-col rounded-lg border p-4 transition-colors hover:border-foreground/30"
          >
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <ArrowLeft className="h-3.5 w-3.5" />
              Proyecto anterior
            </span>
            <span className="mt-1 font-medium">{previous.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link
            href={`/projects/${next.slug}`}
            className="group flex flex-col rounded-lg border p-4 text-right transition-colors hover:border-foreground/30"
          >
            <span className="inline-flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
              Siguiente proyecto
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            <span className="mt-1 font-medium">{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </article>
  );
}
