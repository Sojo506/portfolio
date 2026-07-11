"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/common/icons";
import { siteConfig } from "@/lib/constants";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: "easeOut" as const },
  }),
};

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden border-b"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-8 lg:py-32">
        <div>
          <motion.p
            initial="hidden"
            animate="visible"
            custom={0}
            variants={fadeUp}
            className="text-sm font-medium tracking-[0.14em] text-muted-foreground uppercase"
          >
            Full Stack Developer · San José, Costa Rica
          </motion.p>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={0.08}
            variants={fadeUp}
            className="mt-5 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Construyo soluciones digitales funcionales, escalables y pensadas
            para resolver problemas reales.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            custom={0.16}
            variants={fadeUp}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Soy Fabián Sojo, desarrollador Full Stack y estudiante de
            Ingeniería en Sistemas. Diseño y desarrollo aplicaciones web
            modernas, combinando interfaces cuidadas, arquitecturas
            mantenibles y tecnologías actuales.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.24}
            variants={fadeUp}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="gap-1.5">
              <Link href="/projects">
                Ver proyectos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contacto">Contactarme</a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href={siteConfig.cvUrl} download>
                Descargar CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.32}
            variants={fadeUp}
            className="mt-10 flex items-center gap-4 text-muted-foreground"
          >
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="transition-colors hover:text-foreground"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              aria-label="Correo electrónico"
              className="transition-colors hover:text-foreground"
            >
              <Mail className="h-[18px] w-[18px]" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm rounded-xl border bg-card/60 p-6 shadow-sm backdrop-blur-sm"
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
          </div>

          <div className="mt-5 space-y-3 font-mono text-xs leading-relaxed sm:text-sm">
            <p className="text-muted-foreground">const developer = {"{"}</p>
            <p className="pl-4">
              name: <span className="text-foreground">&quot;Fabián Sojo&quot;</span>,
            </p>
            <p className="pl-4">
              role: <span className="text-foreground">&quot;Full Stack Developer&quot;</span>,
            </p>
            <p className="pl-4">
              location: <span className="text-foreground">&quot;Costa Rica&quot;</span>,
            </p>
            <p className="pl-4">
              focus: [<span className="text-foreground">&quot;clean code&quot;</span>,{" "}
              <span className="text-foreground">&quot;scalability&quot;</span>],
            </p>
            <p className="pl-4">
              available:{" "}
              <span className="text-foreground">true</span>,
            </p>
            <p className="text-muted-foreground">{"}"};</p>
          </div>

          <div className="mt-6 flex items-center gap-2 border-t pt-4 text-xs text-muted-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
            Disponible para nuevos proyectos
          </div>
        </motion.div>
      </div>
    </section>
  );
}
