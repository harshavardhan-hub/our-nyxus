"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Work", href: "#work" },
  { name: "Process", href: "#process" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-white/80 border-b border-black/5"
      >
        <Link href="/" className="flex items-center gap-2 group z-[60]" onClick={() => setIsOpen(false)}>
          <div className="relative w-8 h-8 md:w-10 md:h-10 overflow-hidden">
            <Image
              src="/logo.png"
              alt="OurNyxus Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <span className="font-bold text-lg tracking-tight group-hover:opacity-70 transition-opacity text-black">OurNyxus</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-black">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative overflow-hidden group py-1"
            >
              <span className="block group-hover:-translate-y-full transition-transform duration-300 ease-in-out">
                {item.name}
              </span>
              <span className="block absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-black rounded-full hover:scale-105 transition-transform duration-300 ease-out z-[60]">
          Get in touch
        </Link>
        
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 z-[60] group"
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black mb-1.5 transition-colors" 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-black transition-colors" 
          />
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[50] bg-white flex flex-col justify-center px-6 pt-24 pb-12 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 mt-auto mb-auto">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1), duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-5xl font-black tracking-tighter text-black hover:text-neutral-500 transition-colors block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-12"
            >
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center w-full py-4 text-lg font-bold text-white bg-black rounded-full"
              >
                Start a Project
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
