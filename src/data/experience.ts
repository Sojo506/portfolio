export type Experience = {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
};

export const experience: Experience[] = [
  {
    company: "Prama",
    role: "Desarrollador Full Stack",
    startDate: "2023-02",
    endDate: "2023-04",
    responsibilities: [
      "Desarrollo de una aplicación web dentro del dominio de seguridad vial.",
      "Implementación de funcionalidades para recopilar información de usuarios.",
      "Generación de reportes PDF descargables.",
      "Participación en diferentes etapas del ciclo de vida del desarrollo de software.",
      "Enfoque en código limpio, mantenible y confiable.",
    ],
    technologies: [],
  },
  {
    company: "SoyHenry",
    role: "Desarrollador Full Stack — Proyectos de Bootcamp",
    startDate: "2022-09",
    endDate: "2023-01",
    responsibilities: [
      "Desarrollo de un marketplace con roles de usuario y empresa.",
      "Implementación de búsqueda, filtros, ordenamiento y administración de productos.",
      "Frontend desarrollado con Next.js, Redux Toolkit y Tailwind CSS.",
      "Backend y datos utilizando PostgreSQL y Prisma.",
      "Desarrollo individual de una aplicación de Pokémon con búsquedas, filtros, ordenamiento y creación de registros.",
      "Uso de React, Redux, CSS, Node.js, Express, PostgreSQL y Sequelize.",
    ],
    technologies: [
      "Next.js",
      "Redux Toolkit",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Sequelize",
    ],
  },
];
