import React, { useEffect, useRef } from 'react';
import { ArrowRight, Users, Heart, Zap } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/Contact';

gsap.registerPlugin(ScrollTrigger);

const CareersPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Hero Reveal
        gsap.to(".hero-content", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Culture Cards
        gsap.from(".culture-card", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
                trigger: ".culture-section",
                start: "top 80%"
            }
        });

        // Job Openings
        gsap.from(".job-card", {
            x: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            scrollTrigger: {
                trigger: ".jobs-section",
                start: "top 80%"
            }
        });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background-light min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <span className="hero-content text-primary font-bold tracking-widest uppercase text-xs mb-4 block opacity-0 translate-y-[50px]">Careers at Diqra</span>
            <h1 className="hero-content font-display font-bold text-4xl md:text-7xl text-charcoal leading-tight md:leading-[1.1] mb-8 opacity-0 translate-y-[50px]">
              Build Your Legacy <br/> With Us.
            </h1>
            <p className="hero-content text-lg md:text-xl text-slate-gray leading-relaxed opacity-0 translate-y-[50px]">
                Join a team of 1,500+ professionals dedicated to shaping the nation's infrastructure. We offer growth, stability, and the chance to work on landmark projects.
            </p>
        </div>

        {/* Culture */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-24 culture-section">
            <div className="culture-card bg-white p-6 md:p-8 border border-charcoal/5 text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                    <Users size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl text-charcoal mb-4">Collaborative Culture</h3>
                <p className="text-sm text-slate-gray">We believe in the power of teams. Engineers, architects, and managers work as one unit.</p>
            </div>
            <div className="culture-card bg-white p-6 md:p-8 border border-charcoal/5 text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                    <Zap size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl text-charcoal mb-4">Rapid Growth</h3>
                <p className="text-sm text-slate-gray">With a 20% YOY growth rate, we offer unparalleled career advancement opportunities.</p>
            </div>
            <div className="culture-card bg-white p-6 md:p-8 border border-charcoal/5 text-center transition-transform hover:-translate-y-2 duration-300">
                <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
                    <Heart size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-xl text-charcoal mb-4">Safety First</h3>
                <p className="text-sm text-slate-gray">We prioritize the well-being of our people above all else. Zero harm is our goal.</p>
            </div>
        </div>

        {/* Openings */}
        <div className="max-w-4xl mx-auto jobs-section mb-16 md:mb-24">
            <h2 className="font-display font-bold text-2xl md:text-3xl text-charcoal mb-8 text-center uppercase">Current Openings</h2>
            <div className="space-y-4">
                {[
                    { title: "Senior Project Manager", loc: "Pune, India", type: "Full-Time", exp: "10-15 Years" },
                    { title: "Site Civil Engineer", loc: "Hyderabad, India", type: "Full-Time", exp: "3-5 Years" },
                    { title: "QS & Billing Engineer", loc: "New Delhi, India", type: "Full-Time", exp: "5-8 Years" },
                    { title: "Safety Officer (EHS)", loc: "Chennai, India", type: "Contract", exp: "5+ Years" }
                ].map((job, idx) => (
                    <div key={idx} className="job-card bg-white p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center border border-charcoal/10 hover:border-primary transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer gap-6 md:gap-0">
                        <div className="mb-4 md:mb-0">
                            <h3 className="font-bold text-lg md:text-xl text-charcoal group-hover:text-primary transition-colors">{job.title}</h3>
                            <div className="flex flex-wrap gap-4 text-xs font-bold uppercase tracking-widest text-slate-gray mt-2">
                                <span>{job.loc}</span>
                                <span className="hidden md:inline">•</span>
                                <span>{job.exp}</span>
                            </div>
                        </div>
                        <button className="w-full md:w-auto group relative inline-flex justify-center items-center gap-3 bg-background-light text-charcoal px-6 py-3 text-xs font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-white">
                            <span className="relative z-10 flex items-center gap-2">
                              Apply Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default CareersPage;