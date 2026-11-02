import React from 'react';

const METRICS = [
  { value: '5+', label: 'Production-Grade Systems Built' },
  { value: '100%', label: 'Accuracy Focused' },
  { value: '< 2 Sec', label: 'Avg Response Latency' }
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Experience and credibility">
      <div className="container trust-strip-inner">
        <div className="trust-metrics">
          {METRICS.map((metric) => (
            <div className="trust-metric" key={metric.label}>
              <span className="trust-metric-value">{metric.value}</span>
              <span className="trust-metric-label">{metric.label}</span>
            </div>
          ))}
        </div>

        <div className="trust-badge">
          <img
            src="/images/hackathon-badge.png"
            alt=""
            width="54"
            height="54"
          />
          <span>FortyGuard Hackathon &apos;26 Participant</span>
        </div>
      </div>

      <style>{`
        .trust-strip {
          border-top: 1px solid rgba(0, 240, 255, 0.12);
          border-bottom: 1px solid rgba(0, 240, 255, 0.12);
          background: linear-gradient(90deg, rgba(0, 240, 255, 0.035), rgba(59, 130, 246, 0.055), rgba(0, 240, 255, 0.035));
        }
        .trust-strip-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding-top: 1.15rem;
          padding-bottom: 1.15rem;
        }
        .trust-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          flex: 1;
        }
        .trust-metric {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding: 0.25rem 1.25rem;
          border-right: 1px solid var(--border-subtle);
        }
        .trust-metric:first-child { padding-left: 0; }
        .trust-metric-value {
          width: fit-content;
          background: linear-gradient(105deg, #00F0FF, #60A5FA 65%, #A78BFA);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          font: 700 1.35rem var(--font-heading);
        }
        .trust-metric-label {
          color: var(--text-muted);
          font-size: 0.78rem;
          line-height: 1.4;
        }
        .trust-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          max-width: 240px;
          color: #CBD5E1;
          font-size: 0.82rem;
          line-height: 1.45;
        }
        .trust-badge img {
          width: 48px;
          height: 48px;
          flex: 0 0 48px;
          object-fit: contain;
          filter: drop-shadow(0 0 12px rgba(0, 240, 255, 0.18));
        }
        @media (max-width: 768px) {
          .trust-strip-inner { align-items: stretch; flex-direction: column; gap: 1rem; }
          .trust-metric { padding: 0.25rem 0.6rem; }
          .trust-metric:first-child { padding-left: 0; }
          .trust-metric-value { font-size: 1.1rem; }
          .trust-metric-label { font-size: 0.68rem; }
          .trust-badge { max-width: none; padding-top: 0.85rem; border-top: 1px solid var(--border-subtle); }
        }
        @media (max-width: 380px) {
          .trust-metric { padding-right: 0.35rem; padding-left: 0.35rem; }
          .trust-metric:first-child { padding-left: 0; }
          .trust-metric-label { font-size: 0.63rem; }
        }
      `}</style>
    </section>
  );
}
