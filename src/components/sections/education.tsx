"use client";

import { GraduationCap } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { languages } from "@/data/languages";
import { useLanguage } from "@/components/common/language-provider";
import { useTranslation } from "@/lib/i18n/dictionary";
import { translateEducation, translateLanguages } from "@/lib/i18n/content";

export function Education() {
  const { locale } = useLanguage();
  const t = useTranslation();
  const educationItems = translateEducation(education, locale);
  const languageItems = translateLanguages(languages, locale);

  return (
    <section id="educacion" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading eyebrow={t.education.eyebrow} title={t.education.title} />
        </FadeIn>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn delay={0.05} className="space-y-6">
            {educationItems.map((item) => (
              <div key={`${item.institution}-${item.program}`} className="flex gap-4">
                <GraduationCap className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-semibold">{item.institution}</h3>
                    {item.status === "in-progress" ? (
                      <Badge variant="outline" className="font-normal">
                        {t.education.inProgress}
                      </Badge>
                    ) : null}
                  </div>
                  <p className="text-sm text-muted-foreground">{item.program}</p>
                  {item.period ? (
                    <p className="mt-0.5 text-xs text-muted-foreground">{item.period}</p>
                  ) : null}
                </div>
              </div>
            ))}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-xl border p-6">
              <p className="text-xs font-medium tracking-[0.1em] text-muted-foreground uppercase">
                {t.education.languages}
              </p>
              <div className="mt-4 space-y-3">
                {languageItems.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between text-sm"
                  >
                    <span className="font-medium">{language.name}</span>
                    <span className="text-muted-foreground">{language.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
