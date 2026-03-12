"use client";

import { motion } from "framer-motion";

const technologies = [
  "Next.js", "React", "Node.js", "TypeScript", 
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Framer Motion", 
  "Vercel", "AWS", "Supabase", "Figma", 
  "Next.js", "React", "Node.js", "TypeScript", 
  "PostgreSQL", "MongoDB", "Tailwind CSS", "Framer Motion", 
  "Vercel", "AWS", "Supabase", "Figma"
];

export default function TechStackSection() {
  return (
    <section className="py-24 bg-neutral-900 text-white overflow-hidden" id="tech">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
        >
          Technologies We Use
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 max-w-2xl mx-auto text-lg font-medium"
        >
          We build on the most modern, powerful, and scalable tech stack available today.
        </motion.p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />
        
        <motion.div
           className="marquee-track flex whitespace-nowrap gap-6 py-4 items-center"
           style={{ backfaceVisibility: "hidden" }}
           animate={{ x: ["0%", "-50%"] }}
           transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
        >
          {technologies.map((tech, i) => (
            <div 
              key={i} 
              className="px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-lg md:text-xl font-bold tracking-tight hover:bg-white/10 transition-colors duration-300 cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
