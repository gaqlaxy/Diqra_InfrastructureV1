import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.from(".reveal-cta", {
            y: 50,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 70%",
            }
        });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="bg-charcoal text-white py-20 md:py-32 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-primary rounded-full blur-[100px] md:blur-[150px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[250px] md:w-[400px] h-[250px] md:h-[400px] bg-accent-gold rounded-full blur-[80px] md:blur-[120px] translate-y-1/2 -translate-x-1/2 opacity-50"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
                <span className="reveal-cta text-accent-gold font-bold tracking-[0.3em] uppercase text-xs mb-6 md:mb-8 block">
                    Start Your Journey
                </span>
                <h2 className="reveal-cta font-serif text-4xl md:text-7xl lg:text-8xl leading-tight md:leading-[0.95] mb-6 md:mb-8">
                    Ready to build <br/>
                    <span className="text-white/30 italic">the impossible?</span>
                </h2>
                <p className="reveal-cta text-lg md:text-2xl text-white/60 mb-10 md:mb-12 font-light leading-relaxed max-w-2xl mx-auto">
                    Partner with Diqra for engineering excellence. From concept to concrete, we deliver landmarks that stand the test of time.
                </p>
                <div className="reveal-cta flex justify-center">
                     <Link 
                        to="/contact" 
                        className="group relative inline-flex items-center gap-4 bg-white text-charcoal px-8 py-5 md:px-12 md:py-6 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all duration-500 overflow-hidden"
                     >
                        <span className="relative z-10 flex items-center gap-2">
                           Schedule Consultation <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                     </Link>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Contact;