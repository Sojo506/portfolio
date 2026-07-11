import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Technologies } from "@/components/sections/technologies";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { Education } from "@/components/sections/education";
import { Certifications } from "@/components/sections/certifications";
import { Cta } from "@/components/sections/cta";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience />
      <Technologies />
      <FeaturedProjects />
      <Education />
      <Certifications />
      <Cta />
      <Contact />
    </>
  );
}
