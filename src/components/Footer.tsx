import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        <div className="flex flex-col gap-6 max-w-sm">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center overflow-hidden">
                <Image src="/logo.png" alt="logo" width={32} height={32} className="w-full h-full object-cover"/>
            </div>
            <span className="text-xl font-bold tracking-tight">OurNyxus</span>
          </div>
          <p className="text-neutral-400 text-sm leading-relaxed">
            We build the latest SaaS products and beautifully designed websites for businesses.
            Designed, deployed, managed, and grown.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Company</h4>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Work</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Process</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Services</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Team</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-semibold text-sm">Social</h4>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Twitter / X</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">LinkedIn</a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors text-sm">Instagram</a>
          </div>
          <div className="flex flex-col gap-4 col-span-2 md:col-span-1">
            <h4 className="font-semibold text-sm">Contact</h4>
            <a href="mailto:hello@ournyxus.com" className="text-neutral-400 hover:text-white transition-colors text-sm">hello@ournyxus.com</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-neutral-800 flex flex-col-reverse md:flex-row items-center justify-between gap-4 text-xs text-neutral-500 relative z-10">
        <p>© {new Date().getFullYear()} OurNyxus. All rights reserved.</p>
        <p>Awwwards winning agency.</p>
      </div>

      {/* Decorative large text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.02] whitespace-nowrap pointer-events-none select-none">
        WE GROW.
      </div>
    </footer>
  );
}
