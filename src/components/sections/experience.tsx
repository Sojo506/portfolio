import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/data/experience";

function formatPeriod(start: string, end: string) {
  const format = (value: string) => {
    const [year, month] = value.split("-");
    const date = new Date(Number(year), Number(month) - 1);
    return date.toLocaleDateString("es-CR", { month: "long", year: "numeric" });
  };
  return `${format(start)} – ${format(end)}`;
}

export function Experience() {
  return (
    <section id="experiencia" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Experiencia"
            title="Trayectoria profesional"
          />
        </FadeIn>

        <div className="mt-12 space-y-10">
          {experience.map((item, index) => (
            <FadeIn key={item.company} delay={index * 0.08}>
              <div className="grid gap-2 border-l pl-6 sm:grid-cols-[220px_1fr] sm:gap-8">
                <div>
                  <p className="text-sm font-medium text-muted-foreground capitalize">
                    {formatPeriod(item.startDate, item.endDate)}
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.company}</h3>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground leading-relaxed">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility} className="flex gap-2">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-muted-foreground/50" />
                        {responsibility}
                      </li>
                    ))}
                  </ul>
                  {item.technologies.length > 0 ? (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
