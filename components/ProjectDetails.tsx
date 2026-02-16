import React, { useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projects } from '../data/projects';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft, ArrowRight, Download, Ruler, Calendar, MapPin, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);

  const project = projects.find(p => p.id === Number(id));
  const nextProject = projects.find(p => p.id === (Number(id) % projects.length) + 1);
  
  // Filter related projects (same category, excluding current)
  const relatedProjects = projects
    .filter(p => p.category === project?.category && p.id !== project?.id)
    .slice(0, 2);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(".hero-reveal", {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      gsap.from(".related-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
            trigger: ".related-section",
            start: "top 80%"
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, [id]);

  if (!project) {
    return <div className="h-screen flex items-center justify-center bg-background-light">Project not found</div>;
  }

  return (
    <div ref={containerRef} className="bg-background-light min-h-screen pt-24 md:pt-32">
      <div className="container mx-auto px-6 md:px-12 mb-8 md:mb-12">
        <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-gray hover:text-primary transition-colors mb-6 md:mb-8">
          <ArrowLeft size={16} /> Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 mb-8 md:mb-12 items-end">
          <div className="lg:col-span-8">
             <span className="hero-reveal block text-primary font-bold tracking-widest uppercase text-xs mb-4 opacity-0 translate-y-[50px]">
                {project.category} Project
             </span>
             <h1 className="hero-reveal font-display font-bold text-3xl md:text-6xl lg:text-7xl text-charcoal leading-none uppercase opacity-0 translate-y-[50px]">
                {project.title}
             </h1>
          </div>
          <div className="lg:col-span-4 lg:text-right">
             <span className="hero-reveal inline-block px-4 py-2 border border-charcoal/20 text-xs font-bold uppercase tracking-widest text-charcoal opacity-0 translate-y-[50px]">
                Project ID: DIQ-{project.year}-{project.id}09
             </span>
          </div>
        </div>

        {/* Technical Data Grid */}
        <div className="hero-reveal grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 border-y border-charcoal/10 py-6 mb-8 md:mb-12 bg-white gap-y-6 md:gap-y-0 opacity-0 translate-y-[50px]">
            <div className="px-6 py-2 border-r-0 md:border-r border-charcoal/10">
                <span className="block text-xs font-bold text-slate-gray uppercase mb-1">Client</span>
                <span className="font-bold text-charcoal">{project.client}</span>
            </div>
            <div className="px-6 py-2 border-r-0 sm:border-r md:border-r border-charcoal/10">
                <span className="block text-xs font-bold text-slate-gray uppercase mb-1 flex items-center gap-2"><MapPin size={12}/> Location</span>
                <span className="font-bold text-charcoal">{project.location}</span>
            </div>
            <div className="px-6 py-2 border-r-0 md:border-r border-charcoal/10">
                <span className="block text-xs font-bold text-slate-gray uppercase mb-1 flex items-center gap-2"><Ruler size={12}/> Area</span>
                <span className="font-bold text-charcoal">{project.area}</span>
            </div>
            <div className="px-6 py-2">
                <span className="block text-xs font-bold text-slate-gray uppercase mb-1 flex items-center gap-2"><Calendar size={12}/> Year</span>
                <span className="font-bold text-charcoal">{project.year}</span>
            </div>
        </div>
      </div>

      <div className="w-full h-[40vh] md:h-[70vh] overflow-hidden mb-12 md:mb-16">
        <img 
          ref={heroImageRef}
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 order-2 lg:order-1">
                <h3 className="text-lg md:text-xl font-bold font-display text-charcoal uppercase mb-6 border-l-4 border-primary pl-4">Scope of Work</h3>
                <div className="bg-white p-6 border border-charcoal/10 space-y-4">
                    <button className="w-full flex justify-between items-center text-sm font-bold text-charcoal border-b border-charcoal/10 pb-4">
                        <span>Civil Construction</span> <span className="text-primary">●</span>
                    </button>
                    <button className="w-full flex justify-between items-center text-sm font-bold text-charcoal border-b border-charcoal/10 pb-4">
                        <span>Structural Steel</span> <span className="text-primary">●</span>
                    </button>
                    <button className="w-full flex justify-between items-center text-sm font-bold text-charcoal border-b border-charcoal/10 pb-4">
                        <span>MEP Coordination</span> <span className="text-primary">●</span>
                    </button>
                    <button className="w-full flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mt-4">
                        <Download size={16} /> Download Technical Spec
                    </button>
                </div>
            </div>
            <div className="lg:col-span-8 order-1 lg:order-2">
                 <h3 className="text-lg md:text-xl font-bold font-display text-charcoal uppercase mb-6">Project Overview</h3>
                 <p className="text-slate-gray text-base md:text-lg leading-relaxed mb-6 md:mb-8">
                    {project.description}
                 </p>
                 <p className="text-slate-gray leading-relaxed mb-12">
                    Execution followed strict safety protocols and quality control measures (ISO 9001). The project utilized advanced formwork systems to reduce slab cycle time and maximize efficiency.
                 </p>

                 <h3 className="text-lg md:text-xl font-bold font-display text-charcoal uppercase mb-6">Site Gallery</h3>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.gallery.map((img, idx) => (
                        <div key={idx} className="aspect-video overflow-hidden bg-gray-200 group">
                            <img src={img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt="Gallery" />
                        </div>
                    ))}
                 </div>
            </div>
        </div>
      </div>

      {/* Related Projects Section */}
      {relatedProjects.length > 0 && (
          <div className="bg-white py-16 md:py-24 related-section">
              <div className="container mx-auto px-6 md:px-12">
                  <div className="flex justify-between items-end mb-12">
                      <div>
                          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Similar Works</span>
                          <h2 className="text-2xl md:text-4xl font-display font-bold text-charcoal">Related Projects</h2>
                      </div>
                      <Link to="/projects" className="hidden md:flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-charcoal pb-1">
                          View All <ArrowRight size={14}/>
                      </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {relatedProjects.map((related) => (
                          <Link to={`/project/${related.id}`} key={related.id} className="related-card group block">
                              <div className="relative overflow-hidden aspect-[16/10] mb-4 bg-gray-100">
                                  <img src={related.image} alt={related.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                  <div className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                      <ArrowUpRight className="text-charcoal" size={20} />
                                  </div>
                              </div>
                              <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{related.category}</span>
                              <h3 className="text-xl font-bold text-charcoal group-hover:text-primary transition-colors">{related.title}</h3>
                          </Link>
                      ))}
                  </div>
                  
                  <div className="mt-8 text-center md:hidden">
                    <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border-b border-charcoal pb-1">
                          View All <ArrowRight size={14}/>
                    </Link>
                  </div>
              </div>
          </div>
      )}

      {nextProject && (
        <div className="bg-charcoal py-16 md:py-24 text-white border-t-4 border-primary">
          <div className="container mx-auto px-6 md:px-12">
             <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <span className="block text-xs font-bold text-white/50 uppercase tracking-widest mb-2">Next Project</span>
                    <h2 className="text-2xl md:text-5xl font-display font-bold">{nextProject.title}</h2>
                </div>
                <Link 
                  to={`/project/${nextProject.id}`} 
                  className="group relative inline-flex items-center gap-3 bg-white text-charcoal px-8 py-4 text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:text-white"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View Case Study <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </Link>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;