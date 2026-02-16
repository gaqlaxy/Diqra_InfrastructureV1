import React, { useEffect, useRef } from 'react';
import { Building2, Warehouse, Landmark } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const ServicesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header Reveal
      gsap.to(".header-reveal", {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out"
      });

      // Service Sections Reveal
      gsap.utils.toArray<HTMLElement>(".service-block").forEach((section) => {
        gsap.from(section.querySelectorAll(".animate-content"), {
          y: 40,
          opacity: 0,
          duration: 0.8,
          stagger: 0.1,
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
          }
        });

        gsap.from(section.querySelector(".animate-image"), {
            scale: 1.1,
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 75%",
            }
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-charcoal min-h-screen pt-24 md:pt-32 text-white">
      <SEO 
        title="Our Services | Commercial, Industrial & Government Construction" 
        description="Specialized construction services for high-rise commercial buildings, large-scale industrial plants, and robust government infrastructure."
      />
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <span className="header-reveal text-accent-gold font-bold tracking-widest uppercase text-xs mb-4 block opacity-0 translate-y-[50px]">Our Expertise</span>
        <h1 className="header-reveal font-display font-bold text-4xl md:text-7xl text-white leading-tight md:leading-[1.1] mb-12 md:mb-20 opacity-0 translate-y-[50px]">
          Sector-Specific <br/> Construction Solutions.
        </h1>

        <div className="space-y-20 md:space-y-32">
            {/* Commercial */}
            <div className="service-block grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="animate-content w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-8">
                        <Building2 size={32} className="text-white" />
                    </div>
                    <h2 className="animate-content text-2xl md:text-3xl font-bold font-display mb-6">Commercial Construction</h2>
                    <p className="animate-content text-white/60 text-base md:text-lg leading-relaxed mb-8">
                        We build Grade-A office spaces, retail complexes, and IT parks that define skylines. Our focus is on maximizing floor plate efficiency, ensuring LEED certification, and delivering high-speed vertical construction.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Composite Steel Structures</li>
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">High-End Facade Engineering</li>
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Smart Building Integration</li>
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Multi-Level Basements</li>
                    </ul>
                </div>
                <div className="order-1 lg:order-2 h-[250px] md:h-[400px] bg-gray-800 overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" className="animate-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Commercial Construction" loading="lazy" />
                </div>
            </div>

            {/* Industrial */}
            <div className="service-block grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="h-[250px] md:h-[400px] bg-gray-800 overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1565610222536-ef125c59da30?q=80&w=2670&auto=format&fit=crop" className="animate-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Industrial Construction" loading="lazy" />
                </div>
                <div>
                    <div className="animate-content w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-8">
                        <Warehouse size={32} className="text-white" />
                    </div>
                    <h2 className="animate-content text-2xl md:text-3xl font-bold font-display mb-6">Industrial & Logistics</h2>
                    <p className="animate-content text-white/60 text-base md:text-lg leading-relaxed mb-8">
                        From heavy manufacturing plants to automated warehousing, we deliver industrial infrastructure built for performance. Our expertise lies in large-span structures and super-flat flooring.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <li className="animate-content border-l-2 border-accent-gold pl-4 text-sm font-bold text-white/80">Pre-Engineered Buildings (PEB)</li>
                        <li className="animate-content border-l-2 border-accent-gold pl-4 text-sm font-bold text-white/80">FM2 Industrial Flooring</li>
                        <li className="animate-content border-l-2 border-accent-gold pl-4 text-sm font-bold text-white/80">Heavy Machine Foundations</li>
                        <li className="animate-content border-l-2 border-accent-gold pl-4 text-sm font-bold text-white/80">Cold Storage Insulation</li>
                    </ul>
                </div>
            </div>

            {/* Government */}
            <div className="service-block grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div className="order-2 lg:order-1">
                    <div className="animate-content w-16 h-16 bg-white/10 flex items-center justify-center rounded-full mb-8">
                        <Landmark size={32} className="text-white" />
                    </div>
                    <h2 className="animate-content text-2xl md:text-3xl font-bold font-display mb-6">Government & Infrastructure</h2>
                    <p className="animate-content text-white/60 text-base md:text-lg leading-relaxed mb-8">
                        We partner with public sector bodies to build robust civic infrastructure. We are fully compliant with CPWD norms and experienced in handling large-scale government tenders.
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Institutional Buildings</li>
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Public Libraries & Auditoriums</li>
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Urban Drainage Systems</li>
                        <li className="animate-content border-l-2 border-primary pl-4 text-sm font-bold text-white/80">Roads & Pathways</li>
                    </ul>
                </div>
                <div className="order-1 lg:order-2 h-[250px] md:h-[400px] bg-gray-800 overflow-hidden relative group">
                    <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop" className="animate-image w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Government Infrastructure" loading="lazy" />
                </div>
            </div>
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default ServicesPage;