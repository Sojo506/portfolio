import type { Metadata } from "next";
import { Contact } from "@/components/sections/contact";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contacta a Fabián Sojo para proyectos de desarrollo web, oportunidades laborales o consultoría. Escribe por correo o WhatsApp.",
};

export default function ContactPage() {
  return <Contact />;
}
