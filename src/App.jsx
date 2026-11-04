import React, { useEffect, useMemo } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {
  AboutStoryPage,
  FounderPage,
  HomePage,
  NotFoundPage,
  ServicesPage,
  WorkPage
} from './pages/SitePages';
import { BRAND, PROFILE, SEO_PAGES, SITE_URL } from './data/portfolioData';

function PageMetadata() {
  const { pathname } = useLocation();

  const metadata = useMemo(() => {
    const pageKey = {
      '/': 'home',
      '/services': 'services',
      '/projects': 'projects',
      '/about': 'about',
      '/contact': 'contact',
      '/founder': 'founder'
    }[pathname] || 'notFound';
    return SEO_PAGES[pageKey];
  }, [pathname]);

  useEffect(() => {
    document.title = metadata.title;
    const setMeta = (selector, attribute, value, create) => {
      let element = document.querySelector(selector);
      if (!element && create) {
        element = document.createElement('meta');
        Object.entries(create).forEach(([key, item]) => { element.setAttribute(key, item); });
        document.head.appendChild(element);
      }
      if (element) element.setAttribute(attribute, value);
    };
    const canonical = document.querySelector('link[rel="canonical"]') || document.head.appendChild(Object.assign(document.createElement('link'), { rel: 'canonical' }));
    canonical.href = `${SITE_URL}${pathname}`;
    setMeta('meta[name="description"]', 'content', metadata.description, { name: 'description' });
    setMeta('meta[property="og:title"]', 'content', metadata.title, { property: 'og:title' });
    setMeta('meta[property="og:description"]', 'content', metadata.description, { property: 'og:description' });
    setMeta('meta[property="og:url"]', 'content', canonical.href, { property: 'og:url' });
    setMeta('meta[property="og:image"]', 'content', `${SITE_URL}/og-image.png`, { property: 'og:image' });
    setMeta('meta[name="twitter:card"]', 'content', 'summary_large_image', { name: 'twitter:card' });
    setMeta('meta[name="twitter:title"]', 'content', metadata.title, { name: 'twitter:title' });
    setMeta('meta[name="twitter:description"]', 'content', metadata.description, { name: 'twitter:description' });
    setMeta('meta[name="twitter:image"]', 'content', `${SITE_URL}/og-image.png`, { name: 'twitter:image' });

    const structuredData = pathname === '/founder'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: PROFILE.name,
          jobTitle: PROFILE.title,
          image: `${SITE_URL}${PROFILE.photo}`,
          url: `${SITE_URL}/founder`,
          worksFor: { '@type': 'Organization', name: BRAND.name, url: SITE_URL },
          sameAs: [PROFILE.linkedin, PROFILE.github]
        }
      : {
          '@context': 'https://schema.org',
          '@type': ['Organization', 'ProfessionalService'],
          name: BRAND.name,
          url: SITE_URL,
          email: BRAND.contactEmail,
          logo: `${SITE_URL}/favicon.svg`,
          image: `${SITE_URL}/og-image.png`,
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Islamabad',
            addressCountry: 'PK'
          },
          founder: {
            '@type': 'Person',
            name: PROFILE.name,
            jobTitle: PROFILE.title,
            url: `${SITE_URL}/founder`
          },
          sameAs: [BRAND.linkedin, BRAND.github]
        };
    let jsonLd = document.getElementById('page-json-ld');
    if (!jsonLd) {
      jsonLd = document.createElement('script');
      jsonLd.id = 'page-json-ld';
      jsonLd.type = 'application/ld+json';
      document.head.appendChild(jsonLd);
    }
    jsonLd.textContent = JSON.stringify(structuredData);
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
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      window.setTimeout(() => {
        document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="site-layout">
      <PageMetadata />
      <Analytics />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<WorkPage />} />
        <Route path="/about" element={<AboutStoryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/founder" element={<FounderPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default function App() {
  return <BrowserRouter><SiteLayout /></BrowserRouter>;
}
