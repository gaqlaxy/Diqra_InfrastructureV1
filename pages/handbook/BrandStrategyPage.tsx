import React from 'react';
import { Target, Zap, Shield, FlaskConical, Megaphone, TrendingUp, BookOpen, GraduationCap, DollarSign, Layout, ChevronRight, CheckCircle2 } from 'lucide-react';

const BrandStrategyPage: React.FC = () => {
    const pillars = [
        {
            title: "PILLAR 1 – ARCHITECTURAL INTELLIGENCE",
            icon: <Zap className="text-primary" size={24} />,
            description: "Differentiating through superior design thinking and climate-responsive planning.",
            items: ["Climate-responsive design", "Orientation-based planning", "Cross ventilation optimization", "Daylight simulation", "Material performance selection", "Passive cooling strategies"]
        },
        {
            title: "PILLAR 2 – ENERGY EFFICIENCY INTEGRATION",
            icon: <Shield className="text-primary" size={24} />,
            description: "Offering future-ready upgrades for both residential and commercial projects.",
            items: ["Solar-ready roof planning", "Rainwater harvesting integration", "Thermal insulation detailing", "Low-E glazing", "Smart lighting control", "HVAC load optimization"]
        },
        {
            title: "PILLAR 3 – STRUCTURED EXECUTION SYSTEM",
            icon: <Layout className="text-primary" size={24} />,
            description: "Communicating corporate discipline and structured quality governance.",
            items: ["Digital weekly progress reports", "Structured quality inspection stages", "Risk management documentation", "Budget transparency model"]
        },
        {
            title: "PILLAR 4 – INNOVATION LAB MODEL",
            icon: <FlaskConical className="text-primary" size={24} />,
            description: "Creating an internal DIQRA Innovation Cell for advanced construction techniques.",
            items: ["Advanced materials", "Smart automation", "Sustainable construction", "Modular techniques", "Innovation Portfolio Book"]
        }
    ];

    const scalePlan = [
        { year: "Year 1", focus: "System stabilization + energy-focused branding." },
        { year: "Year 2", focus: "Publish: 'Diqra Energy Smart Homes Guide'" },
        { year: "Year 3", focus: "Recognized as: Structured Energy-Conscious Architecture Firm." }
    ];

    return (
        <div className="max-w-4xl">
            {/* Header */}
            <div className="mb-16">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-accent-gold mb-4">
                    <span className="w-8 h-px bg-accent-gold/30"></span>
                    Manual 02
                </div>
                <h1 className="text-4xl md:text-5xl font-display font-black text-charcoal mb-6 tracking-tight">
                    BRAND AUTHORITY <br /> STRATEGY
                </h1>
                <div className="bg-charcoal text-white p-8 border-l-4 border-primary">
                    <h2 className="text-xs font-bold uppercase tracking-widest text-primary mb-2">Core Positioning</h2>
                    <p className="text-xl font-display font-medium leading-relaxed italic">
                        "Diqra Infrastructure delivers performance-driven architecture and structured construction systems, integrating energy-efficient design, innovation, and precision execution."
                    </p>
                </div>
            </div>

            {/* Domination Pillars */}
            <section className="mb-20">
                <h2 className="text-2xl font-display font-black text-charcoal uppercase tracking-tighter mb-10 flex items-center gap-3">
                    <Target className="text-primary" size={28} />
                    Dominational Pillars
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {pillars.map((pillar, idx) => (
                        <div key={idx} className="bg-background-light p-8 border border-charcoal/5 hover:border-primary/20 transition-all group">
                            <div className="w-12 h-12 bg-white flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors">
                                {pillar.icon}
                            </div>
                            <h3 className="text-sm font-bold text-charcoal mb-3 uppercase tracking-wider">{pillar.title}</h3>
                            <p className="text-xs text-slate-gray mb-6 leading-relaxed">{pillar.description}</p>
                            <ul className="space-y-2">
                                {pillar.items.map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-[11px] text-charcoal/70 font-medium">
                                        <CheckCircle2 size={12} className="text-primary/40" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Market Segments */}
            <section className="mb-20 bg-primary/5 p-10 border border-primary/10">
                <h2 className="text-2xl font-display font-black text-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                    <TrendingUp className="text-primary" size={28} />
                    Market Verticals
                </h2>
                <div className="space-y-6">
                    {[
                        { tag: "A", title: "Premium Residential", desc: "Target: Upper middle class to HNI. Focus: Design + Energy Efficiency." },
                        { tag: "B", title: "Commercial & Institutional", desc: "Target: Schools, offices, clinics. Focus: Cost-efficiency & durability." },
                        { tag: "C", title: "Hospitality & interiors", desc: "Flagship credibility projects to enhance brand perception." }
                    ].map((seg, idx) => (
                        <div key={idx} className="flex gap-6 items-center p-4 bg-white border border-charcoal/5">
                            <span className="text-2xl font-black text-primary/20 font-mono">[{seg.tag}]</span>
                            <div>
                                <h4 className="text-sm font-bold text-charcoal uppercase">{seg.title}</h4>
                                <p className="text-xs text-slate-gray">{seg.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Authority Plan & Scale */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                <section>
                    <h2 className="text-xl font-display font-black text-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                        <Megaphone className="text-primary" size={24} />
                        Authority Content
                    </h2>
                    <div className="space-y-4">
                        {["Energy-efficient home design tips", "Cost optimization in construction", "Sustainable material comparisons", "Smart lighting integration", "Avoiding rework mistakes"].map((tip, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 border-b border-charcoal/5 text-xs font-medium text-slate-gray hover:text-charcoal transition-colors">
                                <ChevronRight size={14} className="text-primary" />
                                {tip}
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 className="text-xl font-display font-black text-charcoal uppercase tracking-tighter mb-8 flex items-center gap-3">
                        <BookOpen className="text-primary" size={24} />
                        3-Year Scale Plan
                    </h2>
                    <div className="relative pl-8 space-y-10 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-px before:bg-charcoal/10">
                        {scalePlan.map((step, i) => (
                            <div key={i} className="relative">
                                <div className="absolute left-[-25px] top-1 w-[15px] h-[15px] bg-white border-2 border-primary rounded-full z-10"></div>
                                <h4 className="text-xs font-bold text-primary uppercase mb-1">{step.year}</h4>
                                <p className="text-xs text-charcoal font-medium leading-relaxed">{step.focus}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            {/* Skills & Evolution */}
            <section className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 border border-accent-gold/20 bg-accent-gold/5">
                    <h3 className="text-sm font-black text-charcoal uppercase mb-4 flex items-center gap-2">
                        <GraduationCap size={18} className="text-accent-gold" />
                        Skill Upgrades
                    </h3>
                    <ul className="text-[11px] space-y-2 text-slate-gray font-medium">
                        <li>• Basic energy modeling</li>
                        <li>• Sustainable material analysis</li>
                        <li>• Cost-benefit analysis of insulation</li>
                        <li>• Smart home integration systems</li>
                    </ul>
                </div>
                <div className="p-8 border border-charcoal/10 bg-charcoal text-white">
                    <h3 className="text-sm font-black uppercase mb-4 flex items-center gap-2 text-primary">
                        <DollarSign size={18} />
                        Pricing Strategy
                    </h3>
                    <p className="text-[11px] leading-relaxed text-white/70">
                        Tiered Proposal Structure: <br />
                        <span className="text-white font-bold tracking-widest uppercase mt-2 block">Basic → Optimized → Energy-Advanced</span>
                    </p>
                </div>
            </section>

            {/* Footer Quote */}
            <div className="mt-20 pt-10 border-t border-charcoal/10 text-center">
                <p className="text-xs font-bold text-slate-gray uppercase tracking-[0.5em] mb-4">Mentor Directive</p>
                <p className="text-2xl font-display font-black text-charcoal italic leading-tight">
                    "You are not building buildings. You are building high-performance structures and predictable profit systems."
                </p>
            </div>
        </div>
    );
};

export default BrandStrategyPage;
