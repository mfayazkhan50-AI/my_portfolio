import React from 'react';
import { X, Play, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function DemoModal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  const videoUrl = project.demoVideoUrl;
  const handleOpenVideo = () => {
    if (videoUrl) window.open(videoUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-demo-title"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '100%',
          maxWidth: '650px',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(14, 20, 32, 0.95) 0%, rgba(8, 14, 25, 0.98) 100%)',
          border: '1px solid rgba(0, 240, 255, 0.4)',
          boxShadow: '0 0 50px rgba(0, 240, 255, 0.25)',
          position: 'relative'
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close demo"
          style={{
            position: 'absolute',
            top: '1.25rem',
            right: '1.25rem',
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-muted)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'var(--transition-smooth)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="tech-tag featured" style={{ fontSize: '0.78rem' }}>
            <Sparkles size={12} style={{ marginRight: '4px' }} /> DEMO PREVIEW
          </span>
        </div>

        <h3 id="project-demo-title" style={{ fontSize: '1.5rem', marginBottom: '0.75rem', paddingRight: '2.5rem', color: '#FFFFFF' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {project.demoDescription || 'Explore a preview of this project.'}
        </p>

        <div style={{
          aspectRatio: '16/9',
          background: 'rgba(5, 8, 15, 0.9)',
          border: '1px dashed rgba(0, 240, 255, 0.3)',
          borderRadius: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          marginBottom: '1.5rem'
        }}>
          {videoUrl ? (
            <button
              type="button"
              onClick={handleOpenVideo}
              aria-label={`Open ${project.title} demo video`}
              style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'rgba(0, 240, 255, 0.15)',
                border: '1px solid var(--accent-cyan)',
                display: 'grid',
                placeItems: 'center',
                color: 'var(--accent-cyan)',
                marginBottom: '1rem',
                cursor: 'pointer',
                boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
              }}
            >
              <Play size={28} fill="var(--accent-cyan)" style={{ marginLeft: '4px' }} />
            </button>
          ) : (
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(0, 240, 255, 0.08)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--accent-cyan)',
              marginBottom: '1rem'
            }}>
              <Play size={26} />
            </div>
          )}

          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
            {project.demoNote || 'Demo video coming soon.'}
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            {videoUrl ? 'Select to open the demo video' : 'Video preview will be added soon'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          {videoUrl && (
            <button
              type="button"
              onClick={handleOpenVideo}
              className="btn btn-primary"
              style={{ flex: 1 }}
            >
              <ExternalLink size={18} /> Open Demo Video
            </button>
          )}

          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              <GithubIcon size={18} /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
