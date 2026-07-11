import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GithubIcon } from "@/components/common/icons";
import { ProjectStatusBadge } from "@/components/projects/project-status-badge";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border transition-colors hover:border-foreground/30">
      <Link
        href={`/projects/${project.slug}`}
        className="relative aspect-[16/9] w-full overflow-hidden bg-muted"
      >
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex items-start justify-between gap-3">
          <div>
            <Link
              href={`/projects/${project.slug}`}
              className="font-semibold tracking-tight hover:underline underline-offset-4"
            >
              {project.title}
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">{project.role}</p>
          </div>
          <ProjectStatusBadge status={project.status} />
        </div>

        <p className="text-sm text-muted-foreground leading-relaxed">
          {project.shortDescription}
        </p>

        {project.technologies.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="font-normal">
                {tech}
              </Badge>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-2">
          <Button asChild size="sm" variant="outline">
            <Link href={`/projects/${project.slug}`}>Ver caso de estudio</Link>
          </Button>
          {project.projectUrl ? (
            <Button asChild size="sm" variant="ghost" className="gap-1">
              <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                Sitio <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </Button>
          ) : null}
          {project.repositoryUrl ? (
            <Button asChild size="sm" variant="ghost" className="gap-1">
              <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-3.5 w-3.5" /> Repositorio
              </a>
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
