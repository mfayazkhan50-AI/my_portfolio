import React from 'react';
import { Cpu, Terminal, Bot, Server, Globe, Database, BrainCircuit, Boxes, Sparkles, CheckCircle2, Download, MessageSquareQuote } from 'lucide-react';
import { PROFILE, SKILL_CATEGORIES, TESTIMONIALS } from '../data/portfolioData';

export default function About() {
  const iconMap = {
    Cpu: <Cpu size={20} color="var(--accent-cyan)" />,
    Terminal: <Terminal size={20} color="#F59E0B" />,
    Bot: <Bot size={20} color="var(--accent-emerald)" />,
    Server: <Server size={20} color="#60A5FA" />,
    Globe: <Globe size={20} color="#EC4899" />,
    Database: <Database size={20} color="#A855F7" />,
    BrainCircuit: <BrainCircuit size={20} color="#F43F5E" />,
    Boxes: <Boxes size={20} color="#3B82F6" />,
    Sparkles: <Sparkles size={20} color="var(--accent-cyan)" />
  };

  return (
    <section id="about" style={{ padding: '4rem 0' }} className="animate-fade-up">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// ENGINEERING BACKGROUND</span>
          <h2>About & Technical Skills</h2>
          <p>
            Specializing in high-performance AI architectures, enterprise RAG systems, and autonomous multi-agent workflows.
          </p>
        </div>

        {/* Professional Summary Card with Profile Photo */}
        <div className="glass-card" style={{
          padding: '2.5rem',
          marginBottom: '3.5rem',
          position: 'relative',
          background: 'linear-gradient(135deg, rgba(14, 20, 32, 0.8) 0%, rgba(18, 26, 44, 0.9) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.25)'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '1.5rem',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Small Profile Photo with Accent Ring */}
              <div className="profile-photo-container">
                <img
                  src={PROFILE.profilePhoto}
                  alt={PROFILE.name}
                  className="profile-photo-img"
                  style={{ width: '64px', height: '64px' }}
                />
              </div>

              <div>
                <h3 style={{ fontSize: '1.4rem' }}>{PROFILE.name}</h3>
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  color: 'var(--accent-cyan)'
                }}>
                  {PROFILE.shortTitle} • Enterprise RAG & Agents
                </span>
              </div>
            </div>

            {/* Download Resume Action Button */}
            <a
              href={PROFILE.resumeUrl}
              download="Muhammad_Fayaz_Khan_Resume.pdf"
              className="btn btn-outline btn-sm"
              style={{ padding: '0.6rem 1.2rem' }}
            >
              <Download size={16} /> Download Resume (PDF)
            </a>
          </div>

          <p style={{
            fontSize: '1.08rem',
            lineHeight: 1.75,
            color: '#CBD5E1',
            marginBottom: '1.5rem'
          }}>
            {PROFILE.aboutSummary}
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1rem',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
              <CheckCircle2 size={18} color="var(--accent-emerald)" />
              <span>Retrieval Accuracy Optimization</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
              <CheckCircle2 size={18} color="var(--accent-emerald)" />
              <span>Sub-second Latency Pipelines</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.92rem' }}>
              <CheckCircle2 size={18} color="var(--accent-emerald)" />
              <span>Token & Cost Reduction Strategies</span>
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
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
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
                    {iconMap[cat.icon] || <Cpu size={20} color="var(--accent-cyan)" />}
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

        {/* TESTIMONIALS PLACEHOLDER SECTION */}
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
              <span className="section-tag">// ENDORSEMENTS</span>
              <h3 style={{ fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
                Client & Peer Testimonials
              </h3>
            </div>
            <span className="placeholder-badge">
              ● PLACEHOLDER CONTENT (EDITABLE)
            </span>
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
      </div>
    </section>
  );
}
