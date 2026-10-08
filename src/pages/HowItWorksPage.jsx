import React, { useMemo } from 'react';
import {
  CheckCircle,
  Smartphone,
  MessageSquareText,
  Users,
  ArrowRight,
  HelpCircle,
  Calendar,
} from 'lucide-react';
import { howItWorksSteps } from '../data/companyData';
import SEO from '../components/SEO';
import { PAGE_SEO, getBreadcrumbSchema, getHowToSchema, getFaqSchema } from '../data/seoData';

const commonQuestions = [
  {
    q: 'Do I really need a hydrogeological ground survey before drilling?',
    a: 'Yes. A survey helps locate the most promising underground aquifer, estimates the required drilling depth, and is required to obtain regulatory water permits in Kenya.',
  },
  {
    q: 'Can a borehole pump run entirely on solar power without grid electricity?',
    a: 'Absolutely. We install solar arrays and DC/AC solar pumps that start pumping automatically once the sun is up, saving you from recurring monthly electric or diesel bills.',
  },
  {
    q: 'What if I already have a borehole that was drilled by someone else?',
    a: 'We can equip it. We test the borehole yield, supply the correct submersible pump, lower riser pipes and cables, install control panels, and pipe water into your storage tanks.',
  },
  {
    q: 'What happens immediately after I press "Continue to WhatsApp"?',
    a: 'Your project details are cleanly organized into a message. WhatsApp opens with Director David Nkadayo and our team. You simply press Send, and we respond promptly to discuss your site.',
  },
];

export default function HowItWorksPage({ onRequestService, onScheduleAppointment }) {
  const stepIcons = [
    <MessageSquareText key="1" size={32} color="var(--brand-blue-700)" />,
    <Smartphone key="2" size={32} color="var(--brand-blue-700)" />,
    <Users key="3" size={32} color="var(--brand-blue-700)" />,
  ];

  const pageSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How It Works', url: '/how-it-works' },
      ]),
      getHowToSchema(),
      getFaqSchema(commonQuestions),
    ],
  }), []);

  return (
    <div>
      <SEO {...PAGE_SEO.howItWorks} schema={pageSchema} />
      {/* Page Header */}
      <section
        style={{
          backgroundColor: 'var(--brand-navy-950)',
          color: 'var(--text-white)',
          padding: '3.5rem 0 3rem 0',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="container" style={{ maxWidth: '820px', textAlign: 'center' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.35rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(2, 132, 199, 0.25)',
              border: '1px solid rgba(14, 165, 233, 0.4)',
              color: 'var(--brand-cyan-300)',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}
          >
            <CheckCircle size={14} />
            <span>Process & Guidance</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            How It Works
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            We keep our process straightforward, human, and transparent. No complicated logins, no confusing bureaucracy — just direct communication.
          </p>
        </div>
      </section>

      {/* 3 Step Visual Cards */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '2rem',
              marginBottom: '4rem',
            }}
          >
            {howItWorksSteps.map((item, idx) => (
              <div
                key={item.step}
                className="card"
                style={{
                  padding: '2.25rem 1.75rem',
                  backgroundColor: 'var(--bg-primary)',
                  display: 'flex',
                  flexDirection: 'column',
                  border: '1.5px solid var(--border-subtle)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '60px',
                      height: '60px',
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
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: 'var(--border-medium)',
                      lineHeight: 1,
                      fontFamily: 'var(--font-heading)',
                    }}
                  >
                    0{item.step}
                  </span>
                </div>

                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 800,
                    color: 'var(--brand-navy-950)',
                    marginBottom: '0.75rem',
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: '0.975rem',
                    color: 'var(--text-body)',
                    lineHeight: '1.6',
                  }}
                >
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Transparent Project Stages */}
          <div
            style={{
              backgroundColor: 'var(--bg-primary)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem 2rem',
              border: '1.5px solid var(--border-subtle)',
            }}
          >
            <h2 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '1.5rem', textAlign: 'center' }}>
              What Happens On Site
            </h2>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                gap: '1.5rem',
              }}
            >
              <div style={{ padding: '1rem', borderLeft: '3px solid var(--brand-blue-700)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                  Stage 1
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', margin: '0.35rem 0' }}>
                  Site Consultation & Survey
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  We assess your parcel of land, review local groundwater geology, and mark the optimal drill coordinate.
                </p>
              </div>

              <div style={{ padding: '1rem', borderLeft: '3px solid var(--brand-blue-700)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                  Stage 2
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', margin: '0.35rem 0' }}>
                  Drilling & Casing
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  Our heavy rig mobilizes to your site, drills into the aquifer, installs steel/uPVC casing, and gravel packs the hole.
                </p>
              </div>

              <div style={{ padding: '1rem', borderLeft: '3px solid var(--brand-blue-700)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                  Stage 3
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', margin: '0.35rem 0' }}>
                  Yield Test & Equipping
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  We run a test pumping session to measure discharge liters per hour, then lower the submersible pump and solar system.
                </p>
              </div>

              <div style={{ padding: '1rem', borderLeft: '3px solid var(--brand-blue-700)' }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                  Stage 4
                </span>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', margin: '0.35rem 0' }}>
                  Storage & Piped Supply
                </h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                  We erect elevated towers or ground reservoirs, trench HDPE delivery lines, and connect taps to your house or farm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer FAQs Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '840px' }}>
          <div className="section-header">
            <div className="section-badge" style={{ backgroundColor: 'var(--brand-cyan-50)', color: 'var(--brand-blue-700)' }}>
              <HelpCircle size={14} />
              <span>Questions Answered</span>
            </div>
            <h2 className="section-title">Common Customer Questions</h2>
            <p className="section-subtitle">
              Plain, honest answers to help you plan your water project without guesswork.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
            {commonQuestions.map((item, i) => (
              <div
                key={i}
                className="card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1.5px solid var(--border-subtle)',
                }}
              >
                <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                  {item.q}
                </h3>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.6' }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => onRequestService()}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 700 }}
            >
              <span>Request a Service Now</span>
              <ArrowRight size={18} />
            </button>
            {onScheduleAppointment && (
              <button
                onClick={onScheduleAppointment}
                className="btn btn-secondary btn-lg"
                style={{ fontWeight: 700 }}
              >
                <Calendar size={18} />
                <span>Schedule an Appointment</span>
              </button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
