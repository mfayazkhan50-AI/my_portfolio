import React, { useEffect, useRef } from 'react';
import { ArrowUpRight, Play, Sparkles, X } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function DemoModal({ isOpen, onClose, project }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialogRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }
      if (event.key !== 'Tab') return;

      const focusable = dialogRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), iframe, video[controls], [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) {
        event.preventDefault();
        dialogRef.current?.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const videoUrl = project.demoVideoUrl;
  const isPlayableVideo = videoUrl && /\.(mp4|webm|ogg)(\?.*)?$/i.test(videoUrl);
  const embedUrl = project.demoEmbedUrl;
  const isCaseStudy = project.primaryAction === 'View Case Study';

  const openExternalDemo = () => {
    if (videoUrl) window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card demo-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-demo-title"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button type="button" className="demo-modal-close" onClick={onClose} aria-label="Close dialog">
          <X size={20} />
        </button>

        <span className="tech-tag featured demo-modal-label">
          <Sparkles size={12} /> {isCaseStudy ? 'CASE STUDY' : 'PROJECT PREVIEW'}
        </span>
        <h3 id="project-demo-title">{project.title}</h3>
        <p className="demo-modal-description">
          {project.demoDescription || project.solution || project.description}
        </p>

        {isCaseStudy && (
          <div className="demo-case-study">
            <div><span>The problem</span><p>{project.problem}</p></div>
            <div><span>The solution</span><p>{project.solution}</p></div>
          </div>
        )}

        {embedUrl ? (
          <iframe
            className="demo-video"
            src={embedUrl}
            title={`${project.title} demo video`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : isPlayableVideo ? (
          <video
            className="demo-video"
            src={videoUrl}
            controls
            autoPlay
            muted
            playsInline
            aria-label={`${project.title} demo video`}
          >
            Your browser does not support video playback.
          </video>
        ) : (
          <div className="demo-placeholder">
            <span className="demo-play-icon"><Play size={25} /></span>
            <strong>{project.demoNote || 'Demo video coming soon'}</strong>
            <span>
              {videoUrl ? 'Open the available project demo in a new tab.' : 'A video walkthrough will be added here soon.'}
            </span>
          </div>
        )}

        <div className="demo-modal-actions">
          {videoUrl && !isPlayableVideo && (
            <button type="button" onClick={openExternalDemo} className="btn btn-primary">
              <ArrowUpRight size={17} /> Open Demo
            </button>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <GithubIcon size={17} /> View GitHub
            </a>
          )}
        </div>
      </div>

      <style>{`
        .demo-modal {
          position: relative;
          width: 100%;
          max-width: 720px;
          max-height: calc(100vh - 2rem);
          max-height: calc(100dvh - 2rem);
          overflow-y: auto;
          padding: clamp(1.25rem, 4vw, 2rem);
          border: 1px solid rgba(0, 240, 255, 0.35);
          background: linear-gradient(135deg, rgba(14, 20, 32, 0.98), rgba(8, 14, 25, 0.99));
          box-shadow: 0 0 50px rgba(0, 240, 255, 0.2);
        }
        .demo-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          display: grid;
          place-items: center;
          width: 36px;
          height: 36px;
          border: 1px solid var(--border-subtle);
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-muted);
          cursor: pointer;
        }
        .demo-modal-label { gap: 0.35rem; padding: 0.3rem 0.55rem; font-size: 0.68rem; }
        .demo-modal h3 { margin: 0.9rem 2.5rem 0.6rem 0; font-size: clamp(1.3rem, 4vw, 1.7rem); }
        .demo-modal-description { margin-bottom: 1.2rem; font-size: 0.9rem; }
        .demo-case-study {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 0.7rem;
          margin-bottom: 1rem;
        }
        .demo-case-study > div {
          padding: 0.85rem;
          border: 1px solid var(--border-subtle);
          border-radius: 9px;
          background: rgba(8, 12, 20, 0.55);
        }
        .demo-case-study span { color: var(--accent-cyan); font: 0.67rem var(--font-mono); text-transform: uppercase; }
        .demo-case-study p { margin-top: 0.35rem; font-size: 0.8rem; }
        .demo-video {
          display: block;
          width: 100%;
          max-height: 60vh;
          aspect-ratio: 16 / 9;
          margin-bottom: 1.2rem;
          border: 1px solid rgba(0, 240, 255, 0.2);
          border-radius: 10px;
          background: #05080F;
        }
        iframe.demo-video { height: auto; }
        .demo-placeholder {
          display: flex;
          min-height: 180px;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.45rem;
          margin-bottom: 1.2rem;
          padding: 1.5rem;
          border: 1px dashed rgba(0, 240, 255, 0.25);
          border-radius: 10px;
          background: rgba(5, 8, 15, 0.7);
          text-align: center;
        }
        .demo-play-icon {
          display: grid;
          place-items: center;
          width: 48px;
          height: 48px;
          margin-bottom: 0.35rem;
          border: 1px solid rgba(0, 240, 255, 0.3);
          border-radius: 50%;
          color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.08);
        }
        .demo-placeholder strong { color: var(--text-main); font-size: 0.9rem; }
        .demo-placeholder > span:last-child { color: var(--text-muted); font: 0.7rem var(--font-mono); }
        .demo-modal-actions { display: flex; flex-wrap: wrap; gap: 0.65rem; }
        @media (max-width: 560px) {
          .demo-case-study { grid-template-columns: 1fr; }
          .modal-overlay {
            height: 100dvh;
            align-items: flex-start;
            padding: 0.75rem;
            overflow-y: auto;
          }
          .demo-modal { max-height: calc(100dvh - 1.5rem); }
        }
      `}</style>
    </div>
  );
}
