export type Certification = {
  name: string;
  organization: string;
  year?: number;
  imageUrl?: string;
  verificationUrl?: string;
  credentialId?: string;
  type: "certification" | "badge";
};

export const certifications: Certification[] = [
  {
    name: "Scrum Fundamentals Certified",
    organization: "SCRUMstudy",
    type: "certification",
  },
  {
    name: "Fundamentos de Agilidad",
    organization: "LinkedIn Learning",
    type: "certification",
  },
  {
    name: "Introducción a SQL con MySQL",
    organization: "Alura",
    type: "certification",
  },
  {
    name: "Programación Orientada a Objetos en Java",
    organization: "Alura",
    type: "certification",
  },
  {
    name: "Java Web con Spring Boot",
    organization: "Alura",
    type: "certification",
  },
  {
    name: "Java y Spring Boot",
    organization: "Alura",
    type: "certification",
  },
  {
    name: "Java & Spring Framework",
    organization: "Alura",
    type: "certification",
  },
  {
    name: "Inteligencia Artificial y Java",
    organization: "Alura",
    type: "certification",
  },
  {
    name: "CCNA: Introduction to Networks",
    organization: "Cisco",
    type: "badge",
  },
  {
    name: "GitHub Foundations",
    organization: "GitHub",
    type: "badge",
  },
  {
    name: "Introduction to Cybersecurity",
    organization: "Cisco",
    type: "badge",
  },
  {
    name: "Introduction to IoT",
    organization: "Cisco",
    type: "badge",
  },
];
