export type Education = {
  institution: string;
  program: string;
  period: string;
  status: "in-progress" | "completed";
  details?: string[];
};

export const education: Education[] = [
  {
    institution: "Universidad Fidélitas",
    program: "Bachillerato en Ingeniería en Sistemas",
    period: "2022 – Presente",
    status: "in-progress",
  },
  {
    institution: "Henry Bootcamp",
    program: "Full Stack Web Developer",
    period: "2022 – 2023",
    status: "completed",
  },
  {
    institution: "freeCodeCamp",
    program: "JavaScript Algorithms and Data Structures",
    period: "",
    status: "completed",
  },
  {
    institution: "freeCodeCamp",
    program: "Responsive Web Design",
    period: "",
    status: "completed",
  },
  {
    institution: "Alura",
    program:
      "Formación en Java, Spring Boot, SQL, Programación Orientada a Objetos, Inteligencia Artificial, Desarrollo de software y Agilidad",
    period: "",
    status: "completed",
  },
];
