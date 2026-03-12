"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Strategy",
    desc: "We learn your business deeply — goals, audience, competitors, and market position. We build a strategy before touching design or code.",
    color: "bg-white text-black border-black/5",
  },
  {
    num: "02",
    title: "UI/UX Design",
    desc: "Every pixel is intentional. We design high-fidelity screens that convert visitors into customers — modern, clean, and on-brand.",
    color: "bg-neutral-50 text-black border-black/5",
  },
  {
    num: "03",
    title: "Full Stack Development",
    desc: "We build on the latest tech stack — Next.js, React, Node.js, databases, APIs — production-ready, fast, and scalable from day one.",
    color: "bg-neutral-900 text-white border-white/10",
  },
  {
    num: "04",
    title: "Deployment & Launch",
    desc: "We deploy, configure hosting, set up domains, performance optimize, and make sure everything is live and bulletproof before handoff.",
    color: "bg-black text-white border-white/10",
  },
  {
    num: "05",
    title: "SEO & Growth",
    desc: "Post-launch we run technical SEO, content strategy, performance tracking, and conversion optimization to continuously grow your business customers.",
    color: "bg-[#0a0a0a] text-white border-white/10",
  },
  {
    num: "06",
    title: "Ongoing Management",
    desc: "We don't disappear. We monitor, maintain, update, and scale your product — so you can focus on running your business.",
    color: "bg-white text-black border-black/10",
  }
];

export default function ProcessSection() {
  return (
    <section 
      className="relative bg-neutral-100 text-black w-full" 
      id="process"
    >
      <div className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto text-center md:text-left">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter"
        >
          OUR <span className="text-neutral-400">PROCESS.</span>
        </motion.h2>
        <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 1 }}
            className="mt-6 text-xl md:text-2xl text-neutral-500 font-medium max-w-3xl"
        >
          A proven methodology to transform complex ideas into beautifully engineered digital reality.
        </motion.p>
      </div>

      <div className="pb-32 px-4 md:px-12 max-w-6xl mx-auto flex flex-col gap-6 md:gap-8">
        {steps.map((step, index) => {
          return (
            <Card 
              key={index}
              step={step}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
}

function Card({ step, index }: { step: { num: string; title: string; desc: string; color: string }, index: number }) {
  return (
    <div 
      className={`sticky flex flex-col md:flex-row items-start md:items-center justify-between p-8 md:p-16 rounded-[2.5rem] md:rounded-[3rem] border shadow-xl transition-all duration-500 hover:shadow-2xl ${step.color} min-h-[350px]`}
      style={{ top: `calc(10vh + ${index * 30}px)` }}
    >
      <div className="w-full md:w-1/3 mb-8 md:mb-0">
         <span className="text-6xl md:text-8xl font-black opacity-20 tracking-tighter block mb-4">
           {step.num}
         </span>
         <h3 className="text-3xl md:text-5xl font-bold tracking-tight">
           {step.title}
         </h3>
      </div>
      <div className="w-full md:w-1/2">
         <p className="text-lg md:text-2xl opacity-80 leading-relaxed font-medium">
           {step.desc}
         </p>
         <div className="mt-8 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center opacity-50">
             <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
             </svg>
           </div>
           <span className="text-sm font-bold uppercase tracking-widest opacity-60">
             Phase {index + 1}
           </span>
         </div>
      </div>
    </div>
  );
}
