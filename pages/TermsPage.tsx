import React from "react";
import SEO from "../components/SEO";

const TermsPage: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen pt-28 md:pt-32 pb-20">
      <SEO
        title="Terms of Use | Diqra Architects"
        description="Terms governing the use of the Diqra Architects website, content, and inquiry channels."
      />

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-primary mb-5 font-technical">
          Terms of Use
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-charcoal leading-[0.95] tracking-tight mb-8">
          This website is provided for information and project discovery.
        </h1>
        <div className="grid gap-8 text-base md:text-lg leading-relaxed text-slate-gray">
          <p>
            The material on this site is intended to present Diqra Architects,
            its capabilities, and representative project information. Content may
            be updated as the practice evolves.
          </p>
          <p>
            You may browse and reference the site for informational purposes.
            You may not misrepresent the brand, copy the work as your own, or
            use the site in a way that interferes with its normal operation.
          </p>
          <p>
            Project availability, timelines, and commercial terms are confirmed
            only through direct written communication with the Diqra team.
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
