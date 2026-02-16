import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/Contact';
import SEO from '../components/SEO';
import { FileText, PenTool, HardHat, CheckSquare, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const phases = [
    {
        id: "01",
        title: "Feasibility & Analysis",
        subtitle: "The Foundation of Success",
        icon: <FileText size={32} />,
        description: "Before a single line is drawn, we rigorously analyze the site, zoning regulations, and financial viability. We identify risks early to ensure the project roadmap is clear and executable.",
        deliverables: ["Site Survey & Topography", "Zoning & Compliance Check", "Financial Feasibility Report", "Risk Assessment Matrix"]
    },
    {
        id: "02",
        title: "Design & Engineering",
        subtitle: "Form Meets Function",
        icon: <PenTool size={32} />,
        description: "Our integrated team of architects and engineers uses BIM (Building Information Modeling) Level 2 to create a digital twin of the project. This ensures clash detection, precise material estimation, and structural integrity.",
        deliverables: ["Architectural Concepts", "Structural Analysis", "MEP Engineering", "LOD 300 BIM Model"]
    },
    {
        id: "03",
        title: "Pre-Construction",
        subtitle: "Logistics & Procurement",
        icon: <CheckSquare size={32} />,
        description: "We mobilize our supply chain and finalize vendor contracts. Detailed construction schedules are mapped out using Critical Path Method (CPM) to ensure just-in-time delivery of materials.",
        deliverables: ["Detailed BOQ", "Vendor Selection", "Master Schedule (CPM)", "Safety Plan (EHS)"]
    },
    {
        id: "04",
        title: "Construction Execution",
        subtitle: "Turning Vision to Reality",
        icon: <HardHat size={32} />,
        description: "Our on-site teams take over, led by experienced Project Managers. We utilize our own fleet of heavy machinery and specialized formwork systems to maintain speed and quality standards.",
        deliverables: ["Site Management", "Quality Control (QA/QC)", "Weekly Progress Reports", "Safety Audits"]
    }
];

const ProcessPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Hero Animation
        gsap.to(".hero-anim", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out"
        });

        // Phase Lines
        gsap.utils.toArray<HTMLElement>(".phase-row").forEach((row) => {
            gsap.from(row, {
                opacity: 0,
                y: 50,
                duration: 0.8,
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%"
                }
            });
            
            // Draw line animation
            gsap.to(row.querySelector(".phase-line"), {
                height: "100%",
                duration: 1,
                ease: "none",
                scrollTrigger: {
                    trigger: row,
                    start: "top center",
                    end: "bottom center",
                    scrub: true
                }
            });
        });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background-light min-h-screen pt-24 md:pt-32">
      <SEO 
        title="Our Process | The Science of Construction" 
        description="Explore the rigorous 4-stage methodology Diqra Architects uses to deliver complex infrastructure projects on time and within budget."
      />

      <div className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-4xl">
            <span className="hero-anim block text-primary font-bold tracking-widest uppercase text-xs mb-6 opacity-0 translate-y-[30px]">The Diqra Methodology</span>
            <h1 className="hero-anim font-display font-bold text-5xl md:text-8xl text-charcoal leading-[0.95] mb-12 opacity-0 translate-y-[30px]">
                The Science <br/>
                <span className="text-slate-gray">of Execution.</span>
            </h1>
            <p className="hero-anim text-lg md:text-2xl text-slate-gray leading-relaxed max-w-2xl border-l-4 border-charcoal pl-8 opacity-0 translate-y-[30px]">
                Great architecture is not just about design; it's about the relentless pursuit of precision. We view every project as a complex system that requires a disciplined, engineering-first approach.
            </p>
        </div>
      </div>

      <div className="bg-white py-24 border-t border-charcoal/10">
          <div className="container mx-auto px-6 md:px-12">
              <div className="space-y-0">
                  {phases.map((phase, index) => (
                      <div key={index} className="phase-row grid grid-cols-1 md:grid-cols-12 gap-12 relative pb-24 md:pb-32 last:pb-0">
                          {/* Timeline Line */}
                          <div className="hidden md:block absolute left-[8.33%] top-8 bottom-0 w-px bg-charcoal/10 -translate-x-1/2">
                                <div className="phase-line w-full bg-primary h-0"></div>
                          </div>
                          
                          {/* Number / Marker */}
                          <div className="md:col-span-2 relative">
                                <div className="w-12 h-12 md:w-16 md:h-16 bg-charcoal text-white flex items-center justify-center font-display font-bold text-xl md:text-2xl relative z-10 mx-auto md:mx-0">
                                    {phase.id}
                                </div>
                          </div>

                          {/* Content */}
                          <div className="md:col-span-5 pt-2">
                                <div className="flex items-center gap-4 mb-6 text-primary">
                                    {phase.icon}
                                    <span className="text-xs font-bold uppercase tracking-widest">{phase.subtitle}</span>
                                </div>
                                <h2 className="font-display font-bold text-3xl md:text-4xl text-charcoal mb-6">{phase.title}</h2>
                                <p className="text-slate-gray leading-relaxed text-lg">
                                    {phase.description}
                                </p>
                          </div>

                          {/* Deliverables */}
                          <div className="md:col-span-5 md:pl-12 pt-2">
                                <h4 className="text-xs font-bold uppercase tracking-widest text-charcoal mb-6 border-b border-charcoal/10 pb-2">Key Deliverables</h4>
                                <ul className="space-y-4">
                                    {phase.deliverables.map((item, i) => (
                                        <li key={i} className="flex items-start gap-3 text-slate-gray">
                                            <ArrowRight size={16} className="text-primary mt-1 shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </div>

      <div className="bg-charcoal text-white py-24">
         <div className="container mx-auto px-6 md:px-12">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                 <div>
                     <h2 className="font-display font-bold text-4xl mb-6">Powered by Technology</h2>
                     <p className="text-white/60 text-lg leading-relaxed mb-8">
                         We don't just rely on experience; we leverage data. From drone topography surveys to AI-driven safety monitoring, our process is enhanced by the latest construction tech stack.
                     </p>
                     <div className="grid grid-cols-2 gap-8">
                         <div>
                             <span className="block text-3xl font-bold text-accent-gold mb-1">LOD 350</span>
                             <span className="text-xs font-bold uppercase tracking-widest text-white/40">BIM Standard</span>
                         </div>
                         <div>
                             <span className="block text-3xl font-bold text-accent-gold mb-1">Zero</span>
                             <span className="text-xs font-bold uppercase tracking-widest text-white/40">Data Loss</span>
                         </div>
                     </div>
                 </div>
                 <div className="relative">
                      <div className="aspect-square bg-white/5 border border-white/10 p-8 flex items-center justify-center">
                           <div className="text-center">
                               <span className="block text-6xl font-display font-bold text-white/20 mb-4">ISO</span>
                               <span className="block text-2xl font-bold text-white mb-2">9001 : 2015</span>
                               <span className="text-sm text-white/40 uppercase tracking-widest">Quality Management Systems</span>
                           </div>
                      </div>
                 </div>
             </div>
         </div>
      </div>

      <Contact />
    </div>
  );
};

export default ProcessPage;