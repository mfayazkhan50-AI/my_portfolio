import React, { useEffect, useState } from 'react';
import { Cpu, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { BRAND } from '../data/portfolioData';
import ContactCTA from './ContactCTA';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' }
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const renderLinks = () => links.map(({ to, label, end }) => (
    <NavLink
      className={({ isActive }) => isActive ? 'active' : ''}
      end={end}
      key={to}
      to={to}
      onClick={() => setMobileMenuOpen(false)}
    >
      {label}
    </NavLink>
  ));

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link className="site-brand" to="/" aria-label={BRAND.name}>
          <span className="site-brand-icon" aria-hidden="true"><Cpu size={21} /></span>
          <span className="site-brand-copy">
            <strong>{BRAND.name}</strong>
            <small>{BRAND.tagline}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          {renderLinks()}
          <ContactCTA className="btn btn-primary nav-cta" location="navigation" />
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen((open) => !open)}
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          {renderLinks()}
          <ContactCTA className="btn btn-primary" location="mobile-navigation" />
        </nav>
      )}

      <style>{`
        .site-header {
          position: sticky; top: 0; z-index: 50; border-bottom: 1px solid var(--border-subtle);
          background: rgba(7, 12, 22, 0.96); backdrop-filter: blur(16px);
        }
        .site-header-inner { display: flex; align-items: center; justify-content: space-between; min-height: 74px; gap: 1rem; }
        .site-brand { display: flex; min-width: 0; align-items: center; gap: 0.65rem; color: var(--text-main); text-decoration: none; }
        .site-brand-icon {
          display: grid; flex: 0 0 40px; place-items: center; width: 40px; height: 40px;
          border: 1px solid rgba(0, 240, 255, 0.3); border-radius: 10px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(59, 130, 246, 0.2)); color: var(--accent-cyan);
        }
        .site-brand-copy { display: flex; min-width: 0; flex-direction: column; }
        .site-brand-copy strong { font: 700 clamp(0.82rem, 2vw, 1rem) var(--font-heading); }
        .site-brand-copy small { margin-top: 0.1rem; color: #A5B2C5; font: 0.62rem var(--font-mono); }
        .desktop-nav { display: flex; align-items: center; gap: clamp(0.7rem, 1.4vw, 1.35rem); }
        .desktop-nav > a:not(.btn), .mobile-nav > a:not(.btn) {
          color: #D1DCEB; font: 0.84rem var(--font-body); text-decoration: none;
        }
        .desktop-nav > a.active, .desktop-nav > a:hover, .mobile-nav > a.active, .mobile-nav > a:hover { color: var(--accent-cyan); }
        .nav-cta { padding: 0.6rem 0.85rem; font-size: 0.82rem; white-space: nowrap; }
        .mobile-toggle { display: none; padding: 0.5rem; border: 1px solid var(--border-subtle); border-radius: 8px; background: rgba(255,255,255,0.04); color: var(--text-main); }
        .mobile-nav { display: none; }
        @media (max-width: 820px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; }
          .mobile-nav {
            position: absolute; top: 100%; right: 0; left: 0; display: flex; max-height: calc(100dvh - 74px);
            flex-direction: column; gap: 0.35rem; overflow-y: auto; padding: 1rem max(1.25rem, calc((100vw - 1200px) / 2));
            border-bottom: 1px solid var(--border-subtle); background: rgba(10, 16, 28, 0.99);
          }
          .mobile-nav > a:not(.btn) { padding: 0.8rem 0.35rem; font-size: 0.95rem; }
        }
      `}</style>
    </header>
  );
}
