import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, Globe, Clock, CheckCircle, Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    details: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        details: ''
      });
      
      // Optional: Auto-reset after a delay, but manual reset via "Send another" button is often better UX for confirmation
    }, 2000);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
        // Staggered Text Reveal
        const tl = gsap.timeline();
        
        tl.to(".title-word", {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.1,
            ease: "power4.out"
        })
        .to(".contact-detail", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }, "-=0.5")
        .to(".contact-form", {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out"
        }, "-=0.5");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-charcoal min-h-screen text-white pt-24 md:pt-32 pb-16 md:pb-24 overflow-x-hidden">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Editorial Header */}
        <div className="border-b border-white/10 pb-12 md:pb-16 mb-16 md:mb-24">
            <span className="text-accent-gold font-bold tracking-[0.2em] uppercase text-xs mb-6 block title-word opacity-0 translate-y-[100px]">Contact Diqra</span>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-white mix-blend-difference mb-8">
                <div className="overflow-hidden"><span className="block title-word opacity-0 translate-y-[100px]">Let's Build</span></div>
                <div className="overflow-hidden"><span className="block title-word text-white/50 opacity-0 translate-y-[100px]">The Future.</span></div>
            </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Contact Information Column */}
            <div className="lg:col-span-5 space-y-12 md:space-y-16">
                
                <div className="contact-detail opacity-0 translate-y-[20px]">
                    <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                        <Globe className="text-primary" size={24}/> Global HQ
                    </h3>
                    <address className="not-italic text-lg text-white/70 leading-relaxed border-l-2 border-white/10 pl-6">
                        <strong className="text-white block mb-2">Diqra Construction Ltd.</strong>
                        Plot No. 45, Industrial Area Ph-II<br/>
                        Okhla, New Delhi 110020<br/>
                        India
                    </address>
                </div>

                <div className="contact-detail grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0 translate-y-[20px]">
                    <div>
                        <h4 className="text-xs font-bold text-accent-gold uppercase tracking-widest mb-3">General Inquiries</h4>
                        <a href="mailto:hello@diqra.com" className="text-lg md:text-xl font-bold hover:text-primary transition-colors">hello@diqra.com</a>
                    </div>
                    <div>
                        <h4 className="text-xs font-bold text-accent-gold uppercase tracking-widest mb-3">Tender Division</h4>
                        <a href="mailto:tenders@diqra.com" className="text-lg md:text-xl font-bold hover:text-primary transition-colors">tenders@diqra.com</a>
                    </div>
                </div>

                <div className="contact-detail opacity-0 translate-y-[20px]">
                    <h4 className="text-xs font-bold text-accent-gold uppercase tracking-widest mb-6">Regional Offices</h4>
                    <div className="space-y-6">
                        {[
                            { city: "Mumbai", address: "Maker Chambers IV, Nariman Point", phone: "+91 22 4567 8900" },
                            { city: "Bangalore", address: "Prestige Meridian, M.G. Road", phone: "+91 80 4567 8900" },
                            { city: "Hyderabad", address: "Cyber Towers, HITEC City", phone: "+91 40 4567 8900" }
                        ].map((office, idx) => (
                            <div key={idx} className="group cursor-pointer border-t border-white/10 pt-4 hover:pl-4 transition-all duration-300">
                                <div className="flex justify-between items-baseline mb-1">
                                    <span className="font-serif text-xl md:text-2xl group-hover:text-primary transition-colors">{office.city}</span>
                                    <span className="text-xs font-mono text-white/40">{office.phone}</span>
                                </div>
                                <p className="text-sm text-white/50">{office.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7 contact-form opacity-0 translate-y-[40px]">
                <div className="bg-white/5 backdrop-blur-sm p-6 md:p-12 border border-white/10 relative overflow-hidden h-full">
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Mail size={80} className="md:w-[120px] md:h-[120px]" />
                    </div>
                    
                    {status === 'success' ? (
                        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center p-8 bg-charcoal/90 backdrop-blur-md animate-in fade-in duration-500">
                            <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                                <CheckCircle className="text-primary w-10 h-10" />
                            </div>
                            <h3 className="text-3xl font-display font-bold mb-4">Message Sent</h3>
                            <p className="text-white/60 max-w-md mx-auto mb-8 text-lg">
                                Thank you for your inquiry. Our engineering team will review your requirements and get back to you within 24 hours.
                            </p>
                            <button 
                                onClick={() => setStatus('idle')}
                                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-white transition-colors border-b border-primary hover:border-white pb-1"
                            >
                                Send another message <ArrowRight size={14} />
                            </button>
                        </div>
                    ) : null}
                    
                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 relative z-10">Project Inquiry</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50 group-focus-within:text-primary transition-colors">Name *</label>
                                <input 
                                    type="text" 
                                    name="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors font-display text-lg" 
                                    placeholder="John Doe" 
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50 group-focus-within:text-primary transition-colors">Company</label>
                                <input 
                                    type="text" 
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors font-display text-lg" 
                                    placeholder="Organization Ltd." 
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50 group-focus-within:text-primary transition-colors">Email *</label>
                                <input 
                                    type="email" 
                                    name="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors font-display text-lg" 
                                    placeholder="john@example.com" 
                                />
                            </div>
                            <div className="group">
                                <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50 group-focus-within:text-primary transition-colors">Phone</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors font-display text-lg" 
                                    placeholder="+91 ..." 
                                />
                            </div>
                        </div>

                        <div className="group">
                            <label className="block text-xs font-bold uppercase tracking-widest mb-2 text-white/50 group-focus-within:text-primary transition-colors">Project Details *</label>
                            <textarea 
                                rows={4} 
                                name="details"
                                required
                                value={formData.details}
                                onChange={handleChange}
                                className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors font-display text-lg resize-none" 
                                placeholder="Tell us about your project scale, location, and timeline..."
                            ></textarea>
                        </div>

                        <div className="pt-4 md:pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                            <div className="flex items-center gap-2 text-white/40 text-xs">
                                <Clock size={14} />
                                <span>Typical response time: 24 hours</span>
                            </div>
                            <button 
                                type="submit" 
                                disabled={status === 'submitting'}
                                className="w-full md:w-auto group relative inline-flex justify-center items-center gap-3 bg-primary text-white px-10 py-5 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-charcoal disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                  {status === 'submitting' ? (
                                      <>Sending... <Loader2 className="animate-spin" size={18}/></>
                                  ) : (
                                      <>Send Message <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" /></>
                                  )}
                                </span>
                                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;