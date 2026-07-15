"use client";

import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "@/lib/i18n/dictionary";

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
  const t = useTranslation();

  return (
    <section id="sobre-mi" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn delay={0.05} className="space-y-4 text-muted-foreground leading-relaxed">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-xl border p-6">
              <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
                {t.about.focus}
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
