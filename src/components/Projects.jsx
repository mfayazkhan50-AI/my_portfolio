import React, { useMemo, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects({ showHeader = true }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = PROJECTS;
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category).filter(Boolean))],
    [projects]
  );
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);
  const studioProjects = filteredProjects.filter((project) => project.tier === 'client-style');
  const experiments = filteredProjects.filter((project) => project.tier === 'experiment');

  return (
    <section className={`projects-section${showHeader ? '' : ' embedded-projects-section'}`}>
      <div className="container">
        {showHeader && (
          <header className="section-header">
            <span className="section-tag">PROJECTS</span>
            <h1>Projects</h1>
            <p>AI systems, machine learning projects, and software work in the portfolio.</p>
          </header>
        )}
        {categories.length > 1 && (
          <div className="project-filters" aria-label="Filter projects by category">
            {categories.map((category) => (
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
        )}

        {studioProjects.length > 0 && (
          <div className="project-group">
            <div className="project-card-grid">{studioProjects.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          </div>
        )}
        {experiments.length > 0 && (
          <section className="project-group experiment-group">
            <header className="section-header"><h2>More experiments and ML projects</h2></header>
            <div className="project-card-grid">{experiments.map((project) => <ProjectCard key={project.id} project={project} />)}</div>
          </section>
        )}
        {filteredProjects.length === 0 && <p className="no-projects">No projects in this category yet.</p>}
      </div>
      <style>{`
        .projects-section { padding: var(--section-space) 0; }
        .embedded-projects-section { padding-top: 0; }
        .projects-page-header { margin-bottom: 1.25rem; }
        .project-filters { display: flex; flex-wrap: wrap; gap: .55rem; margin-bottom: 1.5rem; }
        .project-filter { padding: .48rem .8rem; border: 1px solid var(--border-subtle); border-radius: 999px; background: var(--bg-glass); color: #D1DCEB; font: .75rem var(--font-body); cursor: pointer; }
        .project-filter:hover, .project-filter.active { color: #A5F3FC; border-color: rgba(0,240,255,.5); background: rgba(0,240,255,.09); }
        .project-card-grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); align-items: stretch; gap: 1.15rem; }
        .experiment-group { margin-top: var(--section-space); }
        .experiment-group .section-header { margin-bottom: 1.2rem; }
        .experiment-group .section-header h2 { font-size: clamp(1.35rem,3vw,2rem); }
        .no-projects { padding: 1.5rem; border: 1px solid var(--border-subtle); border-radius: 12px; }
        @media (max-width: 760px) { .project-card-grid { grid-template-columns: minmax(0,1fr); } }
      `}</style>
    </section>
  );
}
