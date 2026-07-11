import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/common/fade-in";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export function Cta() {
  return (
    <section className="border-b bg-muted/30">
      <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
            ¿Tienes una idea que quieres convertir en una solución digital?
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Estoy disponible para colaborar en proyectos de desarrollo web,
            oportunidades profesionales y soluciones digitales construidas
            con atención al detalle.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg">
              <Link href="#contacto">Iniciar una conversación</Link>
            </Button>
            {siteConfig.whatsappNumber ? (
              <Button asChild size="lg" variant="outline" className="gap-1.5">
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Contactar por WhatsApp
                </a>
              </Button>
            ) : null}
            <Button asChild size="lg" variant="ghost" className="gap-1.5">
              <a href={`mailto:${siteConfig.email}`}>
                <Mail className="h-4 w-4" />
                Enviar correo
              </a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
