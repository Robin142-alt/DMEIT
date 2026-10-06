import React from 'react';
import { HelpCircle, ArrowRight, MessageCircle, Compass } from 'lucide-react';
import { customerScenarios, companyData } from '../data/companyData';

export default function NotSureHelp({ onSelectService, onOpenRequest }) {
  return (
    <section id="not-sure" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Heading */}
        <div className="section-header">
          <div className="section-badge" style={{ backgroundColor: 'var(--color-amber-50)', color: '#B45309' }}>
            <Compass size={14} />
            <span>Problem Guide</span>
          </div>
          <h2 className="section-title">Not Sure What Service You Need?</h2>
          <p className="section-subtitle">
            Tell us what you need help with in plain everyday words. You don't have to know technical terms — our team will guide you to the right solution.
          </p>
        </div>

        {/* 4 Problem Scenarios Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2.5rem',
          }}
        >
          {customerScenarios.map((scenario, index) => (
            <div
              key={index}
              className="card"
              style={{
                padding: '1.5rem',
                backgroundColor: 'var(--bg-secondary)',
                border: '1.5px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'var(--brand-blue-700)',
                  marginBottom: '0.75rem',
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--brand-cyan-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '0.85rem',
                  }}
                >
                  {index + 1}
                </div>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                  Customer Situation
                </span>
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: 'var(--brand-navy-950)',
                  lineHeight: '1.35',
                  marginBottom: '0.75rem',
                }}
              >
                "{scenario.title}"
              </h3>

              <div
                style={{
                  backgroundColor: 'var(--bg-primary)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.25rem',
                  flex: '1 1 auto',
                }}
              >
                <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Recommended Approach:
                </span>
                <p style={{ fontWeight: 700, color: 'var(--brand-blue-700)', fontSize: '0.95rem', marginTop: '0.2rem', marginBottom: '0.4rem' }}>
                  {scenario.solution}
                </p>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.45' }}>
                  {scenario.advice}
                </p>
              </div>

              <button
                onClick={() => onSelectService(scenario.solution)}
                className="btn btn-secondary btn-sm"
                style={{
                  width: '100%',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                <span>Request Advice on This</span>
                <ArrowRight size={15} />
              </button>
            </div>
          ))}
        </div>

        {/* Big Friendly Empathy Banner */}
        <div
          style={{
            backgroundColor: 'linear-gradient(135deg, var(--brand-navy-950), var(--brand-navy-900))',
            background: 'linear-gradient(135deg, #071C33 0%, #003B73 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem 1.75rem',
            color: 'var(--text-white)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            maxWidth: '820px',
            margin: '0 auto',
            boxShadow: 'var(--shadow-lg)',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <HelpCircle size={24} color="var(--brand-cyan-300)" />
          </div>

          <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '0.65rem' }}>
            Still completely unsure where to begin?
          </h3>
          <p style={{ fontSize: '1rem', color: '#E2E8F0', maxWidth: '600px', lineHeight: '1.6', marginBottom: '1.5rem' }}>
            Choose our general guidance option. Simply tell us what county or town your land is in, and Director David Nkadayo & team will review your needs.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <button
              onClick={() => onOpenRequest('Not Sure / I Need Advice')}
              className="btn btn-primary btn-lg"
              style={{
                background: 'linear-gradient(135deg, #0284C7, #38BDF8)',
                color: '#071C33',
                fontWeight: 800,
              }}
            >
              <Compass size={18} />
              <span>Request Free Technical Guidance</span>
            </button>

            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ fontWeight: 700 }}
            >
              <MessageCircle size={18} />
              <span>Ask Directly on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
