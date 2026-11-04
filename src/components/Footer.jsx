import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h2>Company</h2>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/founder">Meet the Founder</Link>
          </div>
          <div className="footer-column">
            <h2>Connect</h2>
            <a href={`mailto:${BRAND.contactEmail}`}><Mail size={15} />{BRAND.contactEmail}</a>
            <a href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={BRAND.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={15} />LinkedIn</a>
            <a href={BRAND.github} target="_blank" rel="noopener noreferrer"><GithubIcon size={15} />GitHub</a>
          </div>
          <div className="footer-location">
            <MapPin size={16} />
            <span>{BRAND.location}<br />{BRAND.timezone}</span>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {BRAND.name}. All rights reserved.</span>
        </div>
      </div>
      <style>{`
        .site-footer { margin-top: auto; padding: 2.8rem 0 1.2rem; border-top: 1px solid var(--border-subtle); background: rgba(5, 7, 12, 0.95); }
        .footer-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 2rem; padding-bottom: 2rem; }
        .footer-column { display: flex; flex-direction: column; align-items: flex-start; gap: 0.6rem; }
        .footer-column h2 { margin-bottom: 0.2rem; color: var(--accent-cyan); font: 600 0.75rem var(--font-mono); text-transform: uppercase; }
        .footer-column a { display: inline-flex; align-items: center; gap: 0.45rem; color: #D1DCEB; font-size: 0.8rem; text-decoration: none; overflow-wrap: anywhere; }
        .footer-column a:hover { color: #A5F3FC; }
        .footer-location { display: flex; align-items: flex-start; gap: 0.5rem; color: #D1DCEB; font-size: 0.8rem; line-height: 1.7; }
        .footer-location svg { flex: 0 0 auto; margin-top: 0.2rem; color: var(--accent-cyan); }
        .footer-bottom { padding-top: 1rem; border-top: 1px solid var(--border-subtle); color: #A5B2C5; font: 0.7rem var(--font-mono); }
        @media (max-width: 700px) { .footer-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.5rem 1rem; } }
        @media (max-width: 420px) { .footer-grid { grid-template-columns: 1fr; } }
      `}</style>
    </footer>
  );
}
