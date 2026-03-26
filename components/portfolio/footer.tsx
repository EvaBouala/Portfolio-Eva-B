"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 bg-navy border-t border-cream/10">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.a
            href="#"
            whileHover={{ scale: 1.05 }}
            className="font-serif text-2xl text-cream"
          >
            EB<span className="text-gold">.</span>
          </motion.a>

          {/* Copyright */}
          <p className="text-cream/50 text-sm tracking-wide">
            © {new Date().getFullYear()} Eva Bouala. Tous droits réservés.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {[
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/in/eva-bouala-75b87b38b/",
              },
              { label: "GitHub", href: "https://github.com/EvaBouala" },
              { label: "Email", href: "mailto:eva.bouala@edu.devinci.fr" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 text-xs tracking-[0.15em] uppercase hover:text-gold transition-colors duration-300"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
