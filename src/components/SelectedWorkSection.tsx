"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const projects = [
  {
    title: "NexAnalytics",
    category: "SaaS Dashboard",
    description: "A data-driven analytics platform with real-time tracking.",
    image: "/mockup_saas.png",
    colSpan: "col-span-12 md:col-span-8",
  },
  {
    title: "Sole Street",
    category: "E-Commerce",
    description: "High-end streetwear lifestyle brand e-commerce experience.",
    image: "/mockup_ecommerce.png",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "RankFlow",
    category: "SEO Software",
    description: "Performance tracking software for technical SEO.",
    image: "/portfolio_mockup_1773295138106.png",
    colSpan: "col-span-12 md:col-span-4",
  },
  {
    title: "Studio Vertex",
    category: "Agency Site",
    description: "Immersive luxury creative agency portfolio.",
    image: "/mockup_agency.png",
    colSpan: "col-span-12 md:col-span-8",
  },
  {
    title: "LaunchPad",
    category: "Landing Page",
    description: "High-converting landing page for a B2B startup.",
    image: "/services_mockup_1773295053809.png",
    colSpan: "col-span-12 md:col-span-6",
  },
  {
    title: "Luxe Stays",
    category: "Booking App",
    description: "Elegant reservation system for luxury resorts.",
    image: "/mockup_saas.png",
    colSpan: "col-span-12 md:col-span-6",
  }
];

export default function SelectedWorkSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative py-32 bg-white text-black" id="work">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-20 overflow-hidden text-center md:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[56px] xl:text-[68px] font-black tracking-tighter"
          >
            SELECTED <span className="text-neutral-300">WORK.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="mt-6 text-lg md:text-2xl lg:text-lg xl:text-xl text-neutral-500 font-medium max-w-2xl"
          >
            A curated showcase of our most impactful digital projects, engineered for growth and designed to inspire.
          </motion.p>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className={`group relative rounded-[2rem] overflow-hidden bg-neutral-100 ${project.colSpan} min-h-[400px] md:min-h-[500px] cursor-pointer`}
            >
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="img-zoom object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  quality={90}
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 md:opacity-60 group-hover:opacity-80 transition-opacity duration-400" />

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 translate-y-0 md:translate-y-8 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-3 mb-3 md:mb-4 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 delay-75">
                  <span className="px-4 py-1.5 text-xs font-bold tracking-widest text-white bg-black/40 backdrop-blur-md rounded-full border border-white/20 uppercase">
                    {project.category}
                  </span>
                </div>
                <div className="flex justify-between items-end gap-4">
                  <div>
                    <h3 className="text-3xl md:text-5xl lg:text-[32px] xl:text-[40px] font-bold text-white tracking-tight mb-2 drop-shadow-lg">
                      {project.title}
                    </h3>
                    <p className="text-white/90 max-w-md text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-400 delay-100">
                      {project.description}
                    </p>
                  </div>
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full flex-shrink-0 bg-white text-black flex items-center justify-center translate-y-0 opacity-100 md:translate-y-12 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 transition-[transform,opacity] duration-500 ease-out origin-center">
                    <svg className="w-5 h-5 md:w-6 md:h-6 -rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
