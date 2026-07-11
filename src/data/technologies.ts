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
    items: ["Java", "Spring Boot", "Node.js", "Express"],
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
    category: "Herramientas y metodologías",
    items: ["Git", "GitHub", "Scrum"],
  },
];
