import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function MobileStickyBar({ onRequestService }) {
  return (
    <aside
      className="mobile-sticky-bar"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 850,
        backgroundColor: 'var(--brand-navy-950)',
        borderTop: '1px solid rgba(255, 255, 255, 0.15)',
        boxShadow: '0 -4px 16px rgba(0, 0, 0, 0.25)',
        padding: '0.55rem 0.75rem',
      }}
      aria-label="Quick mobile contact actions"
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1.3fr',
          gap: '0.5rem',
          maxWidth: '480px',
          margin: '0 auto',
        }}
      >
        {/* Call Button */}
        <a
          href={`tel:${companyData.phoneRaw}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '0.4rem 0.25rem',
            textDecoration: 'none',
            minHeight: '44px',
            gap: '0.15rem',
          }}
          aria-label={`Call DMEIT directly at ${companyData.phoneDisplay}`}
        >
          <Phone size={17} color="var(--brand-cyan-300)" />
          <span style={{ fontSize: '0.72rem', fontWeight: 700 }}>Call Now</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={companyData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#25D366',
            color: '#052E16',
            borderRadius: 'var(--radius-md)',
            padding: '0.4rem 0.25rem',
            textDecoration: 'none',
            minHeight: '44px',
            gap: '0.15rem',
          }}
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle size={17} />
          <span style={{ fontSize: '0.72rem', fontWeight: 800 }}>WhatsApp</span>
        </a>

        {/* Request Service Modal Trigger */}
        <button
          onClick={onRequestService}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'var(--brand-blue-500)',
            color: '#FFFFFF',
            borderRadius: 'var(--radius-md)',
            padding: '0.4rem 0.25rem',
            minHeight: '44px',
            gap: '0.15rem',
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.4)',
          }}
          aria-label="Request a Water Service"
        >
          <FileText size={17} />
          <span style={{ fontSize: '0.72rem', fontWeight: 800 }}>Request Service</span>
        </button>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .mobile-sticky-bar {
            display: none !important;
          }
        }
      `}</style>
    </aside>
  );
}
