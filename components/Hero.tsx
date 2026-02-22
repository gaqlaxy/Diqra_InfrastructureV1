import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax Background
      gsap.to(imageRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Industrial Reveal Animation
      const tl = gsap.timeline({ delay: 0.5 });

      tl
        .to(".reveal-text", {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out"
        }, "-=0.5")
        .to(".hero-btn", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out"
        }, "-=0.5")
        .to(".scroll-indicator", {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out"
        }, "-=0.2");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <header ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center bg-charcoal">
      <div className="absolute inset-0 z-0">
        <img
          ref={imageRef}
          src="https://images.unsplash.com/photo-1541976594385-e5171e5f216d?q=80&w=2670&auto=format&fit=crop"
          srcSet="
            https://images.unsplash.com/photo-1541976594385-e5171e5f216d?q=80&w=640&auto=format&fit=crop 640w,
            https://images.unsplash.com/photo-1541976594385-e5171e5f216d?q=80&w=1024&auto=format&fit=crop 1024w,
            https://images.unsplash.com/photo-1541976594385-e5171e5f216d?q=80&w=1920&auto=format&fit=crop 1920w,
            https://images.unsplash.com/photo-1541976594385-e5171e5f216d?q=80&w=2670&auto=format&fit=crop 2670w
          "
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 100vw"
          alt="Heavy Industrial Construction Site"
          className="w-full h-[120%] object-cover -mt-[5%] opacity-60"
          loading="eager"
          width="2670"
          height="1500"
          // @ts-ignore
          fetchpriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/80 to-transparent"></div>
        {/* Technical Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 md:px-12 pt-20 md:pt-0">
        <div ref={textRef} className="max-w-5xl">


          <h1 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl text-white leading-tight md:leading-[1.05] uppercase tracking-tight mb-4 md:mb-5">
            <span className="reveal-text block opacity-0 translate-y-[100px]">Engineering</span>
            <span className="reveal-text block opacity-0 translate-y-[100px]">Infrastructure</span>
            <span className="reveal-text block opacity-0 translate-y-[100px] text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">That Powers Growth.</span>
          </h1>

          <p className="reveal-text text-white/80 text-sm md:text-lg font-light max-w-2xl mb-6 md:mb-8 leading-relaxed border-l-2 border-white/20 pl-4 md:pl-6 opacity-0 translate-y-[100px]">
            Delivering commercial, government, and industrial construction projects with precision, scale, and uncompromised quality.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
            <Link
              to="/#projects"
              className="hero-btn group relative inline-flex items-center justify-center gap-3 bg-primary text-white px-6 py-3.5 md:px-8 md:py-4.5 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-white opacity-0 translate-y-[20px] shadow-lg hover:shadow-primary/20"
              aria-label="View our projects"
            >
              <span className="relative z-10 flex items-center gap-3">
                View Projects
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>

            <Link
              to="/contact"
              className="hero-btn group relative inline-flex items-center justify-center gap-3 border border-white/30 text-white px-6 py-3.5 md:px-8 md:py-4.5 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:border-white hover:text-charcoal opacity-0 translate-y-[20px]"
              aria-label="Request a proposal"
            >
              <span className="relative z-10 flex items-center gap-3">
                Request Proposal
                <FileText size={18} />
              </span>
              <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 scroll-indicator opacity-0 translate-y-4">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-[10px] uppercase tracking-widest text-white/50 mb-2 font-technical">Scroll</span>
          <ChevronDown size={20} className="text-white/50" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full border-t border-white/10 bg-charcoal/80 backdrop-blur-md py-4 md:py-6 hidden md:block">
        <div className="container mx-auto px-12 flex justify-between items-center text-white/50 text-[10px] font-bold tracking-[0.2em] uppercase font-technical">
          <span>ISO 9001:2015 Certified</span>
          <div className="flex gap-12">
            <span>Safety First Policy</span>
            <span>Est. 1994</span>
            <span>Turnkey Solutions</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;