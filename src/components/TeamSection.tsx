"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";

const team = [
  {
    name: "Harsha Vardhan Yanakandla",
    role: "Chief Executive Officer",
    image: "/harsha.jpg",
  },
  {
    name: "Akhila",
    role: "Chief Technology Officer",
    image: "/akhila.png", // Wait, image is .png for akhila, .jpg for harsha
  }
];

export default function TeamSection() {
  return (
    <section className="py-32 bg-white text-black min-h-[100dvh] flex items-center" id="team">
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="mb-20">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Leadership.</h2>
        </div>

        <div className="flex flex-col gap-8">
          {team.map((member, i) => (
            <TeamRow key={i} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamRow({ member }: { member: { name: string, role: string, image: string } }) {
  const [isHovered, setIsHovered] = useState(false);
  const rowRef = useRef<HTMLDivElement>(null);
  
  // Magnetic effect state
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!rowRef.current) return;
    const rect = rowRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <div 
      ref={rowRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col md:flex-row items-start md:items-center justify-between py-12 border-t border-b -mt-[1px] border-neutral-200 group cursor-pointer"
    >
      <h3 className="text-4xl md:text-6xl font-bold tracking-tighter group-hover:pl-4 transition-all duration-500 ease-out z-10">
        {member.name}
      </h3>
      <p className="text-lg md:text-2xl text-neutral-500 z-10 mt-4 md:mt-0 font-medium tracking-tight">
        {member.role}
      </p>

      {/* Hover Image Reveal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.8,
          x: mousePosition.x - 150, 
          y: mousePosition.y - 150,
        }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="absolute left-0 top-0 pointer-events-none z-0 w-[300px] h-[300px] overflow-hidden rounded-2xl shadow-xl hidden md:block"
      >
        <Image
          src={member.image}
          alt={member.name}
          sizes="300px"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Mobile visible image */}
      <div className="mt-8 md:hidden w-full h-[300px] relative rounded-2xl overflow-hidden shadow-lg">
         <Image
          src={member.image}
          alt={member.name}
          sizes="(max-width: 768px) 100vw, 300px"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
