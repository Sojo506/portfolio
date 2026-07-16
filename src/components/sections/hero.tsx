"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/common/icons";
import { useLanguage } from "@/components/common/language-provider";
import { siteConfig } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/dictionary";
import { cn } from "@/lib/utils";

const entrance = "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-4 motion-safe:fill-mode-both motion-safe:duration-500 motion-safe:ease-out";

export function Hero() {
  const t = useTranslation();
  const { locale } = useLanguage();

  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <p
            className={cn(
              "text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase",
              entrance,
            )}
          >
            {t.hero.tag}
          </p>

          {/* Not animated: this is the LCP element — must paint immediately, not wait on a CSS/JS entrance transition. */}
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>

          <p
            className={cn(
              "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
              entrance,
              "motion-safe:delay-75",
            )}
          >
            {t.hero.description}
          </p>

          <div
            className={cn(
              "mt-9 flex flex-wrap items-center gap-3",
              entrance,
              "motion-safe:delay-150",
            )}
          >
            <Button asChild size="lg" className="gap-1.5">
              <Link href="/projects">
                {t.hero.viewProjects}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contacto">{t.hero.contactMe}</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={siteConfig.cvUrl[locale]} download>
                {t.hero.downloadCv}
              </a>
            </Button>
          </div>

          <div
            className={cn(
              "mt-10 flex items-center gap-4 text-muted-foreground",
              entrance,
              "motion-safe:delay-200",
            )}
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="transition-colors hover:text-foreground"
            >
              <InstagramIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label={t.hero.email}
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div
          className={cn(
            "relative mx-auto w-full max-w-sm rounded-xl border bg-card/60 p-6 shadow-sm backdrop-blur-sm",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-6 motion-safe:fill-mode-both motion-safe:duration-700 motion-safe:delay-200 motion-safe:ease-out",
          )}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          </div>

          <div className="mt-5 space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
            <p className="text-muted-foreground">const developer = {"{"}</p>
            <p className="pl-4">
              name: <span className="text-foreground">&quot;Fabián Sojo&quot;</span>,
            </p>
            <p className="pl-4">
              role: <span className="text-foreground">&quot;Full Stack Developer&quot;</span>,
            </p>
            <p className="pl-4">
              location: <span className="text-foreground">&quot;Costa Rica&quot;</span>,
            </p>
            <p className="pl-4">
              focus: [<span className="text-foreground">&quot;clean code&quot;</span>,{" "}
              <span className="text-foreground">&quot;scalability&quot;</span>],
            </p>
            <p className="pl-4">
              available:{" "}
              <span className="text-foreground">true</span>,
            </p>
            <p className="text-muted-foreground">{"}"};</p>
          </div>

          <div className="mt-6 flex items-center gap-2 border-t pt-4 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            {t.hero.available}
          </div>
        </div>
      </div>
    </section>
  );
}
