"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { siteConfig } from "@/lib/constants";
import { useTranslation } from "@/lib/i18n/dictionary";

const ContactForm = dynamic(() =>
  import("@/components/contact/contact-form").then((mod) => mod.ContactForm),
);

function ContactFormSkeleton() {
  return (
    <div className="space-y-6" aria-hidden="true">
      <div className="grid gap-6 sm:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-2">
            <div className="h-4 w-20 animate-pulse rounded bg-muted" />
            <div className="h-9 w-full animate-pulse rounded-md bg-muted" />
          </div>
        ))}
      </div>
      <div className="h-24 w-full animate-pulse rounded-md bg-muted" />
      <div className="h-9 w-32 animate-pulse rounded-md bg-muted" />
    </div>
  );
}

export function Contact() {
  const t = useTranslation();
  const formAreaRef = useRef<HTMLDivElement>(null);
  const [formVisible, setFormVisible] = useState(false);

  useEffect(() => {
    const node = formAreaRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFormVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "400px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contacto">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow={t.contact.eyebrow}
            title={t.contact.title}
            description={t.contact.description}
          />
        </FadeIn>

        <div className="mt-12 grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <FadeIn delay={0.05} className="space-y-6">
            <div className="flex items-start gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{t.contact.email}</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">{t.contact.location}</p>
                <p className="text-sm text-muted-foreground">{siteConfig.location}</p>
              </div>
            </div>
            {siteConfig.whatsappNumber ? (
              <div className="flex items-start gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium">{t.contact.whatsapp}</p>
                  <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    {t.contact.whatsappCta}
                  </a>
                </div>
              </div>
            ) : null}
          </FadeIn>

          <FadeIn delay={0.1}>
            <div ref={formAreaRef} className="rounded-xl border p-6 sm:p-8">
              {formVisible ? <ContactForm /> : <ContactFormSkeleton />}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
