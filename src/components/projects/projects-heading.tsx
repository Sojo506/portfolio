"use client";

import { SectionHeading } from "@/components/common/section-heading";
import { useTranslation } from "@/lib/i18n/dictionary";

export function ProjectsHeading() {
  const t = useTranslation();

  return (
    <SectionHeading
      eyebrow={t.projectsPage.eyebrow}
      title={t.projectsPage.title}
      description={t.projectsPage.description}
    />
  );
}
