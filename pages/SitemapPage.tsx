import React from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";

const pages = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Process", href: "/process" },
  { label: "Projects", href: "/projects" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

const SitemapPage: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen pt-28 md:pt-32 pb-20">
      <SEO
        title="Sitemap | Diqra Architects"
        description="Browse the main sections of the Diqra Architects website."
      />

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-primary mb-5 font-technical">
          Sitemap
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-charcoal leading-[0.95] tracking-tight mb-8">
          Every public route in one place.
        </h1>
        <div className="grid gap-4 sm:grid-cols-2">
          {pages.map((page) => (
            <Link
              key={page.href}
              to={page.href}
              className="border border-charcoal/10 bg-white px-5 py-4 text-lg font-display font-bold text-charcoal transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
            >
              {page.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;
