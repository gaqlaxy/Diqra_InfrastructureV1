import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = prefersReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
        },
      });

      gsap.from(imageRef.current, {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <section id="about" ref={sectionRef} className="py-16 md:py-32 px-6 md:px-12 bg-white overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div ref={contentRef}>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">
            Company Overview
          </span>
          <h2 className="font-display font-bold text-3xl md:text-5xl text-charcoal leading-tight mb-6 md:mb-8">
            Building the Foundation <br /> for Future Industries.
          </h2>

          <div className="space-y-6 text-slate-gray">
            <p className="text-base md:text-lg leading-relaxed">
              Diqra Architects & Construction is a premier infrastructure development firm with
              over three decades of experience in executing large-scale projects. We bridge the
              gap between architectural vision and engineering reality.
            </p>
            <p className="leading-relaxed text-sm md:text-base">
              Our integrated approach combines in-house design capabilities with robust
              construction management, allowing us to deliver complex projects on time and within
              budget. From high-tech industrial parks to critical government infrastructure, we are
              the partner of choice for ambitious developments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 border-t border-gray-200 pt-8">
            <div>
              <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-2">
                Our Vision
              </h4>
              <p className="text-xs text-slate-gray leading-relaxed">
                To be the national benchmark for quality and safety in the construction sector.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-charcoal uppercase tracking-wider text-sm mb-2">
                Our Mission
              </h4>
              <p className="text-xs text-slate-gray leading-relaxed">
                Delivering sustainable infrastructure through precision engineering and ethical
                practices.
              </p>
            </div>
          </div>
        </div>

        <div ref={imageRef} className="relative mt-8 lg:mt-0">
          <div className="aspect-4/5 w-full relative overflow-hidden bg-charcoal">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop"
              alt="Construction site manager"
              className="w-full h-full object-cover opacity-[0.9]"
            />
            <div className="absolute bottom-0 right-0 glass p-6 md:p-8 w-[85%] md:w-3/4 border-t-4 border-primary shadow-2xl">
              <div className="flex justify-between items-end">
                <div>
                  <span className="block text-3xl md:text-4xl font-display font-bold text-white drop-shadow-sm">
                    10M+
                  </span>
                  <span className="text-[11px] md:text-xs font-bold text-white/70 uppercase tracking-widest font-technical mt-1 block">
                    Safe Man-Hours
                  </span>
                </div>
                <div>
                  <span className="block text-3xl md:text-4xl font-display font-bold text-white drop-shadow-sm">
                    INR 50Cr+
                  </span>
                  <span className="text-[11px] md:text-xs font-bold text-white/70 uppercase tracking-widest font-technical mt-1 block">
                    Project Value
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
