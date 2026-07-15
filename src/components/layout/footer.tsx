"use client";

import Link from "next/link";
import { ArrowUp, Code2, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/common/icons";
import { navItems, siteConfig } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/dictionary";

export function Footer() {
  const year = new Date().getFullYear();
  const t = useTranslation();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="text-sm font-semibold tracking-[0.14em] uppercase">
              {siteConfig.brand}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {siteConfig.name} — {t.footer.tagline}
            </p>
          </div>

          <nav className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap sm:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href={siteConfig.github} target="_blank" rel="noopener noreferrer">
                <GithubIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Instagram">
              <a href={siteConfig.instagram} target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="HackerRank">
              <a href={siteConfig.hackerRank} target="_blank" rel="noopener noreferrer">
                <Code2 className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label={t.footer.email}>
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {year} {siteConfig.brand}. {t.footer.rightsReserved}
            <span className="block sm:inline sm:ml-1">
              {t.footer.designedBy(siteConfig.name)}
            </span>
          </p>
          <Button
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="h-3.5 w-3.5" />
            {t.footer.backToTop}
          </Button>
        </div>
      </div>
    </footer>
  );
}
