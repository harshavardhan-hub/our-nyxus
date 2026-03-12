"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Quote, Sparkles } from "lucide-react";

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
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  // Avatar styles
  const avatarColors = ["bg-blue-100 text-blue-700", "bg-purple-100 text-purple-700", "bg-pink-100 text-pink-700", "bg-orange-100 text-orange-700"];
  const avatarLetters = ["SJ", "MR", "TK", "AL"];
  const zIndices = ["z-40", "z-30", "z-20", "z-10"];

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-neutral-50 selection:bg-black selection:text-white py-24 lg:py-0"
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
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/50 to-white/95 backdrop-blur-[2px]" />
        
        {/* Subtle dot pattern like the reference design */}
        <div className="absolute inset-0 opacity-40 mix-blend-multiply" style={{ backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      </motion.div>

      {/* Floating Review Cards (Desktop Only) */}
      <div className="hidden lg:block absolute left-[1%] xl:left-[4%] top-[45%] -translate-y-1/2 z-20 w-[240px] xl:w-[280px]">
        <motion.div
           initial={{ opacity: 0, x: -50, rotate: -15 }}
           animate={{ opacity: 1, x: 0, rotate: -6 }}
           whileHover={{ rotate: 0, scale: 1.02 }}
           transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
           className="bg-white rounded-[20px] p-5 xl:p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 relative group cursor-default"
        >
          <Quote className="absolute top-4 right-4 w-5 h-5 xl:w-6 xl:h-6 text-neutral-100/80" fill="currentColor" />
          <p className="text-xs xl:text-sm text-neutral-600 mb-4 xl:mb-5 leading-relaxed relative z-10 font-medium pt-2">
            &quot;We were close to giving up. OurNyxus completely rebuilt our platform and delivered our frontend end-to-end.&quot;
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] xl:text-xs font-bold text-neutral-900">- Sarah J., CEO, TechFlow</span>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-[1%] xl:right-[4%] top-[55%] -translate-y-1/2 z-20 w-[240px] xl:w-[280px]">
        <motion.div
           initial={{ opacity: 0, x: 50, rotate: 15 }}
           animate={{ opacity: 1, x: 0, rotate: 6 }}
           whileHover={{ rotate: 0, scale: 1.02 }}
           transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
           className="bg-white rounded-[20px] p-5 xl:p-6 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 relative group cursor-default"
        >
          <Quote className="absolute top-4 right-4 w-5 h-5 xl:w-6 xl:h-6 text-neutral-100/80" fill="currentColor" />
          <p className="text-xs xl:text-sm text-neutral-600 mb-4 xl:mb-5 leading-relaxed relative z-10 font-medium pt-2">
             &quot;OurNyxus brought our vision to life: an AI-powered platform with an award-winning UI/UX experience.&quot;
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] xl:text-xs font-bold text-neutral-900">- Michael R., Founder, Elevate</span>
          </div>
        </motion.div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center px-4 md:px-6 w-full max-w-[800px] xl:max-w-4xl mx-auto mt-12 lg:-mt-6">
        
        {/* Top Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm shadow-sm hover:shadow-md transition-all cursor-default group">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs font-semibold tracking-wide text-neutral-700">
              Only 2 open slots available!
            </span>
            <ArrowRight className="w-3 h-3 text-neutral-400 group-hover:translate-x-1 transition-transform" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center w-full relative z-30 flex flex-col items-center"
        >
          <div className="w-full relative flex flex-col items-center">
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-[52px] lg:text-[56px] xl:text-[68px] leading-[1.15] lg:leading-[1.05] font-bold tracking-tight text-neutral-900 mx-auto w-full text-center flex flex-col items-center justify-center whitespace-nowrap"
            >
              <span>World-Class Digital Agency</span>
              <span className="flex items-center justify-center mt-1 lg:mt-2">
                Crafting Next-Gen{" "}
                <motion.span 
                  initial={{ rotate: -20, scale: 0.5, opacity: 0 }} 
                  animate={{ rotate: 5, scale: 1, opacity: 1 }} 
                  whileHover={{ rotate: 0, scale: 1.1 }}
                  transition={{ delay: 1, type: "spring", stiffness: 200 }} 
                  className="inline-flex items-center justify-center bg-black text-white p-1.5 sm:p-2 md:p-3 rounded-xl md:rounded-2xl mx-1.5 sm:mx-2 align-middle shadow-xl cursor-default"
                >
                  <Sparkles strokeWidth={2.5} className="w-4 h-4 sm:w-5 sm:h-5 md:w-8 md:h-8 text-white flex-shrink-0" />
                </motion.span>{" "}
                Products
              </span>
            </motion.h1>
          </div>

          <motion.div variants={itemVariants} className="mt-6 flex justify-center w-full">
            <p className="text-sm sm:text-base md:text-lg text-neutral-600 max-w-xl font-medium leading-relaxed px-4 md:px-0 text-center text-balance">
              We build and scale premium SaaS products and award-winning websites. From design and development to SEO and customer growth—we handle it all end-to-end.
            </p>
          </motion.div>
          
          {/* CTA Group */}
          <motion.div variants={itemVariants} className="mt-8 md:mt-10 flex flex-col items-center justify-center gap-6 w-full relative z-40">
            <Link 
              href="#contact" 
              className="group relative flex items-center justify-center px-1 text-base font-semibold text-white transition-all duration-300 bg-neutral-900 rounded-full hover:bg-black shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black h-14 pr-8 pl-1 w-[220px]"
            >
               <motion.div 
                  className="bg-[#2a66ff] rounded-full w-12 h-12 flex items-center justify-center absolute left-1"
                  layoutId="cta-icon"
               >
                 <ArrowRight strokeWidth={2.5} className="w-5 h-5 text-white" />
               </motion.div>
              <span className="ml-[44px] tracking-wide font-bold">Start a Project</span>
            </Link>
            
            {/* Reviews / Avatars */}
            <div className="flex flex-col items-center gap-2">
              <div className="flex -space-x-3 hover:space-x-1 transition-all duration-300 cursor-default">
                 {avatarLetters.map((letter, i) => (
                    <div key={i} className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white ${avatarColors[i]} flex items-center justify-center text-[10px] md:text-xs font-bold relative ${zIndices[i]} shadow-sm hover:-translate-y-1 transition-transform`}>
                        {letter}
                    </div>
                 ))}
                 <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-[10px] md:text-xs font-bold text-neutral-600 z-0 shadow-sm relative">
                    +30
                 </div>
              </div>
              <div className="flex flex-col items-center gap-1 cursor-default group">
                 <div className="flex gap-1 text-[#FFB800]">
                   {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-3 h-3 md:w-4 md:h-4" fill="currentColor" strokeWidth={0} />
                   ))}
                 </div>
                 <span className="text-[9px] md:text-xs text-neutral-500 font-bold tracking-wider uppercase group-hover:text-neutral-700 transition-colors">From 30+ reviews</span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Mobile Testimonial Cards */}
        <div className="w-full flex flex-col gap-5 mt-14 lg:hidden px-2 relative z-50">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
             className="bg-white rounded-[20px] p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 relative w-full max-w-[340px] mx-auto"
          >
            <Quote className="absolute top-4 right-4 w-5 h-5 text-neutral-100/80" fill="currentColor" />
            <p className="text-[13px] text-neutral-600 mb-4 leading-relaxed relative z-10 font-medium pt-2 text-center">
              &quot;We were close to giving up. OurNyxus completely rebuilt our platform and delivered our frontend end-to-end.&quot;
            </p>
            <div className="flex flex-col items-center gap-1 pt-2 border-t border-neutral-50/50">
              <span className="text-[11px] font-bold text-neutral-900">- Sarah J., CEO, TechFlow</span>
            </div>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
             className="bg-white rounded-[20px] p-5 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.08)] border border-neutral-100 relative w-full max-w-[340px] mx-auto"
          >
            <Quote className="absolute top-4 right-4 w-5 h-5 text-neutral-100/80" fill="currentColor" />
            <p className="text-[13px] text-neutral-600 mb-4 leading-relaxed relative z-10 font-medium pt-2 text-center">
               &quot;OurNyxus brought our vision to life: an AI-powered platform with an award-winning UI/UX experience.&quot;
            </p>
            <div className="flex flex-col items-center gap-1 pt-2 border-t border-neutral-50/50">
              <span className="text-[11px] font-bold text-neutral-900">- Michael R., Founder, Elevate</span>
            </div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
