import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon } from './BrandIcons';
import { OWNER_INPUTS } from '../data/portfolioData';

export default function ProjectCard({ project, onOpenDemo }) {
  const hasDemo = Boolean(project.hasDemo || project.demoEmbedUrl || project.demoVideoUrl);
  const result = project.result || OWNER_INPUTS.projectResults[project.id] || '';
  const isDemoData = project.dataStatus === 'demo' || OWNER_INPUTS.projectDataStatuses[project.id] === 'demo';

  return (
    <article className="case-study-card glass-card">
      {project.thumbnail && (
        <div className="case-study-image">
          <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            width="960"
            height="540"
            loading="lazy"
          />
          {project.imageLabel && <span className="project-image-label">{project.imageLabel}</span>}
          {isDemoData && <span className="demo-data-label">Demo data</span>}
        </div>
      )}
      <div className="case-study-content">
        <div className="case-study-tags">
          {[project.category, ...(project.tags || []).filter((tag) => tag !== project.category)]
            .filter(Boolean)
            .map((tag) => (
            <span className="case-study-tag" key={tag}>{tag}</span>
          ))}
          {isDemoData && !project.thumbnail && <span className="demo-data-label">Demo data</span>}
        </div>
        <h3>{project.title}</h3>
        <p className="project-summary">{project.description}</p>

        <div className="case-study-context">
          {project.problem && (
            <div>
              <span className="context-label">The problem</span>
              <p>{project.problem}</p>
            </div>
          )}
          {project.solution && project.solution !== project.description && (
            <div>
              <span className="context-label">The solution</span>
              <p>{project.solution}</p>
            </div>
          )}
          {result && (
            <div className="case-study-result">
              <span className="context-label">The result</span>
              <p>{result}</p>
            </div>
          )}
        </div>

        {project.stack?.length > 0 && (
          <div className="case-study-stack" aria-label="Technologies used">
            {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
          </div>
        )}

        <div className="case-study-actions">
          {hasDemo && (
            <button type="button" className="btn btn-primary" onClick={() => onOpenDemo(project)}>
              <Play size={16} fill="currentColor" /> Watch Demo
            </button>
          )}
          <Link className="btn btn-outline" to={`/work/${project.id}`}>
            <ArrowUpRight size={16} /> View Case Study
          </Link>
          {project.github ? (
            <a className="btn btn-outline" href={project.github} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} /> GitHub
            </a>
          ) : (
            <Link
              className="private-repo-link"
              to={`/contact?subject=${encodeURIComponent('Code walkthrough request')}`}
            >
              Private repo: walkthrough on request
            </Link>
          )}
        </div>
      </div>
      <style>{`
        .case-study-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(min(100%, 320px), 1fr));
          align-items: stretch;
          gap: 1.25rem;
        }
        .case-study-card {
          overflow: hidden;
          display: flex;
          height: 100%;
          min-width: 0;
          flex-direction: column;
          border: 1px solid rgba(148, 163, 184, 0.13);
          border-radius: 14px;
          background: rgba(13, 23, 39, 0.76);
          backdrop-filter: blur(18px);
          box-shadow: 0 18px 48px rgba(2, 8, 20, 0.24);
        }
        .case-study-image {
          position: relative;
          flex: 0 0 auto;
          aspect-ratio: 16 / 9;
          overflow: hidden;
          background: rgba(4, 9, 18, 0.9);
          border-bottom: 1px solid var(--border-subtle);
        }
        .case-study-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .project-image-label {
          position: absolute;
          z-index: 2;
          right: 0.65rem;
          bottom: 0.65rem;
          padding: 0.25rem 0.45rem;
          border: 1px solid rgba(203, 213, 225, 0.35);
          border-radius: 4px;
          background: rgba(8, 15, 27, 0.88);
          color: #E2E8F0;
          font: 0.62rem var(--font-mono);
        }
        .case-study-content { display: flex; flex: 1; min-width: 0; flex-direction: column; padding: 1.35rem; }
        .case-study-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 0.9rem; }
        .case-study-tag {
          padding: 0.22rem 0.5rem;
          border: 1px solid rgba(0, 240, 255, 0.18);
          border-radius: 4px;
          background: rgba(0, 240, 255, 0.055);
          color: #9DECF1;
          font: 0.65rem var(--font-mono);
        }
        .case-study-content h3 { margin-bottom: 0.7rem; font-size: 1.4rem; overflow-wrap: anywhere; }
        .project-summary { margin-bottom: 1.25rem; color: #CBD5E1; font-size: 0.9rem; }
        .case-study-context { display: grid; gap: 0.85rem; }
        .case-study-context > div { padding-left: 0.75rem; border-left: 2px solid rgba(0, 240, 255, 0.28); }
        .case-study-context > div:last-child { border-left-color: rgba(59, 130, 246, 0.5); }
        .context-label { display: block; margin-bottom: 0.25rem; color: #67E8F9; font: 0.68rem var(--font-mono); text-transform: uppercase; }
        .case-study-context p { font-size: 0.82rem; line-height: 1.55; }
        .case-study-stack { display: flex; flex-wrap: wrap; gap: 0.35rem; margin-top: 1rem; }
        .case-study-stack span { color: #A7B6CB; font: 0.68rem var(--font-mono); }
        .case-study-stack span + span::before { content: '·'; margin-right: 0.35rem; color: #67E8F9; }
        .case-study-actions { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 135px), 1fr)); gap: 0.55rem; margin-top: auto; padding-top: 1.2rem; }
        .case-study-actions .btn { min-width: 0; min-height: 42px; padding: 0.65rem 0.55rem; font-size: 0.78rem; white-space: nowrap; }
        .case-study-result { border-left-color: rgba(16, 185, 129, 0.55) !important; }
        .demo-data-label {
          display: inline-flex;
          align-items: center;
          padding: 0.2rem 0.48rem;
          border: 1px solid rgba(245, 158, 11, 0.35);
          border-radius: 999px;
          background: rgba(5, 8, 15, 0.88);
          color: #FCD34D;
          font: 0.65rem var(--font-mono);
        }
        .case-study-image .demo-data-label { position: absolute; z-index: 3; top: 0.7rem; left: 0.7rem; }
        .private-repo-link { grid-column: 1 / -1; color: #CBD5E1; font-size: 0.76rem; text-decoration: underline; text-underline-offset: 3px; }
        .private-repo-link:hover { color: #67E8F9; }
        @media (max-width: 420px) {
          .case-study-content { padding: 1.1rem; }
        }
      `}</style>
    </article>
  );
}
