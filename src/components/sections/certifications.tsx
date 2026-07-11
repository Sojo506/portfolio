"use client";

import { useState } from "react";
import { Award, ExternalLink } from "lucide-react";
import { SectionHeading } from "@/components/common/section-heading";
import { FadeIn } from "@/components/common/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { certifications } from "@/data/certifications";

const INITIAL_COUNT = 4;

export function Certifications() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? certifications : certifications.slice(0, INITIAL_COUNT);

  return (
    <section id="certificaciones" className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <SectionHeading
            eyebrow="Certificaciones"
            title="Certificaciones e insignias"
            description="Formación complementaria en agilidad, bases de datos, Java/Spring y fundamentos de tecnología."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {visible.map((item) => (
            <FadeIn key={item.name} delay={0.03}>
              <div className="flex items-start gap-3 rounded-xl border p-5">
                <Award className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="text-sm font-medium">{item.name}</p>
                    <Badge variant="outline" className="font-normal">
                      {item.type === "badge" ? "Insignia" : "Certificación"}
                    </Badge>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {item.organization}
                    {item.year ? ` · ${item.year}` : ""}
                  </p>
                  {item.verificationUrl ? (
                    <Button
                      asChild
                      variant="link"
                      size="sm"
                      className="mt-1 h-auto gap-1 px-0"
                    >
                      <a href={item.verificationUrl} target="_blank" rel="noopener noreferrer">
                        Ver credencial <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {certifications.length > INITIAL_COUNT ? (
          <div className="mt-8">
            <Button variant="outline" onClick={() => setExpanded((prev) => !prev)}>
              {expanded ? "Ver menos" : `Ver todas (${certifications.length})`}
            </Button>
          </div>
        ) : null}
      </div>
    </section>
  );
}
