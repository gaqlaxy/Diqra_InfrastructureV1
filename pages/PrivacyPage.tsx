import React from "react";
import SEO from "../components/SEO";

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-background-light min-h-screen pt-28 md:pt-32 pb-20">
      <SEO
        title="Privacy Policy | Diqra Architects"
        description="Read how Diqra Architects handles inquiries, contact details, and project information shared through this website."
      />

      <section className="container mx-auto px-6 md:px-12 max-w-4xl">
        <span className="block text-[11px] font-bold uppercase tracking-[0.24em] text-primary mb-5 font-technical">
          Privacy Policy
        </span>
        <h1 className="font-display font-bold text-4xl md:text-6xl text-charcoal leading-[0.95] tracking-tight mb-8">
          We collect only what is needed to respond to project inquiries.
        </h1>
        <div className="grid gap-8 text-base md:text-lg leading-relaxed text-slate-gray">
          <p>
            Diqra Architects uses the contact forms on this site to review
            project requests, respond to business inquiries, and coordinate
            follow-up communication with prospective clients, partners, and
            vendors.
          </p>
          <p>
            Information submitted through forms may include your name, company,
            email address, phone number, and project requirements. We use that
            information only for business communication, internal review, and
            proposal preparation.
          </p>
          <p>
            We do not sell personal information. If you need a correction or
            want an inquiry removed from our active records, contact the team
            through the main contact channel listed on this site.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
