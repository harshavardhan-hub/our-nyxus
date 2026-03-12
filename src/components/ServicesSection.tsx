"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MonitorSmartphone, Rocket, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
    title: "Design & Development",
    description: "Pixel-perfect, highly scalable architectures leveraging React and Next.js.",
    icon: MonitorSmartphone,
  },
  {
    title: "Rapid Deployment",
    description: "Zero-downtime launches with CI/CD and secure cloud infrastructures.",
    icon: Rocket,
  },
  {
    title: "Growth & SEO",
    description: "Data-driven strategies, pristine Core Web Vitals, and conversion optimization.",
    icon: TrendingUp,
  },
  {
    title: "Ongoing Management",
    description: "Continuous monitoring, feature updates, and uncompromised security.",
    icon: ShieldCheck,
  }
];

export default function ServicesSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-neutral-950 text-white min-h-[100dvh] flex flex-col justify-center" id="services">
      <div className="max-w-7xl mx-auto w-full">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Expertise.</h2>
          <p className="text-lg md:text-xl text-neutral-400 max-w-2xl">
            We don&apos;t just build websites. We engineer premium digital experiences that command attention and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((svc, i) => (
            <TiltCard key={i} title={svc.title} description={svc.description} Icon={svc.icon} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TiltCard({ title, description, Icon, index }: { title: string, description: string, Icon: React.ElementType, index: number }) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="tilt-card relative h-72 md:h-80 w-full rounded-2xl bg-neutral-900 border border-neutral-800 p-8 md:p-10 flex flex-col justify-between group cursor-pointer"
    >
      <div
        style={{ transform: "translateZ(50px)" }}
        className="w-14 h-14 rounded-full bg-neutral-800 flex items-center justify-center text-white group-hover:bg-white group-hover:text-black transition-[background-color,color] duration-400"
      >
        <Icon size={24} />
      </div>

      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-neutral-400">{description}</p>
      </div>

      {/* Decorative Blur */}
      <div
        style={{ transform: "translateZ(-50px)" }}
        className="absolute inset-x-0 -bottom-10 h-1/2 bg-white/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
    </motion.div>
  );
}
