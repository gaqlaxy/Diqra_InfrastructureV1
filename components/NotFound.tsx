import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Home, AlertTriangle } from 'lucide-react';
import gsap from 'gsap';
import SEO from './SEO';

const NotFound: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".error-code", {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            })
                .from(".error-title", {
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6")
                .from(".error-desc", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6")
                .from(".error-btn", {
                    y: 20,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power3.out"
                }, "-=0.6");

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="min-h-screen bg-charcoal flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            <SEO
                title="404 - Structural Error | Diqra Architects"
                description="The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            />

            {/* Technical Grid Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

            <div className="relative z-10 flex flex-col items-center">
                <div className="error-code font-display font-bold text-[12rem] md:text-[16rem] leading-none text-white/5 select-none relative">
                    404
                    <div className="absolute -top-10 -right-10 text-accent-gold opacity-20 hidden md:block">
                        <AlertTriangle size={120} />
                    </div>
                </div>

                <h1 className="error-title font-display font-bold text-4xl md:text-5xl text-white mb-6 -mt-10 md:-mt-16 bg-charcoal px-4 inline-block">
                    Structural Error
                </h1>

                <p className="error-desc text-white/60 max-w-lg mb-12 leading-relaxed text-lg font-light">
                    We've encountered a void in the blueprint. The coordinates you are looking for do not exist in our current rapid construction plan.
                </p>

                <Link
                    to="/"
                    className="error-btn group relative inline-flex items-center justify-center gap-3 bg-primary text-white px-8 py-4 md:px-10 md:py-5 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-white shadow-lg hover:shadow-primary/20"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        Return to Base
                        <Home size={18} className="group-hover:-translate-y-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>

                <div className="error-desc mt-16 flex gap-8 text-[10px] font-bold uppercase tracking-widest text-white/20">
                    <span>Error: Route_Undefined</span>
                    <span>System: Stable</span>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
