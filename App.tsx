import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';
import { Loader2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Lazy load pages
const Home = React.lazy(() => import('./components/Home'));
const ProjectDetails = React.lazy(() => import('./components/ProjectDetails'));
const AboutPage = React.lazy(() => import('./pages/AboutPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const SustainabilityPage = React.lazy(() => import('./pages/SustainabilityPage'));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage'));
const ProcessPage = React.lazy(() => import('./pages/ProcessPage'));
const CareersPage = React.lazy(() => import('./pages/CareersPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const HandbookLayout = React.lazy(() => import('./components/HandbookLayout'));
const HRPolicyPage = React.lazy(() => import('./pages/handbook/HRPolicyPage'));
const BrandStrategyPage = React.lazy(() => import('./pages/handbook/BrandStrategyPage'));
const OperationalGovernancePage = React.lazy(() => import('./pages/handbook/OperationalGovernancePage'));
const DashboardPage = React.lazy(() => import('./pages/handbook/DashboardPage'));
const HRMLayout = React.lazy(() => import('./components/HRMLayout'));
const HRMDashboard = React.lazy(() => import('./pages/hrm/HRMDashboard'));
const EmployeeManagement = React.lazy(() => import('./pages/hrm/EmployeeManagement'));
const TaskDelegation = React.lazy(() => import('./pages/hrm/TaskDelegation'));
const AttendanceLeave = React.lazy(() => import('./pages/hrm/AttendanceLeave'));

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

const AppContent: React.FC = () => {
  const location = useLocation();
  const isHRM = location.pathname.startsWith('/hrm');
  const isAdmin = location.pathname.startsWith('/admin');
  const isHandbook = location.pathname.startsWith('/handbook');

  const hideGlobalNavbar = isHRM || isAdmin || isHandbook;
  const hideFooter = isHRM || isAdmin || isHandbook;

  return (
    <div className="min-h-screen bg-background-light text-charcoal font-display selection:bg-primary selection:text-white">
      {!hideGlobalNavbar && <Navbar />}
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

            <Route path="/handbook" element={<HandbookLayout />}>
              <Route index element={<HRPolicyPage />} />
              <Route path="hr-policy" element={<HRPolicyPage />} />
              <Route path="brand-strategy" element={<BrandStrategyPage />} />
              <Route path="operational-governance" element={<OperationalGovernancePage />} />
              <Route path="dashboard" element={<DashboardPage />} />
            </Route>

            <Route path="/admin" element={<HandbookLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="hr-policy" element={<HRPolicyPage />} />
              <Route path="brand-strategy" element={<BrandStrategyPage />} />
              <Route path="operational-governance" element={<OperationalGovernancePage />} />
            </Route>

            <Route path="/hrm" element={<HRMLayout />}>
              <Route index element={<HRMDashboard />} />
              <Route path="employees" element={<EmployeeManagement />} />
              <Route path="tasks" element={<TaskDelegation />} />
              <Route path="attendance" element={<AttendanceLeave />} />
              <Route path="leave" element={<AttendanceLeave />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
};

export default App;