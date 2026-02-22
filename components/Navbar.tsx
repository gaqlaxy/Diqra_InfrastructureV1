import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Animation Sequence when Menu Opens
  useEffect(() => {
    if (isMobileMenuOpen && menuRef.current) {
      const ctx = gsap.context(() => {
        // Reset positions
        gsap.set(".menu-item-text", { y: 100, opacity: 0 });
        gsap.set(leftPanelRef.current, { x: -50, opacity: 0 });
        gsap.set(".menu-footer-item", { opacity: 0, y: 20 });

        const tl = gsap.timeline();

        // Left Panel Slide In (Desktop Only)
        // We check if the element exists/is visible to avoid errors
        if (window.innerWidth >= 1024) {
          tl.to(leftPanelRef.current, {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out"
          });
        }

        // Menu Items Stagger
        // Adjust start time based on whether left panel animated or not
        const label = window.innerWidth >= 1024 ? "-=0.8" : "0";

        tl.to(".menu-item-text", {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.08,
          ease: "power4.out"
        }, label)
          // Footer Details Fade In
          .to(".menu-footer-item", {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
          }, "-=0.6");

      }, menuRef);

      return () => ctx.revert();
    }
  }, [isMobileMenuOpen]);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Case Studies', path: '/projects' },
    { name: 'Process', path: '/process' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled && !isMobileMenuOpen ? 'bg-background-light/90 backdrop-blur-md py-4 shadow-sm border-charcoal/5' : 'bg-transparent py-6'
          }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <Link
            to="/"
            className={`text-xl md:text-2xl font-bold tracking-tighter uppercase font-display relative z-50 transition-colors group ${isMobileMenuOpen ? 'text-charcoal' : (isScrolled ? 'text-charcoal' : 'text-white')} flex items-center gap-2`}
          >

            <img
              src={isMobileMenuOpen || isScrolled ? "/assets/diqrablack.png" : "/assets/diqrawhite.png"}
              alt="Diqra Architects"
              className="w-40 transition-all duration-300"
            />
          </Link>

          {/* Actions */}
          <div className="relative z-50 flex items-center gap-4">
            {/* Contact Button (Desktop Only - lg+) */}
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center justify-center text-xs font-bold uppercase tracking-widest px-6 py-2.5 border transition-all duration-300 hover:-translate-y-0.5 ${isMobileMenuOpen
                ? 'border-charcoal/20 text-charcoal hover:bg-charcoal hover:text-white'
                : (isScrolled
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white hover:text-charcoal')
                }`}
            >
              Contact Us
            </Link>

            {/* Menu Trigger */}
            <button
              onClick={toggleMenu}
              className={`flex items-center gap-3 text-xs font-bold uppercase tracking-widest px-5 py-2.5 border transition-all duration-300 group hover:-translate-y-0.5 ${isMobileMenuOpen
                ? 'bg-charcoal text-white border-charcoal hover:bg-charcoal/90'
                : (isScrolled
                  ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                  : 'border-white/20 text-white bg-white/5 hover:bg-white hover:text-charcoal')
                }`}
            >
              {isMobileMenuOpen ? <X size={16} className="group-hover:rotate-90 transition-transform duration-300" /> : <Menu size={16} className="group-hover:rotate-180 transition-transform duration-300" />}
              <span className="hidden md:inline">{isMobileMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay - Kyma Aesthetic */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 bg-[#F3F3EF] transition-transform duration-700 ease-[0.22,1,0.36,1] overflow-hidden"
        style={{ transform: isMobileMenuOpen ? 'translateY(0%)' : 'translateY(-100%)' }}
      >
        <div className="h-full w-full flex flex-col lg:flex-row">

          {/* Left Panel: Feature Card (Desktop Only - lg+) */}
          <div className="hidden lg:flex w-[35%] h-full p-8 lg:p-12 items-center justify-center border-r border-charcoal/5 bg-[#EAEAE5]">
            <div ref={leftPanelRef} className="w-full h-[70vh] max-h-[800px] relative bg-charcoal text-white overflow-hidden flex flex-col justify-between p-8 lg:p-10 group shadow-2xl hover:shadow-2xl transition-shadow duration-500">
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop"
                  alt="Feature Case Study"
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-[1.5s]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
              </div>

              {/* Card Content Top */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-accent-gold">Dec 1, 2024</span>
                  <div className="h-8 w-px bg-white/20"></div>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest">Live Site</span>
                </div>
              </div>

              {/* Card Content Bottom */}
              <div className="relative z-10">
                <div className="grid grid-cols-2 gap-8 mb-8 border-b border-white/20 pb-8">
                  <div>
                    <span className="block text-2xl font-bold font-display text-white mb-1">87%</span>
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-white/60">Efficiency Gain</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-bold font-display text-white mb-1">3X</span>
                    <span className="block text-[9px] font-bold uppercase tracking-widest text-white/60">Faster Delivery</span>
                  </div>
                </div>

                <span className="text-[9px] font-bold uppercase tracking-widest text-accent-gold mb-3 block">Featured Case Study</span>
                <h3 className="text-lg font-display font-bold leading-tight mb-6 max-w-[90%]">
                  HOW WE HELP COMPANIES SCALE OPERATIONS WITH INFRASTRUCTURE.
                </h3>

                <Link to="/projects" onClick={() => setIsMobileMenuOpen(false)} className="inline-flex items-center justify-center w-12 h-12 bg-[#CCFF00] text-charcoal hover:bg-white transition-all duration-300 hover:scale-110">
                  <ArrowUpRight size={20} />
                </Link>
              </div>
            </div>
          </div>

          {/* Right Panel: Navigation List */}
          {/* 
                Structure:
                - Mobile/Tablet (up to lg): Full width, vertically scrollable.
                - Desktop (lg+): 65% width, overflow hidden (content fits).
            */}
          <div ref={rightPanelRef} className="w-full lg:w-[65%] h-full pt-24 md:pt-32 lg:pt-28 px-6 md:px-20 lg:px-24 flex flex-col overflow-y-auto lg:overflow-hidden relative">

            {/* Menu Items - Vertically Centered */}
            <div className="flex-grow flex flex-col justify-center mb-8 md:mb-4">
              <ul className="space-y-0 lg:space-y-2">
                {menuItems.map((item, idx) => (
                  <li key={item.name} className="overflow-hidden group">
                    <Link
                      to={item.path}
                      className="menu-item-text block text-[10vw] md:text-7xl lg:text-6xl xl:text-7xl font-black uppercase text-charcoal hover:text-primary transition-all duration-300 leading-[0.9] tracking-tighter lg:hover:translate-x-4 lg:hover:skew-x-2"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Info - Pinned to Bottom on Desktop */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 border-t border-charcoal/10 pt-6 pb-6 md:pb-10 mt-auto">
              <div className="menu-footer-item">
                <span className="block text-[10px] font-bold text-slate-gray uppercase tracking-widest mb-2">[ Phone ]</span>
                <a href="tel:+911145678900" className="text-base font-bold text-charcoal hover:underline decoration-2 underline-offset-4 decoration-primary">
                  +91 (11) 4567-8900
                </a>
              </div>

              <div className="menu-footer-item">
                <span className="block text-[10px] font-bold text-slate-gray uppercase tracking-widest mb-2">[ Email ]</span>
                <a href="mailto:sales@diqra.com" className="inline-block text-lg md:text-xl font-black text-charcoal bg-[#CCFF00] px-1 hover:px-4 transition-all uppercase italic duration-300">
                  SALES@DIQRA.COM
                </a>
              </div>

              <div className="lg:col-span-2 menu-footer-item mt-4 hidden lg:block">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-gray uppercase tracking-widest mb-4">[ Socials ]</span>
                    <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-charcoal">
                      <div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
                        <span className="text-slate-gray group-hover:text-primary">1.0</span>
                        <span className="group-hover:underline decoration-primary underline-offset-4">LinkedIn</span>
                      </div>
                      <div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
                        <span className="text-slate-gray group-hover:text-primary">1.1</span>
                        <span className="group-hover:underline decoration-primary underline-offset-4">Instagram</span>
                      </div>
                      <div className="flex items-center gap-2 group cursor-pointer hover:-translate-y-1 transition-transform">
                        <span className="text-slate-gray group-hover:text-primary">1.2</span>
                        <span className="group-hover:underline decoration-primary underline-offset-4">Twitter (X)</span>
                      </div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-slate-gray uppercase tracking-widest">© 2024 Diqra</span>
                </div>
              </div>

              {/* Mobile/Tablet Socials */}
              <div className="lg:hidden menu-footer-item mt-2">
                <span className="block text-[10px] font-bold text-slate-gray uppercase tracking-widest mb-4">[ Socials ]</span>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-charcoal">
                  <span>LinkedIn</span>
                  <span>Instagram</span>
                  <span>Twitter</span>
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