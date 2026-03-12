"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-neutral-50 selection:bg-black selection:text-white"
    >
      <motion.div 
        style={{ y, opacity, scale }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <Image
          src="/hero_bg_premium.png"
          alt="Premium Abstract Background"
          fill
          className="object-cover opacity-70"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/40 to-white/95 backdrop-blur-[2px]" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center px-6 w-full max-w-7xl mx-auto mt-20 md:mt-0 pt-24 md:pt-0">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="mb-8 flex flex-col items-center"
        >

          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-white/50 backdrop-blur-md shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide uppercase text-neutral-800">
              OurNyxus Agency
            </span>
          </motion.div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center w-full max-w-5xl"
        >
          <div className="flex flex-col items-center justify-center w-full">
            <div className="overflow-hidden pb-2 md:pb-4 w-full">
              <motion.h1 
                variants={itemVariants}
                className="text-[14vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-black tracking-tighter text-black mx-auto w-full text-center"
              >
                WE CRAFT
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-2 md:pb-4 w-full">
              <motion.h1 
                variants={itemVariants}
                className="text-[14vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-black tracking-tighter text-black mx-auto w-full text-center"
              >
                NEXT-GEN
              </motion.h1>
            </div>
            <div className="overflow-hidden pb-4 w-full">
               <motion.h1 
                variants={itemVariants}
                className="text-[14vw] md:text-[9vw] lg:text-[8vw] leading-[0.85] font-black tracking-tighter text-black mx-auto w-full text-center"
              >
                PRODUCTS.
              </motion.h1>
            </div>
          </div>

          <motion.div variants={itemVariants} className="mt-8 md:mt-12 flex justify-center">
            <p className="text-lg md:text-xl lg:text-2xl text-neutral-600 max-w-3xl font-medium leading-relaxed">
              We build the latest SaaS products and premium websites — designed, developed, deployed, managed, SEO optimized, and we grow business customers for our clients end to end.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link 
              href="#contact" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-black rounded-full hover:bg-neutral-800 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black w-full sm:w-auto"
            >
              <span className="mr-2">Start a Project</span>
              <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </Link>
            
            <Link 
              href="#work" 
              className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-black transition-all duration-300 bg-white border border-neutral-200 rounded-full hover:bg-neutral-50 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
            >
              <span className="relative">View Our Work</span>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 2, duration: 1 }}
         className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
      >
        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-bold text-neutral-400">Discover</span>
        <div className="w-[1px] h-12 md:h-16 bg-neutral-200 relative overflow-hidden">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[50%] bg-black"
            animate={{ y: ['-100%', '200%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
