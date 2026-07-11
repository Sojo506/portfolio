import type { Project } from "@/types/project";

export const projects: Project[] = [
  {
    title: "Marketplace Full Stack",
    slug: "marketplace-full-stack",
    shortDescription:
      "Marketplace web con roles diferenciados para usuarios y empresas, administración de productos, búsqueda, filtros y ordenamiento.",
    fullDescription:
      "Marketplace desarrollado durante el bootcamp de SoyHenry, con soporte para dos tipos de cuenta (usuario y empresa), gestión de productos y una experiencia de búsqueda y filtrado completa.",
    coverImage: "/projects/placeholder-cover.svg",
    gallery: ["/projects/placeholder-cover.svg"],
    role: "Full Stack Developer",
    projectType: "Marketplace",
    technologies: ["Next.js", "Redux Toolkit", "Tailwind CSS", "PostgreSQL", "Prisma"],
    contributions: [
      "Implementación de búsqueda, filtros y ordenamiento de productos.",
      "Administración de productos y roles de usuario/empresa.",
      "Desarrollo del frontend con Next.js, Redux Toolkit y Tailwind CSS.",
      "Modelado de datos y persistencia con PostgreSQL y Prisma.",
    ],
    status: "completed",
    featured: true,
    year: 2023,
  },
  {
    title: "Aplicación de Pokémon",
    slug: "aplicacion-pokemon",
    shortDescription:
      "Aplicación web que permite buscar, filtrar, ordenar y crear registros personalizados de Pokémon.",
    fullDescription:
      "Proyecto individual desarrollado durante el bootcamp de SoyHenry. Consumo de una API pública de Pokémon combinado con registros propios creados por el usuario, con búsqueda, filtros y ordenamiento.",
    coverImage: "/projects/placeholder-cover.svg",
    gallery: ["/projects/placeholder-cover.svg"],
    role: "Full Stack Developer",
    projectType: "Aplicación web",
    technologies: ["React", "Redux", "Node.js", "Express", "PostgreSQL", "Sequelize", "CSS"],
    contributions: [
      "Implementación de búsquedas, filtros y ordenamiento.",
      "Creación de registros personalizados de Pokémon.",
      "Desarrollo del backend con Node.js, Express y Sequelize.",
    ],
    status: "completed",
    featured: true,
    year: 2023,
  },
  {
    title: "Plataforma de seguridad vial",
    slug: "plataforma-seguridad-vial",
    shortDescription:
      "Aplicación web para recopilar información de usuarios y generar reportes descargables en PDF.",
    fullDescription:
      "Aplicación desarrollada en Prama dentro del dominio de seguridad vial, enfocada en la recopilación de información de usuarios y la generación de reportes en PDF.",
    coverImage: "/projects/placeholder-cover.svg",
    gallery: ["/projects/placeholder-cover.svg"],
    role: "Full Stack Developer",
    // TODO: confirmar y completar tecnologías utilizadas en este proyecto.
    projectType: "Aplicación web",
    technologies: [],
    contributions: [
      "Implementación de funcionalidades para recopilar información de usuarios.",
      "Generación de reportes PDF descargables.",
      "Participación en distintas etapas del ciclo de vida del desarrollo de software.",
    ],
    status: "private",
    featured: false,
    year: 2023,
  },
];
