import React from 'react';
import { ArrowUp, Mail, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PROFILE } from '../data/portfolioData';

export default function Footer({ setActiveTab }) {
  const scrollToTop = () => setActiveTab('home');

  return (
    <footer style={{
      borderTop: '1px solid var(--border-subtle)',
      background: 'rgba(5, 7, 12, 0.95)',
      padding: '3rem 0 2rem 0',
      marginTop: 'auto'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid var(--border-subtle)'
        }}>
          {/* Brand */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'rgba(0, 240, 255, 0.1)',
              border: '1px solid rgba(0, 240, 255, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-cyan)'
            }}>
              <Cpu size={20} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem' }}>
                {PROFILE.name}
              </div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {PROFILE.shortTitle}
              </div>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {['home', 'projects', 'about', 'contact'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-muted)',
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                  textTransform: 'capitalize',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--accent-cyan)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-muted)'}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a
              href={`mailto:${PROFILE.email}`}
              aria-label="Send Email"
              style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                padding: '0.4rem'
              }}
            >
              <Mail size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                padding: '0.4rem'
              }}
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                padding: '0.4rem'
              }}
            >
              <GithubIcon size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '1.5rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ fontSize: '0.82rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} {PROFILE.name}. Built for Enterprise AI & RAG Engineering.
          </div>

          <button
            onClick={scrollToTop}
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid var(--border-subtle)',
              color: 'var(--text-muted)',
              padding: '0.4rem 0.8rem',
              borderRadius: '6px',
              fontSize: '0.8rem',
              fontFamily: 'var(--font-mono)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer',
              transition: 'var(--transition-smooth)'
            }}
          >
            Back to top <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
