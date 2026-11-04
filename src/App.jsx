import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Contact from './components/Contact';
import {
  AboutStoryPage,
  CaseStudyPage,
  CertificatesPage,
  ExperiencePage,
  HomePage,
  NotFoundPage,
  PricingProcessPage,
  ResumePage,
  ServiceDetailPage,
  ServicesPage,
  SkillsPage,
  WorkPage
} from './pages/SitePages';
import { PROJECTS, SERVICES } from './data/portfolioData';

const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://mfayazkhan.vercel.app').replace(/\/$/, '');
const HOME_TITLE = 'Muhammad Fayaz Khan | AI Engineer, RAG & AI Agents';
const HOME_DESCRIPTION = 'I build production-ready AI systems, RAG document assistants, and custom backends to automate business workflows.';

function PageMetadata() {
  const { pathname } = useLocation();

  const metadata = useMemo(() => {
    if (pathname === '/') return { title: HOME_TITLE, description: HOME_DESCRIPTION };
    if (pathname === '/work') return { title: 'Work & Case Studies | MFK AI Solutions', description: 'Explore AI agents, document assistants, and software projects by MFK AI Solutions.' };
    if (pathname.startsWith('/work/')) {
      const project = PROJECTS.find((item) => item.id === pathname.split('/')[2]);
      return { title: project ? `${project.title} | Case Study` : 'Page Not Found', description: project?.description || 'This page could not be found.' };
    }
    if (pathname === '/services') return { title: 'AI Automation Services | MFK AI Solutions', description: 'AI receptionists, RAG document assistants, custom agents, and business automation.' };
    if (pathname.startsWith('/services/')) {
      const slug = pathname.split('/')[2];
      const service = SERVICES.find((item) => item.slug === slug);
      if (slug === 'pricing-process') return { title: 'Pricing & Process | MFK AI Solutions', description: 'Learn how projects are scoped, prototyped, deployed, and supported.' };
      return { title: service ? `${service.title} | MFK AI Solutions` : 'Page Not Found', description: service?.summary || 'This page could not be found.' };
    }
    const aboutTitles = {
      '/about': ['My Story | Muhammad Fayaz Khan', 'Meet Muhammad Fayaz Khan, founder and lead AI engineer at MFK AI Solutions.'],
      '/about/skills': ['Skills & Stack | MFK AI Solutions', 'AI, backend, frontend, vector database, and evaluation tools.'],
      '/about/experience': ['Experience & Education | Muhammad Fayaz Khan', 'Experience and education background.'],
      '/about/certificates': ['Certificates & Hackathons | Muhammad Fayaz Khan', 'Verified certificates and hackathon results.'],
      '/about/resume': ['Resume / CV | Muhammad Fayaz Khan', 'Professional summary and skills.']
    };
    if (aboutTitles[pathname]) return { title: aboutTitles[pathname][0], description: aboutTitles[pathname][1] };
    if (pathname === '/contact') return {
      title: 'Contact | MFK AI Solutions',
      description: import.meta.env.VITE_BOOKING_URL
        ? 'Book a call or contact MFK AI Solutions about your AI or software project.'
        : 'Message MFK AI Solutions about your AI or software project.'
    };
    return { title: 'Page Not Found | MFK AI Solutions', description: 'This page could not be found.' };
  }, [pathname]);

  useEffect(() => {
    document.title = metadata.title;
    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.name = 'description';
      document.head.appendChild(description);
    }
    description.content = metadata.description;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${SITE_URL}${pathname}`;
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDescription = document.querySelector('meta[property="og:description"]');
    const ogUrl = document.querySelector('meta[property="og:url"]');
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (ogTitle) ogTitle.content = metadata.title;
    if (ogDescription) ogDescription.content = metadata.description;
    if (ogUrl) ogUrl.content = `${SITE_URL}${pathname}`;
    if (twitterTitle) twitterTitle.content = metadata.title;
    if (twitterDescription) twitterDescription.content = metadata.description;
  }, [metadata, pathname]);

  return null;
}

function Analytics() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
    if (!domain || document.querySelector('script[data-plausible]')) return;
    const script = document.createElement('script');
    script.defer = true;
    script.dataset.plausible = 'true';
    script.dataset.domain = domain;
    script.src = 'https://plausible.io/js/script.js';
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
  return null;
}

function SiteLayout() {
  const [selectedDemoProject, setSelectedDemoProject] = useState(null);
  const location = useLocation();
  const closeDemo = useCallback(() => setSelectedDemoProject(null), []);

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal:not(.is-visible)');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach((element) => element.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [location.pathname]);

  return (
    <div className="site-layout">
      <PageMetadata />
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage onOpenDemo={setSelectedDemoProject} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/pricing-process" element={<PricingProcessPage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage onOpenDemo={setSelectedDemoProject} />} />
        <Route path="/work" element={<WorkPage onOpenDemo={setSelectedDemoProject} />} />
        <Route path="/work/:slug" element={<CaseStudyPage onOpenDemo={setSelectedDemoProject} />} />
        <Route path="/about" element={<AboutStoryPage />} />
        <Route path="/about/skills" element={<SkillsPage />} />
        <Route path="/about/experience" element={<ExperiencePage />} />
        <Route path="/about/certificates" element={<CertificatesPage />} />
        <Route path="/about/resume" element={<ResumePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <DemoModal
        isOpen={Boolean(selectedDemoProject)}
        project={selectedDemoProject}
        onClose={closeDemo}
      />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><SiteLayout /></BrowserRouter>;
}
