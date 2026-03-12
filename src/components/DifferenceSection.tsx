"use client";

import { motion } from "framer-motion";

export default function DifferenceSection() {
  return (
    <section className="py-32 bg-neutral-50 text-black relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-6 block">
            What Makes Us Different
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            WE GIVE A SH*T ABOUT <br className="hidden md:block"/> YOUR BUSINESS.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="bg-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-black/5"
          >
            <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-8">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">No Corporate BS.</h3>
            <p className="text-neutral-500 text-lg md:text-xl font-medium leading-relaxed">
              Most agencies will sell you a template and disappear when the check clears. We don&apos;t do that. We build bespoke, high-performance engines designed specifically for your growth. Honest communication, transparent pricing, and absolutely zero middle-men.
            </p>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="bg-black text-white p-10 md:p-12 rounded-[2rem] shadow-xl border border-white/5"
          >
            <div className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center mb-8">
               <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
               </svg>
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Engineering First.</h3>
            <p className="text-neutral-300 text-lg md:text-xl font-medium leading-relaxed">
              We aren&apos;t just pushing pixels. We are full-stack engineers obsessed with performance, cutting-edge architecture, and highly scalable code. Your product won&apos;t just look like an Awwwards winner — it will load in milliseconds and scale to millions seamlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
