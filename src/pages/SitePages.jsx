import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import About from '../components/About';
import ContactCTA from '../components/ContactCTA';
import FounderCard from '../components/FounderCard';
import Hero from '../components/Hero';
import ProjectCard from '../components/ProjectCard';
import Projects from '../components/Projects';
import ServiceCard from '../components/ServiceCard';
import TrustStrip from '../components/TrustStrip';
import {
  BRAND,
  EXPERIENCE,
  HOME_COPY,
  OWNER_INPUTS,
  PROCESS_STEPS,
  PROJECTS,
  PROFILE,
  SERVICES,
  WHY_WORK_WITH_US
} from '../data/portfolioData';

function SectionHeader({ eyebrow, title, description }) {
  return (
    <header className="section-header">
      {eyebrow && <span className="section-tag">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </header>
  );
}

export function HomePage() {
  const featuredProjects = PROJECTS.filter((project) => project.featured);
  return (
    <main>
      <Hero />
      <TrustStrip />

      <section className="home-section container">
        <SectionHeader eyebrow="SERVICES" title={HOME_COPY.servicesTitle} description={HOME_COPY.servicesDescription} />
        <div className="service-grid">
          {SERVICES.map((service) => <ServiceCard key={service.id} service={service} />)}
        </div>
        <div className="section-link-row"><Link className="btn btn-secondary" to="/services">All services <ArrowRight size={16} /></Link></div>
      </section>

      {featuredProjects.length > 0 && (
        <section className="home-section container">
          <SectionHeader eyebrow="FEATURED PROJECTS" title="Selected work" />
          <div className="case-study-grid">
            {featuredProjects.map((project) => <ProjectCard key={project.id} project={project} />)}
          </div>
          <div className="section-link-row"><Link className="btn btn-secondary" to="/projects">All projects <ArrowRight size={16} /></Link></div>
        </section>
      )}

      {WHY_WORK_WITH_US.length > 0 && (
        <section className="home-section container">
          <SectionHeader eyebrow={HOME_COPY.whyEyebrow} title={HOME_COPY.whyTitle} />
          <div className="why-grid">
            {WHY_WORK_WITH_US.map((item) => (
              <article className="why-card" key={item.title}><h3>{item.title}</h3><p>{item.description}</p></article>
            ))}
          </div>
        </section>
      )}

      <section className="home-section container">
        <SectionHeader eyebrow={HOME_COPY.processEyebrow} title={HOME_COPY.processTitle} />
        <div className="process-grid">
          {PROCESS_STEPS.map((step, index) => (
            <article className="process-step" key={step.title}>
              <span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-section container"><FounderCard /></section>

      <section className="final-cta container">
        <div><span className="section-tag">NEXT STEP</span><h2>{HOME_COPY.finalTitle}</h2><p>{HOME_COPY.finalDescription}</p></div>
        <ContactCTA location="home-final" label="Book a Free 15-Min Workflow Audit" />
      </section>

      <style>{`
        .home-section { padding-top: var(--section-space); padding-bottom: var(--section-space); }
        .service-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,230px),1fr)); gap: 1rem; }
        .case-study-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,320px),1fr)); align-items: stretch; gap: 1.25rem; }
        .why-grid { display: grid; grid-template-columns: repeat(auto-fit,minmax(min(100%,240px),1fr)); gap: .9rem; }
        .why-card { padding: 1.2rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13,23,39,.58); }
        .why-card h3 { margin-bottom: .45rem; color: #E8F0FA; font-size: 1rem; }
        .why-card p { color: #C5D2E2; font-size: .84rem; }
        .process-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .9rem; }
        .process-step { padding: 1.15rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13,23,39,.55); }
        .process-step > span { color: var(--accent-cyan); font: .72rem var(--font-mono); }
        .process-step h3 { margin: .5rem 0; font-size: 1rem; }
        .process-step p { color: #C5D2E2; font-size: .82rem; }
        .section-link-row { display: flex; justify-content: center; margin-top: 1rem; }
        .final-cta { display: flex; align-items: center; justify-content: space-between; gap: 1.5rem; margin-bottom: var(--section-space); padding: clamp(1.25rem,4vw,2rem); border: 1px solid rgba(0,240,255,.22); border-radius: 16px; background: linear-gradient(120deg,rgba(0,240,255,.08),rgba(59,130,246,.08)); }
        .final-cta h2 { margin: .4rem 0; font-size: clamp(1.35rem,3vw,2rem); }
        .final-cta p { color: #D1DCEB; font-size: .88rem; }
        @media (max-width: 760px) { .process-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } .final-cta { align-items: flex-start; flex-direction: column; } }
        @media (max-width: 420px) { .process-grid { grid-template-columns: 1fr; } .final-cta .btn { width: 100%; } }
      `}</style>
    </main>
  );
}

export function ServicesPage() {
  return (
    <main className="container site-page">
      <header className="section-header">
        <span className="section-tag">SERVICES</span>
        <h1>AI automation and software services</h1>
        <p>Explore a focused way to improve recurring work or make business information easier to use.</p>
      </header>
      <div className="services-list">
        {SERVICES.map((service) => (
          <section className="service-detail" id={service.id} key={service.id}>
            <div className="service-detail-copy">
              <span className="section-tag">SERVICE</span>
              <h2>{service.outcome}</h2>
              <h3>Who it&apos;s for</h3><p>{service.audience}</p>
              <h3>What you get</h3>
              <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
              {service.startingPrice && <p className="service-price">Starting from {service.startingPrice}</p>}
              <p className="service-tech">Tech used: {service.technology.join(' · ')}</p>
              <ContactCTA className="btn btn-primary" location={`service-${service.id}`} />
            </div>
            <div className="service-faq">
              <h3>Frequently asked</h3>
              {service.faqs.map((faq) => (
                <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>
              ))}
            </div>
          </section>
        ))}
      </div>
      <section className="services-process">
        <SectionHeader eyebrow={HOME_COPY.processEyebrow} title="Start with the workflow, not the tools." />
        <div className="process-grid">
          {PROCESS_STEPS.map((step, index) => <article className="process-step" key={step.title}><span>0{index + 1}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
        </div>
      </section>
      <style>{`
        .site-page { padding-top: var(--section-space); padding-bottom: var(--section-space); }
        .services-list { display: grid; gap: 1.2rem; }
        .service-detail { display: grid; grid-template-columns: minmax(0,1.15fr) minmax(250px,.85fr); gap: 1.5rem; padding: clamp(1.1rem,3vw,1.7rem); border: 1px solid var(--border-subtle); border-radius: 14px; background: rgba(13,23,39,.62); scroll-margin-top: 100px; }
        .service-detail-copy h2 { margin: .35rem 0 .9rem; font-size: clamp(1.25rem,2.4vw,1.8rem); }
        .service-detail-copy h3, .service-faq h3 { margin: 1rem 0 .4rem; font-size: .92rem; }
        .service-detail-copy p, .service-detail-copy li { color: #D1DCEB; font-size: .84rem; }
        .service-detail-copy ul { display: grid; gap: .35rem; padding-left: 1.2rem; }
        .service-price { margin-top: .9rem; font-weight: 600; }
        .service-tech { margin: 1rem 0; color: #A5B2C5 !important; font: .7rem var(--font-mono); }
        .service-faq details { padding: .8rem 0; border-top: 1px solid var(--border-subtle); }
        .service-faq summary { color: #F1F5F9; font-size: .84rem; cursor: pointer; }
        .service-faq p { margin-top: .55rem; font-size: .8rem; }
        .services-process { margin-top: var(--section-space); }
        .process-grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: .9rem; }
        .process-step { padding: 1.15rem; border: 1px solid var(--border-subtle); border-radius: 12px; background: rgba(13,23,39,.55); }
        .process-step > span { color: var(--accent-cyan); font: .72rem var(--font-mono); }
        .process-step h3 { margin: .5rem 0; font-size: 1rem; }
        .process-step p { color: #C5D2E2; font-size: .82rem; }
        @media (max-width: 760px) { .service-detail { grid-template-columns: 1fr; } .process-grid { grid-template-columns: repeat(2,minmax(0,1fr)); } }
        @media (max-width: 420px) { .process-grid { grid-template-columns: 1fr; } }
      `}</style>
    </main>
  );
}

export function AboutStoryPage() {
  return <About />;
}

export function WorkPage() {
  return (
    <main className="site-page">
      <div className="container">
        <header className="section-header projects-page-header"><span className="section-tag">PROJECTS</span><h1>Projects</h1><p>AI systems, machine learning projects, and software work in the portfolio.</p></header>
      </div>
      <Projects showHeader={false} />
    </main>
  );
}

export function FounderPage() {
  const experience = [...EXPERIENCE, ...OWNER_INPUTS.experience];
  const bio = [...PROFILE.bio, ...OWNER_INPUTS.founderBio];

  return (
    <main className="container site-page founder-page">
      <p className="founder-back"><Link to="/">← Back to MFK AI Solutions</Link></p>
      <header className="founder-header">
        <img src={PROFILE.photo} alt={PROFILE.name} width="1024" height="1024" />
        <div>
          <span className="section-tag">FOUNDER PROFILE</span>
          <h1>{PROFILE.name}</h1>
          <p>{PROFILE.title}</p>
          <p className="founder-location">{PROFILE.location} · {PROFILE.timezone}</p>
        </div>
      </header>

      {bio.length > 0 && (
        <section className="founder-section"><h2>Profile</h2>{bio.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>
      )}

      {experience.length > 0 && (
        <section className="founder-section"><h2>Experience</h2>{experience.map((item) => <article className="founder-entry" key={item.id}><h3>{item.title}</h3><p>{[item.organization, item.period].filter(Boolean).join(' · ')}</p><p>{item.description}</p></article>)}</section>
      )}

      <section className="founder-section founder-contact">
        <h2>Contact</h2>
        <a className="btn btn-primary" href={`mailto:${PROFILE.email}`}>Email</a>
        <a className="btn btn-secondary" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a className="btn btn-secondary" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer">WhatsApp</a>
        <a className="btn btn-secondary" href={PROFILE.github} target="_blank" rel="noopener noreferrer">GitHub</a>
      </section>
      <style>{`
        .founder-page { max-width: 1000px; }
        .founder-back { margin-bottom: 1.4rem; font-size: .82rem; }
        .founder-header { display: grid; grid-template-columns: auto minmax(0,1fr); align-items: center; gap: 1.5rem; padding-bottom: 1.5rem; border-bottom: 1px solid var(--border-subtle); }
        .founder-header img { width: 148px; height: 148px; border: 2px solid rgba(103,232,249,.4); border-radius: 50%; object-fit: cover; }
        .founder-header h1 { margin: .3rem 0; font-size: clamp(1.8rem,4vw,2.7rem); }
        .founder-header p { color: #D1DCEB; font-size: .9rem; }
        .founder-header .founder-location { margin-top: .35rem; color: #A5B2C5; font-size: .78rem; }
        .founder-section { margin-top: 1.8rem; }
        .founder-section > h2 { margin-bottom: .8rem; font-size: 1.2rem; }
        .founder-section > p { color: #D1DCEB; font-size: .88rem; }
        .founder-entry { padding: .9rem; border: 1px solid var(--border-subtle); border-radius: 9px; background: rgba(13,23,39,.55); }
        .founder-entry h3 { margin-bottom: .35rem; font-size: .9rem; }
        .founder-entry p { color: #D1DCEB; font-size: .77rem; }
        .founder-contact { display: flex; flex-wrap: wrap; align-items: center; gap: .55rem; }
        .founder-contact h2 { flex: 1 0 100%; }
        @media (max-width: 520px) { .founder-header { grid-template-columns: 1fr; } .founder-header img { width: 110px; height: 110px; } .founder-contact .btn { flex: 1 1 100%; } }
        @media print {
          body { color: #111; background: #fff; }
          .founder-page { max-width: none; padding: 0; color: #111; }
          .founder-page .section-tag, .founder-page p, .founder-page h1, .founder-page h2, .founder-page h3, .founder-page a { color: #111 !important; }
          .site-header, .site-footer, .founder-back { display: none; }
          .founder-entry { break-inside: avoid; border-color: #bbb; background: #fff; }
        }
      `}</style>
    </main>
  );
}

export function NotFoundPage() {
  return <main className="container site-page"><span className="section-tag">404</span><h1>Page not found</h1><p>This page may have moved or the link may be incorrect.</p><Link className="btn btn-primary" to="/">Return home</Link></main>;
}
