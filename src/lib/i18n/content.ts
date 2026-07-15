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
      "Web marketplace with separate roles for users and businesses, a product catalog, online payments, and an analytics dashboard.",
    fullDescription:
      "Marketplace built by a 9-person team during the SoyHenry bootcamp, supporting two account types (user and business), product management, NextAuth-based authentication, Stripe payments, and a dashboard with sales metrics.",
    projectType: "Marketplace",
    contributions: [
      "Implemented product search, filtering, and sorting.",
      "Managed products and user/business roles.",
      "Built frontend views with Next.js, Redux Toolkit, and Tailwind CSS.",
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
  "administrador-pacientes-veterinarios": {
    shortDescription:
      "Platform for veterinarians that centralizes patient records, with email-based authentication and session-protected routes.",
    fullDescription:
      "Full-stack web application for veterinary clinics. Lets veterinarians register, confirm their account by email, log in, and manage their patients' records from a protected dashboard, including password recovery.",
    projectType: "Web application",
    contributions: [
      "Implemented the authentication flow: registration, email account confirmation, login, and password recovery.",
      "Built the patient CRUD (create, edit, delete, and list) with validated forms.",
      "Modeled data in MongoDB with Mongoose for veterinarians and patients.",
      "Protected frontend routes based on session state and backend endpoints with JWT middleware.",
    ],
    challenges: [
      "Reliably coordinating the transactional emails for account confirmation and password recovery.",
    ],
    solutions: [
      "Centralized email sending in dedicated utilities decoupled from the controllers, making them easier to maintain.",
    ],
  },
  "plataforma-pedidos-comida": {
    shortDescription:
      "Food ordering platform with a shopping cart, online payments, and an admin panel to manage the menu and orders.",
    fullDescription:
      "Full-stack application made up of three parts: a customer site where users browse the menu, build their cart, and pay online; an admin panel to manage products and orders; and a REST API that centralizes the business logic and data.",
    projectType: "Web application",
    contributions: [
      "Built the product catalog, shopping cart, and checkout flow on the frontend with React.",
      "Integrated online payments with Stripe.",
      "Built the admin panel to manage the menu (add, edit, and remove products) and view orders.",
      "Designed the REST API with Express and modeled data in MongoDB for users, products, and orders.",
      "Implemented user authentication with JWT and product image uploads with Multer.",
    ],
    challenges: [
      "Keeping the shopping cart state in sync between the user's session and the backend before confirming payment.",
    ],
    solutions: [
      "Centralized the cart state in a React context that syncs with the API before starting the Stripe checkout.",
    ],
  },
  "adopciones-kalo": {
    shortDescription:
      "Pet adoption platform with post-adoption tracking, donation campaigns, a charity store, and a full admin dashboard.",
    fullDescription:
      "Full-stack platform for a pet adoption organization. Covers the whole cycle: public browsing of available dogs, adoption requests with dynamic questions, post-adoption tracking with evidence uploads and admin approval, PayPal-powered donation campaigns, a charity store with cart and checkout, and an admin dashboard with CRUDs and PDF reports. The backend runs on Oracle Database with its own PL/SQL procedures.",
    projectType: "Web application",
    contributions: [
      "Implemented the authentication flow with email verification and OTP-based password recovery.",
      "Built adoption requests with dynamic forms and post-adoption tracking with evidence uploads.",
      "Integrated PayPal for donation campaigns and charity store checkout.",
      "Built the admin dashboard with CRUDs and PDF report generation.",
      "Designed the Oracle Database schema, including the project's own PL/SQL functions and procedures.",
    ],
    challenges: [
      "Keeping sessions secure and revocable, and notifying forced logout in real time across open tabs.",
    ],
    solutions: [
      "Implemented access JWTs alongside refresh tokens persisted in the database, plus an SSE channel that notifies forced logout instantly.",
    ],
  },
  danceroom: {
    shortDescription:
      "Platform for an electronic music collective: events, collaborators, seasonal sets, and a merch store, with an admin panel.",
    fullDescription:
      "Full-stack platform for an electronic music event collective. Includes a landing page with events and collaborators (DJs), a per-event gallery, seasonal audio sets, a merch store with cart and checkout, a user profile with purchase history, and a separate admin panel to manage categories, events and their gallery, collaborators, products, orders, seasons, and statistics. The backend is a Java Spring Boot API organized by domain (controller/service/repository/entity), with its own authentication and Firebase image storage.",
    projectType: "Web application",
    contributions: [
      "Built the public site: events, gallery, collaborators, seasonal sets, and the merch store.",
      "Implemented the shopping cart, checkout, and user order tracking.",
      "Built the admin panel (a separate project) to manage events, collaborators, products, orders, and statistics.",
      "Developed the Java Spring Boot API, organized by domain, including authentication and collaborator/event management.",
      "Integrated Firebase for event and product image storage.",
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
