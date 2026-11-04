import React, { useEffect, useState } from 'react';
import { AlertCircle, Check, Copy, ExternalLink, Mail, MessageCircle, Send } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { BRAND, PROFILE } from '../data/portfolioData';
import { LinkedinIcon } from './BrandIcons';

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const PROJECT_TYPES = ['AI Receptionist', 'RAG Assistant', 'Custom Agent', 'Automation', 'Other'];
const BUDGETS = ['<$500', '$500-$1.5k', '$1.5k-$5k', '$5k+', 'Not sure'];
const TIMELINES = ['As soon as possible', 'Within 1 month', 'Within 1-3 months', 'Flexible'];

export default function Contact() {
  const [searchParams] = useSearchParams();
  const initialSubject = searchParams.get('subject') || '';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: initialSubject ? `Subject: ${initialSubject}\n\n` : '',
    website: ''
  });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copyStatus, setCopyStatus] = useState('');

  useEffect(() => {
    const subject = searchParams.get('subject');
    if (subject) setFormData((current) => ({ ...current, message: `Subject: ${subject}\n\n${current.message.replace(/^Subject: .*?\n\n/, '')}` }));
  }, [searchParams]);

  const updateField = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopyStatus('Copied');
    } catch {
      setCopyStatus('Copy unavailable — select the email address to copy it.');
    }
    window.setTimeout(() => setCopyStatus(''), 2500);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (formData.website) {
      setStatus({ state: 'success', message: 'Thanks, your message was sent.' });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setStatus({ state: 'error', message: 'Enter a valid email address.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ state: 'error', message: 'Please add a few details about your project.' });
      return;
    }
    if (!FORM_ENDPOINT) {
      setStatus({ state: 'error', message: 'The contact form is not configured yet. Please use email or WhatsApp below.' });
      return;
    }

    setStatus({ state: 'submitting', message: '' });
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          budget: formData.budget,
          timeline: formData.timeline,
          message: formData.message,
          _replyto: formData.email,
          _subject: `MFK AI Solutions inquiry: ${formData.projectType}`
        })
      });
      if (!response.ok) throw new Error('The form service rejected the submission.');
      setStatus({ state: 'success', message: 'Thanks, your message was sent.' });
      window.plausible?.('Form Submit', { props: { form: 'contact' } });
      setFormData({ name: '', email: '', projectType: '', budget: '', timeline: '', message: '', website: '' });
    } catch {
      setStatus({ state: 'error', message: 'Your message could not be sent. Please contact me by email or WhatsApp.' });
    }
  };

  return (
    <main className="container site-page">
      <header className="section-header">
        <span className="section-tag">CONTACT</span>
        <h1>Let&apos;s Automate Your Business.</h1>
        <p>Open for freelance projects and consulting. Ready to save time and scale? Send me a message.</p>
      </header>

      <section id="book" className="booking-section">
        <div>
          <span className="section-tag">{import.meta.env.VITE_BOOKING_URL ? 'BOOK A CALL' : 'GET IN TOUCH'}</span>
          <h2>Start with a conversation</h2>
          <p>Share the process you want to improve and I can discuss a suitable next step.</p>
        </div>
        {import.meta.env.VITE_BOOKING_URL ? (
          <iframe
            className="booking-embed"
            src={import.meta.env.VITE_BOOKING_URL}
            title="Schedule a call with MFK AI Solutions"
            loading="lazy"
            allow="payment"
          />
        ) : (
          <a
            className="booking-fallback"
            href={BRAND.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => window.plausible?.('WhatsApp Click', { props: { location: 'booking-fallback' } })}
          >
            <MessageCircle size={22} />
            <span><strong>Message me on WhatsApp to schedule</strong><small>WhatsApp — MFK AI Solutions</small></span>
            <ExternalLink size={17} />
          </a>
        )}
      </section>

      <div className="contact-page-grid">
        <section className="contact-channels">
          <div className="contact-panel glass-card">
            <h2>Direct channels</h2>
            <p className="response-promise">The best way to reach me is by email or WhatsApp.</p>
            <div className="contact-email-row">
              <a href={`mailto:${PROFILE.email}`}><Mail size={18} /> {PROFILE.email}</a>
              <button type="button" className="btn btn-secondary btn-sm" onClick={handleCopyEmail} aria-label="Copy contact email">
                {copyStatus === 'Copied' ? <Check size={16} /> : <Copy size={16} />}
                {copyStatus || 'Copy'}
              </button>
            </div>
            {copyStatus && <p className="copy-status" role="status">{copyStatus}</p>}
            <a className="channel-link" href={PROFILE.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinIcon size={18} /> LinkedIn</a>
            <a className="channel-link" href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => window.plausible?.('WhatsApp Click', { props: { location: 'contact' } })}><MessageCircle size={18} /> WhatsApp — MFK AI Solutions</a>
          </div>
        </section>

        <section className="contact-form-panel glass-card">
          <h2>Send a project message</h2>
          <p className="response-promise">Share a few details so I can understand what you need.</p>
          {status.state === 'success' ? (
            <div className="form-feedback form-success" role="status">
              <Check size={22} />
              <div><strong>Message received</strong><p>{status.message}</p></div>
              <button type="button" className="btn btn-secondary btn-sm" onClick={() => setStatus({ state: 'idle', message: '' })}>Send another</button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              {status.state === 'error' && (
                <div className="form-feedback form-error" role="alert">
                  <AlertCircle size={19} />
                  <span>{status.message} <a href={`mailto:${PROFILE.email}`}>Email me</a> or <a href={BRAND.whatsappUrl}>message on WhatsApp</a>.</span>
                </div>
              )}
              <div className="honeypot-field" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>
                <input id="website" name="website" type="text" tabIndex="-1" autoComplete="off" value={formData.website} onChange={updateField} />
              </div>
              <div className="form-two-col">
                <label>Your name<input name="name" value={formData.name} onChange={updateField} autoComplete="name" required maxLength={120} placeholder="Your name" /></label>
                <label>Your email<input name="email" type="email" value={formData.email} onChange={updateField} autoComplete="email" required maxLength={254} placeholder="you@example.com" /></label>
                <label>Project type<select name="projectType" value={formData.projectType} onChange={updateField} required><option value="" disabled>Select...</option>{PROJECT_TYPES.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
                <label>Budget range<select name="budget" value={formData.budget} onChange={updateField} required><option value="" disabled>Select...</option>{BUDGETS.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
                <label>Timeline<select name="timeline" value={formData.timeline} onChange={updateField} required><option value="" disabled>Select...</option>{TIMELINES.map((value) => <option key={value} value={value}>{value}</option>)}</select></label>
              </div>
              <label>Project details<textarea name="message" rows={5} value={formData.message} onChange={updateField} required maxLength={5000} placeholder="What are you hoping to automate or improve?" /></label>
              <button type="submit" className="btn btn-primary" disabled={status.state === 'submitting'}>
                <Send size={17} /> {status.state === 'submitting' ? 'Sending…' : 'Send message'}
              </button>
              <small className="form-privacy">Please avoid including sensitive personal or confidential information.</small>
            </form>
          )}
        </section>
      </div>

      <style>{`
        .site-page { min-height: 60vh; padding-top: clamp(2.5rem, 6vw, 4rem); padding-bottom: clamp(3rem, 7vw, 5rem); }
        #book { scroll-margin-top: 98px; }
        .booking-section, .contact-panel, .contact-form-panel { padding: clamp(1.1rem, 3vw, 1.8rem); border: 1px solid var(--border-subtle); border-radius: 14px; background: rgba(13, 23, 39, 0.72); }
        .booking-section { display: grid; grid-template-columns: minmax(0, 0.7fr) minmax(0, 1.3fr); align-items: center; gap: 1.5rem; margin-bottom: 1.5rem; }
        .booking-section h2, .contact-panel h2, .contact-form-panel h2 { margin: 0.4rem 0 0.65rem; font-size: 1.35rem; }
        .booking-section p { font-size: 0.88rem; }
        .booking-embed { width: 100%; min-height: 540px; border: 0; border-radius: 8px; background: rgba(8, 12, 20, 0.6); }
        .booking-fallback { display: flex; align-items: center; gap: 0.8rem; padding: 1.1rem; border: 1px solid rgba(16, 185, 129, 0.26); border-radius: 10px; background: rgba(16, 185, 129, 0.07); color: #D8E3F0; text-decoration: none; }
        .booking-fallback > svg:first-child { color: #34D399; flex: 0 0 auto; }
        .booking-fallback > svg:last-child { margin-left: auto; flex: 0 0 auto; }
        .booking-fallback span { display: grid; gap: 0.25rem; }
        .booking-fallback small { color: var(--text-muted); font-size: 0.76rem; }
        .contact-page-grid { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: 1.25rem; align-items: start; }
        .contact-panel, .contact-form-panel { min-width: 0; }
        .response-promise { margin-bottom: 1rem; color: #C0CFDF; font-size: 0.8rem; }
        .contact-email-row { display: flex; align-items: center; justify-content: space-between; gap: 0.5rem; padding: 0.8rem 0; border-bottom: 1px solid var(--border-subtle); }
        .contact-email-row a, .channel-link { display: inline-flex; align-items: center; gap: 0.55rem; min-width: 0; color: #C8D6E6; font-size: 0.82rem; text-decoration: none; overflow-wrap: anywhere; }
        .contact-email-row a:hover, .channel-link:hover { color: var(--accent-cyan); }
        .contact-email-row a svg, .channel-link svg { flex: 0 0 auto; }
        .channel-link { display: flex; margin-top: 0.85rem; }
        .copy-status { margin-top: 0.4rem; color: #6EE7B7; font-size: 0.72rem; }
        .contact-form { display: grid; gap: 0.9rem; }
        .form-two-col { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.8rem; }
        .contact-form label { display: grid; gap: 0.35rem; color: #CFD9E7; font-size: 0.78rem; }
        .contact-form input, .contact-form select, .contact-form textarea {
          width: 100%; min-width: 0; padding: 0.72rem 0.8rem; border: 1px solid rgba(148, 163, 184, 0.2); border-radius: 8px;
          background: rgba(8, 12, 20, 0.8); color: var(--text-main); font: 0.87rem var(--font-body);
        }
        .contact-form select { color-scheme: dark; }
        .contact-form textarea { resize: vertical; }
        .contact-form input:focus-visible, .contact-form select:focus-visible, .contact-form textarea:focus-visible { outline: 2px solid var(--accent-cyan); outline-offset: 2px; }
        .honeypot-field { position: absolute; width: 1px; height: 1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; }
        .form-feedback { display: flex; align-items: flex-start; gap: 0.55rem; padding: 0.8rem; border-radius: 8px; font-size: 0.82rem; }
        .form-feedback svg { flex: 0 0 auto; }
        .form-feedback a { color: inherit; text-decoration: underline; }
        .form-success { flex-wrap: wrap; border: 1px solid rgba(16, 185, 129, 0.35); background: rgba(16, 185, 129, 0.09); color: #A7F3D0; }
        .form-success p { margin-top: 0.25rem; color: #A7F3D0; }
        .form-success button { margin-left: auto; }
        .form-error { border: 1px solid rgba(248, 113, 113, 0.35); background: rgba(239, 68, 68, 0.08); color: #FECACA; }
        .form-privacy { color: #A7B6CB; font-size: 0.72rem; }
        @media (max-width: 760px) {
          .booking-section, .contact-page-grid { grid-template-columns: minmax(0, 1fr); }
          .booking-embed { min-height: 460px; }
        }
        @media (max-width: 480px) { .form-two-col { grid-template-columns: minmax(0, 1fr); } }
      `}</style>
    </main>
  );
}
