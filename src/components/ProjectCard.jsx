import React from 'react';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon } from './BrandIcons';
import { OWNER_INPUTS } from '../data/portfolioData';

export default function ProjectCard({ project }) {
  const summary = project.summary || project.description;
  const showSolution = project.solution && project.solution !== summary;
  const result = project.result || OWNER_INPUTS.projectResults[project.id] || '';

  return (
    <article className="project-card glass-card">
      {project.thumbnail && (
        <div className="project-card-image">
          <img
            src={project.thumbnail}
            alt={`${project.title} project preview`}
            width={project.imageWidth || 1200}
            height={project.imageHeight || 675}
            loading="lazy"
          />
          {project.imageLabel && <span className="project-image-label">{project.imageLabel}</span>}
          {project.demoData && <span className="demo-data-label">Demo data</span>}
        </div>
      )}
      <div className="project-card-content">
        <div className="project-card-tags">
          <span className="project-card-category">{project.category}</span>
          {(project.tags || []).filter((tag) => tag !== project.category).map((tag) => (
            <span className="project-card-tag" key={tag}>{tag}</span>
          ))}
          {project.demoData && !project.thumbnail && <span className="demo-data-label">Demo data</span>}
        </div>
        <h3>{project.title}</h3>
        <p className="project-card-summary">{summary}</p>
        <div className="project-card-context">
          {project.problem && <div><span className="context-label">Problem</span><p>{project.problem}</p></div>}
          {showSolution && <div><span className="context-label">Solution</span><p>{project.solution}</p></div>}
          {result && <div className="project-card-result"><span className="context-label">Result</span><p>{result}</p></div>}
        </div>
        {project.stack?.length > 0 && (
          <p className="project-card-stack"><strong>Tech:</strong> {project.stack.join(' · ')}</p>
        )}
        <div className="project-card-actions">
          {project.demoUrl && (
            <a className="btn btn-primary" href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <Play size={15} fill="currentColor" /> Watch Demo
            </a>
          )}
          {project.repoUrl ? (
            <a className="btn btn-outline" href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              <GithubIcon size={16} /> GitHub
            </a>
          ) : (
            <Link className="project-private-link" to={`/contact?subject=${encodeURIComponent('Code walkthrough request')}`}>
              Private repo: walkthrough on request
            </Link>
          )}
        </div>
      </div>
      <style>{`
        .project-card { display: flex; height: 100%; min-width: 0; flex-direction: column; overflow: hidden; border: 1px solid rgba(148,163,184,.16); border-radius: 14px; background: rgba(13,23,39,.76); box-shadow: 0 18px 48px rgba(2,8,20,.24); }
        .project-card-image { position: relative; flex: 0 0 auto; aspect-ratio: 16/9; overflow: hidden; border-bottom: 1px solid var(--border-subtle); background: rgba(4,9,18,.9); }
        .project-card-image img { display: block; width: 100%; height: 100%; object-fit: cover; }
        .project-image-label, .demo-data-label { z-index: 2; display: inline-flex; align-items: center; padding: .23rem .48rem; border: 1px solid rgba(203,213,225,.35); border-radius: 4px; background: rgba(8,15,27,.92); color: #E2E8F0; font: .62rem var(--font-mono); }
        .project-image-label { position: absolute; right: .65rem; bottom: .65rem; }
        .project-card-image .demo-data-label { position: absolute; top: .65rem; left: .65rem; border-color: rgba(245,158,11,.4); color: #FCD34D; }
        .project-card-content { display: flex; flex: 1; min-width: 0; flex-direction: column; padding: 1.25rem; }
        .project-card-tags { display: flex; flex-wrap: wrap; gap: .38rem; margin-bottom: .75rem; }
        .project-card-category, .project-card-tag { padding: .2rem .48rem; border: 1px solid rgba(0,240,255,.2); border-radius: 4px; background: rgba(0,240,255,.055); color: #B8F4F7; font: .64rem var(--font-mono); }
        .project-card-tag { border-color: rgba(148,163,184,.2); background: rgba(148,163,184,.06); color: #CFD9E7; }
        .project-card-content h3 { margin-bottom: .4rem; font-size: 1.3rem; overflow-wrap: anywhere; }
        .project-card-summary { display: -webkit-box; min-height: 2.8em; margin-bottom: .9rem; overflow: hidden; color: #E0E8F2; font-size: .86rem; line-height: 1.4; -webkit-box-orient: vertical; -webkit-line-clamp: 2; }
        .project-card-context { display: grid; gap: .75rem; }
        .project-card-context > div { padding-left: .7rem; border-left: 2px solid rgba(0,240,255,.3); }
        .project-card-context > div:last-child { border-left-color: rgba(16,185,129,.55); }
        .context-label { display: block; margin-bottom: .2rem; color: #67E8F9; font: .64rem var(--font-mono); text-transform: uppercase; }
        .project-card-context p { color: #C5D2E2; font-size: .78rem; line-height: 1.5; }
        .project-card-stack { margin-top: .9rem; color: #C5D2E2; font: .68rem/1.6 var(--font-mono); }
        .project-card-stack strong { color: #E0E8F2; }
        .project-card-actions { display: flex; flex-wrap: wrap; gap: .55rem; margin-top: auto; padding-top: 1.1rem; }
        .project-card-actions .btn { flex: 1 1 140px; min-width: 0; min-height: 42px; padding: .6rem .5rem; font-size: .76rem; white-space: nowrap; }
        .project-private-link { flex: 1 1 100%; color: #D1DCEB; font-size: .75rem; text-decoration: underline; text-underline-offset: 3px; }
        .project-private-link:hover { color: #A5F3FC; }
        @media (max-width: 420px) { .project-card-content { padding: 1.05rem; } }
      `}</style>
    </article>
  );
}
