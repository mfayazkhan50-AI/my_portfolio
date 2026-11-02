import React from 'react';
import { Cpu, Server, Database, CheckCircle2, MessageSquareQuote } from 'lucide-react';
import { PROFILE, SKILL_CATEGORIES, TESTIMONIALS } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    'AI & LLMs': <Cpu size={20} color="var(--accent-cyan)" />,
    'Backend & APIs': <Server size={20} color="#60A5FA" />,
    'Frontend & Databases': <Database size={20} color="#A855F7" />
  };

  return (
    <section id="about" style={{ padding: '4rem 0' }} className="animate-fade-up">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">ABOUT ME</span>
          <h2>Meet the Founder Behind the Systems</h2>
          <p>
            Practical AI engineering focused on reliable systems, measurable outcomes, and better business workflows.
          </p>
        </div>

        <div className="about-founder-grid">
          <div className="founder-portrait">
            <img
              src={PROFILE.profilePhoto}
              alt={`${PROFILE.name}, founder and AI Software Engineer`}
              className="founder-portrait-image"
            />
            <span className="founder-portrait-label">FOUNDER · AI SOFTWARE ENGINEER</span>
          </div>

          <div className="founder-copy">
            <span className="founder-copy-eyebrow">FOUNDER &amp; AI SOFTWARE ENGINEER</span>
            <h3>{PROFILE.bioLine}</h3>
            <p className="founder-pitch">{PROFILE.aboutSummary}</p>

            <div className="founder-proof-points">
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Retrieval Accuracy Optimization</span>
              </div>
              <div>
                <CheckCircle2 size={19} aria-hidden="true" />
                <span>Token &amp; Cost Reduction Strategies</span>
              </div>
            </div>
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <h3 style={{
          fontSize: '1.5rem',
          marginBottom: '1.5rem',
          fontFamily: 'var(--font-heading)'
        }}>
          Core Technical Skills & Stack
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: '1.5rem',
          marginBottom: '4rem'
        }}>
          {SKILL_CATEGORIES.map((cat, idx) => (
            <div
              key={idx}
              className="glass-card reveal"
              style={{
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transitionDelay: `${(idx % 3) * 90}ms`
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem'
                }}>
                  <div style={{
                    padding: '0.4rem',
                    borderRadius: '6px',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    {iconMap[cat.category]}
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-main)'
                  }}>
                    {cat.category}
                  </h4>
                </div>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {cat.skills.map(skill => (
                    <span key={skill} className="tech-tag" style={{ padding: '0.35rem 0.75rem' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* TESTIMONIALS SECTION — renders only when real quotes exist in
            portfolioData.js (TESTIMONIALS = [] hides it entirely) */}
        {TESTIMONIALS.length > 0 && (
        <div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div>
              <span className="section-tag">ENDORSEMENTS</span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Client & Peer Testimonials
              </h3>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '1.5rem'
          }}>
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={t.id}
                className="glass-card reveal"
                style={{
                  padding: '1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  background: 'rgba(12, 18, 30, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  transitionDelay: `${idx * 90}ms`
                }}
              >
                <MessageSquareQuote size={32} color="var(--accent-cyan)" style={{ opacity: 0.3, marginBottom: '0.75rem' }} />

                <p style={{
                  fontSize: '0.95rem',
                  fontStyle: 'italic',
                  color: '#CBD5E1',
                  lineHeight: 1.6,
                  marginBottom: '1.5rem'
                }}>
                  "{t.quote}"
                </p>

                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <div style={{ fontWeight: 600, color: 'var(--text-main)', fontSize: '0.95rem' }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        )}
      </div>
      <style>{`
        .about-founder-grid {
          display: grid;
          grid-template-columns: minmax(300px, 0.86fr) minmax(0, 1.14fr);
          align-items: center;
          gap: clamp(2rem, 5vw, 4.5rem);
          margin-bottom: 3.5rem;
        }
        .founder-portrait {
          position: relative;
          isolation: isolate;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          width: 100%;
          max-width: 410px;
          min-height: 390px;
          aspect-ratio: 0.92;
          overflow: hidden;
          border: 1px solid transparent;
          border-radius: 22px;
          background:
            linear-gradient(155deg, rgba(16, 36, 64, 0.96), rgba(9, 17, 31, 0.98)) padding-box,
            linear-gradient(145deg, rgba(34, 211, 238, 0.85), rgba(59, 130, 246, 0.7) 55%, rgba(129, 140, 248, 0.45)) border-box;
          box-shadow: 0 24px 70px rgba(2, 8, 20, 0.4), 0 0 36px rgba(34, 211, 238, 0.12);
        }
        .founder-portrait::before {
          content: '';
          position: absolute;
          z-index: -1;
          inset: 0;
          background:
            radial-gradient(ellipse at 50% 36%, rgba(37, 99, 180, 0.3), transparent 58%),
            linear-gradient(180deg, transparent 62%, rgba(7, 14, 26, 0.72));
        }
        .founder-portrait-image {
          display: block;
          width: min(100%, 360px);
          max-height: 100%;
          object-fit: contain;
          object-position: center bottom;
          filter: drop-shadow(0 12px 28px rgba(0, 0, 0, 0.25));
        }
        .founder-portrait-label {
          position: absolute;
          right: 0.8rem;
          bottom: 0.8rem;
          left: 0.8rem;
          padding: 0.7rem 0.85rem;
          border: 1px solid rgba(148, 193, 230, 0.18);
          border-radius: 9px;
          background: rgba(8, 17, 31, 0.74);
          color: #D8E9FA;
          text-align: center;
          font: 600 0.68rem var(--font-body);
          letter-spacing: 0.12em;
          backdrop-filter: blur(12px);
        }
        .founder-copy { max-width: 650px; }
        .founder-copy-eyebrow {
          display: block;
          margin-bottom: 0.7rem;
          color: var(--accent-cyan);
          font: 700 0.72rem var(--font-body);
          letter-spacing: 0.15em;
        }
        .founder-copy h3 {
          margin-bottom: 1rem;
          font-size: clamp(1.7rem, 3.5vw, 2.45rem);
          line-height: 1.18;
        }
        .founder-pitch {
          max-width: 590px;
          color: #B8C6D8;
          font-size: 1.05rem;
          line-height: 1.8;
        }
        .founder-proof-points {
          display: grid;
          gap: 0.85rem;
          margin-top: 1.7rem;
          padding-top: 1.4rem;
          border-top: 1px solid var(--border-subtle);
        }
        .founder-proof-points > div {
          display: flex;
          align-items: center;
          gap: 0.7rem;
          color: #D8E3F0;
          font-size: 0.94rem;
          line-height: 1.5;
        }
        .founder-proof-points svg { flex: 0 0 auto; color: #34D399; }
        @media (max-width: 767px) {
          .about-founder-grid {
            grid-template-columns: minmax(0, 1fr);
            justify-items: center;
            gap: 1.75rem;
            margin-bottom: 3rem;
          }
          .founder-portrait {
            width: min(100%, 360px);
            min-height: 0;
          }
          .founder-portrait-image { width: 100%; }
          .founder-copy { width: 100%; }
          .founder-pitch { font-size: 0.98rem; }
        }
        @media (max-width: 420px) {
          .founder-portrait { width: min(100%, 330px); }
          .founder-proof-points > div { align-items: flex-start; font-size: 0.88rem; }
        }
      `}</style>
    </section>
  );
}
