import React from 'react';
import { getProjectStats } from '../data/portfolioData';

export default function TrustStrip() {
  const stats = getProjectStats();
  if (stats.length < 3) return null;

  return (
    <section className="trust-strip" aria-label="Portfolio facts">
      <div className="container trust-strip-inner">
        {stats.map((item) => (
          <div className="trust-stat" key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
      <style>{`
        .trust-strip { border-block: 1px solid rgba(0,240,255,.14); background: linear-gradient(90deg, rgba(0,240,255,.035), rgba(59,130,246,.055), rgba(0,240,255,.035)); }
        .trust-strip-inner { display: flex; justify-content: center; padding-block: 1.15rem; }
        .trust-stat { display: flex; align-items: baseline; gap: 0.6rem; }
        .trust-stat strong { color: #67E8F9; font: 600 1.1rem var(--font-mono); }
        .trust-stat span { color: #D1DCEB; font-size: 0.82rem; }
      `}</style>
    </section>
  );
}
