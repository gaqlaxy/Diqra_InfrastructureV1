import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; // Import NotFound
import { Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load pages
const Home = React.lazy(() => import('./components/Home'));
const ProjectDetails = React.lazy(() => import('./components/ProjectDetails'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SustainabilityPage = React.lazy(() => import('./pages/SustainabilityPage')); // Import SustainabilityPage
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const ProcessPage = React.lazy(() => import('./pages/ProcessPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-charcoal">
    <Loader2 className="animate-spin text-primary" size={48} />
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-background-light text-charcoal font-display selection:bg-primary selection:text-white">
        <Navbar />
        <main>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/project/:id" element={<ProjectDetails />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;