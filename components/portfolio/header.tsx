"use client"

import { motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useState } from "react"

const navLinks = [
  { href: "#apropos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? "bg-cream/95 backdrop-blur-md shadow-sm" 
            : "bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="relative group">
              <span className="font-serif text-2xl text-navy">
                EB<span className="text-gold">.</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative text-sm tracking-widest text-navy/80 hover:text-navy transition-colors duration-300 group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 border border-navy text-navy text-xs tracking-[0.15em] uppercase hover:bg-navy hover:text-cream transition-all duration-300"
              >
                Travaillons ensemble
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-6">
                <span 
                  className={`absolute left-0 w-full h-px bg-navy transition-all duration-300 ${
                    isMobileMenuOpen ? "top-1/2 rotate-45" : "top-0"
                  }`}
                />
                <span 
                  className={`absolute left-0 top-1/2 w-full h-px bg-navy transition-all duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span 
                  className={`absolute left-0 w-full h-px bg-navy transition-all duration-300 ${
                    isMobileMenuOpen ? "top-1/2 -rotate-45" : "top-full"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-40 md:hidden"
      >
        <div 
          className="absolute inset-0 bg-navy/20 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <motion.nav
          initial={false}
          animate={{
            x: isMobileMenuOpen ? 0 : "100%",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="absolute right-0 top-0 h-full w-72 bg-cream shadow-2xl"
        >
          <div className="pt-24 px-8">
            <div className="space-y-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={false}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : 20,
                  }}
                  transition={{ duration: 0.3, delay: isMobileMenuOpen ? index * 0.1 : 0 }}
                  className="block font-serif text-2xl text-navy hover:text-gold transition-colors duration-300"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={false}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="mt-12 pt-8 border-t border-border"
            >
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-cream text-xs tracking-[0.15em] uppercase"
              >
                Me contacter
              </a>
            </motion.div>
          </div>
        </motion.nav>
      </motion.div>
    </>
  )
}
