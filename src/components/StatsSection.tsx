"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Premium Projects Delivered", value: "150+" },
  { label: "Client Satisfaction", value: "99%" },
  { label: "Average Load Time", value: "< 1s" },
  { label: "Global Presence (Countries)", value: "24" },
];

export default function StatsSection() {
  return (
    <section className="py-32 bg-black text-white relative overflow-hidden" id="stats">
      <div className="absolute inset-0 bg-[url('/hero_bg_premium.png')] bg-cover bg-center opacity-10 pointer-events-none mix-blend-overlay" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 40 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
           className="text-center mb-24"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-500 mb-6 block">
            A Number That Tells Our Story
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-[56px] xl:text-[68px] font-black tracking-tighter">
            PROVEN BY <span className="text-neutral-500">SCALE.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center text-center group"
            >
               <div className="text-6xl md:text-7xl lg:text-[64px] xl:text-[76px] font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 group-hover:scale-110 transition-transform duration-500 cursor-default select-none">
                 {stat.value}
               </div>
               <div className="text-lg md:text-xl font-bold text-neutral-400">
                 {stat.label}
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
