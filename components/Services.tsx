import React, { useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
    {
        id: "01",
        title: "Commercial Construction",
        subtitle: "Office Buildings, Retail Spaces, IT Parks",
        description: "Delivering Grade-A commercial spaces with a focus on speed-to-market and high-quality finishes. We specialize in steel structures and composite buildings.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Industrial Projects",
        subtitle: "Factories, Warehouses, Logistics Parks",
        description: "Turnkey construction of manufacturing units and heavy-duty warehousing. Expertise in large-span PEB structures and FM2 industrial flooring.",
        image: "https://images.unsplash.com/photo-1565610222536-ef125c59da30?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Government & Infra",
        subtitle: "Public Works, Roads, Drainage, Institutions",
        description: "Partnering with public bodies to build robust civic infrastructure. Fully compliant with CPWD norms and certified for major government tenders.",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2670&auto=format&fit=crop"
    }
];

const Services: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Refresh ScrollTrigger to ensure positions are correct after render
        ScrollTrigger.refresh();

        const ctx = gsap.context(() => {
            const rows = gsap.utils.toArray<HTMLElement>(".service-row");

            rows.forEach((row, i) => {
                gsap.fromTo(row,
                    { y: 50, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: row,
                            start: "top 85%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="services" ref={sectionRef} className="bg-charcoal text-white py-24">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <span className="text-accent-gold font-bold tracking-widest uppercase text-xs mb-4 block">Our Services</span>
                    <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
                        End-to-End <br />Construction Solutions.
                    </h2>
                </div>

                <div className="flex flex-col">
                    {servicesList.map((service) => (
                        <div
                            key={service.id}
                            className="service-row group relative border-t border-white/10 py-12 md:py-16 transition-all duration-300 hover:bg-white/5 cursor-pointer"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-transform duration-300 group-hover:translate-x-4">
                                <div className="lg:col-span-1 text-white/30 font-technical font-bold text-xl group-hover:text-primary transition-colors">
                                    {service.id}
                                </div>
                                <div className="lg:col-span-5">
                                    <h3 className="font-display font-bold text-3xl md:text-4xl mb-2 text-white group-hover:text-accent-gold transition-colors tracking-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold font-technical">
                                        {service.subtitle}
                                    </p>
                                </div>
                                <div className="lg:col-span-4">
                                    <p className="text-white/70 leading-relaxed text-sm md:text-base border-l border-white/10 pl-6 group-hover:border-primary transition-colors font-light">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="lg:col-span-2 flex justify-end">
                                    <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent-gold group-hover:border-accent-gold transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 shadow-lg group-hover:shadow-accent-gold/20">
                                        <ArrowUpRight className="text-white" size={20} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="border-t border-white/10"></div>
                </div>
            </div>
        </section>
    );
};

export default Services;