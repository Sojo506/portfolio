import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/project";

const statusLabels: Record<Project["status"], string> = {
  completed: "Completado",
  "in-progress": "En progreso",
  private: "Privado",
};

export function ProjectStatusBadge({ status }: { status: Project["status"] }) {
  return (
    <Badge variant="outline" className="font-normal">
      {statusLabels[status]}
    </Badge>
  );
}
