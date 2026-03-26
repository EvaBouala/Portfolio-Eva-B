"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="apropos" className="py-32 bg-cream">
      <div className="container mx-auto px-6 lg:px-16">
        <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column - Editorial Style */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
                À propos
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-8">
                Une passion pour le{" "}
                <span className="italic text-gold">craft digital</span>
              </h2>

              {/* Decorative line */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-px bg-navy" />
                <div className="w-3 h-3 rounded-full bg-gold" />
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-lg italic text-muted-foreground border-l-2 border-gold pl-6">
                &ldquo;Développer des idées. Designer des solutions. Piloter
                l'essentiel.&rdquo;
              </blockquote>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="space-y-8 text-foreground/80 leading-relaxed">
              <p className="text-lg first-letter:text-5xl first-letter:font-serif first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:text-navy">
                Étudiante en bachelor Chef de Projet Digital (spécialisation
                développement web) à l&apos;IIM Digital School, je suis
                passionnée par la création d&apos;expériences numériques
                immersives, centrées utilisateur et stratégiquement solides.
              </p>

              <p>
                Mon parcours allie développement technique (front-end, back-end)
                et gestion de projet, avec une sensibilité affirmée pour le
                design UX/UI — une compétence clé pour collaborer avec les
                équipes créatives et livrer des solutions innovantes et
                accessibles.
              </p>

              <p>
                J&apos;ai pu mettre ces acquis en pratique lors des Bourses aux
                Projets (BAP), où j&apos;ai travaillé sur des projets réels pour
                des associations, artistes ou entreprises, en équipe
                pluridisciplinaire. J&apos;y ai occupé des rôles variés :
                experte en développement web et chef de projet, ce qui m&apos;a
                permis de développer une vision à la fois technique et
                stratégique des projets. Parallèlement, j&apos;ai effectué un
                stage chez RELTIM, où j&apos;ai pu approfondir mes compétences
                en développement web et gestion de projet dans un environnement
                professionnel.
              </p>

              <p>
                Mon objectif ? Transformer des idées en solutions digitales
                performantes, qui répondent aux besoins des utilisateurs et des
                clients.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
              {[
                { number: "IIM", label: "Digital School" },
                { number: "BAP", label: "Projets réalisés" },
                { number: "Web", label: "Passion" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center lg:text-left"
                >
                  <span className="font-serif text-4xl md:text-5xl text-navy block mb-2">
                    {stat.number}
                  </span>
                  <span
                    className={`text-xs tracking-[0.15em] uppercase text-muted-foreground ${stat.label === "Passion" ? "lg:ml-2" : ""}`}
                  >
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
