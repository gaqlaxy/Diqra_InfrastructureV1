import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    title: "Discovery & Feasibility",
    description: "We begin by deeply understanding the site, the community, and the client's vision. Rigorous feasibility studies ensure a solid foundation."
  },
  {
    num: "02",
    title: "Concept Development",
    description: "Translating data into form. We explore multiple iterations, focusing on massing, light, and materiality to find the perfect expression."
  },
  {
    num: "03",
    title: "Technical Documentation",
    description: "Precision is paramount. Our technical teams create detailed schematics and BIM models to ensure every joint and facade is constructible."
  },
  {
    num: "04",
    title: "Construction Administration",
    description: "We remain on-site and engaged. Overseeing the build to ensure the final reality matches the initial dream, down to the millimeter."
  }
];

const Process: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Refresh ScrollTrigger to ensure positions are correct
    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray<HTMLElement>(".process-step");

      gsap.fromTo(steps,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".process-list",
            start: "top 75%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="lg:sticky lg:top-32 h-fit">
            <p className="font-technical text-primary text-[10px] font-bold mb-4 tracking-[0.2em] uppercase">Our Methodology</p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-charcoal mb-6 md:mb-8 leading-tight tracking-tight uppercase">
              From Abstract Idea <br />to Concrete Reality.
            </h2>
            <p className="text-slate-gray text-base md:text-lg font-light max-w-md mb-8 leading-relaxed">
              Our process is rigorous, collaborative, and transparent. We guide our clients through every phase of the architectural journey with precision and care.
            </p>
            <div className="hidden lg:block">
              <Link to="/process" className="group relative inline-flex items-center gap-3 bg-charcoal text-white px-10 py-5 text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:text-white hover:shadow-2xl font-technical">
                <span className="relative z-10 flex items-center gap-2">
                  View Full Process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>

          <div className="space-y-12 md:space-y-16 group/list process-list">
            {steps.map((step, index) => (
              <div key={index} className="process-step flex gap-6 md:gap-8 group transition-all duration-300 hover:-translate-y-2 group-hover/list:opacity-50 hover:opacity-100 cursor-default">
                <span className="text-5xl md:text-6xl font-technical text-gray-200 group-hover:text-primary transition-colors font-bold leading-none duration-300">
                  {step.num}
                </span>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-lg md:text-xl font-bold font-display text-charcoal mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-gray text-sm md:text-base font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}

            <div className="block lg:hidden pt-8">
              <Link to="/process" className="group relative inline-flex items-center gap-3 bg-charcoal text-white px-8 py-4 text-[10px] font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:text-white hover:shadow-2xl w-full justify-center font-technical">
                <span className="relative z-10 flex items-center gap-2">
                  View Full Process <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;