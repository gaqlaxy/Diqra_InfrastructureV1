import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { siteContact } from '../data/siteMeta';
import { prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = prefersReducedMotion();
  
  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.reveal-cta', {
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, [shouldReduceMotion]);

  const detailCards = [
    {
      label: 'Call',
      value: siteContact.phoneCompactLabel,
      href: siteContact.phoneHref,
      icon: Phone,
    },
    {
      label: 'Email',
      value: siteContact.supportEmail,
      href: `mailto:${siteContact.supportEmail}`,
      icon: Mail,
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="relative overflow-hidden bg-background-light py-20 text-charcoal md:py-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-px bg-charcoal/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(26,28,30,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,28,30,0.03)_1px,transparent_1px)] bg-[size:56px_56px]"></div>
        <div className="absolute left-1/2 top-12 -translate-x-1/2 text-[24vw] font-black uppercase tracking-[-0.08em] text-charcoal/[0.03]">
          Build
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_380px] lg:gap-16">
          <div className="pt-4">
            <span className="reveal-cta mb-6 block font-technical text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Project Enquiries
            </span>

            <div className="reveal-cta max-w-4xl">
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
                Trusted delivery for
                <span className="block text-charcoal/35">complex construction projects.</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-gray md:text-lg">
                Diqra manages industrial, commercial, and institutional developments with a disciplined approach to planning, coordination, and site execution.
              </p>
            </div>

            <div className="reveal-cta mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-3 bg-charcoal px-7 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-white transition-all duration-300 hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center border border-charcoal/15 px-7 py-4 text-[11px] font-bold uppercase tracking-[0.24em] text-charcoal transition-all duration-300 hover:border-charcoal hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                View Selected Work
              </Link>
            </div>

            <div className="reveal-cta mt-12 grid gap-8 border-t border-charcoal/10 pt-8 md:grid-cols-3">
              <div>
                <span className="block font-display text-3xl font-bold text-charcoal">01</span>
                <p className="mt-2 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-slate-gray">
                  End-to-end project management
                </p>
              </div>
              <div>
                <span className="block font-display text-3xl font-bold text-charcoal">02</span>
                <p className="mt-2 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-slate-gray">
                  Structured execution on site
                </p>
              </div>
              <div>
                <span className="block font-display text-3xl font-bold text-charcoal">03</span>
                <p className="mt-2 font-technical text-[10px] font-bold uppercase tracking-[0.22em] text-slate-gray">
                  Quality built for long-term performance
                </p>
              </div>
            </div>
          </div>

          <div className="reveal-cta relative overflow-hidden border border-charcoal/10 bg-charcoal p-8 text-white shadow-[0_30px_90px_rgba(26,28,30,0.18)] md:p-10">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px] opacity-40"></div>
            <div className="relative z-10">
              <span className="mb-6 block font-technical text-[11px] font-bold uppercase tracking-[0.28em] text-accent-gold">
                Contact Desk
              </span>

              <div className="space-y-4">
                {detailCards.map(({ label, value, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    className="group flex items-center gap-4 border-b border-white/10 py-4 transition-colors duration-300 hover:border-accent-gold/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-accent-gold transition-colors duration-300 group-hover:border-accent-gold/40">
                      <Icon size={18} />
                    </div>
                    <div>
                      <span className="mb-1 block font-technical text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
                        {label}
                      </span>
                      <span className="text-sm font-semibold text-white md:text-base">{value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <span className="block font-technical text-[10px] font-bold uppercase tracking-[0.24em] text-white/45">
                  Registered Office
                </span>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/65">
                  {siteContact.addressLines[0]} {siteContact.addressLines[1]} {siteContact.addressLines[2]}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
