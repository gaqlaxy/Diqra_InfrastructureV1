import React, { useEffect, useRef } from 'react';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { legalLinks, siteContact, socialLinks } from '../data/siteMeta';
import { getMotionSafeScrollBehavior, prefersReducedMotion } from '../utils/motion';

gsap.registerPlugin(ScrollTrigger);

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = prefersReducedMotion();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: getMotionSafeScrollBehavior() });
  };

  useEffect(() => {
    if (shouldReduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.from('.footer-col', {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 95%',
        },
      });

      gsap.from('.footer-brand', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 90%',
        },
      });
    }, footerRef);

    return () => ctx.revert();
  }, [shouldReduceMotion]);

  return (
    <footer ref={footerRef} className="bg-charcoal text-white pt-20 pb-10 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20 border-b border-white/10 pb-12 footer-brand">
          <h1 className="font-display font-bold text-[10vw] md:text-[12vw] leading-[0.8] tracking-tighter text-transparent text-stroke select-none">
            DIQRA<span className="opacity-10">INFRA.</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-24">
          <div className="footer-col space-y-6">
            <h4 className="text-[11px] font-bold text-accent-gold uppercase tracking-[0.2em] font-technical">
              Headquarters
            </h4>
            <address className="not-italic text-sm text-white/60 leading-relaxed hover:text-white transition-colors duration-300">
              {siteContact.addressLines[0]}
              <br />
              {siteContact.addressLines[1]}
              <br />
              {siteContact.addressLines[2]}
            </address>
            <div className="pt-2">
              <a
                href={`mailto:${siteContact.supportEmail}`}
                className="text-sm font-bold text-white hover:text-primary transition-colors flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                <span className="relative">
                  {siteContact.supportEmail}
                  <span className="absolute left-0 bottom-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>
              </a>
              <a
                href={siteContact.phoneHref}
                className="text-sm font-bold text-white hover:text-primary transition-colors block mt-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                <span className="relative">
                  {siteContact.phoneLabel}
                  <span className="absolute left-0 bottom-0 w-full h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </span>
              </a>
            </div>
          </div>

          <div className="footer-col space-y-6">
            <h4 className="text-[11px] font-bold text-accent-gold uppercase tracking-[0.2em] font-technical">
              Explore
            </h4>
            <ul className="space-y-3">
              {[
                ['Projects', '/projects'],
                ['Services', '/services'],
                ['Process', '/process'],
                ['Careers', '/careers'],
                ['About', '/about'],
                ['Handbook', '/handbook'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    to={href}
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span className="relative">
                      {label}
                      <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col space-y-6">
            <h4 className="text-[11px] font-bold text-accent-gold uppercase tracking-[0.2em] font-technical">
              Social
            </h4>
            <ul className="space-y-3">
              {socialLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/60 hover:text-white transition-colors flex items-center gap-2 group w-fit focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-full h-px bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    </span>
                    <ArrowUpRight size={12} className="opacity-0 -translate-x-2 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-primary" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col flex flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="group flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white hover:text-primary transition-colors font-technical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
            >
              Back to Top
              <div className="w-12 h-12 border border-white/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all glass-dark relative overflow-hidden shadow-2xl">
                <ArrowUp size={18} className="text-white relative z-10 group-hover:-translate-y-1 group-hover:scale-110 duration-300" />
              </div>
            </button>

            <div className="mt-8 md:mt-0 text-right hidden md:block">
              <p className="text-[11px] text-white/20 uppercase tracking-[0.2em] max-w-[150px] font-technical italic">
                Designing the world of tomorrow.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/20 uppercase tracking-[0.2em] footer-col font-technical">
          <p>&copy; 2024 Diqra Architects. ISO 9001 Certified.</p>
          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-charcoal"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
