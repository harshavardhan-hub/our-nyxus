export default function TestimonialsSection() {
  const testimonials = [
    { text: "They built our MVP in record time. Phenomenal technical capability.", author: "Startup Founder" },
    { text: "The attention to detail and design aesthetic is world-class.", author: "VP of Product" },
    { text: "OurNyxus scaled our platform seamlessly saving us thousands in cloud costs.", author: "CTO" },
    { text: "From deployment to ongoing management, they are our trusted technical partner.", author: "CEO" },
  ];

  return (
    <section className="py-24 bg-neutral-100 overflow-hidden flex flex-col justify-center min-h-[50vh]">
      <div className="relative flex flex-col justify-center h-full">
        {/* Top Fade */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-neutral-100 to-transparent z-10" />
        {/* Bottom Fade */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-neutral-100 to-transparent z-10" />

        <div className="flex w-[200%] animate-marquee">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex-shrink-0 w-[80vw] md:w-[40vw] px-8">
              <p className="text-2xl md:text-4xl font-semibold leading-tight mb-4">&quot;{t.text}&quot;</p>
              <p className="text-neutral-500 font-medium">— {t.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
