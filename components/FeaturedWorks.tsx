import React, { useRef } from 'react';
import { projects } from '../data/projects';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedWorks: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-primary font-bold tracking-widest uppercase text-xs mb-4 block">Featured Projects</span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-charcoal leading-tight">
             Industrial & <br/>Commercial Portfolio
          </h2>
        </div>
        <div className="flex gap-4">
          <button 
            onClick={() => scroll('left')}
            className="w-14 h-14 border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all"
            aria-label="Scroll left"
          >
            <ArrowLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-14 h-14 border border-charcoal/20 flex items-center justify-center hover:bg-charcoal hover:text-white transition-all"
            aria-label="Scroll right"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-6 md:px-12 pb-12 hide-scrollbar snap-x snap-mandatory"
      >
        {projects.map((project) => (
          <Link 
            to={`/project/${project.id}`} 
            key={project.id} 
            className="min-w-[85vw] md:min-w-[40vw] lg:min-w-[30vw] snap-center group cursor-pointer block"
          >
            <div className="relative overflow-hidden aspect-[4/3] mb-6 bg-gray-200">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 grayscale"
                loading="lazy"
                width="800"
                height="600"
              />
              <div className="absolute top-0 left-0 bg-primary text-white text-[10px] font-bold uppercase px-3 py-1 tracking-widest">
                {project.category}
              </div>
            </div>
            <h3 className="font-display font-bold text-2xl mb-2 text-charcoal group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-slate-gray">
               <span>{project.location}</span>
               <span>{project.area}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default FeaturedWorks;