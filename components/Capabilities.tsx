import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Hammer, HardHat, Truck, Ruler, ShieldCheck, Users } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  {
    icon: <Ruler size={40} />,
    title: "Engineering Expertise",
    description: "In-house structural and civil engineering teams utilizing BIM for clash detection and precise quantity estimation."
  },
  {
    icon: <Truck size={40} />,
    title: "Equipment Fleet",
    description: "Owned fleet of heavy machinery including tower cranes, concrete pumps, and excavators ensuring project autonomy."
  },
  {
    icon: <Users size={40} />,
    title: "Workforce Strength",
    description: "Deploying 1,500+ skilled laborers and 50+ project managers across active sites nationwide."
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Safety Protocols",
    description: "Strict adherence to OSHA/NBC guidelines with a dedicated EHS officer deployed at every project site."
  }
];

const Capabilities: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".capability-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="capabilities" ref={sectionRef} className="py-24 bg-background-light">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:flex justify-between items-end border-b border-charcoal/10 pb-8">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-[10px] mb-4 block font-technical">Our Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal leading-tight tracking-tight">
              Built for Scale & <br />Complexity.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 flex flex-col md:flex-row gap-6 md:items-center font-technical">
            <a href="/sustainability" className="text-primary font-bold uppercase tracking-widest text-[10px] border-b border-primary pb-1 hover:text-charcoal transition-colors">
              Explore Sustainability
            </a>
            <button className="text-charcoal font-bold uppercase tracking-widest text-[10px] border-b border-charcoal/20 pb-1 hover:text-primary transition-colors">
              Download Company Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => (
            <div key={idx} className="capability-card bg-white p-8 border border-charcoal/5 hover:border-primary/50 transition-colors group">
              <div className="text-charcoal/80 mb-6 group-hover:text-primary transition-colors">
                {cap.icon}
              </div>
              <h3 className="text-lg font-bold font-display text-charcoal mb-4 uppercase tracking-tight">{cap.title}</h3>
              <p className="text-slate-gray leading-relaxed text-sm font-light">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Capabilities;