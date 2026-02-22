import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Stats: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".stat-item").forEach((item) => {
        const numberEl = item.querySelector(".stat-val");
        const targetVal = parseInt(item.getAttribute("data-target") || "0");

        if (numberEl) {
          gsap.to(numberEl, {
            innerText: targetVal,
            duration: 2.5,
            snap: { innerText: 1 },
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%"
            }
          });
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-16 md:py-24 bg-charcoal text-white border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">

          <div className="stat-item pt-4 md:pt-0 md:pl-8 text-center md:text-left group cursor-default font-technical" data-target="12">
            <span className="text-5xl md:text-7xl font-bold font-display block mb-4 group-hover:text-primary transition-all duration-500 tracking-tighter">
              <span className="stat-val">0</span>M<span className="text-primary group-hover:text-white transition-colors duration-500">+</span>
            </span>
            <p className="text-white/60 text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2">Square Feet Developed</p>
          </div>

          <div className="stat-item pt-8 md:pt-0 md:pl-8 text-center md:text-left group cursor-default font-technical" data-target="42">
            <span className="text-5xl md:text-7xl font-bold font-display block mb-4 group-hover:text-primary transition-all duration-500 tracking-tighter">
              <span className="stat-val">0</span>
            </span>
            <p className="text-white/60 text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-white transition-all duration-300 transform group-hover:translate-x-2">Global Design Awards</p>
          </div>

          <div className="stat-item pt-8 md:pt-0 md:pl-8 text-center md:text-left group cursor-default font-technical" data-target="15">
            <span className="text-5xl md:text-7xl font-bold font-display block mb-4 group-hover:text-primary transition-colors duration-500 tracking-tighter">
              <span className="stat-val">0</span>B<span className="text-accent-gold group-hover:text-white transition-colors duration-500"></span>
            </span>
            <p className="text-white/60 text-[10px] tracking-[0.2em] font-bold uppercase group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-2 transition-transform">Asset Value Managed</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;