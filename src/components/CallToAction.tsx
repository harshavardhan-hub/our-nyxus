"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function CallToAction() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.1, 5]);

  return (
    <section ref={containerRef} className="relative h-[110vh] md:h-[200vh] bg-white">
      <div className="sticky top-0 h-[100dvh] overflow-hidden flex items-center justify-center">

        {/* The expanding black circle reveal */}
        <motion.div
          style={{ scale }}
          className="absolute w-[50vh] h-[50vh] bg-black rounded-full pointer-events-none"
        />

        {/* Content overlaid on top, masking to white where background is black via blend modes or just waiting until circle is large */}
        <div className="relative z-10 text-center mix-blend-difference">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-black text-white px-4 tracking-tighter"
          >
            LET&apos;S TALK.
          </motion.h2>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{ delay: 0.4 }}
            className="mt-8 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform"
          >
            Start a project
          </motion.button>
        </div>
      </div>
    </section>
  );
}
