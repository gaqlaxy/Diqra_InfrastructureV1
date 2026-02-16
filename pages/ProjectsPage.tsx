import React, { useState, useRef, useEffect } from 'react';
import { projects } from '../data/projects';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const ProjectsPage: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Industrial', 'Commercial', 'Government'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-card", {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });
    }, containerRef);
    return () => ctx.revert();
  }, [filter]);

  return (
    <div className="bg-background-light min-h-screen pt-24 md:pt-32">
      <SEO 
        title={`Our Portfolio | ${filter} Projects`} 
        description="Explore Diqra's diverse portfolio of industrial, commercial, and government infrastructure projects."
      />

      <div className="container mx-auto px-6 md:px-12 mb-16 md:mb-24">
        <div className="mb-12 md:mb-16">
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Our Portfolio</span>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-charcoal leading-tight mb-8">
            Engineering Excellence <br/> Delivered.
          </h1>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-2 md:gap-4 border-b border-charcoal/10 pb-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-[10px] md:text-xs font-bold uppercase tracking-widest px-4 py-2 md:px-6 md:py-3 transition-all ${
                  filter === cat 
                    ? 'bg-charcoal text-white' 
                    : 'bg-white text-slate-gray hover:text-primary border border-charcoal/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 md:gap-y-16">
          {filteredProjects.map((project) => (
            <Link 
              to={`/project/${project.id}`} 
              key={project.id}
              className="project-card group block"
            >
              <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-charcoal">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 w-10 h-10 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowUpRight className="text-charcoal" size={20} />
                </div>
              </div>
              
              <div className="flex justify-between items-start border-t border-charcoal/10 pt-4">
                <div>
                    <span className="text-xs font-bold text-primary uppercase tracking-widest mb-1 block">{project.category}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-charcoal group-hover:text-primary transition-colors">{project.title}</h3>
                </div>
                <span className="text-xs font-bold text-slate-gray uppercase tracking-widest">{project.year}</span>
              </div>
              <p className="mt-4 text-slate-gray text-sm line-clamp-2 leading-relaxed">
                {project.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
      
      <Contact />
    </div>
  );
};

export default ProjectsPage;