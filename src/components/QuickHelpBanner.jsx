import React from 'react';
import { HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function QuickHelpBanner({ onNotSureClick, _onRequestService }) {
  return (
    <div
      style={{
        backgroundColor: 'var(--brand-cyan-50)',
        borderBottom: '1px solid var(--brand-cyan-100)',
        paddingTop: '1rem',
        paddingBottom: '1rem',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          {/* Left Message */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'var(--brand-cyan-100)',
                color: 'var(--brand-blue-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <HelpCircle size={20} />
            </div>
            <div>
              <p style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--brand-navy-950)' }}>
                Not sure which water service fits your land?
              </p>
              <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                You don't need engineering terms — tell us your situation and we will advise you.
              </p>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', flexWrap: 'wrap' }}>
            <button
              onClick={onNotSureClick}
              className="btn btn-secondary btn-sm"
              style={{
                borderColor: 'var(--brand-blue-500)',
                color: 'var(--brand-blue-700)',
                fontWeight: 700,
              }}
            >
              <span>Guide Me to the Right Service</span>
              <ArrowRight size={15} />
            </button>

            <a
              href={`tel:${companyData.phoneRaw}`}
              className="btn btn-primary btn-sm"
              style={{
                padding: '0.45rem 0.85rem',
                fontSize: '0.85rem',
              }}
            >
              <PhoneCall size={14} />
              <span>Call: {companyData.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
