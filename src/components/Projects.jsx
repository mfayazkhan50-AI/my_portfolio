import React, { useState } from 'react';
import { Play, Sparkles, Code2, Check, Filter } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';

export default function Projects({ onOpenDemo }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'Agentic AI', 'Generative AI & RAG', 'LLM Fine-Tuning', 'Machine Learning'];

  // Hidden entries (hidden: true) are never rendered — kept in data only.
  const visibleProjects = PROJECTS.filter((project) => !project.hidden);
  const filteredProjects = visibleProjects.filter(project => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Agentic AI') return project.category.includes('Agentic');
    if (activeFilter === 'Generative AI & RAG') return project.category.includes('RAG') || project.category.includes('Generative');
    if (activeFilter === 'LLM Fine-Tuning') return project.category.includes('Fine-Tuning') || project.category.includes('LLM');
    if (activeFilter === 'Machine Learning') return project.category.includes('Machine Learning') || project.category.includes('Deep Learning');
    return true;
  });

  // Featured projects follow their order in portfolioData.js.
  const featuredProjects = filteredProjects.filter(p => p.isFeatured);
  const featuredProject = featuredProjects[0] || null;
  const secondaryFeatured = featuredProjects.slice(1);
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

        {/* FEATURED PROJECT CARD #1 */}
        {featuredProject && (
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
                gridTemplateColumns: featuredProject.workflow?.length ? '1.4fr 1fr' : '1fr',
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
                    {(featuredProject.tags || [featuredProject.category]).map(tag => (
                      <span key={tag} className="tech-tag featured">{tag}</span>
                    ))}
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

                  {(featuredProject.problem || featuredProject.solution) && (
                    <div className="featured-project-context">
                      {featuredProject.problem && (
                        <div>
                          <h4>Problem</h4>
                          <p>{featuredProject.problem}</p>
                        </div>
                      )}
                      {featuredProject.solution && (
                        <div>
                          <h4>Solution</h4>
                          <p>{featuredProject.solution}</p>
                        </div>
                      )}
                    </div>
                  )}

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
                      {featuredProject.highlightsLabel || 'Business benefits:'}
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
                      <span key={tech} className="project-tech-tag" style={{ fontSize: '0.74rem', padding: '0.25rem 0.6rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {featuredProject.github && (
                      <a
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{ padding: '0.75rem 1.4rem' }}
                      >
                        <GithubIcon size={18} /> View on GitHub
                      </a>
                    )}

                    {featuredProject.hasDemo && (
                      <button
                        onClick={() => onOpenDemo(featuredProject)}
                        className="btn btn-secondary"
                        style={{
                          padding: '0.75rem 1.4rem',
                          borderColor: 'rgba(0, 240, 255, 0.4)',
                          color: 'var(--accent-cyan)'
                        }}
                      >
                        <Play size={16} fill="var(--accent-cyan)" /> Watch Demo
                      </button>
                    )}
                  </div>
                </div>

                {featuredProject.workflow?.length > 0 && (
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
                      <Code2 size={16} /> {featuredProject.workflowTitle}
                    </div>

                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem'
                    }}>
                      {featuredProject.workflow.map((step, index) => (
                        <React.Fragment key={step}>
                          <div className="featured-workflow-step">{step}</div>
                          {index < featuredProject.workflow.length - 1 && (
                            <div style={{ textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.7rem' }}>↓</div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Additional featured projects */}
        {secondaryFeatured.length > 0 && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
            gap: '1.75rem',
            marginBottom: '2.5rem'
          }} className="project-card-grid">
            {secondaryFeatured.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + 1} onOpenDemo={onOpenDemo} />
            ))}
          </div>
        )}

        {/* MORE PROJECTS — collapsed until the visitor opens it */}
        {standardProjects.length > 0 && (
          <details style={{
            border: '1px solid var(--border-subtle)',
            borderRadius: '12px',
            background: 'var(--bg-glass)',
            padding: '1.1rem 1.5rem',
            marginTop: '0.5rem'
          }}>
            <summary style={{
              cursor: 'pointer',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.92rem',
              color: 'var(--accent-cyan)',
              letterSpacing: '0.03em',
              userSelect: 'none'
            }}>
              More projects ({standardProjects.length})
            </summary>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
              gap: '1.75rem',
              marginTop: '1.75rem'
            }} className="project-card-grid">
              {standardProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index + 3} onOpenDemo={onOpenDemo} />
              ))}
            </div>
          </details>
        )}
      </div>

      <style>{`
        .featured-project-context {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin: 0 0 1.5rem;
        }
        .featured-project-context > div {
          padding: 1rem;
          border: 1px solid var(--border-subtle);
          border-radius: 10px;
          background: rgba(8, 12, 20, 0.45);
        }
        .featured-project-context h4 {
          margin-bottom: 0.4rem;
          color: var(--accent-cyan);
          font: 600 0.75rem var(--font-mono);
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .featured-project-context p {
          color: var(--text-muted);
          font-size: 0.86rem;
          line-height: 1.6;
        }
        .project-tech-tag {
          border: 1px solid rgba(148, 163, 184, 0.14);
          border-radius: 4px;
          background: rgba(148, 163, 184, 0.06);
          color: var(--text-dim);
          font-size: 0.7rem;
          line-height: 1.4;
          padding: 0.2rem 0.5rem;
        }
        .project-card-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 0.65rem;
        }
        .project-card-actions .btn { flex: 1; }
        .featured-workflow-step {
          padding: 0.7rem 0.8rem;
          border: 1px solid rgba(0, 240, 255, 0.18);
          border-radius: 6px;
          background: rgba(0, 240, 255, 0.06);
          color: #BAE6FD;
          line-height: 1.5;
        }
        @media (max-width: 992px) {
          .featured-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .project-card-grid { grid-template-columns: 1fr !important; }
          .featured-project-context { grid-template-columns: 1fr; }
        }
      `}</style>
    </section>
  );
}

function ProjectCard({ project, index, onOpenDemo }) {
  return (
    <div
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
            #{index + 1}
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
            <span key={tech} className="project-tech-tag">
              {tech}
            </span>
          ))}
        </div>

        {/* GitHub link button */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
          <div className="project-card-actions">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
              >
                <GithubIcon size={16} /> View on GitHub
              </a>
            )}
            {project.hasDemo && (
              <button
                type="button"
                onClick={() => onOpenDemo(project)}
                className="btn btn-secondary btn-sm"
              >
                <Play size={15} /> Watch Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
