import React from 'react';
import { Link } from 'react-router-dom';
import { getHomeProofItems } from '../data/portfolioData';

export default function TrustStrip() {
  const proofItems = getHomeProofItems();

  return (
    <section className="trust-strip" aria-label="Selected project areas">
      <div className="container trust-strip-inner">
        {proofItems.map((item) => (
          <div className="trust-proof-item" key={item.title}>
            <h2>{item.title}</h2>
            <div className="trust-proof-links">
              {item.projects.map((project) => (
                <Link key={project.id} to={`/work/${project.id}`}>{project.title}</Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .trust-strip {
          border-top: 1px solid rgba(0, 240, 255, 0.12);
          border-bottom: 1px solid rgba(0, 240, 255, 0.12);
          background: linear-gradient(90deg, rgba(0, 240, 255, 0.035), rgba(59, 130, 246, 0.055), rgba(0, 240, 255, 0.035));
        }
        .trust-strip-inner {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));
          gap: 1.25rem;
          padding-top: 1.35rem;
          padding-bottom: 1.35rem;
        }
        .trust-proof-item h2 { margin-bottom: 0.4rem; color: #67E8F9; font: 600 0.7rem var(--font-mono); letter-spacing: 0.08em; text-transform: uppercase; }
        .trust-proof-links { display: flex; flex-wrap: wrap; gap: 0.35rem 0.75rem; }
        .trust-proof-links a { color: #D1DCEB; font-size: 0.8rem; text-decoration: underline; text-underline-offset: 3px; }
        .trust-proof-links a:hover { color: #67E8F9; }
        @media (max-width: 768px) {
          .trust-strip-inner { grid-template-columns: repeat(auto-fit, minmax(min(100%, 180px), 1fr)); gap: 0.9rem; }
        }
      `}</style>
    </section>
  );
}
