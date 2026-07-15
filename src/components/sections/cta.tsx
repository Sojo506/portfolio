"use client";

import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/dictionary";

export function Cta() {
  const t = useTranslation();

  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {t.cta.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="#contacto">{t.cta.startConversation}</Link>
            </Button>
            {siteConfig.whatsappNumber ? (
              <Button asChild size="lg" variant="outline" className="gap-1.5">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  {t.cta.contactWhatsapp}
                </a>
              </Button>
            ) : null}
            <Button asChild size="lg" variant="ghost" className="gap-1.5">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                {t.cta.sendEmail}
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
