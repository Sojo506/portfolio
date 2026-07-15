"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { ProjectCard } from "@/components/projects/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/projects";
import { useTranslation } from "@/lib/i18n/dictionary";

export function FeaturedProjects() {
  const featured = projects.filter((project) => project.featured);
  const t = useTranslation();

  return (
    <section id="proyectos" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionHeading
            eyebrow={t.featuredProjects.eyebrow}
            title={t.featuredProjects.title}
            description={t.featuredProjects.description}
          />
          <Button asChild variant="outline" className="gap-1.5 shrink-0">
            <Link href="/projects">
              {t.featuredProjects.viewAll}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.08}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
