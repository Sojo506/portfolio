"use client";

import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { technologies } from "@/data/technologies";
import { useLanguage } from "@/components/common/language-provider";
import { useTranslation } from "@/lib/i18n/dictionary";
import { translateTechnologies } from "@/lib/i18n/content";

export function Technologies() {
  const { locale } = useLanguage();
  const t = useTranslation();
  const groups = translateTechnologies(technologies, locale);

  return (
    <section id="tecnologias" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={t.technologies.eyebrow}
            title={t.technologies.title}
          />
        </FadeIn>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, index) => (
            <FadeIn key={group.category} delay={index * 0.05}>
              <div className="h-full rounded-xl border p-6">
                <p className="text-sm font-medium">{group.category}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-3 py-1 text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
