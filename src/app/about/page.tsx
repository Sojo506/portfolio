import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { JsonLd } from "@/components/common/json-ld";
import { siteConfig } from "@/lib/constants";
import { breadcrumbJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Fabián Sojo: desarrollador Full Stack y estudiante de Ingeniería en Sistemas en Costa Rica, su experiencia, formación y certificaciones.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", url: siteConfig.siteUrl },
          { name: "Sobre mí", url: `${siteConfig.siteUrl}/about` },
        ])}
      />
      <About />
      <Experience />
      <Education />
      <Certifications />
    </>
  );
}
