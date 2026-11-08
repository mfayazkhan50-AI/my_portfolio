import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BRAND, BOOKING_URL, HOME_COPY } from '../data/portfolioData';
import ContactCTA from './ContactCTA';

export default function Hero() {
  const voice = BRAND.voice === 'we' ? 'We' : 'I';
  return (
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-copy">
          <div className="status-badge"><span className="pulse-dot" />{BRAND.availability}</div>
          <h1>{voice} build <span className="gradient-text">{HOME_COPY.heroHighlight}</span>{HOME_COPY.heroAfterHighlight}</h1>
          <p>{HOME_COPY.heroSupporting}</p>
          <div className="hero-actions">
            <ContactCTA className="btn btn-primary" location="hero" label="Book a Free 15-Min Workflow Audit" />
            <Link className="btn btn-secondary" to="/projects">{HOME_COPY.workCta} <ArrowRight size={18} /></Link>
          </div>
          {BOOKING_URL && <span className="hero-booking-note">Schedule a conversation that works for you.</span>}
        </div>
      </div>
      <style>{`
        .hero-section { position: relative; overflow: hidden; padding: clamp(4rem, 11vw, 8rem) 0 clamp(3.5rem, 8vw, 6rem); }
        .hero-section::before { position: absolute; inset: -15% 10% auto; height: 480px; content: ''; pointer-events: none; background: radial-gradient(ellipse, rgba(0,240,255,.1), rgba(59,130,246,.045) 42%, transparent 70%); filter: blur(35px); }
        .hero-content { position: relative; }
        .hero-copy { max-width: 860px; }
        .hero-copy h1 { margin: 1.15rem 0 1.25rem; font-size: clamp(2.55rem, 6.4vw, 5rem); line-height: 1.06; }
        .hero-copy > p { max-width: 680px; color: #D1DCEB; font-size: clamp(1rem, 2vw, 1.2rem); }
        .hero-actions { display: flex; flex-wrap: wrap; gap: 0.8rem; margin-top: 1.7rem; }
        .hero-booking-note { display: block; margin-top: 0.75rem; color: #A5B2C5; font-size: 0.75rem; }
        @media (max-width: 480px) { .hero-actions .btn { flex: 1 1 100%; } }
      `}</style>
    </section>
  );
}
