"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    question: "How long does a typical website or SaaS build take?",
    answer: "For a premium website, our timeline is typically 3-6 weeks from discovery to launch. For custom SaaS platforms, minimum viable products (MVPs) take around 8-12 weeks depending on feature complexity. We engineer for speed without sacrificing custom quality."
  },
  {
    question: "Do you use templates or is everything custom?",
    answer: "Every single project is 100% custom-designed and engineered. We don&apos;t use WordPress templates or drag-and-drop builders. We write scalable code using React, Next.js, and modern databases to ensure maximum performance and uniqueness that drives conversions."
  },
  {
    question: "What happens after the project is launched?",
    answer: "We don&apos;t just hand over the keys and disappear. We offer elite ongoing management, maintenance, and growth packages. This includes dedicated SEO optimization, weekly feature updates, security patches, and scaling cloud infrastructure seamlessly as your user base grows."
  },
  {
    question: "How much does it cost to work with OurNyxus?",
    answer: "Our pricing is entirely bespoke and depends heavily on the scope and complexity of your project. As a high-end agency, our premium websites typically start at $5,000, while custom SaaS platforms start around $15,000. We provide completely transparent, itemized quotes after our initial strategy session."
  },
  {
    question: "Do you handle the domain, hosting, and deployment?",
    answer: "Yes, end-to-end. We configure DNS, SSL certificates, scalable cloud hosting architectures (Vercel, AWS), and robust CI/CD deployment pipelines. We ensure your application is deployed flawlessly with zero downtime architecture from day one."
  },
  {
    question: "Can you redesign and optimize an existing product?",
    answer: "Absolutely. We specialize in taking legacy applications or underperforming websites and completely revamping their UI/UX and underlying codebase to meet modern Awwwards-level standards, drastically improving page speed and conversion rates."
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleOpen = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-32 bg-neutral-50 text-black relative" id="faq">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="text-center mb-20"
        >
          <span className="text-sm font-bold tracking-widest uppercase text-neutral-400 mb-6 block">
            Frequently Asked Questions
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-[56px] xl:text-[68px] font-black tracking-tighter">
            YOUR QUESTIONS, <br /> <span className="text-neutral-400">ANSWERED.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-black/10 rounded-3xl overflow-hidden bg-white hover:border-black/30 transition-colors"
              >
                <button 
                  onClick={() => toggleOpen(index)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none focus:ring-2 focus:ring-black/5"
                >
                  <span className="text-lg md:text-2xl lg:text-xl xl:text-2xl font-bold pr-8 tracking-tight">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="flex-shrink-0 w-8 h-8 rounded-full border border-black flex items-center justify-center text-black"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </motion.div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 md:px-8 pb-8 pt-2 text-lg text-neutral-500 font-medium leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
