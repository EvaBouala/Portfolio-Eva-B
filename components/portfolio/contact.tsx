"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

type CursorFollowButtonProps = {
  href: string;
  className: string;
  orbClassName?: string;
  children: ReactNode;
};

function CursorFollowButton({
  href,
  className,
  orbClassName = "bg-gold/35",
  children,
}: CursorFollowButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }}
      className={`group relative overflow-hidden inline-flex items-center justify-center ${className}`}
      target="_blank"
      rel="noopener noreferrer"
      download
    >
      <motion.span
        aria-hidden="true"
        animate={{
          x: position.x,
          y: position.y,
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.65,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 24, mass: 0.5 }}
        className={`pointer-events-none absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full blur-[1px] ${orbClassName}`}
      />
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </a>
  );
}

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="pt-32 pb-20 bg-navy text-cream relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-gold/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-48 h-48 rounded-full bg-gold/5 blur-2xl" />

      <div className="container mx-auto px-6 lg:px-16 relative">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs tracking-[0.3em] uppercase text-cream/60 mb-4">
              Contact
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
              Prêt(e) à <span className="italic text-gold">collaborer</span> ?
              Parlons-en !
            </h2>
            <p className="text-cream/70 leading-relaxed mb-12 max-w-md">
              Vous avez un projet en tête ? Je serais ravie d&apos;en discuter
              et de voir comment nous pouvons collaborer pour donner vie à votre
              vision.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <motion.a
                href="mailto:eva.bouala@edu.devinci.fr"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="group flex items-center gap-4 text-cream/80 hover:text-gold transition-colors duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-cream/20 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <span className="text-sm tracking-wide">
                  eva.bouala@edu.devinci.fr
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/eva-bouala-75b87b38b/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="group flex items-center gap-4 text-cream/80 hover:text-gold transition-colors duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-cream/20 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </span>
                <span className="text-sm tracking-wide">LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://github.com/EvaBouala"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="group flex items-center gap-4 text-cream/80 hover:text-gold transition-colors duration-300"
              >
                <span className="w-12 h-12 flex items-center justify-center border border-cream/20 group-hover:border-gold group-hover:bg-gold/10 transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <span className="text-sm tracking-wide">GitHub</span>
              </motion.a>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 mt-10"
            >
              <CursorFollowButton
                href="/cv/Eva-Bouala-Moderne-CV.pdf"
                className="px-6 py-3 bg-gold text-navy text-sm tracking-wide uppercase hover:bg-cream hover:text-navy transition-all duration-300"
                orbClassName="bg-gold/45"
              >
                CV français
              </CursorFollowButton>

              <CursorFollowButton
                href="/cv/Eva_Bouala_Resume_EN.pdf"
                className="px-6 py-3 border border-gold/50 bg-sand text-navy text-sm tracking-wide uppercase hover:bg-gold hover:text-navy transition-all duration-300"
                orbClassName="bg-navy/25"
              >
                English CV
              </CursorFollowButton>
            </motion.div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form
              action="https://formsubmit.co/eva.benamou01@gmail.com"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="_subject"
                value="Nouveau message depuis le portfolio"
              />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="text"
                name="_honey"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-3"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream placeholder-cream/30 focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-3"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream placeholder-cream/30 focus:border-gold focus:outline-none transition-colors duration-300"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-3"
                >
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream placeholder-cream/30 focus:border-gold focus:outline-none transition-colors duration-300"
                  placeholder="De quoi souhaitez-vous discuter ?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs tracking-[0.2em] uppercase text-cream/60 mb-3"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full bg-transparent border-b border-cream/30 pb-3 text-cream placeholder-cream/30 focus:border-gold focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Parlez-moi de votre projet..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto px-10 py-4 bg-gold text-navy text-sm tracking-[0.15em] uppercase hover:bg-cream transition-colors duration-300 mt-4"
              >
                Envoyer
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
