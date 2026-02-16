import React, { useEffect, useRef, useState } from 'react';
import { Leaf, Wind, Sun, Droplets, Award, Recycle, ArrowRight, Zap, Globe } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const SustainabilityPage: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [activeStat, setActiveStat] = useState(0);

    const stats = [
        { label: "Net Zero", value: "2030", desc: "Target year for complete carbon neutrality across all operations." },
        { label: "Green Certified", value: "5M+", desc: "Square feet of LEED Platinum and GRIHA rated infrastructure delivered." },
        { label: "Water Saved", value: "40%", desc: "Reduction in freshwater usage through rainwater harvesting and recycling." },
        { label: "Energy Efficient", value: "30%", desc: "Average energy savings per project via passive design and smart BMS." },
    ];

    useEffect(() => {
        const ctx = gsap.context(() => {
            // 1. Hero Reveal
            const tl = gsap.timeline();
            tl.to(".hero-title-word", { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: "power4.out" })
                .to(".hero-subtitle", { y: 0, opacity: 1, duration: 1, ease: "power3.out" }, "-=0.8");

            // 2. Manifesto Text Reveal
            gsap.from(".manifesto-line", {
                scrollTrigger: {
                    trigger: ".manifesto-section",
                    start: "top 80%",
                    end: "bottom 80%",
                    scrub: 1
                },
                opacity: 0.2,
                stagger: 0.1
            });

            // 3. Stats Scroll Logic
            ScrollTrigger.create({
                trigger: ".stats-section",
                start: "top center",
                end: "bottom center",
                onUpdate: (self) => {
                    // Map progress (0-1) correctly to array indices (0-3)
                    const idx = Math.min(
                        stats.length - 1,
                        Math.floor(self.progress * stats.length)
                    );
                    setActiveStat(idx);
                }
            });

            // 4. Certification Marquee
            gsap.to(".cert-track", {
                xPercent: -50,
                ease: "none",
                duration: 20,
                repeat: -1
            });

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-charcoal min-h-screen text-white pt-20">
            <SEO
                title="Sustainability | Engineering the Future"
                description="Diqra Architects is engineering a sustainable future. Discover our commitment to ESG, Net Zero construction, and Green Building standards."
            />

            {/* 1. CINEMATIC HERO */}
            <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* Placeholder for Cinematic Video/Image */}
                    <img
                        src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop"
                        alt="Sustainable Architecture"
                        className="w-full h-full object-cover opacity-40 scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-charcoal/50 to-charcoal"></div>
                </div>

                <div className="relative z-10 text-center max-w-5xl px-6">
                    <span className="hero-subtitle block text-accent-gold font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-6 opacity-0 translate-y-[30px]">
                        The Green Blueprint
                    </span>
                    <h1 className="font-display font-bold text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-white mix-blend-overlay opacity-90 mb-12">
                        <span className="inline-block hero-title-word opacity-0 translate-y-[100px]">Design.</span> {' '}
                        <span className="inline-block hero-title-word opacity-0 translate-y-[100px]">Nature.</span> <br />
                        <span className="inline-block hero-title-word opacity-0 translate-y-[100px] text-primary">Future.</span>
                    </h1>
                    <p className="hero-subtitle text-white/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed border-t border-white/10 pt-8 opacity-0 translate-y-[30px]">
                        We don't just build structures; we engineer ecosystems. Our commitment to sustainability is woven into every beam, every brick, and every blueprint.
                    </p>
                </div>
            </section>

            {/* 2. THE MANIFESTO */}
            <section className="manifesto-section py-32 container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="font-display text-3xl md:text-5xl font-bold leading-tight text-white">
                        <span className="manifesto-line block mb-2">Construction is responsible for</span>
                        <span className="manifesto-line block mb-2 text-white/50">39% of global carbon emissions.</span>
                        <span className="manifesto-line block mb-8 text-primary">We are changing that.</span>
                        <span className="manifesto-line block text-2xl md:text-3xl font-light text-white/80">
                            By integrating passive design, renewable energy, and circular economy principles, we are redefining what it means to build responsibly.
                        </span>
                    </p>
                </div>
            </section>

            {/* 3. INTERACTIVE IMPACT STATS */}
            <section className="stats-section py-32 bg-background-dark relative border-y border-white/5">
                <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Dynamic Display */}
                    <div className="sticky top-32 h-[50vh] flex flex-col justify-center">
                        <div className="mb-4">
                            <h2 className="text-[12rem] md:text-[16rem] font-bold font-display leading-none text-white/5 select-none relative">
                                {stats[activeStat].value}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-6xl md:text-8xl">
                                    {stats[activeStat].value}
                                </div>
                            </h2>
                        </div>
                        <div className="border-l-4 border-primary pl-6">
                            <h3 className="text-3xl font-bold text-white mb-2">{stats[activeStat].label}</h3>
                            <p className="text-white/60 text-lg">{stats[activeStat].desc}</p>
                        </div>
                    </div>

                    {/* Right: Scrollable Triggers */}
                    <div className="space-y-[50vh] py-[25vh]">
                        {stats.map((stat, idx) => (
                            <div key={idx} className={`transition-opacity duration-500 ${activeStat === idx ? 'opacity-100' : 'opacity-20'}`}>
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="text-xs font-bold uppercase tracking-widest text-primary">0{idx + 1}</span>
                                    <h4 className="text-2xl font-bold">{stat.label}</h4>
                                </div>
                                <p className="text-xl text-white/80 leading-relaxed font-light">
                                    {stat.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. TECH & CERTIFICATIONS */}
            <section className="py-32 container mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-white/10 pb-8">
                    <div>
                        <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Standards</span>
                        <h2 className="text-4xl md:text-5xl font-display font-bold">Certified Excellence</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <Leaf size={48} className="text-green-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-4">LEED Platinum</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Leadership in Energy and Environmental Design. The highest standard for green building certification globally.
                        </p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <Globe size={48} className="text-blue-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-4">IGBC Green</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Indian Green Building Council standards, tailored for the Indian subcontinent's unique climatic zones.
                        </p>
                    </div>
                    <div className="p-8 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
                        <Zap size={48} className="text-yellow-500 mb-6 group-hover:scale-110 transition-transform" />
                        <h3 className="text-xl font-bold mb-4">Energy Conservation</h3>
                        <p className="text-white/60 text-sm leading-relaxed">
                            Full compliance with ECBC (Energy Conservation Building Code) to ensure minimal operational energy load.
                        </p>
                    </div>
                </div>

                {/* Scrolling Marquee */}
                <div className="overflow-hidden border-t border-b border-white/10 py-12 relative">
                    <div className="flex gap-24 cert-track w-[200%]">
                        {/* Duplicated for seamless loop */}
                        {[1, 2, 3, 4, 1, 2, 3, 4].map((i, idx) => (
                            <div key={idx} className="flex items-center gap-4 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer">
                                {i === 1 && <><Award size={40} /><span className="text-3xl font-bold font-display">LEED</span></>}
                                {i === 2 && <><Leaf size={40} /><span className="text-3xl font-bold font-display">IGBC</span></>}
                                {i === 3 && <><Wind size={40} /><span className="text-3xl font-bold font-display">GRIHA</span></>}
                                {i === 4 && <><Sun size={40} /><span className="text-3xl font-bold font-display">WELL</span></>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Contact />
        </div>
    );
};

export default SustainabilityPage;
