import React, { useState } from 'react';
import { X, Play, ExternalLink, Sparkles } from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS } from '../data/portfolioData';

export default function DemoModal({ isOpen, onClose }) {
  const [customUrl, setCustomUrl] = useState('');
  const defaultLinkedInUrl = "https://www.linkedin.com/feed/update/urn:li:activity:7488268158206627841/";
  
  if (!isOpen) return null;

  const project = PROJECTS[0]; // CompetiTrack AI

  const handleOpenVideo = () => {
    window.open(customUrl || defaultLinkedInUrl, '_blank');
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="glass-card" 
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
        {/* Close Button */}
        <button
          onClick={onClose}
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
          onMouseEnter={(e) => e.currentTarget.style.color = '#FFFFFF'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          <X size={20} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <span className="tech-tag featured" style={{ fontSize: '0.78rem' }}>
            <Sparkles size={12} style={{ marginRight: '4px' }} /> DEMO PREVIEW
          </span>
        </div>

        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#FFFFFF' }}>
          {project.title}
        </h3>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          Watch the live demonstration video showing the autonomous LangGraph workflow, Playwright web scraper, and real-time alert generation in action.
        </p>

        {/* Video Placeholder Container */}
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
          marginBottom: '1.5rem',
          position: 'relative'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'rgba(0, 240, 255, 0.15)',
            border: '1px solid var(--accent-cyan)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)',
            marginBottom: '1rem',
            cursor: 'pointer',
            boxShadow: '0 0 20px rgba(0, 240, 255, 0.3)'
          }} onClick={handleOpenVideo}>
            <Play size={28} fill="var(--accent-cyan)" style={{ marginLeft: '4px' }} />
          </div>

          <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)', marginBottom: '0.3rem' }}>
            CompetiTrack AI Demo Video
          </div>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
            Hosted on LinkedIn Post / Video
          </div>
        </div>

        {/* URL Input Configurator for User */}
        <div style={{
          padding: '1rem',
          borderRadius: '8px',
          background: 'rgba(15, 23, 42, 0.6)',
          border: '1px solid var(--border-subtle)',
          marginBottom: '1.5rem'
        }}>
          <label style={{
            display: 'block',
            fontSize: '0.78rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-cyan)',
            marginBottom: '0.4rem'
          }}>
            LINKEDIN VIDEO URL (EDITABLE)
          </label>
          <input
            type="text"
            placeholder={defaultLinkedInUrl}
            value={customUrl}
            onChange={(e) => setCustomUrl(e.target.value)}
            style={{
              width: '100%',
              padding: '0.6rem 0.8rem',
              borderRadius: '6px',
              background: 'rgba(8, 12, 20, 0.9)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-main)',
              fontSize: '0.88rem',
              fontFamily: 'var(--font-mono)',
              outline: 'none'
            }}
          />
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <button
            onClick={handleOpenVideo}
            className="btn btn-primary"
            style={{ flex: 1 }}
          >
            <ExternalLink size={18} /> Open Demo on LinkedIn
          </button>
          
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            <GithubIcon size={18} /> View Code
          </a>
        </div>
      </div>
    </div>
  );
}
