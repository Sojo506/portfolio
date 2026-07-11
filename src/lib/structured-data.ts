import { siteConfig } from "@/lib/constants";
import type { Project } from "@/types/project";

export function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.title,
    url: siteConfig.siteUrl,
    email: `mailto:${siteConfig.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "San José",
      addressCountry: "CR",
    },
    sameAs: [siteConfig.github, siteConfig.linkedin, siteConfig.hackerRank],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${siteConfig.name} — ${siteConfig.brand}`,
    url: siteConfig.siteUrl,
  };
}

export function projectJsonLd(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: project.title,
    description: project.shortDescription,
    applicationCategory: project.projectType,
    operatingSystem: "Web",
    url: project.projectUrl ?? `${siteConfig.siteUrl}/projects/${project.slug}`,
    image: `${siteConfig.siteUrl}${project.coverImage}`,
    author: {
      "@type": "Person",
      name: siteConfig.name,
    },
    datePublished: `${project.year}`,
  };
}

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
