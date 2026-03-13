import React, { useEffect, useRef, useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { siteContact, socialLinks } from '../data/siteMeta';
import { prefersReducedMotion } from '../utils/motion';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const shouldReduceMotion = prefersReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen || !menuRef.current || shouldReduceMotion) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set('.menu-item-text', { y: 100, opacity: 0 });
      gsap.set(leftPanelRef.current, { x: -50, opacity: 0 });
      gsap.set('.menu-footer-item', { opacity: 0, y: 20 });

      const timeline = gsap.timeline();

      if (window.innerWidth >= 1024) {
        timeline.to(leftPanelRef.current, {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
        });
      }

      const label = window.innerWidth >= 1024 ? '-=0.8' : '0';

      timeline
        .to(
          '.menu-item-text',
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power4.out',
          },
          label
        )
        .to(
          '.menu-footer-item',
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
          },
          '-=0.6'
        );
    }, menuRef);

    return () => ctx.revert();
  }, [isMobileMenuOpen, shouldReduceMotion]);

  useEffect(() => {
    if (!isMobileMenuOpen || !menuRef.current) {
      return;
    }

    const focusableSelector = [
      'a[href]',
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    const focusableElements = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(focusableSelector)
    );
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];

    firstFocusable?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
        return;
      }

      if (event.key !== 'Tab' || focusableElements.length === 0) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable?.focus();
      }

      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable?.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      menuButtonRef.current?.focus();
    };
  }, [isMobileMenuOpen]);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${
          isScrolled && !isMobileMenuOpen
            ? 'bg-background-light/90 backdrop-blur-md py-4 shadow-sm border-charcoal/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link
            to="/"
            className={`text-xl md:text-2xl font-bold tracking-tighter uppercase font-display relative z-50 transition-colors group ${
              isMobileMenuOpen ? 'text-charcoal' : isScrolled ? 'text-charcoal' : 'text-white'
            } flex items-center gap-2`}
          >
            <img
              src={isMobileMenuOpen || isScrolled ? '/assets/diqrablack.png' : '/assets/diqrawhite.png'}
              alt="Diqra Architects"
              className="w-40 transition-all duration-300"
            />
          </Link>

          <div className="relative z-50 flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center justify-center text-[11px] font-bold uppercase tracking-widest px-6 py-2.5 border transition-all duration-300 hover:-translate-y-0.5 font-technical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isMobileMenuOpen
                  ? 'border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white'
                  : isScrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white hover:text-charcoal'
              }`}
            >
              Contact Us
            </Link>

            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="site-navigation-dialog"
              aria-haspopup="dialog"
              aria-label={isMobileMenuOpen ? 'Close site navigation' : 'Open site navigation'}
              className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 group hover:-translate-y-0.5 font-technical focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                isMobileMenuOpen
                  ? 'bg-charcoal text-white border-charcoal hover:bg-charcoal/90'
                  : isScrolled
                  ? 'border-primary text-primary hover:bg-primary hover:text-white'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white hover:text-charcoal'
              }`}
            >
              {isMobileMenuOpen ? (
                <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
              ) : (
                <Menu size={16} className="group-hover:rotate-180 transition-transform duration-300" />
              )}
              <span className="hidden md:inline">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="site-navigation-dialog"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isMobileMenuOpen}
        aria-label="Site navigation"
        className={`fixed inset-0 z-40 bg-[#F3F3EF] transition-transform duration-700 ease-[0.22,1,0.36,1] overflow-hidden ${isMobileMenuOpen ? 'pointer-events-auto visible' : 'pointer-events-none invisible'}`}
        style={{ transform: isMobileMenuOpen ? 'translateY(0%)' : 'translateY(-100%)' }}
      >
        <div className="h-full w-full flex flex-col lg:flex-row">
          <div className="hidden lg:flex w-[35%] h-full p-8 lg:p-12 items-center justify-center border-r border-charcoal/5 bg-[#EAEAE5]">
            <div
              ref={leftPanelRef}
              className="w-full h-[70vh] max-h-[800px] relative bg-charcoal text-white overflow-hidden flex flex-col justify-between p-8 lg:p-10 group shadow-2xl hover:shadow-2xl transition-shadow duration-500"
            >
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                  alt="Feature case study"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>

              <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-accent-gold font-technical">
                    Dec 1, 2024
                  </span>
                  <div className="h-8 w-px bg-white/20"></div>
                </div>
                <div className="flex items-center gap-2 opacity-50 font-technical">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span className="text-[11px] font-bold uppercase tracking-widest">Live Site</span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-8 mb-8 border-b border-white/20 pb-8">
                  <div>
                    <span className="block text-2xl font-bold font-display text-white mb-1">87%</span>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-white/60 font-technical">
                      Efficiency Gain
                    </span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold font-display text-white mb-1">3X</span>
                    <span className="block text-[11px] font-bold uppercase tracking-widest text-white/60 font-technical">
                      Faster Delivery
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-widest text-accent-gold mb-3 block font-technical">
                  Featured Case Study
                </span>
                <h3 className="text-lg font-display font-bold leading-tight mb-6 max-w-[90%] uppercase tracking-tight">
                  How we help companies scale operations with infrastructure.
                </h3>

                <Link
                  to="/projects"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center w-12 h-12 bg-primary text-white hover:bg-white hover:text-charcoal transition-all duration-300 hover:scale-110 shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  aria-label="Browse project case studies"
                >
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-[65%] h-full pt-24 md:pt-32 lg:pt-28 px-6 md:px-20 lg:px-24 flex flex-col overflow-y-auto lg:overflow-hidden relative">
            <div className="flex-grow flex flex-col justify-center mb-8 md:mb-4">
              <ul className="space-y-0 lg:space-y-2">
                {menuItems.map((item) => (
                  <li key={item.name} className="overflow-hidden group">
                    <Link
                      to={item.path}
                      className="menu-item-text block text-[10vw] md:text-7xl lg:text-6xl xl:text-7xl font-black uppercase text-charcoal hover:text-primary transition-all duration-300 leading-[0.9] tracking-tighter lg:hover:translate-x-4 lg:hover:skew-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 border-t border-charcoal/10 pt-6 pb-6 md:pb-10 mt-auto">
              <div className="menu-footer-item">
                <span className="block text-[11px] font-bold text-slate-gray uppercase tracking-widest mb-2 font-technical">
                  [ Phone ]
                </span>
                <a
                  href={siteContact.phoneHref}
                  className="text-base font-bold text-charcoal transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {siteContact.phoneCompactLabel}
                </a>
              </div>

              <div className="menu-footer-item">
                <span className="block text-[11px] font-bold text-slate-gray uppercase tracking-widest mb-2 font-technical">
                  [ Email ]
                </span>
                <a
                  href={`mailto:${siteContact.supportEmail}`}
                  className="inline-block text-lg md:text-xl font-black text-white bg-primary px-4 py-1 transition-all uppercase italic duration-300 shadow-lg hover:bg-charcoal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  {siteContact.supportEmail}
                </a>
              </div>

              <div className="lg:col-span-2 menu-footer-item mt-4 hidden lg:block">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-[11px] font-bold text-slate-gray uppercase tracking-widest mb-4 font-technical">
                      [ Socials ]
                    </span>
                    <div className="flex gap-8 text-[11px] font-bold uppercase tracking-widest text-charcoal font-technical">
                      {socialLinks.slice(0, 3).map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-2 transition-transform group hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                        >
                          <span className="text-slate-gray transition-colors group-hover:text-primary">
                            {social.id}
                          </span>
                          <span className="transition-colors group-hover:text-primary">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-gray uppercase tracking-widest font-technical">
                    &copy; 2024 Diqra
                  </span>
                </div>
              </div>

              <div className="lg:hidden menu-footer-item mt-2">
                <span className="block text-[11px] font-bold text-slate-gray uppercase tracking-widest mb-4 font-technical">
                  [ Socials ]
                </span>
                <div className="flex flex-wrap gap-5 text-[11px] font-bold uppercase tracking-widest text-charcoal font-technical">
                  {socialLinks.slice(0, 3).map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
