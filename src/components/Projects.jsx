import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/portfolioData';
import ProjectCard from './ProjectCard';

export default function Projects({
  onOpenDemo,
  featuredOnly = false,
  showFilters = true,
  showHeader = true
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const projects = PROJECTS.filter((project) => !project.hidden && (!featuredOnly || project.isFeatured));
  const categories = useMemo(
    () => ['All', ...new Set(projects.map((project) => project.category).filter(Boolean))],
    [projects]
  );
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.category === activeFilter);

  return (
    <section id={featuredOnly ? 'featured-work' : undefined} className="projects-section">
      <div className="container">
        {showHeader && (
          <div className="section-header">
            <span className="section-tag">{featuredOnly ? 'SELECTED WORK' : 'WORK'}</span>
            <h2>{featuredOnly ? 'Selected AI Systems' : 'Case Studies & Projects'}</h2>
            <p>{featuredOnly
              ? 'A few examples of AI systems and software built to address practical workflows.'
              : 'Explore projects by category, with the problem, solution, and available technical details.'}</p>
          </div>
        )}

        {showFilters && !featuredOnly && categories.length > 1 && (
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

        <div className="case-study-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onOpenDemo={onOpenDemo} />
          ))}
        </div>

        {filteredProjects.length === 0 && <p className="no-projects">No projects in this category yet.</p>}

        {featuredOnly && (
          <div className="section-link-row">
            <Link to="/work" className="btn btn-secondary">Explore all projects</Link>
          </div>
        )}
      </div>

      <style>{`
        .projects-section { padding: clamp(3rem, 7vw, 5rem) 0; }
        .project-filters {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-bottom: 1.75rem;
        }
        .project-filter {
          max-width: 100%;
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
        .section-link-row { display: flex; justify-content: center; margin-top: 2rem; }
        .no-projects { padding: 2rem; border: 1px solid var(--border-subtle); border-radius: 12px; }
        @media (max-width: 768px) {
          .projects-section { padding: 3.5rem 0; }
          .case-study-grid { grid-template-columns: minmax(0, 1fr); }
          .case-study-content { padding: 1.1rem; }
        }
        @media (max-width: 420px) {
          .case-study-actions { flex-direction: column; }
          .case-study-actions .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
