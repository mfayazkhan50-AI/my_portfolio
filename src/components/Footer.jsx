import React from 'react';
import { ArrowUp, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, PROFILE, SERVICES } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import ContactCTA from './ContactCTA';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link to="/" className="footer-brand-name">{BRAND.name}</Link>
            <p>MFK AI Solutions — Building intelligent software and AI automation systems for modern businesses.</p>
            <span className="footer-location"><MapPin size={15} /> {BRAND.location} · {BRAND.timezone}</span>
          </div>

          <div className="footer-link-group">
            <h2>Explore</h2>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/work">Work</Link>
            <Link to="/about">About Me</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="footer-link-group">
            <h2>Services</h2>
            {SERVICES.map((service) => (
              <Link key={service.slug} to={`/services/${service.slug}`}>{service.title}</Link>
            ))}
            <Link to="/services/pricing-process">Pricing &amp; Process</Link>
          </div>

          <div className="footer-link-group footer-contact">
            <h2>Connect</h2>
            <a href={`mailto:${PROFILE.email}`}><Mail size={15} /> {PROFILE.email}</a>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => window.plausible?.('WhatsApp Click', { props: { location: 'footer' } })}>WhatsApp</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={15} /> LinkedIn</a>
            <a href={PROFILE.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={15} /> GitHub</a>
            <ContactCTA className="footer-book-link" location="footer" />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 MFK AI Solutions. All rights reserved.</span>
          <a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
      <style>{`
        .site-footer { margin-top: auto; padding: 3rem 0 1.25rem; border-top: 1px solid var(--border-subtle); background: rgba(5, 7, 12, 0.95); }
        .footer-grid { display: grid; grid-template-columns: minmax(240px, 1.6fr) repeat(3, minmax(130px, 1fr)); gap: 2rem; padding-bottom: 2rem; }
        .footer-brand-name { color: var(--text-main); font: 700 1.12rem var(--font-heading); text-decoration: none; }
        .footer-brand p { max-width: 370px; margin: 0.7rem 0; font-size: 0.84rem; }
        .footer-location { display: inline-flex; align-items: center; gap: 0.35rem; color: var(--text-muted); font-size: 0.76rem; }
        .footer-link-group { display: flex; flex-direction: column; align-items: flex-start; gap: 0.55rem; }
        .footer-link-group h2 { margin-bottom: 0.2rem; font: 600 0.78rem var(--font-mono); color: var(--accent-cyan); }
        .footer-link-group a { display: inline-flex; align-items: center; gap: 0.4rem; color: #D1DCEB; font-size: 0.79rem; text-decoration: none; overflow-wrap: anywhere; }
        .footer-link-group a:hover, .footer-bottom a:hover { color: var(--accent-cyan); }
        .footer-book-link { margin-top: 0.35rem; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; gap: 1rem; padding-top: 1.1rem; border-top: 1px solid var(--border-subtle); color: #A7B6CB; font: 0.72rem var(--font-mono); }
        .footer-bottom a { display: inline-flex; align-items: center; gap: 0.35rem; color: inherit; text-decoration: none; }
        @media (max-width: 760px) {
          .footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.7rem 1rem; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 420px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-brand { grid-column: auto; }
          .footer-bottom { align-items: flex-start; flex-direction: column; font-size: 0.68rem; }
        }
      `}</style>
    </footer>
  );
}
