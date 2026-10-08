import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MessageCircle, ArrowUp } from 'lucide-react';
import { companyData } from '../data/companyData';

const currentYear = new Date().getFullYear();

export default function Footer({ onRequestService, onScheduleAppointment }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: 'var(--brand-navy-950)',
        color: '#94A3B8',
        paddingTop: '3.5rem',
        paddingBottom: '2.5rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '2.5rem',
            marginBottom: '3rem',
          }}
        >
          {/* Col 1: Brand & Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <Link to="/">
                <img
                  src={companyData.logo}
                  alt="DMEIT Ventures Ltd — Reliable Water Solutions Kenya"
                  width="160"
                  height="42"
                  loading="lazy"
                  decoding="async"
                  style={{
                    height: '42px',
                    width: 'auto',
                    objectFit: 'contain',
                    backgroundColor: '#FFFFFF',
                    padding: '4px 8px',
                    borderRadius: 'var(--radius-sm)',
                  }}
                />
              </Link>
            </div>
            <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: '#CBD5E1', marginBottom: '1rem' }}>
              {companyData.tagline}. Practical borehole drilling, solar water pumping, and pipeline water works across Kenya.
            </p>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
              Director: <strong style={{ color: '#FFFFFF' }}>{companyData.director}</strong>
            </p>
          </div>

          {/* Col 2: Fast Navigation Pages */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
              Pages
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <li>
                <Link to="/" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>
                  Services & Solutions
                </Link>
              </li>
              <li>
                <Link to="/help" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>
                  Help & Guidance
                </Link>
              </li>
              <li>
                <Link to="/how-it-works" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>
                  How It Works & FAQs
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>
                  About DMEIT
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ color: '#CBD5E1', fontSize: '0.9rem', textDecoration: 'none' }}>
                  Contact & Digital Front Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Official Contact */}
          <div>
            <h4 style={{ color: '#FFFFFF', fontSize: '1rem', fontWeight: 700, marginBottom: '1rem' }}>
              Official Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <a
                href={`tel:${companyData.phoneRaw}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#FFFFFF',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <Phone size={16} color="var(--brand-cyan-300)" />
                <span>{companyData.phoneDisplay}</span>
              </a>

              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#25D366',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                <MessageCircle size={16} color="#25D366" />
                <span>WhatsApp: {companyData.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${companyData.email}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.65rem',
                  color: '#CBD5E1',
                  fontSize: '0.9rem',
                  wordBreak: 'break-all',
                  textDecoration: 'none',
                }}
              >
                <Mail size={16} color="var(--brand-cyan-300)" />
                <span>{companyData.email}</span>
              </a>
            </div>

            <div style={{ marginTop: '1.25rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              <button
                onClick={onRequestService}
                className="btn btn-secondary btn-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  fontSize: '0.8rem',
                }}
              >
                Request Service
              </button>
              <button
                onClick={onScheduleAppointment}
                className="btn btn-secondary btn-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  color: '#FFFFFF',
                  borderColor: 'rgba(255, 255, 255, 0.2)',
                  fontSize: '0.8rem',
                }}
              >
                Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back to Top */}
        <div
          style={{
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.825rem',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
            <p style={{ margin: 0 }}>© {currentYear} {companyData.name}. All rights reserved.</p>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#94A3B8', textDecoration: 'none', fontSize: '0.8rem' }}
              title="View XML Sitemap for search engines"
            >
              XML Sitemap
            </a>
          </div>

          <button
            onClick={scrollToTop}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              color: '#CBD5E1',
              backgroundColor: 'rgba(255, 255, 255, 0.08)',
              padding: '0.4rem 0.8rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.8rem',
              fontWeight: 600,
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
