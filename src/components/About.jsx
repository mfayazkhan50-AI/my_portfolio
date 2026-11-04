import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin } from 'lucide-react';
import { BRAND, getHomeProofItems, OWNER_INPUTS, PROFILE } from '../data/portfolioData';
import ContactCTA from './ContactCTA';

export default function About() {
  const story = OWNER_INPUTS.story;
  const proofItems = getHomeProofItems();
  return (
    <main className="container site-page">
      <header className="section-header">
        <span className="section-tag">ABOUT ME</span>
        <h1>Meet the person behind the systems.</h1>
        <p>AI engineering focused on practical workflows, maintainable software, and useful outcomes.</p>
      </header>

      <section className="about-founder-grid">
        <div className="founder-portrait">
          <img
            src={PROFILE.profilePhoto}
            alt={`${PROFILE.name}, ${PROFILE.bioLine}`}
            className="founder-portrait-image"
            width="720"
            height="780"
          />
          <span className="founder-portrait-label">Muhammad Fayaz Khan</span>
        </div>
        <div className="founder-copy">
          <span className="founder-copy-eyebrow">{PROFILE.bioLine}</span>
          <h2>{PROFILE.name}</h2>
          {story.length > 0
            ? story.map((paragraph) => <p className="founder-pitch" key={paragraph}>{paragraph}</p>)
            : <p className="founder-pitch">{PROFILE.aboutSummary}</p>}
          <div className="founder-proof-points">
            <p><MapPin size={18} /> {BRAND.location} · {BRAND.timezone}</p>
            {BRAND.workingHours && <p>{BRAND.workingHours}</p>}
          </div>
          <div className="about-actions">
            <Link to="/contact#book" className="btn btn-primary">Work with me</Link>
            <Link to="/about/skills" className="btn btn-secondary">Skills &amp; Stack <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>

      {proofItems.length > 0 && (
        <section className="about-proof" aria-label="Selected project work">
          <div className="about-proof-heading">
            <span className="section-tag">SELECTED WORK</span>
            <h2>Projects across AI and software</h2>
          </div>
          <div className="about-proof-grid">
            {proofItems.map((item) => (
              <article className="about-proof-card" key={item.title}>
                <h3>{item.title}</h3>
                <div>
                  {item.projects.map((project) => (
                    <Link key={project.id} to={`/work/${project.id}`}>{project.title}</Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="about-followup">
        <div>
          <span className="section-tag">WHAT I WORK ON</span>
          <h2>AI systems for real workflows</h2>
          <p>AI agents, document assistants, and custom software scoped around a business process and its constraints.</p>
        </div>
        <div>
          <span className="section-tag">HOW I WORK</span>
          <h2>Clear scope, useful increments</h2>
          <p>Start by understanding the process, validate a focused prototype, and agree the next step from what works.</p>
        </div>
      </section>

      <section className="about-final-cta">
        <div>
          <span className="section-tag">NEXT STEP</span>
          <h2>Have a workflow you&apos;d like to improve?</h2>
          <p>Tell me what takes time, and I&apos;ll help you explore a practical next step.</p>
        </div>
        <ContactCTA location="about-final" />
      </section>

      <style>{`
        .site-page { min-height: 60vh; padding-top: clamp(2.5rem, 6vw, 4rem); padding-bottom: clamp(3rem, 7vw, 5rem); }
        .about-founder-grid { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); align-items: center; gap: clamp(1.75rem, 5vw, 4rem); }
        .founder-portrait {
          position: relative; isolation: isolate; display: flex; align-items: flex-end; justify-content: center;
          width: 100%; max-width: 410px; min-height: 320px; aspect-ratio: 0.92; overflow: hidden;
          border: 1px solid transparent; border-radius: 22px;
          background: linear-gradient(155deg, rgba(16, 36, 64, 0.96), rgba(9, 17, 31, 0.98)) padding-box,
            linear-gradient(145deg, rgba(34, 211, 238, 0.85), rgba(59, 130, 246, 0.7) 55%, rgba(129, 140, 248, 0.45)) border-box;
          box-shadow: 0 24px 70px rgba(2, 8, 20, 0.4), 0 0 36px rgba(34, 211, 238, 0.12);
        }
        .founder-portrait::before { content: ''; position: absolute; z-index: -1; inset: 0; background: linear-gradient(180deg, transparent 62%, rgba(7, 14, 26, 0.72)); }
        .founder-portrait-image { display: block; width: min(100%, 360px); max-height: 100%; object-fit: contain; object-position: center bottom; }
        .founder-portrait-label { position: absolute; left: 1rem; bottom: 1rem; padding: 0.42rem 0.6rem; border: 1px solid rgba(148, 163, 184, 0.18); border-radius: 5px; background: rgba(8, 15, 27, 0.74); color: #D7E5F5; font: 0.65rem var(--font-mono); }
        .founder-copy-eyebrow { color: var(--accent-cyan); font: 0.7rem var(--font-mono); text-transform: uppercase; }
        .founder-copy h2 { margin: 0.5rem 0 1rem; font-size: clamp(1.7rem, 4vw, 2.5rem); }
        .founder-pitch { margin-bottom: 0.9rem; color: #C4D0DF; font-size: 0.98rem; line-height: 1.75; }
        .founder-proof-points { display: flex; flex-wrap: wrap; gap: 0.7rem 1rem; margin-top: 1.25rem; }
        .founder-proof-points p { display: flex; align-items: center; gap: 0.4rem; color: #D8E3F0; font-size: 0.85rem; }
        .founder-proof-points svg { color: var(--accent-cyan); }
        .about-actions { display: flex; flex-wrap: wrap; gap: 0.75rem; margin-top: 1.5rem; }
        .about-proof { margin-top: clamp(2.5rem, 6vw, 4rem); }
        .about-proof-heading { margin-bottom: 1rem; }
        .about-proof-heading h2 { font-size: clamp(1.3rem, 3vw, 1.8rem); }
        .about-proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 0.9rem; }
        .about-proof-card { padding: 1.1rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13, 23, 39, 0.55); }
        .about-proof-card h3 { margin-bottom: 0.65rem; color: #67E8F9; font: 600 0.75rem var(--font-mono); text-transform: uppercase; }
        .about-proof-card > div { display: flex; flex-wrap: wrap; gap: 0.35rem 0.75rem; }
        .about-proof-card a { color: #D1DCEB; font-size: 0.8rem; text-decoration: underline; text-underline-offset: 3px; }
        .about-followup { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 1.25rem; margin-top: 4rem; }
        .about-followup > div { padding: 1.4rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13, 23, 39, 0.55); }
        .about-followup h2 { margin: 0.55rem 0; font-size: 1.25rem; }
        .about-followup p { font-size: 0.88rem; }
        .about-final-cta {
          display: flex; align-items: center; justify-content: space-between; gap: 1.5rem;
          margin-top: clamp(2.5rem, 6vw, 4rem); padding: clamp(1.25rem, 4vw, 2rem);
          border: 1px solid rgba(0, 240, 255, 0.22); border-radius: 16px;
          background: linear-gradient(120deg, rgba(0, 240, 255, 0.08), rgba(59, 130, 246, 0.08));
        }
        .about-final-cta h2 { margin: 0.4rem 0; font-size: clamp(1.25rem, 3vw, 1.8rem); }
        .about-final-cta p { font-size: 0.88rem; }
        @media (max-width: 767px) {
          .about-founder-grid, .about-followup { grid-template-columns: minmax(0, 1fr); }
          .founder-portrait { width: min(100%, 360px); min-height: 0; justify-self: center; }
          .about-followup { margin-top: 2rem; }
          .about-final-cta { align-items: flex-start; flex-direction: column; }
          .about-final-cta .btn { width: 100%; }
        }
      `}</style>
    </main>
  );
}
