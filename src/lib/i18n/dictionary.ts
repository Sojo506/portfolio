import { useLanguage } from "@/components/common/language-provider";
import type { Locale } from "@/lib/i18n/locale";

const dictionary = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos",
      technologies: "Tecnologías",
      certifications: "Certificaciones",
      contact: "Contacto",
    },
    header: {
      skipToContent: "Saltar al contenido",
      downloadCv: "Descargar CV",
      openMenu: "Abrir menú de navegación",
      changeLanguage: "Cambiar idioma",
    },
    theme: {
      changeTheme: "Cambiar tema",
      light: "Claro",
      dark: "Oscuro",
      system: "Sistema",
    },
    footer: {
      tagline: "Desarrollador Full Stack | Estudiante de Ingeniería en Sistemas",
      rightsReserved: "Todos los derechos reservados.",
      designedBy: (name: string) => `Diseñado y desarrollado por ${name}.`,
      backToTop: "Volver arriba",
      email: "Correo electrónico",
    },
    hero: {
      tag: "Full Stack Developer · San José, Costa Rica",
      title:
        "Construyo soluciones digitales funcionales, escalables y pensadas para resolver problemas reales.",
      description:
        "Soy Fabián Sojo, desarrollador Full Stack y estudiante de Ingeniería en Sistemas. Diseño y desarrollo aplicaciones web modernas, combinando interfaces cuidadas, arquitecturas mantenibles y tecnologías actuales.",
      viewProjects: "Ver proyectos",
      contactMe: "Contactarme",
      downloadCv: "Descargar CV",
      available: "Disponible para nuevos proyectos",
      email: "Correo electrónico",
    },
    about: {
      eyebrow: "Sobre mí",
      title: "Desarrollador Full Stack",
      focus: "Enfoque",
      paragraphs: [
        "Soy Fabián Sojo, desarrollador Full Stack con base en San José, Costa Rica, y estudiante de Bachillerato en Ingeniería en Sistemas en la Universidad Fidélitas. Tengo experiencia creando aplicaciones web dinámicas y escalables, desde el diseño de la base de datos hasta la interfaz final.",
        "Mi enfoque está en construir productos web modernos, mantenibles y centrados en resolver necesidades reales, cuidando tanto la arquitectura del backend como la experiencia de quien usa el producto.",
        "Aplico principios de diseño limpio y arquitectura por capas en mis proyectos — separando claramente la lógica de negocio, el acceso a datos y la interfaz — lo que facilita el mantenimiento, las pruebas y la escalabilidad del código a largo plazo.",
        "También incorporo herramientas de inteligencia artificial como Claude Code y Codex dentro de mi flujo de desarrollo, lo que me permite trabajar de forma más eficiente sin perder rigor técnico ni control sobre las decisiones de arquitectura.",
        "Mis intereses profesionales incluyen el desarrollo Full Stack, la arquitectura de software, el diseño de bases de datos, la experiencia de usuario y la mejora continua.",
      ],
    },
    experience: {
      eyebrow: "Experiencia",
      title: "Trayectoria profesional",
      dateLocale: "es-CR",
    },
    technologies: {
      eyebrow: "Tecnologías",
      title: "Herramientas con las que trabajo",
    },
    featuredProjects: {
      eyebrow: "Proyectos",
      title: "Proyectos destacados",
      description:
        "Una selección de proyectos donde participé en el diseño, desarrollo o arquitectura de la solución.",
      viewAll: "Ver todos los proyectos",
    },
    projectCard: {
      viewCaseStudy: "Ver caso de estudio",
      site: "Sitio",
      repository: "Repositorio",
    },
    projectStatus: {
      completed: "Completado",
      "in-progress": "En progreso",
      private: "Privado",
    },
    projectFilter: {
      all: "Todos",
      noResults: "No hay proyectos que coincidan con este filtro.",
    },
    projectsPage: {
      breadcrumbHome: "Inicio",
      breadcrumbProjects: "Proyectos",
      eyebrow: "Proyectos",
      title: "Todos los proyectos",
      description:
        "Cada proyecto detalla mi rol, mis aportes y las decisiones técnicas detrás de la solución.",
    },
    projectDetail: {
      backToProjects: "Todos los proyectos",
      visitSite: "Visitar sitio",
      repository: "Repositorio",
      contributions: "Principales aportes",
      challenges: "Retos encontrados",
      solutions: "Soluciones aplicadas",
      results: "Resultados",
      gallery: "Galería",
      galleryAlt: (title: string, index: number) => `${title} — captura ${index}`,
      previousProject: "Proyecto anterior",
      nextProject: "Siguiente proyecto",
    },
    education: {
      eyebrow: "Educación",
      title: "Formación académica",
      inProgress: "En curso",
      languages: "Idiomas",
    },
    certifications: {
      eyebrow: "Certificaciones",
      title: "Certificaciones e insignias",
      description:
        "Formación complementaria en agilidad, bases de datos, Java/Spring y fundamentos de tecnología.",
      badge: "Insignia",
      certification: "Certificación",
      viewCredential: "Ver credencial",
      showLess: "Ver menos",
      showAll: (count: number) => `Ver todas (${count})`,
    },
    cta: {
      title: "¿Tienes una idea que quieres convertir en una solución digital?",
      description:
        "Estoy disponible para colaborar en proyectos de desarrollo web, oportunidades profesionales y soluciones digitales construidas con atención al detalle.",
      startConversation: "Iniciar una conversación",
      contactWhatsapp: "Contactar por WhatsApp",
      sendEmail: "Enviar correo",
    },
    contact: {
      eyebrow: "Contacto",
      title: "Hablemos de tu proyecto",
      description:
        "Cuéntame qué necesitas y te responderé lo antes posible por el medio que prefieras.",
      email: "Correo",
      location: "Ubicación",
      whatsapp: "WhatsApp",
      whatsappCta: "Hablemos por WhatsApp",
    },
    contactForm: {
      name: "Nombre",
      email: "Correo electrónico",
      company: "Empresa (opcional)",
      budget: "Presupuesto estimado (opcional)",
      inquiryType: "Tipo de consulta",
      selectOption: "Selecciona una opción",
      preferredContact: "Método de contacto preferido",
      message: "Mensaje",
      privacyConsent:
        "Acepto la política de privacidad y el uso de mis datos para responder este mensaje.",
      submit: "Enviar mensaje",
      sending: "Enviando...",
      successWhatsapp: "Se abrió WhatsApp con tu mensaje. ¡Gracias por escribirme!",
      successEmail: "Mensaje enviado correctamente. Te responderé lo antes posible.",
      whatsappNotConfigured:
        "El número de WhatsApp no está configurado. Escríbeme por correo mientras tanto.",
      genericError: "No se pudo enviar el mensaje.",
      inquiryTypeLabels: {
        "Desarrollo de sitio web": "Desarrollo de sitio web",
        "Aplicación web": "Aplicación web",
        "Colaboración profesional": "Colaboración profesional",
        "Oportunidad laboral": "Oportunidad laboral",
        "Consultoría": "Consultoría",
        Otro: "Otro",
      },
      contactMethodLabels: {
        "Correo electrónico": "Correo electrónico",
        WhatsApp: "WhatsApp",
      },
      validation: {
        nameRequired: "Ingresa tu nombre completo.",
        emailInvalid: "Ingresa un correo electrónico válido.",
        inquiryRequired: "Selecciona el tipo de consulta.",
        messageMin: "Cuéntame un poco más sobre tu proyecto (mínimo 10 caracteres).",
        contactMethodRequired: "Selecciona un método de contacto preferido.",
        privacyRequired: "Debes aceptar la política de privacidad para continuar.",
      },
      whatsappMessage: {
        greeting: (name: string) => `Hola Fabián, mi nombre es ${name}.`,
        topic: (inquiryType: string) => `Me gustaría conversar sobre: ${inquiryType}.`,
        company: (company: string) => `Empresa: ${company}`,
        budget: (budget: string) => `Presupuesto estimado: ${budget}`,
        messageLabel: "Mensaje:",
      },
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      experience: "Experience",
      projects: "Projects",
      technologies: "Technologies",
      certifications: "Certifications",
      contact: "Contact",
    },
    header: {
      skipToContent: "Skip to content",
      downloadCv: "Download CV",
      openMenu: "Open navigation menu",
      changeLanguage: "Change language",
    },
    theme: {
      changeTheme: "Change theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    footer: {
      tagline: "Full Stack Developer | Systems Engineering Student",
      rightsReserved: "All rights reserved.",
      designedBy: (name: string) => `Designed and developed by ${name}.`,
      backToTop: "Back to top",
      email: "Email",
    },
    hero: {
      tag: "Full Stack Developer · San José, Costa Rica",
      title:
        "I build functional, scalable digital solutions designed to solve real problems.",
      description:
        "I'm Fabián Sojo, a Full Stack developer and Systems Engineering student. I design and build modern web applications, combining thoughtful interfaces, maintainable architectures, and current technologies.",
      viewProjects: "View projects",
      contactMe: "Contact me",
      downloadCv: "Download CV",
      available: "Available for new projects",
      email: "Email",
    },
    about: {
      eyebrow: "About me",
      title: "Full Stack Developer",
      focus: "Focus",
      paragraphs: [
        "I'm Fabián Sojo, a Full Stack developer based in San José, Costa Rica, and a Systems Engineering undergraduate at Universidad Fidélitas. I have experience building dynamic, scalable web applications, from database design to the final interface.",
        "My focus is on building modern, maintainable web products centered on solving real needs, paying attention to both backend architecture and the experience of whoever uses the product.",
        "I apply clean design principles and layered architecture in my projects — clearly separating business logic, data access, and the interface — which makes the code easier to maintain, test, and scale long-term.",
        "I also bring AI tools like Claude Code and Codex into my development workflow, which lets me work more efficiently without losing technical rigor or control over architectural decisions.",
        "My professional interests include Full Stack development, software architecture, database design, user experience, and continuous learning.",
      ],
    },
    experience: {
      eyebrow: "Experience",
      title: "Professional experience",
      dateLocale: "en-US",
    },
    technologies: {
      eyebrow: "Technologies",
      title: "Tools I work with",
    },
    featuredProjects: {
      eyebrow: "Projects",
      title: "Featured projects",
      description:
        "A selection of projects where I contributed to the design, development, or architecture of the solution.",
      viewAll: "View all projects",
    },
    projectCard: {
      viewCaseStudy: "View case study",
      site: "Site",
      repository: "Repository",
    },
    projectStatus: {
      completed: "Completed",
      "in-progress": "In progress",
      private: "Private",
    },
    projectFilter: {
      all: "All",
      noResults: "No projects match this filter.",
    },
    projectsPage: {
      breadcrumbHome: "Home",
      breadcrumbProjects: "Projects",
      eyebrow: "Projects",
      title: "All projects",
      description:
        "Each project details my role, my contributions, and the technical decisions behind the solution.",
    },
    projectDetail: {
      backToProjects: "All projects",
      visitSite: "Visit site",
      repository: "Repository",
      contributions: "Key contributions",
      challenges: "Challenges",
      solutions: "Solutions applied",
      results: "Results",
      gallery: "Gallery",
      galleryAlt: (title: string, index: number) => `${title} — screenshot ${index}`,
      previousProject: "Previous project",
      nextProject: "Next project",
    },
    education: {
      eyebrow: "Education",
      title: "Academic background",
      inProgress: "In progress",
      languages: "Languages",
    },
    certifications: {
      eyebrow: "Certifications",
      title: "Certifications & badges",
      description:
        "Complementary training in agile, databases, Java/Spring, and technology fundamentals.",
      badge: "Badge",
      certification: "Certification",
      viewCredential: "View credential",
      showLess: "Show less",
      showAll: (count: number) => `Show all (${count})`,
    },
    cta: {
      title: "Have an idea you want to turn into a digital solution?",
      description:
        "I'm available to collaborate on web development projects, professional opportunities, and digital solutions built with attention to detail.",
      startConversation: "Start a conversation",
      contactWhatsapp: "Contact via WhatsApp",
      sendEmail: "Send an email",
    },
    contact: {
      eyebrow: "Contact",
      title: "Let's talk about your project",
      description:
        "Tell me what you need and I'll get back to you as soon as possible through your preferred channel.",
      email: "Email",
      location: "Location",
      whatsapp: "WhatsApp",
      whatsappCta: "Let's talk on WhatsApp",
    },
    contactForm: {
      name: "Name",
      email: "Email address",
      company: "Company (optional)",
      budget: "Estimated budget (optional)",
      inquiryType: "Inquiry type",
      selectOption: "Select an option",
      preferredContact: "Preferred contact method",
      message: "Message",
      privacyConsent:
        "I accept the privacy policy and the use of my data to respond to this message.",
      submit: "Send message",
      sending: "Sending...",
      successWhatsapp: "WhatsApp opened with your message. Thanks for reaching out!",
      successEmail: "Message sent successfully. I'll get back to you as soon as possible.",
      whatsappNotConfigured:
        "The WhatsApp number isn't configured yet. Please email me instead.",
      genericError: "The message couldn't be sent.",
      inquiryTypeLabels: {
        "Desarrollo de sitio web": "Website development",
        "Aplicación web": "Web application",
        "Colaboración profesional": "Professional collaboration",
        "Oportunidad laboral": "Job opportunity",
        "Consultoría": "Consulting",
        Otro: "Other",
      },
      contactMethodLabels: {
        "Correo electrónico": "Email",
        WhatsApp: "WhatsApp",
      },
      validation: {
        nameRequired: "Enter your full name.",
        emailInvalid: "Enter a valid email address.",
        inquiryRequired: "Select the inquiry type.",
        messageMin: "Tell me a bit more about your project (minimum 10 characters).",
        contactMethodRequired: "Select a preferred contact method.",
        privacyRequired: "You must accept the privacy policy to continue.",
      },
      whatsappMessage: {
        greeting: (name: string) => `Hi Fabián, my name is ${name}.`,
        topic: (inquiryType: string) => `I'd like to talk about: ${inquiryType}.`,
        company: (company: string) => `Company: ${company}`,
        budget: (budget: string) => `Estimated budget: ${budget}`,
        messageLabel: "Message:",
      },
    },
  },
} satisfies Record<Locale, unknown>;

export type Dictionary = (typeof dictionary)["es"];

export function getDictionary(locale: Locale): Dictionary {
  return dictionary[locale];
}

export function useTranslation(): Dictionary {
  const { locale } = useLanguage();
  return getDictionary(locale);
}
