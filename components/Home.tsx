import React from 'react';
import Hero from './Hero';
import About from './About';
import FeaturedWorks from './FeaturedWorks';
import Services from './Services';
import Capabilities from './Capabilities';
import Process from './Process';
import Stats from './Stats';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SEO from './SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Diqra Architects | Industrial & Commercial Construction" 
        description="Diqra Architects & Construction is a leading infrastructure firm specializing in turnkey industrial, commercial, and government projects across India."
      />
      <Hero />
      <About />
      <Capabilities />
      <Services />
      <Process />
      <FeaturedWorks />
      <Stats />
      <Testimonials />
      <Contact />
    </>
  );
};

export default Home;