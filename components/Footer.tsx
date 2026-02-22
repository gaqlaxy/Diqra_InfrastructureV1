import React, { useEffect, useRef } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
    const footerRef = useRef<HTMLDivElement>(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Staggered reveal for columns
            gsap.from(".footer-col", {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 95%",
                }
            });

            // Brand Name Parallax or Reveal
            gsap.from(".footer-brand", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: footerRef.current,
                    start: "top 90%",
                }
            });
        }, footerRef);

        return () => ctx.revert();
    }, []);

    return (
        <footer ref={footerRef} className="bg-charcoal text-white pt-20 pb-10 relative overflow-hidden border-t border-white/10">

            <div className="container mx-auto px-6 md:px-12">

                {/* Massive Brand Header */}
                <div className="mb-20 border-b border-white/10 pb-12 footer-brand">
                    <h1 className="font-display font-bold text-[10vw] md:text-[12vw] leading-[0.8] tracking-tighter text-transparent text-stroke select-none">
                        DIQRA<span className="opacity-10">INFRA.</span>
                    </h1>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">

                    {/* Column 1: Address */}
                    <div className="footer-col space-y-6">
                        <h4 className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em] font-technical">Headquarters</h4>
                        <address className="not-italic text-sm text-white/60 leading-relaxed hover:text-white transition-colors duration-300">
                            Plot No. 45, Industrial Area Ph-II,<br />
                            Okhla, New Delhi 110020<br />
                            India
                        </address>
                        <div className="pt-2">
                            <a href="mailto:hello@diqra.com" className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2 group w-fit">
                                <span className="relative">
                                    hello@diqra.com
                                    <span className="absolute left-0 bottom-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </span>
                            </a>
                            <a href="tel:+911145678900" className="text-sm font-bold text-white hover:text-primary transition-colors block mt-2 group w-fit">
                                <span className="relative">
                                    +91 11 4567 8900
                                    <span className="absolute left-0 bottom-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Navigation */}
                    <div className="footer-col space-y-6">
                        <h4 className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em] font-technical">Explore</h4>
                        <ul className="space-y-3">
                            {['Projects', 'Services', 'Process', 'Careers', 'About', 'Handbook', 'HRM'].map((item) => (
                                <li key={item}>
                                    <Link to={`/${item.toLowerCase()}`} className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group w-fit">
                                        <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                        <span className="relative">
                                            {item}
                                            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Socials */}
                    <div className="footer-col space-y-6">
                        <h4 className="text-[10px] font-bold text-accent-gold uppercase tracking-[0.2em] font-technical">Social</h4>
                        <ul className="space-y-3">
                            {['LinkedIn', 'Instagram', 'Twitter (X)', 'Behance'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group w-fit">
                                        <span className="relative">
                                            {item}
                                            <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                                        </span>
                                        <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Action */}
                    <div className="footer-col flex flex-col justify-between items-start md:items-end">
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors font-technical"
                        >
                            Back to Top
                            <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all glass-dark relative overflow-hidden shadow-2xl">
                                <ArrowUp size={18} className="text-white relative z-10 group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
                            </div>
                        </button>

                        <div className="mt-8 md:mt-0 text-right hidden md:block">
                            <p className="text-[9px] text-white/20 uppercase tracking-[0.2em] max-w-[150px] font-technical italic">
                                Designing the world of tomorrow.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] text-white/20 uppercase tracking-[0.2em] footer-col font-technical">
                    <p>&copy; 2024 Diqra Architects. ISO 9001 Certified.</p>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;