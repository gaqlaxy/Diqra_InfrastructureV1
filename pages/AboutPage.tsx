import React, { useEffect, useRef, useState } from 'react';
import { Shield, Award, Target, Globe, ArrowRight, FileCheck, CheckCircle2, ChevronRight, Ruler, Layout, HardHat } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const AboutPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState('1994');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Hero Reveal
      const tl = gsap.timeline();
      tl.to(".hero-word", { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" })
        .to(".hero-line", { scaleX: 1, duration: 1, ease: "power3.inOut" }, "-=0.5")
        .to(".hero-sub", { opacity: 1, y: 0, duration: 1 }, "-=0.5");

      // 2. Blueprint Grid Reveal
      gsap.from(".blueprint-cell", {
        opacity: 0,
        y: 20,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".blueprint-section",
          start: "top 80%"
        }
      });

      // 3. History Scroll Trigger for Year Change
      const years = ["1994", "2005", "2015", "2024"];
      years.forEach(year => {
        ScrollTrigger.create({
            trigger: `#history-${year}`,
            start: "top center",
            end: "bottom center",
            onEnter: () => setActiveYear(year),
            onEnterBack: () => setActiveYear(year)
        });
      });

      // 4. Team List Reveal
      gsap.from(".team-row", {
        x: -20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".team-section",
            start: "top 80%"
        }
      });

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-background-light min-h-screen pt-24 md:pt-32">
      <SEO 
        title="About Diqra | Engineering Legacy Since 1994" 
        description="Discover the history of Diqra Architects & Construction, from a boutique design studio to a national turnkey contractor managing over ₹500 Cr in assets."
      />
      
      {/* 1. MANIFESTO HERO */}
      <section className="container mx-auto px-6 md:px-12 mb-20 md:mb-32">
        <div className="max-w-5xl">
            <span className="hero-sub block text-xs font-bold uppercase tracking-widest text-primary mb-6 flex items-center gap-2 opacity-0 translate-y-5">
                <span className="w-2 h-2 bg-primary rounded-full"></span> Since 1994
            </span>
            <h1 className="font-display font-bold text-5xl md:text-8xl text-charcoal leading-[0.95] mb-12 tracking-tight">
                <div className="overflow-hidden"><span className="block hero-word opacity-0 translate-y-[100px]">We don't just</span></div>
                <div className="overflow-hidden"><span className="block hero-word opacity-0 translate-y-[100px]">build structures.</span></div>
                <div className="overflow-hidden"><span className="block hero-word text-slate-gray opacity-0 translate-y-[100px]">We engineer</span></div>
                <div className="overflow-hidden"><span className="block hero-word text-slate-gray opacity-0 translate-y-[100px]">legacy.</span></div>
            </h1>
            <div className="hero-line w-full h-px bg-charcoal/20 mb-12 scale-x-0 origin-left"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="hero-sub text-lg text-charcoal font-bold leading-relaxed opacity-0 translate-y-5">
                    Diqra Architects & Construction is a multi-disciplinary infrastructure firm bridging the gap between bold design and engineering precision.
                </p>
                <p className="hero-sub text-slate-gray leading-relaxed opacity-0 translate-y-5">
                    Over three decades, we have evolved from a boutique design studio into a national turnkey contractor. We manage the entire lifecycle of construction—from the first sketch to the final handover—ensuring that the vision is never lost in translation.
                </p>
            </div>
        </div>
      </section>

      {/* 2. BLUEPRINT VALUES (Technical Grid) */}
      <section className="blueprint-section py-20 bg-charcoal text-white overflow-hidden">
         <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-end mb-16 border-b border-white/20 pb-6">
                <h2 className="font-display font-bold text-3xl">The Blueprint</h2>
                <span className="text-xs font-mono text-white/50">SYS-CONFIG-v3.0</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-white/10">
                {[
                    { icon: <Ruler className="text-accent-gold" />, title: "Precision", desc: "Zero tolerance for structural error. We use laser scanning for QA/QC." },
                    { icon: <Shield className="text-accent-gold" />, title: "Safety", desc: "ISO 45001 compliant sites with AI-driven hazard detection systems." },
                    { icon: <Layout className="text-accent-gold" />, title: "Integration", desc: "In-house MEP, Civil, and Facade teams working on a single BIM model." },
                    { icon: <HardHat className="text-accent-gold" />, title: "Execution", desc: "Own fleet of heavy machinery ensuring independence from rental delays." },
                    { icon: <Globe className="text-accent-gold" />, title: "Scale", desc: "Operations across 12 states with regional HQs in every major metro." },
                    { icon: <Award className="text-accent-gold" />, title: "Excellence", desc: "40+ National awards for engineering innovation and design." },
                    { icon: <Target className="text-accent-gold" />, title: "Speed", desc: "Modular construction techniques reducing timelines by up to 30%." },
                    { icon: <FileCheck className="text-accent-gold" />, title: "Compliance", desc: "100% adherence to NBC, ECBC, and local municipal bylaws." },
                ].map((item, idx) => (
                    <div key={idx} className="blueprint-cell border-r border-b border-white/10 p-8 hover:bg-white/5 transition-colors group">
                        <div className="mb-4 opacity-50 group-hover:opacity-100 transition-opacity">{item.icon}</div>
                        <h3 className="font-bold font-mono text-lg mb-2 uppercase tracking-wider">{item.title}</h3>
                        <p className="text-sm text-white/50 font-light leading-relaxed">{item.desc}</p>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 3. STICKY SCROLL HISTORY */}
      <section className="py-24 bg-background-light">
          <div className="container mx-auto px-6 md:px-12">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                 {/* Sticky Left Sidebar */}
                 <div className="lg:col-span-4 hidden lg:block">
                     <div className="sticky top-32">
                         <h3 className="text-xs font-bold uppercase tracking-widest text-slate-gray mb-8">Timeline</h3>
                         <ul className="space-y-4 border-l-2 border-charcoal/10 pl-6">
                            {["1994", "2005", "2015", "2024"].map((year) => (
                                <li key={year} className={`transition-all duration-300 ${activeYear === year ? 'text-primary font-bold text-4xl translate-x-2' : 'text-charcoal/30 text-2xl'}`}>
                                    {year}
                                </li>
                            ))}
                         </ul>
                     </div>
                 </div>

                 {/* Scrollable Content */}
                 <div className="lg:col-span-8 space-y-32">
                     <div id="history-1994" className="flex flex-col md:flex-row gap-8 items-center">
                         <div className="md:w-1/2">
                            <span className="text-5xl font-bold text-charcoal/10 block mb-4 lg:hidden">1994</span>
                            <h2 className="text-3xl font-bold text-charcoal mb-4">The Foundation</h2>
                            <p className="text-slate-gray leading-relaxed mb-6">
                                Rajesh Malhotra establishes Diqra as a boutique structural consultancy in South Delhi. The team of 5 secures its first residential housing project.
                            </p>
                            <div className="h-px w-full bg-charcoal/10"></div>
                         </div>
                         <div className="md:w-1/2">
                            <img loading="lazy" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2531&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="Diqra Foundation 1994" />
                         </div>
                     </div>

                     <div id="history-2005" className="flex flex-col md:flex-row-reverse gap-8 items-center">
                         <div className="md:w-1/2">
                            <span className="text-5xl font-bold text-charcoal/10 block mb-4 lg:hidden">2005</span>
                            <h2 className="text-3xl font-bold text-charcoal mb-4">Industrial Expansion</h2>
                            <p className="text-slate-gray leading-relaxed mb-6">
                                We pivot to turnkey contracting. The firm delivers its first 50-acre textile park in Gujarat, marking our entry into heavy industrial infrastructure.
                            </p>
                            <div className="h-px w-full bg-charcoal/10"></div>
                         </div>
                         <div className="md:w-1/2">
                            <img loading="lazy" src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="Industrial Expansion 2005" />
                         </div>
                     </div>

                     <div id="history-2015" className="flex flex-col md:flex-row gap-8 items-center">
                         <div className="md:w-1/2">
                            <span className="text-5xl font-bold text-charcoal/10 block mb-4 lg:hidden">2015</span>
                            <h2 className="text-3xl font-bold text-charcoal mb-4">The Tech Leap</h2>
                            <p className="text-slate-gray leading-relaxed mb-6">
                                Adoption of BIM Level 2 across all projects. Diqra becomes one of the first Indian firms to integrate drone surveying for topography mapping.
                            </p>
                            <div className="h-px w-full bg-charcoal/10"></div>
                         </div>
                         <div className="md:w-1/2">
                            <img loading="lazy" src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2670&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="Tech Leap 2015" />
                         </div>
                     </div>

                     <div id="history-2024" className="flex flex-col md:flex-row-reverse gap-8 items-center">
                         <div className="md:w-1/2">
                            <span className="text-5xl font-bold text-charcoal/10 block mb-4 lg:hidden">2024</span>
                            <h2 className="text-3xl font-bold text-charcoal mb-4">National Dominance</h2>
                            <p className="text-slate-gray leading-relaxed mb-6">
                                With 500+ Cr in assets under management and presence in 12 states, Diqra sets new benchmarks in sustainable, high-rise composite steel construction.
                            </p>
                            <div className="h-px w-full bg-charcoal/10"></div>
                         </div>
                         <div className="md:w-1/2">
                            <img loading="lazy" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" className="w-full grayscale hover:grayscale-0 transition-all duration-700" alt="National Dominance 2024" />
                         </div>
                     </div>
                 </div>
             </div>
          </div>
      </section>

      {/* 4. TEAM (Editorial List View) */}
      <section className="team-section py-24 bg-white border-t border-charcoal/10">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex justify-between items-center mb-16">
                <h2 className="font-display font-bold text-4xl text-charcoal">The Leadership</h2>
                <a href="/careers" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary border-b border-primary pb-1">
                    Join the Team <ArrowRight size={14}/>
                </a>
            </div>

            <div className="w-full">
                {/* Header Row */}
                <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-charcoal text-xs font-bold uppercase tracking-widest text-slate-gray">
                    <div className="col-span-4">Name</div>
                    <div className="col-span-3">Role</div>
                    <div className="col-span-3">Expertise</div>
                    <div className="col-span-2 text-right">Since</div>
                </div>

                {/* Team Rows */}
                {[
                    { name: "Rajesh Malhotra", role: "Managing Director", exp: "Civil Eng. / Strategy", year: "1994", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop" },
                    { name: "Sarah Williams", role: "Head of Design", exp: "Sustainable Arch.", year: "2008", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop" },
                    { name: "Vikram Singh", role: "Chief Operating Officer", exp: "Logistics / Supply Chain", year: "2001", img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop" },
                    { name: "Ananya Gupta", role: "Chief Financial Officer", exp: "Corp. Finance", year: "2012", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=2561&auto=format&fit=crop" },
                    { name: "David Chen", role: "Chief Technology Officer", exp: "BIM / AI", year: "2018", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2670&auto=format&fit=crop" }
                ].map((member, idx) => (
                    <div key={idx} className="team-row group relative border-b border-charcoal/10 py-6 md:py-8 transition-colors hover:bg-background-light">
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center z-10 relative">
                             <div className="col-span-12 md:col-span-4 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden md:hidden">
                                    <img loading="lazy" src={member.img} alt={member.name} className="w-full h-full object-cover" />
                                </div>
                                <h3 className="font-bold text-xl text-charcoal group-hover:text-primary transition-colors">{member.name}</h3>
                             </div>
                             <div className="col-span-6 md:col-span-3 text-sm font-medium text-slate-gray">{member.role}</div>
                             <div className="col-span-6 md:col-span-3 text-sm text-slate-gray/80">{member.exp}</div>
                             <div className="hidden md:block col-span-2 text-right text-xs font-mono font-bold text-charcoal">{member.year}</div>
                        </div>
                        
                        {/* Hover Image Reveal (Desktop) */}
                        <div className="absolute top-1/2 right-12 -translate-y-1/2 w-32 h-32 rounded-lg overflow-hidden opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 pointer-events-none hidden lg:block shadow-xl z-20">
                            <img loading="lazy" src={member.img} alt={member.name} className="w-full h-full object-cover" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. TECHNICAL FOOTER / CERTIFICATIONS */}
      <section className="bg-background-light py-16 border-t border-charcoal/10">
        <div className="container mx-auto px-6 md:px-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                <div className="md:w-1/3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-gray mb-6">Accreditations</h4>
                    <div className="flex gap-4 flex-wrap">
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-charcoal/10 text-xs font-bold uppercase tracking-wider text-charcoal">
                            <CheckCircle2 size={14} className="text-primary"/> ISO 9001
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-charcoal/10 text-xs font-bold uppercase tracking-wider text-charcoal">
                            <CheckCircle2 size={14} className="text-primary"/> ISO 14001
                        </span>
                        <span className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-charcoal/10 text-xs font-bold uppercase tracking-wider text-charcoal">
                            <CheckCircle2 size={14} className="text-primary"/> OHSAS 18001
                        </span>
                    </div>
                </div>
                <div className="md:w-1/3">
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-gray mb-6">Memberships</h4>
                    <ul className="text-sm text-slate-gray space-y-2 font-medium">
                        <li>• Builders Association of India (BAI)</li>
                        <li>• Indian Green Building Council (IGBC)</li>
                        <li>• National Safety Council</li>
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <div className="p-6 bg-primary text-white">
                        <h4 className="font-bold text-xl mb-2">Work With Us</h4>
                        <p className="text-white/80 text-sm mb-4">Looking for engineering excellence? Let's discuss your next project.</p>
                        <a href="/contact" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-white pb-1 hover:text-charcoal hover:border-charcoal transition-colors">
                            Get in Touch <ChevronRight size={14} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <Contact />
    </div>
  );
};

export default AboutPage;