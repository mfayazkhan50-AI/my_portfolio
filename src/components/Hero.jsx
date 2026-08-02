import React from 'react';
import { ArrowRight, Terminal, Download, Zap } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Hero({ setActiveTab }) {
  return (
    <section style={{
      padding: '4.5rem 0 3.5rem 0',
      position: 'relative',
      overflow: 'hidden'
    }} className="animate-fade-up">
      {/* Hero Backdrop Animated Mesh */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1200px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          {/* Left Column: Text, Photo & CTAs */}
          <div>
            {/* Status Indicator */}
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="status-badge">
                <span className="pulse-dot"></span>
                {PROFILE.status}
              </div>
            </div>

            {/* Profile Photo + Headline Layout */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              marginBottom: '1rem',
              flexWrap: 'wrap'
            }}>
              {/* Circular Profile Photo with Glowing Accent Ring */}
              <div className="profile-photo-container">
                <img
                  src={PROFILE.profilePhoto}
                  alt={PROFILE.name}
                  className="profile-photo-img"
                  style={{ width: '100px', height: '100px' }}
                />
              </div>

              <div>
                <h1 style={{
                  fontSize: '3rem',
                  lineHeight: 1.1,
                  margin: 0
                }} className="hero-title">
                  Hi, I'm <br />
                  <span className="gradient-text">{PROFILE.name}</span>
                </h1>
              </div>
            </div>

            {/* Subtitle / Role Tag */}
            <div style={{
              display: 'inline-block',
              padding: '0.4rem 0.85rem',
              borderRadius: '6px',
              background: 'rgba(59, 130, 246, 0.1)',
              border: '1px solid rgba(59, 130, 246, 0.25)',
              color: '#93C5FD',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              fontWeight: 500,
              marginBottom: '1.5rem'
            }}>
              {PROFILE.title}
            </div>

            {/* One-Line Value Proposition */}
            <p style={{
              fontSize: '1.22rem',
              color: 'var(--text-main)',
              fontWeight: 400,
              lineHeight: 1.6,
              marginBottom: '2rem',
              maxWidth: '620px'
            }}>
              "{PROFILE.valueProp}"
            </p>

            {/* Action CTAs */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '3rem'
            }}>
              <button
                onClick={() => setActiveTab('projects')}
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
              >
                View Projects <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setActiveTab('contact')}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}
              >
                Get In Touch
              </button>

              <a
                href={PROFILE.resumeUrl}
                download="Muhammad_Fayaz_Khan_Resume.pdf"
                className="btn btn-outline"
                style={{ padding: '0.9rem 1.4rem', fontSize: '0.95rem' }}
              >
                <Download size={18} /> Download Resume
              </a>
            </div>

            {/* Quick Stat Pill Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: '1rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--border-subtle)'
            }} className="hero-stats">
              {PROFILE.stats.map((stat, idx) => (
                <div key={idx} style={{ textAlign: 'left' }}>
                  <div style={{
                    fontSize: '1.5rem',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 800,
                    color: 'var(--accent-cyan)'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    fontFamily: 'var(--font-mono)'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Deep-Tech Terminal Box */}
          <div className="hero-terminal-container">
            <div className="glass-card" style={{
              padding: '0',
              overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)',
              border: '1px solid rgba(0, 240, 255, 0.25)'
            }}>
              {/* Window Bar */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.9)',
                padding: '0.75rem 1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid var(--border-subtle)'
              }}>
                <div style={{ display: 'flex', gap: '0.4rem', alignItems: 'center' }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#EF4444' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F59E0B' }} />
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10B981' }} />
                </div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem'
                }}>
                  <Terminal size={14} color="var(--accent-cyan)" />
                  agent_pipeline.py
                </div>
                <div style={{ width: 40 }}></div>
              </div>

              {/* Code snippet display */}
              <div style={{
                padding: '1.25rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.82rem',
                lineHeight: 1.6,
                color: '#E2E8F0',
                background: 'rgba(8, 12, 20, 0.95)'
              }}>
                <div><span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#60A5FA' }}>langgraph.graph</span> <span style={{ color: '#F472B6' }}>import</span> StateGraph</div>
                <div><span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#60A5FA' }}>fastapi</span> <span style={{ color: '#F472B6' }}>import</span> FastAPI</div>
                <div><span style={{ color: '#F472B6' }}>from</span> <span style={{ color: '#60A5FA' }}>chromadb</span> <span style={{ color: '#F472B6' }}>import</span> Client</div>
                <br />
                <div style={{ color: '#64748B' }}># Initialize Autonomous Agent State</div>
                <div><span style={{ color: '#34D399' }}>class</span> <span style={{ color: '#FBBF24' }}>RAGState</span>(TypedDict):</div>
                <div>&nbsp;&nbsp;query: <span style={{ color: '#60A5FA' }}>str</span></div>
                <div>&nbsp;&nbsp;documents: <span style={{ color: '#60A5FA' }}>List[Document]</span></div>
                <div>&nbsp;&nbsp;eval_score: <span style={{ color: '#60A5FA' }}>float</span></div>
                <br />
                <div><span style={{ color: '#F472B6' }}>@app.post</span>(<span style={{ color: '#34D399' }}>"/api/v1/execute-agent"</span>)</div>
                <div><span style={{ color: '#F472B6' }}>async def</span> <span style={{ color: '#60A5FA' }}>run_agent</span>(request: AgentRequest):</div>
                <div>&nbsp;&nbsp;agent = StateGraph(RAGState)</div>
                <div>&nbsp;&nbsp;agent.add_node(<span style={{ color: '#34D399' }}>"hybrid_search"</span>, retrieve_docs)</div>
                <div>&nbsp;&nbsp;agent.add_node(<span style={{ color: '#34D399' }}>"cohere_rerank"</span>, rerank_nodes)</div>
                <div>&nbsp;&nbsp;agent.add_node(<span style={{ color: '#34D399' }}>"ragas_eval"</span>, evaluate_faithfulness)</div>
                <div>&nbsp;&nbsp;<span style={{ color: '#F472B6' }}>return</span> await agent.compile().ainvoke(...)</div>
                <br />
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.6rem 0.8rem',
                  borderRadius: '6px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: 'var(--accent-emerald)',
                  marginTop: '0.5rem'
                }}>
                  <Zap size={14} />
                  <span>[STATUS 200] Production Agent Online (Latency: ~180ms)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-title { font-size: 2.5rem !important; }
          .hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
