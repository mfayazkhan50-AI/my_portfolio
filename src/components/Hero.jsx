import React from 'react';
import { ArrowRight, CalendarCheck, Check, Clock3, MessageCircle } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export default function Hero({ setActiveTab }) {
  return (
    <section style={{
      padding: '4.5rem 0 3.5rem',
      position: 'relative',
      overflow: 'hidden'
    }} className="animate-fade-up">
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '1200px',
        height: '450px',
        background: 'radial-gradient(circle, rgba(0, 240, 255, 0.08) 0%, rgba(59, 130, 246, 0.05) 40%, transparent 70%)',
        filter: 'blur(50px)',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ marginBottom: '1.25rem' }}>
              <div className="status-badge">
                <span className="pulse-dot"></span>
                {PROFILE.status}
              </div>
            </div>

            <h1 className="hero-title" style={{
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              lineHeight: 1.08,
              margin: '0 0 1.25rem'
            }}>
              I build <span className="gradient-text">AI Agents</span> that automate repetitive business work.
            </h1>

            <p style={{
              fontSize: '1.12rem',
              color: 'var(--text-main)',
              fontWeight: 400,
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '650px'
            }}>
              {PROFILE.valueProp}
            </p>

            <div className="hero-actions" style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1rem'
            }}>
              <button
                onClick={() => setActiveTab('contact')}
                className="btn btn-primary"
                style={{ padding: '0.9rem 1.35rem', fontSize: '1rem' }}
              >
                <CalendarCheck size={18} /> Book a Free Consultation
              </button>

              <button
                onClick={() => setActiveTab('projects')}
                className="btn btn-secondary"
                style={{ padding: '0.9rem 1.35rem', fontSize: '1rem' }}
              >
                See My Work <ArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="hero-visual" aria-hidden="true">
            <div className="hero-mockup-glow" />
            <div className="glass-card hero-mockup">
              <div className="hero-mockup-header">
                <div className="hero-mockup-brand">
                  <div className="hero-mockup-icon"><MessageCircle size={17} /></div>
                  <div>
                    <strong>Business Assistant</strong>
                    <span>AI workflow preview</span>
                  </div>
                </div>
                <span className="hero-online"><span /> Online</span>
              </div>

              <div className="hero-chat">
                <div className="hero-chat-message">
                  Hi! I can help book an appointment or answer a question.
                  <small>AI Assistant · just now</small>
                </div>
                <div className="hero-chat-message hero-chat-message-user">
                  Do you have an appointment available tomorrow?
                  <small>You · just now</small>
                </div>
                <div className="hero-chat-message">
                  I found an opening at 10:30 AM. Would you like me to reserve it?
                  <small>AI Assistant · just now</small>
                </div>
              </div>

              <div className="hero-appointment">
                <div className="hero-appointment-icon"><CalendarCheck size={18} /></div>
                <div className="hero-appointment-copy">
                  <strong>Appointment Booked</strong>
                  <span><Clock3 size={13} /> Tomorrow · 10:30 AM</span>
                </div>
                <Check size={18} className="hero-appointment-check" />
              </div>
              <div className="hero-typing" aria-label="Assistant is typing">
                <span /><span /><span />
                <small>Assistant is ready for the next request</small>
              </div>

              <div className="hero-mockup-footer">
                <span><span className="hero-pulse" /> Responding around the clock</span>
                <span>Preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .hero-mockup-glow {
          position: absolute;
          inset: 12% 4%;
          background: radial-gradient(ellipse, rgba(0, 240, 255, 0.16), transparent 70%);
          filter: blur(35px);
          pointer-events: none;
        }
        .hero-mockup {
          position: relative;
          overflow: hidden;
          padding: 1.25rem;
          border: 1px solid rgba(0, 240, 255, 0.22);
          background: linear-gradient(145deg, rgba(14, 23, 42, 0.94), rgba(8, 12, 20, 0.96));
          box-shadow: 0 25px 70px rgba(0, 0, 0, 0.45), 0 0 35px rgba(0, 240, 255, 0.08);
        }
        .hero-mockup-header, .hero-mockup-brand, .hero-online,
        .hero-appointment, .hero-appointment-copy span, .hero-mockup-footer,
        .hero-mockup-footer > span:first-child {
          display: flex;
          align-items: center;
        }
        .hero-mockup-header, .hero-mockup-footer {
          justify-content: space-between;
        }
        .hero-mockup-header {
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--border-subtle);
        }
        .hero-mockup-brand { gap: 0.7rem; }
        .hero-mockup-brand strong, .hero-mockup-brand span,
        .hero-appointment-copy strong, .hero-appointment-copy span {
          display: block;
        }
        .hero-mockup-brand strong { font-size: 0.88rem; color: var(--text-main); }
        .hero-mockup-brand span { margin-top: 0.15rem; font-size: 0.72rem; color: var(--text-muted); }
        .hero-mockup-icon, .hero-appointment-icon {
          display: grid;
          place-items: center;
          width: 38px;
          height: 38px;
          border-radius: 11px;
          color: var(--accent-cyan);
          background: rgba(0, 240, 255, 0.1);
          border: 1px solid rgba(0, 240, 255, 0.2);
        }
        .hero-online {
          gap: 0.4rem;
          padding: 0.35rem 0.6rem;
          border: 1px solid rgba(16, 185, 129, 0.22);
          border-radius: 20px;
          color: #6EE7B7;
          font-size: 0.72rem;
        }
        .hero-online span, .hero-pulse {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10B981;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.65);
        }
        .hero-chat {
          display: flex;
          flex-direction: column;
          gap: 0.8rem;
          padding: 1.25rem 0;
        }
        .hero-chat-message {
          max-width: 88%;
          padding: 0.75rem 0.85rem;
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 4px 12px 12px;
          background: rgba(255, 255, 255, 0.045);
          color: #DCE7F4;
          font-size: 0.8rem;
          line-height: 1.5;
        }
        .hero-chat-message small {
          display: block;
          margin-top: 0.4rem;
          color: var(--text-dim);
          font-size: 0.66rem;
        }
        .hero-chat-message-user {
          align-self: flex-end;
          border-color: rgba(59, 130, 246, 0.18);
          border-radius: 12px 4px 12px 12px;
          background: rgba(59, 130, 246, 0.1);
        }
        .hero-appointment {
          gap: 0.75rem;
          padding: 0.85rem;
          border-radius: 10px;
          background: rgba(0, 240, 255, 0.055);
          border: 1px solid rgba(0, 240, 255, 0.14);
        }
        .hero-typing {
          display: flex;
          align-items: center;
          gap: 0.28rem;
          padding: 0.75rem 0.25rem 0;
          color: var(--text-dim);
        }
        .hero-typing > span {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--accent-cyan);
          animation: hero-typing-pulse 1.1s infinite ease-in-out;
        }
        .hero-typing > span:nth-child(2) { animation-delay: 0.15s; }
        .hero-typing > span:nth-child(3) { animation-delay: 0.3s; }
        .hero-typing small {
          margin-left: 0.35rem;
          font-size: 0.67rem;
        }
        @keyframes hero-typing-pulse {
          0%, 60%, 100% { opacity: 0.35; transform: translateY(0); }
          30% { opacity: 1; transform: translateY(-3px); }
        }
        .hero-appointment-copy { flex: 1; }
        .hero-appointment-copy strong { margin-bottom: 0.25rem; font-size: 0.78rem; color: var(--text-main); }
        .hero-appointment-copy span { gap: 0.3rem; color: var(--text-muted); font-size: 0.7rem; }
        .hero-appointment-check { color: #34D399; }
        .hero-mockup-footer {
          padding-top: 0.9rem;
          color: var(--text-muted);
          font-size: 0.68rem;
        }
        .hero-mockup-footer > span:first-child { gap: 0.4rem; }
        .hero-mockup-footer > span:last-child {
          font-family: var(--font-mono);
          color: var(--text-dim);
        }
        @media (max-width: 992px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 767px) {
          .hero-visual { display: block !important; margin-top: 0.5rem; }
          .hero-mockup { padding: 1rem; }
          .hero-title { font-size: clamp(2.35rem, 10vw, 3.2rem) !important; }
          .hero-actions { flex-direction: column; align-items: stretch; }
          .hero-actions .btn { width: 100%; }
        }
      `}</style>
    </section>
  );
}
