import React from 'react';
import { Link } from 'react-router-dom';
import { BOOKING_URL } from '../data/portfolioData';

export default function ContactCTA({ className = 'btn btn-primary', location = 'site', icon = null, style }) {
  const label = BOOKING_URL ? 'Book a Call' : 'Contact Us';
  const action = BOOKING_URL ? 'book-call' : 'message';
  const content = <>{label}{icon}</>;
  const onClick = () => window.plausible?.('CTA Click', { props: { location, action } });

  if (BOOKING_URL) {
    return <Link className={className} to="/contact#book" onClick={onClick} style={style}>{content}</Link>;
  }

  return (
    <Link className={className} to="/contact" onClick={onClick} style={style}>
      {content}
    </Link>
  );
}
