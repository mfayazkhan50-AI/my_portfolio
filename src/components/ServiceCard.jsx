import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card glass-card">
      <span className="service-card-label">SERVICE</span>
      <h3>{service.title}</h3>
      <p>{service.summary}</p>
      <Link to={`/services/${service.slug}`} aria-label={`Learn about ${service.title}`}>
        Explore service <ArrowUpRight size={16} />
      </Link>
      <style>{`
        .service-card {
          display: flex;
          min-width: 0;
          flex-direction: column;
          padding: 1.4rem;
          border-color: rgba(148, 163, 184, 0.14);
          background: rgba(13, 23, 39, 0.76);
        }
        .service-card-label { color: var(--accent-cyan); font: 0.68rem var(--font-mono); letter-spacing: 0.1em; }
        .service-card h3 { margin: 0.65rem 0; font-size: 1.2rem; }
        .service-card p { flex: 1; font-size: 0.88rem; }
        .service-card a {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          align-self: flex-start;
          margin-top: 1rem;
          color: #BFDBFE;
          font-size: 0.82rem;
          text-decoration: none;
        }
        .service-card a:hover { color: var(--accent-cyan); }
      `}</style>
    </article>
  );
}
