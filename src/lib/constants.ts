export const siteConfig = {
  name: "Fabián Sojo",
  brand: "SOJO DEV",
  title: "Full Stack Developer",
  titleEs: "Desarrollador Full Stack | Estudiante de Ingeniería en Sistemas",
  location: "San José, Costa Rica",
  email: "fabiansojowork@gmail.com",
  github: "https://github.com/Sojo506",
  linkedin: "https://linkedin.com/in/fsojodev",
  hackerRank: "https://hackerrank.com/profile/fabiansojowork",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  cvUrl: "/cv/fabian-sojo-cv.pdf",
} as const;

export const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre mí", href: "/about" },
  { label: "Experiencia", href: "/#experiencia" },
  { label: "Proyectos", href: "/projects" },
  { label: "Tecnologías", href: "/#tecnologias" },
  { label: "Certificaciones", href: "/#certificaciones" },
  { label: "Contacto", href: "/contact" },
] as const;
