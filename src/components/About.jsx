import React from 'react';
import { MapPin } from 'lucide-react';
import { BRAND, getHomeProofItems, HOME_COPY, OWNER_INPUTS } from '../data/portfolioData';
import ContactCTA from './ContactCTA';
import FounderCard from './FounderCard';

export default function About() {
  const projectProof = getHomeProofItems();
  const proofItems = [...projectProof, ...OWNER_INPUTS.additionalProof].filter((item) => item.title && item.projects?.length);

  return (
    <main className="container site-page">
      <header className="section-header">
        <span className="section-tag">ABOUT</span>
        <h1>AI automation and software, built around real workflows.</h1>
      </header>

      <section className="about-story">
        <div>
          <span className="section-tag">THE STUDIO</span>
          {BRAND.aboutStory.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p className="about-location"><MapPin size={17} />{BRAND.location} · {BRAND.timezone}</p>
        </div>
        <div className="about-founder">
          <FounderCard />
        </div>
      </section>

      {proofItems.length > 0 && (
        <section className="about-proof">
          <div className="section-header">
            <span className="section-tag">PROJECT PROOF</span>
            <h2>Work represented in the portfolio</h2>
          </div>
          <div className="proof-grid">
            {proofItems.map((item) => (
              <article className="proof-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.projects.map((project) => project.title).join(' · ')}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="about-final-cta">
        <div>
          <span className="section-tag">NEXT STEP</span>
          <h2>{HOME_COPY.finalTitle}</h2>
          <p>{HOME_COPY.finalDescription}</p>
        </div>
        <ContactCTA location="about-final" />
      </section>

      <style>{`
        .site-page { padding-top: var(--section-space); padding-bottom: var(--section-space); }
        .about-story { display: grid; grid-template-columns: minmax(0, 1fr) minmax(300px, .8fr); gap: 2rem; align-items: start; }
        .about-story > div:first-child p { margin-bottom: 0.9rem; color: #D1DCEB; font-size: 0.96rem; }
        .about-location { display: flex; align-items: center; gap: .45rem; color: #D1DCEB; font-size: .82rem !important; }
        .about-location svg { flex: 0 0 auto; color: var(--accent-cyan); }
        .about-proof { margin-top: var(--section-space); }
        .proof-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: .9rem; }
        .proof-card { padding: 1.1rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13,23,39,.55); }
        .proof-card h3 { margin-bottom: .5rem; color: #67E8F9; font: 600 .72rem var(--font-mono); text-transform: uppercase; }
        .proof-card p { color: #D1DCEB; font-size: .82rem; }
        .about-final-cta { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-top: var(--section-space); padding: clamp(1.25rem,4vw,2rem); border: 1px solid rgba(0,240,255,.22); border-radius: 16px; background: linear-gradient(120deg,rgba(0,240,255,.08),rgba(59,130,246,.08)); }
        .about-final-cta h2 { margin: .4rem 0; font-size: clamp(1.3rem,3vw,1.9rem); }
        .about-final-cta p { font-size: .88rem; }
        @media (max-width: 760px) { .about-story { grid-template-columns: 1fr; } .about-final-cta { align-items: flex-start; flex-direction: column; } .about-final-cta .btn { width: 100%; } }
      `}</style>
    </main>
  );
}
