import React, { useState } from 'react';
import { Terminal, Menu, X, Cpu, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PROFILE } from '../data/portfolioData';

export default function Navbar({ activeTab, setActiveTab }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id); // now scrolls smoothly to the section itself
    setMobileMenuOpen(false);
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 50,
      background: 'rgba(7, 9, 14, 0.85)',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid var(--border-subtle)',
      transition: 'var(--transition-smooth)'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '74px'
      }}>
        {/* Brand / Logo */}
        <div 
          onClick={() => handleNavClick('home')}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            cursor: 'pointer',
            userSelect: 'none'
          }}
        >
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15) 0%, rgba(59, 130, 246, 0.2) 100%)',
            border: '1px solid rgba(0, 240, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'var(--accent-cyan)'
          }}>
            <Cpu size={22} />
          </div>
          <div>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontWeight: 800,
              fontSize: '1.15rem',
              letterSpacing: '-0.02em',
              display: 'block',
              lineHeight: 1.2
            }}>
              MFK <span style={{ color: 'var(--accent-cyan)' }}>.AI</span>
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)'
            }}>
              LLM Engineer
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }} className="desktop-nav">
          <ul style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1.75rem',
            listStyle: 'none'
          }}>
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: isActive ? 'var(--accent-cyan)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.95rem',
                      fontWeight: isActive ? 600 : 400,
                      cursor: 'pointer',
                      position: 'relative',
                      padding: '0.4rem 0',
                      transition: 'var(--transition-smooth)'
                    }}
                  >
                    {item.label}
                    {isActive && (
                      <span style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        background: 'linear-gradient(90deg, #00F0FF, #3B82F6)',
                        borderRadius: '2px',
                        boxShadow: '0 0 8px rgba(0, 240, 255, 0.6)'
                      }} />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              style={{
                color: 'var(--text-muted)',
                transition: 'var(--transition-smooth)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.4rem'
              }}
            >
              <GithubIcon size={20} />
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.45rem 1.1rem' }}
            >
              Get In Touch
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="mobile-toggle"
          aria-label="Toggle menu"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid var(--border-subtle)',
            color: 'var(--text-main)',
            padding: '0.5rem',
            borderRadius: '8px',
            cursor: 'pointer',
            display: 'none'
          }}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          background: 'rgba(10, 14, 23, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                background: activeTab === item.id ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                border: activeTab === item.id ? '1px solid rgba(0, 240, 255, 0.2)' : 'none',
                color: activeTab === item.id ? 'var(--accent-cyan)' : 'var(--text-main)',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                textAlign: 'left',
                fontSize: '1.05rem',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              {item.label}
            </button>
          ))}
          <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
            <button
              onClick={() => handleNavClick('contact')}
              className="btn btn-primary"
              style={{ width: '100%' }}
            >
              Get In Touch
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
    </header>
  );
}
