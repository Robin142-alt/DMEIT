import React from 'react';
import { howItWorksSteps } from '../data/companyData';
import { CheckCircle, Smartphone, MessageSquareText, Users } from 'lucide-react';

export default function HowItWorks() {
  const stepIcons = [
    <MessageSquareText key="1" size={28} color="var(--brand-blue-700)" />,
    <Smartphone key="2" size={28} color="var(--brand-blue-700)" />,
    <Users key="3" size={28} color="var(--brand-blue-700)" />,
  ];

  return (
    <section id="how-it-works" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <CheckCircle size={14} />
            <span>Simple 3-Step Process</span>
          </div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting water solutions should not involve complicated red tape. Here is how easy it is to start with DMEIT:
          </p>
        </div>

        {/* 3 Steps Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
            position: 'relative',
          }}
        >
          {howItWorksSteps.map((item, idx) => (
            <div
              key={item.step}
              className="card"
              style={{
                padding: '2rem 1.5rem',
                backgroundColor: 'var(--bg-primary)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid var(--border-subtle)',
              }}
            >
              {/* Step Number Tag */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--brand-cyan-50)',
                    border: '1.5px solid var(--brand-cyan-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {stepIcons[idx]}
                </div>
                <span
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--border-medium)',
                    lineHeight: 1,
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  0{item.step}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: 'var(--brand-navy-950)',
                  marginBottom: '0.65rem',
                }}
              >
                {item.title}
              </h3>

              {/* Text */}
              <p
                style={{
                  fontSize: '0.95rem',
                  color: 'var(--text-body)',
                  lineHeight: '1.55',
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
