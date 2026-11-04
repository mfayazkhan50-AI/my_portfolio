import React, { useEffect, useRef, useState } from 'react';
import { ChevronDown, Cpu, Menu, X } from 'lucide-react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  BRAND,
  CERTIFICATES,
  EDUCATION,
  EXPERIENCE,
  OWNER_INPUTS,
  PROFILE,
  SERVICES
} from '../data/portfolioData';
import { GithubIcon } from './BrandIcons';
import ContactCTA from './ContactCTA';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    const handlePointerDown = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) setOpenDropdown(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('pointerdown', handlePointerDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, []);

  const serviceActive = location.pathname.startsWith('/services');
  const aboutActive = location.pathname.startsWith('/about');
  const aboutLinks = [
    { to: '/about', label: 'My Story' },
    { to: '/about/skills', label: 'Skills & Stack' },
    ...(EXPERIENCE.length || EDUCATION.length || OWNER_INPUTS.experience.length || OWNER_INPUTS.education.length
      ? [{ to: '/about/experience', label: 'Experience & Education' }]
      : []),
    ...(CERTIFICATES.length || OWNER_INPUTS.certificates.length
      ? [{ to: '/about/certificates', label: 'Certificates & Hackathons' }]
      : []),
    ...(PROFILE.resumeUrl ? [{ to: '/about/resume', label: 'Resume / CV' }] : [])
  ];
  const serviceItems = [{ to: '/services', label: 'All services' }, ...SERVICES.map((service) => ({
    to: `/services/${service.slug}`,
    label: service.title
  }))];

  const renderDropdown = (id, label, active, items) => (
    <div
      className={`nav-dropdown${active ? ' active' : ''}`}
      onMouseEnter={() => setOpenDropdown(id)}
      onMouseLeave={() => setOpenDropdown(null)}
    >
      <button
        type="button"
        className="nav-dropdown-trigger"
        aria-expanded={openDropdown === id}
        aria-haspopup="true"
        onClick={() => setOpenDropdown(openDropdown === id ? null : id)}
      >
        {label} <ChevronDown size={15} />
      </button>
      {openDropdown === id && (
        <div className="nav-dropdown-menu">
          {items.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpenDropdown(null)}>
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container site-header-inner">
        <Link className="site-brand" to="/" aria-label={BRAND.name}>
          <span className="site-brand-icon" role="img" aria-label="MFK AI Solutions Logo"><Cpu size={21} /></span>
          <span className="site-brand-copy">
            <strong>{BRAND.name}</strong>
            <small>Founded by {PROFILE.name}</small>
          </span>
        </Link>

        <nav className="desktop-nav" aria-label="Main navigation">
          <NavLink to="/" end>Home</NavLink>
          {renderDropdown('services', 'Services', serviceActive, serviceItems)}
          <NavLink to="/work" className={({ isActive }) => isActive || location.pathname.startsWith('/work/') ? 'active' : ''}>Work</NavLink>
          {renderDropdown('about', 'About Me', aboutActive, aboutLinks)}
          <NavLink to="/contact">Contact</NavLink>
          <a className="nav-github" href={PROFILE.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
            <GithubIcon size={19} />
          </a>
          <ContactCTA className="btn btn-primary nav-cta" location="navigation" />
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="mobile-nav" id="mobile-navigation" aria-label="Mobile navigation">
          <NavLink to="/" end>Home</NavLink>
          <details>
            <summary>Services <ChevronDown size={15} /></summary>
            <div className="mobile-subnav">
              {serviceItems.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            </div>
          </details>
          <NavLink to="/work">Work</NavLink>
          <details>
            <summary>About Me <ChevronDown size={15} /></summary>
            <div className="mobile-subnav">
              {aboutLinks.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
            </div>
          </details>
          <NavLink to="/contact">Contact</NavLink>
          <a href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub profile</a>
          <ContactCTA className="btn btn-primary" location="mobile-navigation" />
        </nav>
      )}

      <style>{`
        .site-header {
          position: sticky;
          top: 0;
          z-index: 50;
          border-bottom: 1px solid var(--border-subtle);
          background: rgba(7, 12, 22, 0.94);
          backdrop-filter: blur(16px);
        }
        .site-header-inner { display: flex; align-items: center; justify-content: space-between; min-height: 74px; gap: 1rem; }
        .site-brand { display: flex; min-width: 0; align-items: center; gap: 0.65rem; color: var(--text-main); text-decoration: none; }
        .site-brand-icon {
          display: grid;
          flex: 0 0 40px;
          place-items: center;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 10px;
          background: linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(59, 130, 246, 0.2));
          color: var(--accent-cyan);
        }
        .site-brand-copy { display: flex; min-width: 0; flex-direction: column; }
        .site-brand-copy strong { font: 700 clamp(0.82rem, 2vw, 1rem) var(--font-heading); }
        .site-brand-copy small { margin-top: 0.1rem; color: var(--text-muted); font: 0.67rem var(--font-mono); }
        .desktop-nav { display: flex; align-items: center; gap: clamp(0.7rem, 1.4vw, 1.35rem); }
        .desktop-nav > a:not(.btn), .nav-dropdown-trigger {
          border: 0;
          background: none;
          color: var(--text-muted);
          font: 0.84rem var(--font-body);
          text-decoration: none;
          cursor: pointer;
        }
        .desktop-nav > a.active, .desktop-nav > a:hover, .nav-dropdown.active .nav-dropdown-trigger { color: var(--accent-cyan); }
        .nav-dropdown { position: relative; }
        .nav-dropdown-trigger { display: inline-flex; align-items: center; gap: 0.25rem; padding: 0.6rem 0; }
        .nav-dropdown-menu {
          position: absolute;
          top: 100%;
          left: -0.75rem;
          display: grid;
          min-width: 220px;
          gap: 0.15rem;
          padding: 0.5rem;
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          background: #0D1727;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
        }
        .nav-dropdown-menu a { padding: 0.65rem 0.7rem; border-radius: 6px; color: var(--text-muted); font-size: 0.82rem; text-decoration: none; }
        .nav-dropdown-menu a:hover, .nav-dropdown-menu a.active { background: rgba(0, 240, 255, 0.08); color: var(--accent-cyan); }
        .nav-github { display: flex; align-items: center; padding: 0.3rem; }
        .nav-cta { padding: 0.6rem 0.85rem; font-size: 0.82rem; white-space: nowrap; }
        .mobile-toggle { display: none; padding: 0.5rem; border: 1px solid var(--border-subtle); border-radius: 8px; background: rgba(255,255,255,0.04); color: var(--text-main); }
        .mobile-nav { display: none; }
        @media (max-width: 900px) {
          .desktop-nav { display: none; }
          .mobile-toggle { display: flex; }
          .mobile-nav {
            position: absolute;
            top: 100%;
            right: 0;
            left: 0;
            display: flex;
            max-height: calc(100dvh - 74px);
            flex-direction: column;
            gap: 0.35rem;
            overflow-y: auto;
            padding: 1rem max(1.25rem, calc((100vw - 1200px) / 2));
            border-bottom: 1px solid var(--border-subtle);
            background: rgba(10, 16, 28, 0.98);
          }
          .mobile-nav > a:not(.btn), .mobile-nav summary { padding: 0.8rem 0.35rem; color: var(--text-main); font-size: 0.95rem; text-decoration: none; }
          .mobile-nav summary { display: flex; align-items: center; justify-content: space-between; cursor: pointer; list-style: none; }
          .mobile-nav summary::-webkit-details-marker { display: none; }
          .mobile-subnav { display: grid; gap: 0.2rem; padding: 0 0 0.45rem 0.9rem; }
          .mobile-subnav a { padding: 0.55rem; color: var(--text-muted); font-size: 0.86rem; text-decoration: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .site-header *, .site-header *::before, .site-header *::after { scroll-behavior: auto !important; transition-duration: 0.01ms !important; }
        }
      `}</style>
    </header>
  );
}
