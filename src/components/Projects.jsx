import React, { useState } from 'react';
import { ArrowUpRight, Filter, Play } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';

const CATEGORIES = ['All', 'Agentic AI', 'Generative AI & RAG', 'LLM Fine-Tuning', 'Machine Learning'];

function matchesCategory(project, category) {
  if (category === 'All') return true;
  if (category === 'Agentic AI') return project.category.includes('Agentic');
  if (category === 'Generative AI & RAG') {
    return project.category.includes('RAG') || project.category.includes('Generative');
  }
  if (category === 'LLM Fine-Tuning') {
    return project.category.includes('Fine-Tuning') || project.category.includes('LLM');
  }
  return project.category.includes('Machine Learning') || project.category.includes('Deep Learning');
}

export default function Projects({ onOpenDemo }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const visibleProjects = PROJECTS.filter((project) => !project.hidden);
  const filteredProjects = visibleProjects.filter((project) => matchesCategory(project, activeFilter));
  const featuredProjects = filteredProjects.filter((project) => project.isFeatured);
  const additionalProjects = filteredProjects.filter((project) => !project.isFeatured);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">CASE STUDIES</span>
          <h2>AI Systems Built for Real Work</h2>
          <p>From business automation to enterprise search, explore the problem, solution, and impact behind each system.</p>
        </div>

        <div className="project-filters" aria-label="Filter projects by category">
          <span className="filter-label"><Filter size={14} /> Explore:</span>
          {CATEGORIES.map((category) => (
            <button
              type="button"
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`project-filter${activeFilter === category ? ' active' : ''}`}
              aria-pressed={activeFilter === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="case-study-grid">
          {featuredProjects.map((project, index) => (
            <article className="case-study-card glass-card reveal" key={project.id}>
              <div className="case-study-image">
                <img src={project.thumbnail} alt={`${project.title} product interface`} loading="lazy" />
                <span className="case-study-number">0{index + 1}</span>
              </div>

              <div className="case-study-content">
                <div className="case-study-tags">
                  {(project.tags || [project.category]).map((tag) => (
                    <span className="case-study-tag" key={tag}>{tag}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>

                <div className="case-study-context">
                  <div>
                    <span className="context-label">The problem</span>
                    <p>{project.problem || project.description}</p>
                  </div>
                  <div>
                    <span className="context-label">The solution</span>
                    <p>{project.solution || project.description}</p>
                  </div>
                </div>

                {project.stack?.length > 0 && (
                  <div className="case-study-stack" aria-label="Technologies used">
                    {project.stack.slice(0, 5).map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>
                )}

                <div className="case-study-actions">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => onOpenDemo(project)}
                  >
                    {project.primaryAction === 'View Case Study' ? (
                      <><ArrowUpRight size={17} /> View Case Study</>
                    ) : (
                      <><Play size={16} fill="currentColor" /> Watch Demo</>
                    )}
                  </button>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <GithubIcon size={17} /> View GitHub
                    </a>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-outline"
                      disabled
                      title="GitHub repository link not provided"
                    >
                      <GithubIcon size={17} /> View GitHub
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {featuredProjects.length === 0 && (
          <p className="no-projects">No featured projects in this category yet.</p>
        )}

        {additionalProjects.length > 0 && (
          <details className="more-projects">
            <summary>Explore more projects <span>({additionalProjects.length})</span></summary>
            <div className="more-project-grid">
              {additionalProjects.map((project) => (
                <article className="more-project-card" key={project.id}>
                  <span>{project.category}</span>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      View GitHub <ArrowUpRight size={15} />
                    </a>
                  )}
                </article>
              ))}
            </div>
          </details>
        )}
      </div>

      <style>{`
        .projects-section { padding: 5rem 0; }
        .project-filters {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }
        .filter-label {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          margin-right: 0.25rem;
          color: var(--text-dim);
          font: 0.78rem var(--font-mono);
        }
        .project-filter {
          padding: 0.48rem 0.82rem;
          border: 1px solid var(--border-subtle);
          border-radius: 999px;
          background: var(--bg-glass);
          color: var(--text-muted);
          font: 0.76rem var(--font-body);
          cursor: pointer;
          transition: var(--transition-smooth);
        }
        .project-filter:hover, .project-filter.active {
          color: var(--accent-cyan);
          border-color: rgba(0, 240, 255, 0.4);
          background: rgba(0, 240, 255, 0.09);
        }
        .case-study-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          align-items: stretch;
          gap: 1.25rem;
        }
        .case-study-card {
          overflow: hidden;
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(148, 163, 184, 0.13);
          background: rgba(13, 23, 39, 0.76);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 48px rgba(2, 8, 20, 0.24);
        }
        .case-study-image {
          position: relative;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: rgba(4, 9, 18, 0.9);
          border-bottom: 1px solid var(--border-subtle);
        }
        .case-study-image::after {
          content: '';
          position: absolute;
          inset: 45% 0 0;
          pointer-events: none;
          background: linear-gradient(transparent, rgba(8, 15, 27, 0.62));
        }
        .case-study-image img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.55s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .case-study-card:hover .case-study-image img { transform: scale(1.035); }
        .case-study-number {
          position: absolute;
          z-index: 1;
          right: 0.8rem;
          bottom: 0.65rem;
          color: rgba(255, 255, 255, 0.78);
          font: 0.7rem var(--font-mono);
        }
        .case-study-content {
          display: flex;
          flex: 1;
          flex-direction: column;
          padding: 1.35rem;
        }
        .case-study-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.9rem; }
        .case-study-tag {
          padding: 0.22rem 0.5rem;
          border: 1px solid rgba(0, 240, 255, 0.18);
          border-radius: 4px;
          background: rgba(0, 240, 255, 0.055);
          color: #9DECF1;
          font: 0.65rem var(--font-mono);
        }
        .case-study-content h3 { margin-bottom: 1rem; font-size: 1.45rem; }
        .case-study-context { display: grid; gap: 0.8rem; }
        .case-study-context > div {
          padding-left: 0.75rem;
          border-left: 2px solid rgba(0, 240, 255, 0.28);
        }
        .case-study-context > div:last-child { border-left-color: rgba(59, 130, 246, 0.5); }
        .context-label {
          display: block;
          margin-bottom: 0.25rem;
          color: var(--accent-cyan);
          font: 0.68rem var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .case-study-context p { font-size: 0.82rem; line-height: 1.55; }
        .case-study-stack { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1rem; }
        .case-study-stack span {
          color: var(--text-dim);
          font: 0.66rem var(--font-mono);
        }
        .case-study-stack span + span::before { content: '·'; margin-right: 0.35rem; color: var(--accent-cyan); }
        .case-study-actions { display: flex; flex-wrap: wrap; gap: 0.55rem; margin-top: auto; padding-top: 1.2rem; }
        .case-study-actions .btn-primary {
          flex: 1 1 145px;
          padding: 0.7rem 0.8rem;
          background: linear-gradient(135deg, #3B82F6, #2563EB);
          border-color: rgba(96, 165, 250, 0.45);
          color: #F8FAFC;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.22);
          font-size: 0.82rem;
        }
        .case-study-actions .btn-primary:hover {
          background: linear-gradient(135deg, #60A5FA, #3B82F6);
          box-shadow: 0 8px 24px rgba(37, 99, 235, 0.32);
        }
        .case-study-actions .btn-outline {
          flex: 0 0 auto;
          gap: 0.4rem;
          padding: 0.52rem 0.62rem;
          border-color: rgba(148, 163, 184, 0.2);
          color: #8797AE;
          font-size: 0.7rem;
        }
        .case-study-actions .btn-outline:hover {
          border-color: rgba(148, 163, 184, 0.38);
          color: #CBD5E1;
          background: rgba(148, 163, 184, 0.06);
        }
        .case-study-actions .btn:disabled { opacity: 0.55; cursor: not-allowed; }
        .more-projects {
          margin-top: 2rem;
          padding: 1rem 1.2rem;
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          background: rgba(15, 23, 42, 0.38);
        }
        .more-projects summary {
          color: var(--accent-cyan);
          font: 0.82rem var(--font-mono);
          cursor: pointer;
        }
        .more-projects summary span { color: var(--text-dim); }
        .more-project-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 240px), 1fr));
          gap: 0.85rem;
          margin-top: 1rem;
        }
        .more-project-card {
          padding: 1rem;
          border: 1px solid var(--border-subtle);
          border-radius: 9px;
          background: rgba(8, 12, 20, 0.6);
        }
        .more-project-card > span { color: var(--accent-cyan); font: 0.66rem var(--font-mono); }
        .more-project-card h3 { margin: 0.45rem 0; font-size: 1rem; }
        .more-project-card p { font-size: 0.8rem; }
        .more-project-card a {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          margin-top: 0.8rem;
          color: #93C5FD;
          font-size: 0.78rem;
          text-decoration: none;
        }
        .more-project-card a:hover { color: var(--accent-cyan); }
        .no-projects { padding: 2rem; border: 1px solid var(--border-subtle); border-radius: 12px; }
        @media (max-width: 768px) {
          .projects-section { padding: 3.5rem 0; }
          .case-study-grid { grid-template-columns: minmax(0, 1fr); }
          .case-study-content { padding: 1.1rem; }
          .project-filters { gap: 0.45rem; }
          .filter-label { width: 100%; }
        }
        @media (max-width: 420px) {
          .case-study-actions { flex-direction: column; }
          .case-study-actions .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
