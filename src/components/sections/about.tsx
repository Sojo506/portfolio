import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";

const indicators = [
  "Full Stack Development",
  "Clean Code",
  "SOLID",
  "Responsive Design",
  "Database Design",
  "Agile Methodologies",
  "AI-Assisted Development",
  "Continuous Learning",
];

export function About() {
  return (
    <section id="sobre-mi" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow="Sobre mí" title="Desarrollador Full Stack" />
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn delay={0.05} className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Soy Fabián Sojo, desarrollador Full Stack con base en San José,
              Costa Rica, y estudiante de Bachillerato en Ingeniería en
              Sistemas en la Universidad Fidélitas. Tengo experiencia
              creando aplicaciones web dinámicas y escalables, desde el
              diseño de la base de datos hasta la interfaz final.
            </p>
            <p>
              Mi enfoque está en construir productos web modernos,
              mantenibles y centrados en resolver necesidades reales,
              cuidando tanto la arquitectura del backend como la experiencia
              de quien usa el producto.
            </p>
            <p>
              Tengo experiencia aplicando principios SOLID en .NET,
              estructurando proyectos en capas (Abstract, DataAccess,
              BusinessLogic y UI), cada una organizada en carpetas con una
              única responsabilidad, lo que facilita el mantenimiento y la
              escalabilidad del código a largo plazo.
            </p>
            <p>
              También incorporo herramientas de inteligencia artificial como
              Claude Code y Codex dentro de mi flujo de desarrollo, lo que me
              permite trabajar de forma más eficiente sin perder rigor
              técnico ni control sobre las decisiones de arquitectura.
            </p>
            <p>
              Mis intereses profesionales incluyen el desarrollo Full Stack,
              la arquitectura de software, el diseño de bases de datos, la
              experiencia de usuario y la mejora continua.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-xl border p-6">
              <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
                Enfoque
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {indicators.map((item) => (
                  <Badge key={item} variant="secondary" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
