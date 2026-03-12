"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useLenis } from "@/context/LenisContext";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "FAQ", href: "#faq" }
];


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lenis = useLenis();

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace("#", "");
    history.pushState(null, "", href);
    if (lenis) {
      lenis.scrollTo(`#${id}`, { offset: 0, duration: 1.4 });
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [lenis]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] flex justify-center w-full pointer-events-none pt-4 md:pt-6 px-4 md:px-6">
        <motion.header
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between w-full max-w-7xl transition-all duration-500 ${
            scrolled || isOpen ? "py-2 md:py-3" : "py-4 md:py-5"
          }`}
        >
          {/* Logo Area */}
          <Link 
            href="/" 
            className="flex items-center gap-2 group z-[60] bg-white/90 border border-black/5 shadow-sm rounded-full pr-4 pl-1.5 py-1.5 backdrop-blur-md hover:scale-105 transition-transform duration-300" 
            onClick={() => setIsOpen(false)}
          >
            <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 overflow-hidden rounded-full">
              <Image
                src="/logo.png"
                alt="OurNyxus Logo"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <span className="font-extrabold text-sm md:text-base tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-black to-neutral-700 group-hover:to-black transition-all duration-300">
              OurNyxus
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center p-1.5 bg-white/60 border border-white/50 shadow-sm rounded-full backdrop-blur-md">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-5 py-2 rounded-full overflow-hidden group text-sm font-semibold text-black/80 hover:text-black transition-colors duration-300"
              >
                <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                <span className="relative z-10">{item.name}</span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center z-[60]">
            <button
              onClick={() => scrollToSection("#contact")}
              className="group relative inline-flex items-center justify-center px-7 py-2.5 text-sm font-semibold text-white bg-black rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <span className="absolute inset-0 w-full h-full rounded-full opacity-0 group-hover:opacity-20 bg-white transition-opacity duration-300" />
              <span className="relative">Get in touch</span>
            </button>
          </div>

          {/* Mobile Menu Button - Using explicit rotation variables since isOpen dynamically animates */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative flex flex-col justify-center items-center w-11 h-11 z-[60] bg-white/90 rounded-xl border border-black/5 shadow-sm active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            <motion.span
              animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -4 }}
              className="absolute w-5 h-[2px] bg-black rounded-full"
            />
            <motion.span
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
              className="absolute w-5 h-[2px] bg-black rounded-full"
            />
            <motion.span
              animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 4 }}
              className="absolute w-5 h-[2px] bg-black rounded-full"
            />
          </button>
        </motion.header>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[50] bg-white flex flex-col justify-center px-6 pt-24 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-4 md:gap-6 mt-auto mb-auto">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.05), duration: 0.5 }}
                >
                  <button
                    onClick={() => { setIsOpen(false); scrollToSection(item.href); }}
                    className="text-4xl md:text-5xl font-black tracking-tighter text-black hover:text-neutral-500 transition-colors block py-1 text-left w-full"
                  >
                    {item.name}
                  </button>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12"
            >
              <button
                onClick={() => { setIsOpen(false); scrollToSection("#contact"); }}
                className="inline-flex items-center justify-center w-full py-4 text-lg font-bold text-white bg-black rounded-full"
              >
                Start a Project
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
