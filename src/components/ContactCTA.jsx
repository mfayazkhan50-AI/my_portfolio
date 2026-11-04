import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND } from '../data/portfolioData';

const BOOKING_URL = import.meta.env.VITE_BOOKING_URL;

export default function ContactCTA({ className = 'btn btn-primary', location = 'site', icon = null, style }) {
  const label = BOOKING_URL ? 'Book a Call' : 'Message me';
  const action = BOOKING_URL ? 'book-call' : 'message';
  const content = <>{label}{icon}</>;
  const onClick = () => window.plausible?.('CTA Click', { props: { location, action } });

  if (BOOKING_URL) {
    return <Link className={className} to="/contact#book" onClick={onClick} style={style}>{content}</Link>;
  }

  return (
    <a className={className} href={BRAND.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={onClick} style={style}>
      {content}
    </a>
  );
}
