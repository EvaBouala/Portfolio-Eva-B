"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Langages et Frameworks",
    skills: [
      "Python",
      "C",
      "SQL",
      "JavaScript",
      "PHP",
      "HTML",
      "CSS",
      "SASS",
      "Tailwind",
      "Nuxt.js",
      "Symfony",
      "Next.js",
      "React",
    ],
  },
  {
    title: "Outils",
    skills: [
      "Word",
      "Excel",
      "PowerPoint",
      "Genially",
      "Visual Studio Code",
      "Github",
      "MySQL",
      "Canva",
      "WordPress",
      "Vite",
    ],
  },
  {
    title: "Compétences Transversales",
    skills: [
      "Travail d'équipe",
      "Esprit analytique",
      "Compétences organisationnelles",
      "Communication claire",
      "Adaptabilité",
      "Leadership",
      "Supervision d'équipe",
    ],
  },
];

const technologies = [
  { name: "HTML/CSS", level: 95 },
  { name: "Next.js", level: 88 },
  { name: "PHP", level: 88 },
  { name: "Tailwind CSS", level: 90 },
  { name: "Python", level: 85 },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="competences"
      className="py-32 bg-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-64 h-64 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 rounded-full bg-navy/5 blur-3xl" />

      <div className="container mx-auto px-6 lg:px-16 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-20">
          {/* Left - Title and Skills List */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Compétences
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-12">
              Une boîte à outils{" "}
              <span className="italic text-gold">complète</span>
            </h2>

            {/* Skills Categories */}
            <div className="space-y-10">
              {skillCategories.map((category, catIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + catIndex * 0.1 }}
                >
                  <h3 className="font-serif text-lg text-navy mb-4 flex items-center gap-3">
                    <span className="w-8 h-px bg-gold" />
                    {category.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-4 py-2 text-sm bg-sand text-foreground/80 hover:bg-navy hover:text-cream transition-colors duration-300 cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Progress Bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:pt-24"
          >
            <div className="bg-card p-8 lg:p-12 relative">
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-gold" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-gold" />

              <h3 className="font-serif text-2xl text-navy mb-10">
                Maîtrise technique
              </h3>

              <div className="space-y-8">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-baseline mb-3">
                      <span className="text-sm font-medium text-foreground tracking-wide">
                        {tech.name}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {tech.level}%
                      </span>
                    </div>
                    <div className="h-1 bg-sand overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${tech.level}%` } : {}}
                        transition={{
                          duration: 1,
                          delay: 0.6 + index * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-navy"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Decorative quote */}
              <div className="mt-12 pt-8 border-t border-border">
                <p className="font-serif italic text-muted-foreground text-sm leading-relaxed">
                  &ldquo;Le détail fait la perfection, et la perfection
                  n&apos;est pas un détail.&rdquo;
                  <span className="block mt-2 not-italic text-xs tracking-wider">
                    — Léonard de Vinci
                  </span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
