import type { Metadata } from "next";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";

export const metadata: Metadata = {
  title: "Sobre mí",
  description:
    "Conoce a Fabián Sojo: desarrollador Full Stack y estudiante de Ingeniería en Sistemas en Costa Rica, su experiencia, formación y certificaciones.",
};

export default function AboutPage() {
  return (
    <>
      <About />
      <Experience />
      <Education />
      <Certifications />
    </>
  );
}
