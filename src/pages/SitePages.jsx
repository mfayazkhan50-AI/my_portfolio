import React from 'react';
import { ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import About from '../components/About';
import ProjectCard from '../components/ProjectCard';
import Projects from '../components/Projects';
import ServiceCard from '../components/ServiceCard';
import TrustStrip from '../components/TrustStrip';
import {
  BRAND,
  CERTIFICATES,
  EDUCATION,
  ENGAGEMENT_MODELS,
  EXPERIENCE,
  PROCESS_STEPS,
  PROFILE,
  PROJECTS,
  OWNER_INPUTS,
  SERVICES,
  SKILL_CATEGORIES,
  TESTIMONIALS
} from '../data/portfolioData';
import Hero from '../components/Hero';
import ContactCTA from '../components/ContactCTA';

function PageShell({ eyebrow, title, description, children }) {
  return (
    <main className="container site-page">
      <header className="section-header">
        <span className="section-tag">{eyebrow}</span>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
      </header>
      {children}
    </main>
  );
}

function HowItWorks() {
  return (
    <section className="home-section container">
      <div className="section-header">
        <span className="section-tag">HOW I WORK</span>
        <h2>Start with the workflow, not the tools.</h2>
      </div>
      <div className="process-grid">
        {PROCESS_STEPS.map((step, index) => (
          <article className="process-step" key={step.title}>
            <span>0{index + 1}</span>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function HomePage({ onOpenDemo }) {
  return (
    <main>
      <div id="top"><Hero /></div>
      <TrustStrip />

      <section className="home-section container">
        <div className="section-header">
          <span className="section-tag">SERVICES</span>
          <h2>Practical AI and software for business workflows.</h2>
          <p>Start with a defined process or information need; choose an implementation path that fits it.</p>
        </div>
        <div className="service-grid">
          {SERVICES.slice(0, 4).map((service) => <ServiceCard key={service.slug} service={service} />)}
        </div>
        <div className="section-link-row"><Link className="btn btn-secondary" to="/services">All services <ArrowRight size={16} /></Link></div>
      </section>

      <Projects onOpenDemo={onOpenDemo} featuredOnly />
      <HowItWorks />

      {TESTIMONIALS.length > 0 && (
        <section className="home-section container">
          <div className="section-header"><span className="section-tag">TESTIMONIALS</span><h2>What clients say</h2></div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((item) => (
              <blockquote className="testimonial-card" key={item.id}>
                <p>“{item.quote}”</p><footer>{item.name}{item.role ? ` · ${item.role}` : ''}</footer>
              </blockquote>
            ))}
          </div>
        </section>
      )}

      <section className="final-cta container">
        <div><span className="section-tag">NEXT STEP</span><h2>Have a workflow worth improving?</h2><p>Share the bottleneck and I&apos;ll help you explore a practical next step.</p></div>
        <ContactCTA location="home-final" icon={<ArrowUpRight size={17} />} />
      </section>

      <style>{`
        .home-section { padding-top: clamp(3rem, 7vw, 5rem); padding-bottom: clamp(3rem, 7vw, 5rem); }
        .service-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 230px), 1fr)); gap: 1rem; }
        .process-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 0.9rem; }
        .process-step { padding: 1.15rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13, 23, 39, 0.55); }
        .process-step > span { color: var(--accent-cyan); font: 0.72rem var(--font-mono); }
        .process-step h3 { margin: 0.5rem 0; font-size: 1rem; }
        .process-step p { font-size: 0.82rem; }
        .section-link-row { display: flex; justify-content: center; margin-top: 1.5rem; }
        .testimonial-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 260px), 1fr)); gap: 1rem; }
        .testimonial-card { margin: 0; padding: 1.3rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13, 23, 39, 0.6); }
        .testimonial-card p { color: var(--text-main); }
        .testimonial-card footer { margin-top: 0.8rem; color: var(--text-muted); font-size: 0.78rem; }
        .final-cta { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: 4rem; padding: clamp(1.25rem, 4vw, 2rem); border: 1px solid rgba(0, 240, 255, 0.22); border-radius: 16px; background: linear-gradient(120deg, rgba(0, 240, 255, 0.08), rgba(59, 130, 246, 0.08)); }
        .final-cta h2 { margin: 0.4rem 0; font-size: clamp(1.35rem, 3vw, 2rem); }
        .final-cta p { font-size: 0.88rem; }
        @media (max-width: 760px) { .process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } .final-cta { align-items: flex-start; flex-direction: column; } }
        @media (max-width: 420px) { .process-grid { grid-template-columns: minmax(0, 1fr); } .final-cta .btn { width: 100%; } }
      `}</style>
    </main>
  );
}

export function WorkPage({ onOpenDemo }) {
  return (
    <main className="site-page">
      <header className="container section-header">
        <span className="section-tag">WORK</span>
        <h1>Case Studies &amp; Projects</h1>
        <p>Explore projects by category, with the problem, solution, and available technical details.</p>
      </header>
      <Projects onOpenDemo={onOpenDemo} showHeader={false} />
    </main>
  );
}

export function CaseStudyPage({ onOpenDemo }) {
  const { slug } = useParams();
  const project = PROJECTS.find((item) => !item.hidden && item.id === slug);
  if (!project) return <NotFoundPage />;
  const projectResult = project.result || OWNER_INPUTS.projectResults[project.id] || '';
  const related = PROJECTS.filter((item) => !item.hidden && item.id !== project.id).slice(0, 2);

  return (
    <PageShell eyebrow="CASE STUDY" title={project.title} description={project.description}>
      <div className="detail-layout">
        <section className="detail-main">
          {project.thumbnail && (
            <div className="detail-image-wrap">
              <img className="detail-image" src={project.thumbnail} alt={`${project.title} interface`} width="1200" height="675" />
              {project.imageLabel && <span className="project-image-label">{project.imageLabel}</span>}
            </div>
          )}
          {(project.dataStatus === 'demo' || OWNER_INPUTS.projectDataStatuses[project.id] === 'demo') && <span className="demo-data-label">Demo data</span>}
          {project.problem && <DetailBlock title="The problem"><p>{project.problem}</p></DetailBlock>}
          {project.solution && <DetailBlock title="The solution"><p>{project.solution}</p></DetailBlock>}
          {projectResult && <DetailBlock title="The result"><p>{projectResult}</p></DetailBlock>}
          {project.architectureImage && <DetailBlock title="Architecture"><img className="detail-image" src={project.architectureImage} alt={`${project.title} system architecture`} loading="lazy" /></DetailBlock>}
          {project.stack?.length > 0 && <DetailBlock title="Technology used"><div className="detail-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></DetailBlock>}
          {project.learnings && <DetailBlock title="What I learned"><p>{project.learnings}</p></DetailBlock>}
          <div className="case-study-actions">
            {(project.hasDemo || project.demoEmbedUrl || project.demoVideoUrl) && <button className="btn btn-primary" type="button" onClick={() => onOpenDemo(project)}>Watch Demo</button>}
            {project.github
              ? <a className="btn btn-outline" href={project.github} target="_blank" rel="noopener noreferrer">View GitHub</a>
              : <Link className="private-repo-link" to="/contact?subject=Code%20walkthrough%20request">Private repo: walkthrough on request</Link>}
          </div>
        </section>
        <aside className="detail-sidebar">
          <span className="section-tag">PROJECT DETAILS</span>
          <div className="case-study-tags">{(project.tags || []).map((tag) => <span className="case-study-tag" key={tag}>{tag}</span>)}</div>
          {projectResult && <p>{projectResult}</p>}
        </aside>
      </div>
      {related.length > 0 && (
        <section className="related-projects">
          <div className="section-header"><span className="section-tag">RELATED WORK</span><h2>More projects</h2></div>
          <div className="case-study-grid">{related.map((item) => <ProjectCard key={item.id} project={item} onOpenDemo={onOpenDemo} />)}</div>
        </section>
      )}
      <section className="detail-cta"><h2>Have a similar workflow to improve?</h2><Link className="btn btn-primary" to="/contact#book">Let&apos;s discuss it</Link></section>
      <style>{`
        .detail-layout { display: grid; grid-template-columns: minmax(0, 1.6fr) minmax(220px, 0.7fr); gap: 1.3rem; align-items: start; }
        .detail-main, .detail-sidebar { min-width: 0; padding: clamp(1rem, 3vw, 1.5rem); border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13, 23, 39, 0.62); }
        .detail-image-wrap { position: relative; margin-bottom: 1.2rem; }
        .detail-image { display: block; width: 100%; height: auto; border-radius: 9px; }
        .project-image-label { position: absolute; right: 0.65rem; bottom: 0.65rem; padding: 0.25rem 0.45rem; border: 1px solid rgba(203, 213, 225, 0.35); border-radius: 4px; background: rgba(8, 15, 27, 0.88); color: #E2E8F0; font: 0.62rem var(--font-mono); }
        .detail-block { margin: 1.1rem 0; }
        .detail-block h2 { margin-bottom: 0.45rem; color: var(--accent-cyan); font: 0.72rem var(--font-mono); text-transform: uppercase; }
        .detail-stack { display: flex; flex-wrap: wrap; gap: 0.55rem; }
        .detail-stack span { color: #A7B6CB; font: 0.75rem var(--font-mono); }
        .detail-sidebar p { margin-top: 1rem; font-size: 0.84rem; }
        .related-projects { margin-top: 3rem; }
        .detail-cta { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: 2rem; padding: 1.5rem; border: 1px solid rgba(0,240,255,.2); border-radius: 12px; }
        .detail-cta h2 { font-size: 1.2rem; }
        @media (max-width: 760px) { .detail-layout { grid-template-columns: minmax(0, 1fr); } .detail-cta { align-items: flex-start; flex-direction: column; } }
      `}</style>
    </PageShell>
  );
}

export function ServicesPage() {
  return (
    <PageShell eyebrow="SERVICES" title="AI and software services" description="Outcome-focused services for teams looking to improve a repeatable workflow or make business information easier to use.">
      <div className="service-grid">{SERVICES.map((service) => <ServiceCard key={service.slug} service={service} />)}</div>
      <section className="page-cta"><h2>Not sure where to start?</h2><p>I can help map the current workflow and identify a useful first step.</p><ContactCTA location="services-cta" /></section>
    </PageShell>
  );
}

export function ServiceDetailPage({ onOpenDemo }) {
  const { slug } = useParams();
  if (slug === 'pricing-process') return <PricingProcessPage />;
  const service = SERVICES.find((item) => item.slug === slug);
  if (!service) return <NotFoundPage />;
  const relatedProject = PROJECTS.find((item) => item.id === service.relatedProject);

  return (
    <PageShell eyebrow="SERVICE" title={service.title} description={service.summary}>
      <div className="service-detail-grid">
        <div className="service-detail-main">
          <DetailBlock title="Who this is for"><p>{service.audience}</p></DetailBlock>
          <DetailBlock title="The problem"><p>{service.problem}</p></DetailBlock>
          <DetailBlock title="What you get"><ul className="deliverables">{service.deliverables.map((item) => <li key={item}><CheckCircle2 size={17} />{item}</li>)}</ul></DetailBlock>
          {service.timeline && <DetailBlock title="Typical timeline"><p>{service.timeline}</p></DetailBlock>}
          {service.startingPrice && <DetailBlock title="Starting from"><p>{service.startingPrice}</p></DetailBlock>}
          <DetailBlock title="Technology used"><p className="muted-tech">{relatedProject?.stack?.join(' · ') || 'Selected to fit your requirements.'}</p></DetailBlock>
        </div>
        <aside className="service-detail-aside">
          <h2>Common questions</h2>
          {service.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}
        </aside>
      </div>
      {relatedProject && <section className="related-projects"><div className="section-header"><span className="section-tag">RELATED CASE STUDY</span></div><div className="case-study-grid"><ProjectCard project={relatedProject} onOpenDemo={onOpenDemo} /></div></section>}
      <section className="page-cta"><h2>Discuss this workflow</h2><p>Tell me what needs to work and what systems are involved.</p><ContactCTA location={`service-${service.slug}`} /></section>
      <style>{servicePageStyles}</style>
    </PageShell>
  );
}

export function PricingProcessPage() {
  return (
    <PageShell eyebrow="PRICING & PROCESS" title="A clear path from discovery to support" description="Scope and pricing depend on the workflow, integrations, and requirements.">
      <div className="process-grid">
        {PROCESS_STEPS.map((step, index) => <article className="process-step" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
      </div>
      <div className="engagement-grid">
        {ENGAGEMENT_MODELS.map((model) => <article className="engagement-card" key={model.name}><h2>{model.name}</h2><p>{model.description}</p>{model.price && <strong>{model.price}</strong>}</article>)}
      </div>
      <section className="faq-list">
        <h2>Frequently asked</h2>
        <details><summary>How is a project scoped?</summary><p>I start with a discussion of the workflow, access constraints, and desired outcome, then agree on scope before implementation.</p></details>
        <details><summary>Can I start with a prototype?</summary><p>Yes. A focused prototype can help validate the approach before deciding on a larger build.</p></details>
        <details><summary>Are prices fixed?</summary><p>Pricing is shared after the scope and requirements are understood.</p></details>
      </section>
      <section className="page-cta"><h2>Talk through your requirements</h2><ContactCTA location="pricing-process" /></section>
      <style>{servicePageStyles}</style>
    </PageShell>
  );
}

export function AboutStoryPage() { return <About />; }

export function SkillsPage() {
  return (
    <PageShell eyebrow="ABOUT ME" title="Skills & stack" description="Selected tools used to build the projects in this portfolio.">
      <div className="skills-grid">
        {SKILL_CATEGORIES.map((group) => (
          <article className="skill-group glass-card" key={group.category}>
            <h2>{group.category}</h2>
            <div className="skill-tags">{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            {group.projectIds.length > 0 && <p>Used in: {group.projectIds.map((id) => {
              const project = PROJECTS.find((item) => item.id === id);
              return project ? <Link key={id} to={`/work/${id}`}>{project.title}</Link> : null;
            }).reduce((previous, current) => previous ? <>{previous}, {current}</> : current, null)}</p>}
          </article>
        ))}
      </div>
      <style>{pageGridStyles}</style>
    </PageShell>
  );
}

export function ExperiencePage() {
  const items = [...EXPERIENCE, ...EDUCATION, ...OWNER_INPUTS.experience, ...OWNER_INPUTS.education];
  return (
    <PageShell eyebrow="ABOUT ME" title="Experience & education" description="Get in touch to discuss my background and project fit.">
      {items.length > 0 ? <ol className="timeline">{items.map((item) => <li key={item.id}><h2>{item.title}</h2><p>{item.organization} · {item.period}</p><p>{item.description}</p></li>)}</ol> : <p>Additional experience and education details are available on request.</p>}
      <style>{pageGridStyles}</style>
    </PageShell>
  );
}

export function CertificatesPage() {
  const certificates = [...CERTIFICATES, ...OWNER_INPUTS.certificates];
  return (
    <PageShell eyebrow="ABOUT ME" title="Certificates & hackathons" description="Only verified credentials and results will be published.">
      {certificates.length > 0
        ? <div className="certificate-grid">{certificates.map((item) => <article className="certificate-card" key={item.id}><h2>{item.title}</h2><p>{item.issuer}</p>{item.description && <p>{item.description}</p>}{item.image && <img src={item.image} alt={item.imageAlt || `${item.title} certificate`} loading="lazy" />}{item.url && <a href={item.url} target="_blank" rel="noopener noreferrer">View credential</a>}</article>)}</div>
        : <p>No public credentials are listed here at this time.</p>}
      <style>{pageGridStyles}</style>
    </PageShell>
  );
}

export function ResumePage() {
  const resumeExists = Boolean(PROFILE.resumeUrl);
  return (
    <PageShell eyebrow="ABOUT ME" title="Resume / CV" description={BRAND.tagline}>
      <p>Founder and lead AI engineer focused on AI agents, retrieval-augmented generation, and business workflow automation.</p>
      {resumeExists && <a className="btn btn-primary" href={PROFILE.resumeUrl} download>Download CV</a>}
      {!resumeExists && <p>A downloadable CV is not currently available. <Link to="/contact">Contact me</Link> for a summary of relevant experience.</p>}
      <h2 className="resume-section-title">Skills</h2>
      {SKILL_CATEGORIES.map((group) => <p key={group.category}><strong>{group.category}:</strong> {group.skills.join(', ')}</p>)}
      {(EXPERIENCE.length > 0 || EDUCATION.length > 0) && <Link to="/about/experience">Experience &amp; education</Link>}
      <style>{pageGridStyles}</style>
    </PageShell>
  );
}

export function NotFoundPage() {
  return <PageShell eyebrow="404" title="Page not found" description="That page may have moved or the link may be incorrect."><Link className="btn btn-primary" to="/">Return home</Link></PageShell>;
}

function DetailBlock({ title, children }) {
  return <section className="detail-block"><h2>{title}</h2>{children}</section>;
}

const servicePageStyles = `
  .service-detail-grid { display: grid; grid-template-columns: minmax(0, 1.3fr) minmax(240px, 0.7fr); gap: 1rem; }
  .service-detail-main, .service-detail-aside, .engagement-card, .faq-list { padding: 1.3rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13, 23, 39, 0.62); }
  .service-detail-aside h2, .faq-list h2 { margin-bottom: 0.8rem; font-size: 1.15rem; }
  .service-detail-aside details, .faq-list details { padding: 0.75rem 0; border-top: 1px solid var(--border-subtle); }
  .service-detail-aside summary, .faq-list summary { color: var(--text-main); font-size: 0.84rem; cursor: pointer; }
  .service-detail-aside details p, .faq-list details p { margin-top: 0.55rem; font-size: 0.8rem; }
  .deliverables { display: grid; gap: 0.65rem; list-style: none; }
  .deliverables li { display: flex; align-items: flex-start; gap: 0.5rem; color: #C8D6E6; font-size: 0.86rem; }
  .deliverables svg { flex: 0 0 auto; color: #34D399; }
  .muted-tech { color: #A7B6CB; font: 0.75rem var(--font-mono); }
  .engagement-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr)); gap: 0.8rem; margin: 1.5rem 0; }
  .engagement-card h2 { font-size: 1rem; margin-bottom: 0.45rem; }
  .engagement-card p { font-size: 0.82rem; }
  .faq-list { margin-top: 1.5rem; }
  .related-projects { margin-top: 3rem; }
  .related-projects .section-header { margin-bottom: 1.2rem; }
  .page-cta { display: flex; align-items: center; justify-content: space-between; gap: 1rem; margin-top: clamp(2.5rem, 5vw, 4rem); padding: 1.35rem; border: 1px solid rgba(0,240,255,.18); border-radius: 12px; }
  .page-cta h2 { font-size: 1.15rem; }
  .page-cta p { margin-top: 0.3rem; font-size: 0.82rem; }
  @media (max-width: 700px) { .service-detail-grid { grid-template-columns: minmax(0,1fr); } .page-cta { align-items: flex-start; flex-direction: column; } }
`;

const pageGridStyles = `
  .skills-grid, .certificate-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 250px), 1fr)); gap: 1rem; }
  .skill-group, .certificate-card { min-width: 0; padding: 1.25rem; }
  .skill-group h2, .certificate-card h2 { margin-bottom: 0.8rem; font-size: 1.05rem; }
  .skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
  .skill-tags span { padding: 0.25rem 0.5rem; border: 1px solid var(--border-subtle); border-radius: 5px; color: #C3D0E0; font-size: 0.75rem; }
  .skill-group > p { margin-top: 0.9rem; font-size: 0.75rem; }
  .skill-group > p a { color: #B7D8F4; text-decoration: underline; text-underline-offset: 2px; }
  .timeline { display: grid; gap: 1rem; list-style: none; }
  .timeline li { padding: 1.1rem; border-left: 2px solid var(--accent-cyan); background: rgba(13, 23, 39, 0.55); }
  .timeline h2 { font-size: 1.05rem; }
  .certificate-card img { display: block; width: 100%; height: auto; margin-top: 0.8rem; }
  .certificate-card a { display: inline-block; margin-top: 0.8rem; color: #B7D8F4; }
  .resume-section-title { margin: 1.5rem 0 0.6rem; }
  @media (max-width: 600px) { .skills-grid, .certificate-grid { grid-template-columns: minmax(0,1fr); } }
`;
