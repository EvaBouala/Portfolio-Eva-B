"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";

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
      className={`group relative overflow-hidden ${className}`}
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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Decorative Elements */}
      <motion.div
        animate={{ y: [0, -12, 0], x: [0, 6, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[15%] w-24 h-24 rounded-full bg-navy opacity-90"
      />
      <motion.div
        animate={{ y: [0, 10, 0], x: [0, -8, 0], scale: [1, 0.96, 1] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.6,
        }}
        className="absolute top-48 right-[10%] w-16 h-16 rounded-full bg-gold opacity-80"
      />
      <motion.div
        animate={{ y: [0, -8, 0], x: [0, 10, 0], scale: [1, 1.03, 1] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
        className="absolute bottom-32 right-[20%] w-20 h-20 rounded-full bg-tan opacity-70"
      />

      <div className="container mx-auto px-6 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6"
            >
              Portfolio 2026
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-light leading-[1.1] text-foreground mb-8"
            >
              <span className="block">Eva</span>
              <span className="block italic text-gold">Bouala</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-xl md:text-2xl font-normal text-foreground tracking-wide">
                Étudiante en bachelor Chef de Projet Digital (spécialisation
                développement web)
              </h2>

              <p className="text-muted-foreground leading-relaxed text-base max-w-md">
                Je crée des expériences digitales où le code rencontre
                l&apos;esthétique. Chaque projet est une opportunité de
                fusionner performance technique et sensibilité visuelle.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <CursorFollowButton
                  href="#projets"
                  className="px-6 py-3 border border-navy text-navy text-sm tracking-wide uppercase hover:bg-navy hover:text-cream transition-all duration-300"
                  orbClassName="bg-gold/45"
                >
                  Voir mes projets
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
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
                </CursorFollowButton>
                <CursorFollowButton
                  href="#contact"
                  className="px-6 py-3 bg-gold text-navy text-sm tracking-wide uppercase hover:bg-navy hover:text-cream transition-all duration-300"
                  orbClassName="bg-cream/35"
                >
                  Me contacter
                </CursorFollowButton>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block overflow-visible"
          >
            <div className="relative aspect-3/4 max-w-md ml-auto">
              {/* Floating circles behind the frame */}
              <motion.div
                animate={{ y: [0, -14, 0], x: [0, -10, 0] }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-10 -right-8 w-20 h-20 rounded-full bg-gold/80 z-0"
              />
              <motion.div
                animate={{ y: [0, 12, 0], x: [0, 8, 0] }}
                transition={{
                  duration: 7.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.4,
                }}
                className="absolute top-[45%] -left-10 w-14 h-14 rounded-full bg-navy/80 z-0"
              />
              <motion.div
                animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="absolute -bottom-8 right-6 w-16 h-16 rounded-full bg-tan/90 z-0"
              />

              {/* Main Image Container */}
              <div className="absolute inset-0 bg-cream overflow-hidden z-10">
                <img
                  src="/images/fille.png"
                  alt="Portrait"
                  className="absolute inset-0 w-full h-full object-contain object-center scale-[0.94]"
                />
                <div
                  className="absolute inset-0 bg-linear-to-br from-tan/20 to-gold/15"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23c9a962' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
              </div>

              {/* Floating accent */}
              <div className="absolute -left-8 top-1/4 w-1 h-32 bg-gold z-20" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-navy opacity-30 z-20" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Scroll
          </span>
          <div className="w-px h-12 bg-navy/30 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-x-0 h-1/2 bg-navy"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
