"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projectsData, type ProjectItem } from "@/lib/projects-data";

const featuredProjects = projectsData
  .filter((project) => project.featured)
  .slice(0, 4);

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);
  const projectButtonClass =
    project.slug === "convertisseur-devises"
      ? "bg-gold/85 text-navy border-navy/30"
      : project.slug === "gestion-commentaires-posts"
        ? "bg-tan/90 text-navy border-navy/30"
        : "bg-navy/60 text-cream border-cream/50";

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className={`group relative ${index % 2 === 0 ? "lg:translate-y-16" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden bg-card">
        {/* Project Visual */}
        <div className={`aspect-4/5 ${project.color} relative overflow-hidden`}>
          {/* Pattern overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M0 38.59l2.83-2.83 1.41 1.41L1.41 40H0v-1.41zM0 1.4l2.83 2.83 1.41-1.41L1.41 0H0v1.41zM38.59 40l-2.83-2.83 1.41-1.41L40 38.59V40h-1.41zM40 1.41l-2.83 2.83-1.41-1.41L38.59 0H40v1.41zM20 18.6l2.83-2.83 1.41 1.41L21.41 20l2.83 2.83-1.41 1.41L20 21.41l-2.83 2.83-1.41-1.41L18.59 20l-2.83-2.83 1.41-1.41L20 18.59z'/%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Number indicator */}
          <div className="absolute top-6 left-6">
            <span className="font-serif text-6xl text-white/20">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>

          {/* Project visual - fades out on hover to reveal the numbered background */}
          <img
            src={project.imageSrc}
            alt={`Aperçu du projet ${project.title}`}
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
          />

          {/* Hover overlay */}
          <motion.div
            initial={false}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <span
              className={`text-sm tracking-[0.2em] uppercase border px-6 py-3 ${projectButtonClass}`}
            >
              Voir le projet
            </span>
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 bg-cream">
          <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-2">
            {project.category}
          </p>
          <h3 className="font-serif text-2xl text-foreground mb-3">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-sand text-foreground/70 tracking-wide"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/projets/${project.slug}`}
            aria-label={`Ouvrir le projet ${project.title}`}
            className="absolute inset-0 z-10"
          />
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });

  return (
    <section id="projets" className="py-32 bg-sand">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-4">
            Projets sélectionnés
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight text-foreground mb-6">
            Des projets qui <span className="italic text-gold">laissent</span>{" "}
            une trace
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Chaque projet est une collaboration unique où technique et
            créativité se rencontrent pour créer des expériences mémorables.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex justify-center mt-28"
        >
          <Link
            href="/projets"
            className="group inline-flex items-center gap-3 text-navy hover:text-gold transition-colors duration-300"
          >
            <span className="text-sm tracking-[0.2em] uppercase">
              Voir tous les projets
            </span>
            <svg
              className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
