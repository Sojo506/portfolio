"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/lib/i18n/dictionary";
import type { Project } from "@/types/project";

export function ProjectFilter({ projects }: { projects: Project[] }) {
  const t = useTranslation();
  const technologies = useMemo(() => {
    const set = new Set<string>();
    for (const project of projects) {
      for (const tech of project.technologies) set.add(tech);
    }
    return Array.from(set).sort();
  }, [projects]);

  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  const filteredProjects = activeFilter
    ? projects.filter((project) => project.technologies.includes(activeFilter))
    : projects;

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={activeFilter === null ? "default" : "outline"}
          onClick={() => setActiveFilter(null)}
        >
          {t.projectFilter.all}
        </Button>
        {technologies.map((tech) => (
          <Button
            key={tech}
            size="sm"
            variant={activeFilter === tech ? "default" : "outline"}
            onClick={() => setActiveFilter(tech)}
          >
            {tech}
          </Button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      ) : (
        <p className="mt-10 text-sm text-muted-foreground">
          {t.projectFilter.noResults}
        </p>
      )}
    </div>
  );
}
