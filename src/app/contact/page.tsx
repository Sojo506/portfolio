import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";
import { JsonLd } from "@/components/common/json-ld";
import { siteConfig } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Fabián Sojo para proyectos de desarrollo web, oportunidades laborales o consultoría. Escribe por correo o WhatsApp.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: siteConfig.siteUrl },
          { name: "Contacto", url: `${siteConfig.siteUrl}/contact` },
        ])}
      />
      <Contact />
    </>
  );
}
