import type { Metadata } from "next";
import { ProjectFilter } from "@/components/projects/project-filter";
import { ProjectsHeading } from "@/components/projects/projects-heading";
import { JsonLd } from "@/components/common/json-ld";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Proyectos",
  description:
    "Proyectos web desarrollados por Fabián Sojo: marketplaces, aplicaciones full stack y soluciones a medida.",
  alternates: {
    canonical: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: siteConfig.siteUrl },
          { name: "Proyectos", url: `${siteConfig.siteUrl}/projects` },
        ])}
      />
      <ProjectsHeading />
      <div className="mt-12">
        <ProjectFilter projects={projects} />
      </div>
    </div>
  );
}
