import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card glass-card">
      <span className="section-tag">SERVICE</span>
      <h3>{service.title}</h3>
      <p>{service.outcome || service.summary}</p>
      <Link to={`/services#${service.id}`} aria-label={`Learn about ${service.title}`}>
        See How It Works <ArrowRight size={16} />
      </Link>
      <style>{`
        .service-card { display: flex; min-width: 0; height: 100%; flex-direction: column; padding: 1.35rem; }
        .service-card .section-tag { font-size: .64rem; }
        .service-card h3 { margin: .25rem 0 .55rem; font-size: 1.13rem; }
        .service-card p { flex: 1; color: #D1DCEB; font-size: .86rem; }
        .service-card a { display: inline-flex; align-items: center; gap: .35rem; align-self: flex-start; margin-top: 1rem; color: #A5F3FC; font-size: .8rem; text-decoration: none; }
      `}</style>
    </article>
  );
}
