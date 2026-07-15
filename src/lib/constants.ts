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
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "",
  cvUrl: {
    es: "/cv/CV_Fabian_Sojo_ES.pdf",
    en: "/cv/CV_Fabian_Sojo_EN.pdf",
  },
} as const;

export const navItems = [
  { key: "home", href: "/#inicio" },
  { key: "about", href: "/about" },
  { key: "experience", href: "/#experiencia" },
  { key: "projects", href: "/projects" },
  { key: "technologies", href: "/#tecnologias" },
  { key: "certifications", href: "/#certificaciones" },
  { key: "contact", href: "/contact" },
] as const;
