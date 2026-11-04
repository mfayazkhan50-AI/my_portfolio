import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HOME_COPY, PROFILE } from '../data/portfolioData';

export default function FounderCard() {
  return (
    <article className="founder-card glass-card">
      <img src={PROFILE.photo} alt={PROFILE.name} width="1024" height="1024" loading="lazy" />
      <div>
        <span className="section-tag">{HOME_COPY.founderTitle}</span>
        <h2>{PROFILE.name}</h2>
        <p>{HOME_COPY.founderDescription}</p>
        <Link className="btn btn-secondary" to="/founder">View Founder Profile <ArrowRight size={16} /></Link>
      </div>
      <style>{`
        .founder-card { display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 1.3rem; padding: 1.5rem; }
        .founder-card > img { display: block; width: 104px; height: 104px; border: 1px solid rgba(103, 232, 249, 0.4); border-radius: 50%; object-fit: cover; background: var(--bg-card); }
        .founder-card h2 { margin: 0.35rem 0; font-size: 1.35rem; }
        .founder-card p { margin-bottom: 0.9rem; font-size: 0.85rem; }
        .founder-card .btn { font-size: 0.82rem; }
        @media (max-width: 520px) { .founder-card { grid-template-columns: minmax(0, 1fr); } .founder-card > img { width: 86px; height: 86px; } }
      `}</style>
    </article>
  );
}
