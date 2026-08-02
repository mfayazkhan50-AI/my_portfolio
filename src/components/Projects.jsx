import React, { useState } from 'react';
import { ExternalLink, Play, Sparkles, Code2, Check, Filter } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onOpenDemo }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Agentic AI', 'Generative AI & RAG', 'LLM Fine-Tuning', 'Machine Learning'];

  const filteredProjects = PROJECTS.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Agentic AI') return project.category.includes('Agentic');
    if (activeFilter === 'Generative AI & RAG') return project.category.includes('RAG') || project.category.includes('Generative');
    if (activeFilter === 'LLM Fine-Tuning') return project.category.includes('Fine-Tuning') || project.category.includes('LLM');
    if (activeFilter === 'Machine Learning') return project.category.includes('Machine Learning') || project.category.includes('Deep Learning');
    return true;
  });

  const featuredProject = PROJECTS[0]; // CompetiTrack AI
  const standardProjects = filteredProjects.filter(p => !p.isFeatured);

  return (
    <section id="projects" style={{ padding: '4rem 0' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// PORTFOLIO WORK</span>
          <h2>Featured & Enterprise Projects</h2>
          <p>
            A curated collection of production-grade AI agents, LLM pipelines, RAG applications, and Machine Learning models built for impact.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          <span style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            color: 'var(--text-dim)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            marginRight: '0.5rem'
          }}>
            <Filter size={14} /> Filter:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              style={{
                background: activeFilter === cat ? 'rgba(0, 240, 255, 0.15)' : 'var(--bg-glass)',
                border: activeFilter === cat ? '1px solid rgba(0, 240, 255, 0.4)' : '1px solid var(--border-subtle)',
                color: activeFilter === cat ? 'var(--accent-cyan)' : 'var(--text-muted)',
                padding: '0.45rem 1rem',
                borderRadius: '20px',
                fontSize: '0.85rem',
                fontWeight: activeFilter === cat ? 600 : 400,
                cursor: 'pointer',
                transition: 'var(--transition-smooth)'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FEATURED PROJECT CARD (CompetiTrack AI) */}
        {(activeFilter === 'All' || activeFilter === 'Agentic AI') && (
          <div style={{ marginBottom: '2.5rem' }} className="reveal">
            <div className="glass-card" style={{
              padding: '2.25rem',
              background: 'linear-gradient(135deg, rgba(14, 23, 42, 0.9) 0%, rgba(10, 25, 45, 0.95) 100%)',
              border: '1px solid rgba(0, 240, 255, 0.4)',
              boxShadow: '0 0 30px rgba(0, 240, 255, 0.12)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Top Accent Ribbon */}
              <div style={{
                position: 'absolute',
                top: 0,
                right: 0,
                background: 'linear-gradient(90deg, #00F0FF, #3B82F6)',
                color: '#07090E',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.35rem 1.25rem',
                borderBottomLeftRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem'
              }}>
                <Sparkles size={13} /> FEATURED PROJECT #1
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1.4fr 1fr',
                gap: '2.5rem',
                alignItems: 'center'
              }} className="featured-grid">
                <div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap'
                  }}>
                    <span className="tech-tag featured">Autonomous Agent</span>
                    <span className="tech-tag featured">E-Commerce Monitoring</span>
                  </div>

                  <h3 style={{
                    fontSize: '1.85rem',
                    lineHeight: 1.2,
                    marginBottom: '1rem',
                    color: '#FFFFFF'
                  }}>
                    {featuredProject.title}
                  </h3>

                  <p style={{
                    fontSize: '1.02rem',
                    color: '#CBD5E1',
                    marginBottom: '1.5rem',
                    lineHeight: 1.65
                  }}>
                    {featuredProject.description}
                  </p>

                  {/* Highlights Bullet List */}
                  <div style={{ marginBottom: '1.75rem' }}>
                    <h4 style={{
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--accent-cyan)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em',
                      marginBottom: '0.6rem'
                    }}>
                      Key Engineering Accomplishments:
                    </h4>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                      {featuredProject.highlights.map((h, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                          <Check size={16} color="var(--accent-cyan)" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '2rem'
                  }}>
                    {featuredProject.stack.map(tech => (
                      <span key={tech} className="tech-tag featured" style={{ fontSize: '0.82rem', padding: '0.3rem 0.75rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <a
                      href={featuredProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: '0.75rem 1.4rem' }}
                    >
                      <GithubIcon size={18} /> View on GitHub
                    </a>
                    
                    <button
                      onClick={onOpenDemo}
                      className="btn btn-secondary"
                      style={{
                        padding: '0.75rem 1.4rem',
                        borderColor: 'rgba(0, 240, 255, 0.4)',
                        color: 'var(--accent-cyan)'
                      }}
                    >
                      <Play size={16} fill="var(--accent-cyan)" /> Watch Demo
                    </button>
                  </div>
                </div>

                {/* Visual Agent Workflow Diagram Box */}
                <div style={{
                  background: 'rgba(8, 12, 20, 0.95)',
                  border: '1px solid rgba(0, 240, 255, 0.2)',
                  borderRadius: '12px',
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem'
                }}>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-cyan)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    borderBottom: '1px solid var(--border-subtle)',
                    paddingBottom: '0.6rem'
                  }}>
                    <Code2 size={16} /> LangGraph Agent Architecture
                  </div>

                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem'
                  }}>
                    <div style={{
                      padding: '0.6rem 0.8rem',
                      background: 'rgba(59, 130, 246, 0.1)',
                      border: '1px solid rgba(59, 130, 246, 0.25)',
                      borderRadius: '6px',
                      color: '#93C5FD'
                    }}>
                      1. Playwright Web Scraper (Target E-Commerce)
                    </div>
                    <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.7rem' }}>↓</div>
                    <div style={{
                      padding: '0.6rem 0.8rem',
                      background: 'rgba(0, 240, 255, 0.1)',
                      border: '1px solid rgba(0, 240, 255, 0.25)',
                      borderRadius: '6px',
                      color: 'var(--accent-cyan)'
                    }}>
                      2. LangGraph Delta Evaluator (Price & Stock)
                    </div>
                    <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.7rem' }}>↓</div>
                    <div style={{
                      padding: '0.6rem 0.8rem',
                      background: 'rgba(16, 185, 129, 0.1)',
                      border: '1px solid rgba(16, 185, 129, 0.25)',
                      borderRadius: '6px',
                      color: 'var(--accent-emerald)'
                    }}>
                      3. Groq LLM Insight Generator & Alert Dispatch
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STANDARD PROJECTS GRID (Projects 2 through 8) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
          gap: '1.75rem'
        }}>
          {standardProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-card reveal"
              style={{
                padding: '1.75rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                transitionDelay: `${(index % 3) * 90}ms`
              }}
            >
              <div>
                {/* Category & Badge */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1rem'
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-cyan)',
                    background: 'rgba(0, 240, 255, 0.08)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    border: '1px solid rgba(0, 240, 255, 0.2)'
                  }}>
                    {project.category}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--text-dim)'
                  }}>
                    #{index + 2}
                  </span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontSize: '1.35rem',
                  lineHeight: 1.3,
                  marginBottom: '0.75rem',
                  color: 'var(--text-main)'
                }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p style={{
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  color: 'var(--text-muted)',
                  marginBottom: '1.25rem'
                }}>
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Stack tags */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.4rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.stack.map(tech => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub link button */}
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <GithubIcon size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
