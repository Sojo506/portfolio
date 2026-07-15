"use client";

import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n/dictionary";
import type { Project } from "@/types/project";

export function ProjectStatusBadge({ status }: { status: Project["status"] }) {
  const t = useTranslation();

  return (
    <Badge variant="outline" className="font-normal">
      {t.projectStatus[status]}
    </Badge>
  );
}
