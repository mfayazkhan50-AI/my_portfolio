import React, { useState, useEffect, useRef, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import './styles/global.css';

const SECTION_IDS = ['home', 'projects', 'about', 'contact'];

export default function App() {
  const [activeTab, setActiveTabState] = useState('home');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const isClickScrolling = useRef(false);
  const clickScrollTimeout = useRef(null);

  // Smoothly scrolls to a section by id. Used by Navbar, Footer, and
  // the Hero CTA buttons instead of swapping page content.
  const goToSection = useCallback((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    isClickScrolling.current = true;
    setActiveTabState(id);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });

    clearTimeout(clickScrollTimeout.current);
    clickScrollTimeout.current = window.setTimeout(() => {
      isClickScrolling.current = false;
    }, 900);
  }, []);

  // Scroll-spy: automatically highlights the nav item for whichever
  // section is currently in view as the user scrolls the page.
  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClickScrolling.current) return;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTabState(entry.target.id);
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll-reveal: fades/slides in any element marked with `.reveal`
  // as it enters the viewport (used across project, skill, and
  // testimonial cards for a staggered entrance effect).
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar activeTab={activeTab} setActiveTab={goToSection} />

      <main style={{ flex: 1 }}>
        <div id="home">
          <Hero setActiveTab={goToSection} />
        </div>
        <Projects onOpenDemo={() => setIsDemoOpen(true)} />
        <About />
        <Contact />
      </main>

      <Footer setActiveTab={goToSection} />

      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}
