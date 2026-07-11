export type TechCategory = {
  category: string;
  items: string[];
};

export const technologies: TechCategory[] = [
  {
    category: "Lenguajes",
    items: ["Java", "JavaScript", "TypeScript", "HTML", "CSS", "Python", "C#"],
  },
  {
    category: "Frontend",
    items: ["React", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "Node.js", "Express", ".NET"],
  },
  {
    category: "Bases de datos",
    items: ["PostgreSQL", "MySQL"],
  },
  {
    category: "ORM y herramientas de datos",
    items: ["Prisma", "Sequelize"],
  },
  {
    category: "Arquitectura y buenas prácticas",
    items: ["Principios SOLID", "Arquitectura en capas", "Clean Code"],
  },
  {
    category: "Herramientas y metodologías",
    items: ["Git", "GitHub", "Scrum"],
  },
  {
    category: "Desarrollo asistido por IA",
    items: ["Claude Code", "Codex"],
  },
];
