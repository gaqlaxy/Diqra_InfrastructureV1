import React, { useState, useRef, useEffect } from 'react';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        quote: "Diqra Architects didn't just design a building; they engineered a landmark that has redefined the cultural identity of our city district.",
        author: "Jonathan Sterling",
        role: "Director of Urban Development",
        company: "City of Berlin",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
    },
    {
        id: 2,
        quote: "Their ability to balance avant-garde aesthetics with structural pragmatism is unmatched. A truly visionary partner for complex infrastructure.",
        author: "Elena Vasquez",
        role: "Chief Operations Officer",
        company: "Future Systems Corp",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
    },
    {
        id: 3,
        quote: "We needed a space that whispered authority but shouted innovation. Diqra delivered a masterpiece that does exactly that.",
        author: "Marcus Chen",
        role: "Founding Partner",
        company: "Apex Capital",
        image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=2668&auto=format&fit=crop"
    },
    {
        id: 4,
        quote: "The attention to material detail and light is profound. Working with them was an exercise in pure creativity grounded in reality.",
        author: "Sarah Jenkins",
        role: "Curator",
        company: "Modern Art Museum Oslo",
        image: "https://images.unsplash.com/photo-1518005020951-ecc8e1213af8?q=80&w=2574&auto=format&fit=crop"
    }
];

const Testimonials: React.FC = () => {
    const [active, setActive] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const contentRef = useRef<HTMLDivElement>(null);
    const quoteRef = useRef<HTMLQuoteElement>(null);
    const authorRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        // Initial entrance animation when scrolling into view
        const ctx = gsap.context(() => {
            gsap.from(contentRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                }
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    const changeTestimonial = (direction: 'next' | 'prev') => {
        if (isAnimating) return;
        setIsAnimating(true);

        const nextIndex = direction === 'next'
            ? (active + 1) % testimonials.length
            : (active - 1 + testimonials.length) % testimonials.length;

        const tl = gsap.timeline({
            onComplete: () => setIsAnimating(false)
        });

        // Exit current
        tl.to([quoteRef.current, authorRef.current], {
            y: -30,
            opacity: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.in"
        })
            .to(imageRef.current, {
                opacity: 0,
                scale: 1.1,
                duration: 0.5
            }, "<")

            // Update state
            .call(() => {
                setActive(nextIndex);
            })

            // Prepare enter
            .set([quoteRef.current, authorRef.current], { y: 30, opacity: 0 })
            .set(imageRef.current, { scale: 1.1, opacity: 0 })

            // Enter new
            .to(imageRef.current, {
                opacity: 0.4, // Reduced opacity for bg
                scale: 1,
                duration: 1,
                ease: "power2.out"
            })
            .to([quoteRef.current, authorRef.current], {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out"
            }, "-=0.6");
    };

    return (
        <section ref={sectionRef} id="testimonials" className="relative py-24 md:py-32 bg-charcoal overflow-hidden text-white min-h-[80vh] flex items-center">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-charcoal z-10 opacity-60"></div> {/* Overlay to darken */}
                <img
                    ref={imageRef}
                    src={testimonials[active].image}
                    alt="Architectural Background"
                    className="w-full h-full object-cover opacity-40 grayscale"
                />
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-20">
                <div ref={contentRef} className="max-w-6xl mx-auto">
                    <div className="mb-12 text-accent-gold">
                        <Quote size={64} fill="currentColor" className="opacity-100" />
                    </div>

                    <div className="min-h-[300px] flex flex-col justify-between">
                        <blockquote ref={quoteRef} className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight mb-12 tracking-tight">
                            "{testimonials[active].quote}"
                        </blockquote>

                        <div ref={authorRef} className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-t border-white/10 pt-8">
                            <div>
                                <cite className="not-italic font-bold text-lg tracking-widest uppercase block mb-2 text-white font-display">
                                    {testimonials[active].author}
                                </cite>
                                <span className="text-accent-gold font-bold text-[10px] tracking-[0.2em] uppercase font-technical">
                                    {testimonials[active].role} — {testimonials[active].company}
                                </span>
                            </div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2 text-[10px] font-bold text-white/50 font-technical tracking-widest">
                                    <span>0{active + 1}</span>
                                    <span className="w-8 h-px bg-white/30"></span>
                                    <span>0{testimonials.length}</span>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => changeTestimonial('prev')}
                                        className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all rounded-full group bg-transparent glass shadow-xl"
                                        aria-label="Previous testimonial"
                                    >
                                        <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    <button
                                        onClick={() => changeTestimonial('next')}
                                        className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all rounded-full group bg-transparent glass shadow-xl"
                                        aria-label="Next testimonial"
                                    >
                                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;