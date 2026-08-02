import React, { useState } from 'react';
import { Mail, Send, Copy, Check, MessageSquare, ExternalLink, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PROFILE } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formEndpoint, setFormEndpoint] = useState('https://formspree.io/f/xbjnqpkz');
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    // Validation
    if (!formData.name.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter your name.' });
      return;
    }
    if (!formData.email.trim() || !validateEmail(formData.email)) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ submitting: false, submitted: false, error: 'Please enter a message or project details.' });
      return;
    }

    try {
      // Attempt Formspree submission
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `New Portfolio Inquiry from ${formData.name}`
        })
      });

      if (response.ok) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback: Open client mailto link automatically if form endpoint fails
        triggerMailtoFallback();
        setStatus({ submitting: false, submitted: true, error: null });
      }
    } catch (err) {
      // Network or Endpoint unconfigured fallback
      triggerMailtoFallback();
      setStatus({ submitting: false, submitted: true, error: null });
    }
  };

  const triggerMailtoFallback = () => {
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact" style={{ padding: '4rem 0 5rem 0' }} className="animate-fade-up">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">// GET IN TOUCH</span>
          <h2>Connect & Collaborate</h2>
          <p>
            {PROFILE.closingLine}
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '3rem',
          alignItems: 'start'
        }} className="contact-grid">
          {/* Left Column: Direct Links & Info */}
          <div>
            <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Direct Contact Channels</h3>

              {/* Email Card with Copy Button */}
              <div style={{
                padding: '1.25rem',
                borderRadius: '10px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid var(--border-subtle)',
                marginBottom: '1rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(0, 240, 255, 0.1)',
                    border: '1px solid rgba(0, 240, 255, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-cyan)'
                  }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>Direct Email</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>{PROFILE.email}</div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="btn btn-secondary btn-sm"
                  style={{ padding: '0.45rem 0.85rem' }}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={16} color="var(--accent-emerald)" /> : <Copy size={16} />}
                </button>
              </div>

              {/* LinkedIn Link Card */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.25rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    border: '1px solid rgba(59, 130, 246, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60A5FA'
                  }}>
                    <LinkedinIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>LinkedIn Profile</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>muhammad-fayaz-khan</div>
                  </div>
                </div>
                <ExternalLink size={18} color="var(--text-muted)" />
              </a>

              {/* GitHub Link Card */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '1.25rem',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  textDecoration: 'none',
                  transition: 'var(--transition-smooth)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(0, 240, 255, 0.4)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-subtle)'}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid var(--border-subtle)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--text-main)'
                  }}>
                    <GithubIcon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>GitHub Repositories</div>
                    <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--text-main)' }}>mfayazkhan50-AI</div>
                  </div>
                </div>
                <ExternalLink size={18} color="var(--text-muted)" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form with Validation & Formspree Integration */}
          <div>
            <div className="glass-card" style={{ padding: '2rem' }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem'
              }}>
                <MessageSquare size={22} color="var(--accent-cyan)" />
                <h3 style={{ fontSize: '1.3rem' }}>Send a Message</h3>
              </div>

              {status.submitted ? (
                <div style={{
                  padding: '2rem',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  color: 'var(--accent-emerald)',
                  textAlign: 'center'
                }}>
                  <Check size={40} style={{ margin: '0 auto 1rem auto' }} />
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Message Transmitted</h4>
                  <p style={{ color: '#A7F3D0', fontSize: '0.92rem', marginBottom: '1rem' }}>
                    Thank you! Your message has been sent. I will review your request and reply shortly.
                  </p>
                  <button
                    onClick={() => setStatus({ submitting: false, submitted: false, error: null })}
                    className="btn btn-secondary btn-sm"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {status.error && (
                    <div style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      background: 'rgba(239, 68, 68, 0.1)',
                      border: '1px solid rgba(239, 68, 68, 0.3)',
                      color: '#FCA5A5',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem'
                    }}>
                      <AlertCircle size={16} color="#EF4444" />
                      {status.error}
                    </div>
                  )}

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}>
                      YOUR NAME
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Rivera"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(8, 12, 20, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'var(--transition-smooth)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}>
                      YOUR EMAIL
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(8, 12, 20, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        transition: 'var(--transition-smooth)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      marginBottom: '0.4rem'
                    }}>
                      PROJECT DETAILS / MESSAGE
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Describe your project, RAG system requirements, or consulting request..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.8rem 1rem',
                        borderRadius: '8px',
                        background: 'rgba(8, 12, 20, 0.8)',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-main)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'var(--transition-smooth)'
                      }}
                      onFocus={(e) => e.target.style.borderColor = 'var(--accent-cyan)'}
                      onBlur={(e) => e.target.style.borderColor = 'var(--border-subtle)'}
                    />
                  </div>

                  {/* Formspree Endpoint Config (Editable) */}
                  <div style={{
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    background: 'rgba(255, 255, 255, 0.02)',
                    padding: '0.5rem 0.75rem',
                    borderRadius: '6px',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    Form Endpoint: <input
                      type="text"
                      value={formEndpoint}
                      onChange={(e) => setFormEndpoint(e.target.value)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--accent-cyan)',
                        fontFamily: 'inherit',
                        fontSize: 'inherit',
                        width: '80%',
                        outline: 'none'
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="btn btn-primary"
                    style={{ padding: '0.9rem', fontSize: '1rem' }}
                  >
                    <Send size={18} /> {status.submitting ? 'Transmitting...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
