import type { Certification } from "@/data/certifications";
import type { Education } from "@/data/education";
import type { Experience } from "@/data/experience";
import type { Language } from "@/data/languages";
import type { TechCategory } from "@/data/technologies";
import type { Locale } from "@/lib/i18n/locale";
import type { Project } from "@/types/project";

type ProjectTranslation = Pick<
  Project,
  "shortDescription" | "fullDescription" | "projectType" | "contributions"
> & {
  challenges?: string[];
  solutions?: string[];
  results?: string[];
};

const projectTranslations: Record<string, ProjectTranslation> = {
  "marketplace-full-stack": {
    shortDescription:
      "Web marketplace with separate roles for users and businesses, product management, search, filters, and sorting.",
    fullDescription:
      "Marketplace built during the SoyHenry bootcamp, supporting two account types (user and business), product management, and a complete search and filtering experience.",
    projectType: "Marketplace",
    contributions: [
      "Implemented product search, filtering, and sorting.",
      "Managed products and user/business roles.",
      "Built the frontend with Next.js, Redux Toolkit, and Tailwind CSS.",
      "Modeled data and persistence with PostgreSQL and Prisma.",
    ],
  },
  "aplicacion-pokemon": {
    shortDescription:
      "Web application to search, filter, sort, and create custom Pokémon records.",
    fullDescription:
      "Individual project built during the SoyHenry bootcamp. Combines a public Pokémon API with custom user-created records, including search, filters, and sorting.",
    projectType: "Web application",
    contributions: [
      "Implemented search, filters, and sorting.",
      "Built custom Pokémon record creation.",
      "Developed the backend with Node.js, Express, and Sequelize.",
    ],
  },
  "plataforma-seguridad-vial": {
    shortDescription:
      "Web application to collect user information and generate downloadable PDF reports.",
    fullDescription:
      "Application built at Prama within the road-safety domain, focused on collecting user information and generating PDF reports.",
    projectType: "Web application",
    contributions: [
      "Implemented features to collect user information.",
      "Generated downloadable PDF reports.",
      "Participated in different stages of the software development lifecycle.",
    ],
  },
};

export function translateProject(project: Project, locale: Locale): Project {
  if (locale === "es") return project;
  const translation = projectTranslations[project.slug];
  if (!translation) return project;
  return {
    ...project,
    shortDescription: translation.shortDescription,
    fullDescription: translation.fullDescription,
    projectType: translation.projectType,
    contributions: translation.contributions,
    challenges: translation.challenges ?? project.challenges,
    solutions: translation.solutions ?? project.solutions,
    results: translation.results ?? project.results,
  };
}

export function translateProjects(projects: Project[], locale: Locale): Project[] {
  return projects.map((project) => translateProject(project, locale));
}

type ExperienceTranslation = {
  role: string;
  responsibilities: string[];
};

const experienceTranslations: Record<string, ExperienceTranslation> = {
  Prama: {
    role: "Full Stack Developer",
    responsibilities: [
      "Developed a web application within the road-safety domain.",
      "Implemented features to collect user information.",
      "Generated downloadable PDF reports.",
      "Participated in different stages of the software development lifecycle.",
      "Focused on clean, maintainable, and reliable code.",
    ],
  },
  SoyHenry: {
    role: "Full Stack Developer — Bootcamp Projects",
    responsibilities: [
      "Built a marketplace with user and business roles.",
      "Implemented search, filters, sorting, and product management.",
      "Frontend built with Next.js, Redux Toolkit, and Tailwind CSS.",
      "Backend and data layer using PostgreSQL and Prisma.",
      "Individually built a Pokémon application with search, filters, sorting, and record creation.",
      "Used React, Redux, CSS, Node.js, Express, PostgreSQL, and Sequelize.",
    ],
  },
};

export function translateExperience(items: Experience[], locale: Locale): Experience[] {
  if (locale === "es") return items;
  return items.map((item) => {
    const translation = experienceTranslations[item.company];
    if (!translation) return item;
    return { ...item, role: translation.role, responsibilities: translation.responsibilities };
  });
}

type EducationTranslation = {
  program: string;
  period: string;
};

const educationTranslations: Record<string, EducationTranslation> = {
  "Universidad Fidélitas__Bachillerato en Ingeniería en Sistemas": {
    program: "Bachelor's Degree in Systems Engineering",
    period: "2022 – Present",
  },
  "Henry Bootcamp__Full Stack Web Developer": {
    program: "Full Stack Web Developer",
    period: "2022 – 2023",
  },
  "Alura__Formación en Java, Spring Boot, SQL, Programación Orientada a Objetos, Inteligencia Artificial, Desarrollo de software y Agilidad":
    {
      program:
        "Training in Java, Spring Boot, SQL, Object-Oriented Programming, Artificial Intelligence, Software Development, and Agile",
      period: "",
    },
};

export function translateEducation(items: Education[], locale: Locale): Education[] {
  if (locale === "es") return items;
  return items.map((item) => {
    const translation = educationTranslations[`${item.institution}__${item.program}`];
    if (!translation) return item;
    return { ...item, program: translation.program, period: translation.period };
  });
}

const certificationNameTranslations: Record<string, string> = {
  "Fundamentos de Agilidad": "Agile Fundamentals",
  "Introducción a SQL con MySQL": "Introduction to SQL with MySQL",
  "Programación Orientada a Objetos en Java": "Object-Oriented Programming in Java",
  "Java Web con Spring Boot": "Java Web with Spring Boot",
  "Java y Spring Boot": "Java and Spring Boot",
  "Inteligencia Artificial y Java": "Artificial Intelligence and Java",
};

export function translateCertifications(
  items: Certification[],
  locale: Locale,
): Certification[] {
  if (locale === "es") return items;
  return items.map((item) => {
    const name = certificationNameTranslations[item.name];
    if (!name) return item;
    return { ...item, name };
  });
}

const technologyCategoryTranslations: Record<string, string> = {
  Lenguajes: "Languages",
  "Bases de datos": "Databases",
  "ORM y herramientas de datos": "ORM & Data Tools",
  "Arquitectura y buenas prácticas": "Architecture & Best Practices",
  "Herramientas y metodologías": "Tools & Methodologies",
  "Desarrollo asistido por IA": "AI-Assisted Development",
};

const technologyItemTranslations: Record<string, string> = {
  "Principios SOLID": "SOLID Principles",
  "Arquitectura en capas": "Layered Architecture",
};

export function translateTechnologies(
  groups: TechCategory[],
  locale: Locale,
): TechCategory[] {
  if (locale === "es") return groups;
  return groups.map((group) => ({
    category: technologyCategoryTranslations[group.category] ?? group.category,
    items: group.items.map((item) => technologyItemTranslations[item] ?? item),
  }));
}

const languageTranslations: Record<string, { name: string; level: string }> = {
  Español: { name: "Spanish", level: "Native" },
  Inglés: { name: "English", level: "B2 — Intermediate" },
};

export function translateLanguages(items: Language[], locale: Locale): Language[] {
  if (locale === "es") return items;
  return items.map((item) => {
    const translation = languageTranslations[item.name];
    if (!translation) return item;
    return { name: translation.name, level: translation.level };
  });
}
