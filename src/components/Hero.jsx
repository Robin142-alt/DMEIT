import React from 'react';
import { ArrowRight, Calendar, MessageCircle, CheckCircle2, ShieldCheck, Wrench, Droplets } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ onRequestService, onScheduleAppointment }) {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        backgroundColor: 'var(--brand-navy-950)',
        color: 'var(--text-white)',
        paddingTop: '3.5rem',
        paddingBottom: '4.5rem',
        overflow: 'hidden',
      }}
    >
      {/* Background Graphic Accents */}
      <div
        style={{
          position: 'absolute',
          top: '-15%',
          right: '-5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(2, 132, 199, 0.22) 0%, rgba(7, 28, 51, 0) 70%)',
          filter: 'blur(50px)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Hero Left Content */}
          <div style={{ maxWidth: '640px' }}>
            {/* Trust Pill */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'rgba(2, 132, 199, 0.2)',
                border: '1px solid rgba(14, 165, 233, 0.4)',
                borderRadius: 'var(--radius-full)',
                padding: '0.4rem 0.95rem',
                marginBottom: '1.25rem',
              }}
            >
              <Droplets size={16} color="var(--brand-cyan-300)" />
              <span
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  color: 'var(--brand-cyan-300)',
                  letterSpacing: '0.03em',
                  textTransform: 'uppercase',
                }}
              >
                Water Infrastructure & Drilling
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.3rem, 5.2vw, 3.75rem)',
                fontWeight: 800,
                color: 'var(--text-white)',
                lineHeight: 1.15,
                letterSpacing: '-0.025em',
                marginBottom: '1.25rem',
              }}
            >
              Reliable Water Solutions <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                From Survey to Supply.
              </span>
            </h1>

            {/* Plain English Supporting Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                color: '#CBD5E1',
                lineHeight: 1.6,
                marginBottom: '2rem',
                maxWidth: '560px',
              }}
            >
              Practical borehole drilling, solar pumping systems, water storage towers, and pipeline supply for homes, farms, businesses, and communities.
            </p>

            {/* Core Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.85rem',
                marginBottom: '2rem',
              }}
            >
              {/* Request a Service Button */}
              <button
                onClick={() => onRequestService()}
                className="btn btn-primary btn-lg"
                style={{
                  background: 'linear-gradient(135deg, #0284C7, #003B73)',
                  boxShadow: '0 6px 20px rgba(2, 132, 199, 0.4)',
                  fontWeight: 700,
                }}
              >
                <span>Request a Service</span>
                <ArrowRight size={18} />
              </button>

              {/* Schedule an Appointment Button */}
              <button
                onClick={() => onScheduleAppointment()}
                className="btn btn-secondary btn-lg"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  borderColor: 'rgba(255, 255, 255, 0.25)',
                  color: 'var(--text-white)',
                  fontWeight: 600,
                }}
              >
                <Calendar size={18} />
                <span>Schedule an Appointment</span>
              </button>

              {/* Chat on WhatsApp */}
              <a
                href={companyData.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp btn-lg"
                style={{
                  color: '#04210D',
                  fontWeight: 700,
                }}
              >
                <MessageCircle size={19} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Field Trust Checklist */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E2E8F0', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} color="var(--brand-cyan-300)" />
                <span>Real DMEIT Rig & Crew</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E2E8F0', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} color="var(--brand-cyan-300)" />
                <span>Zero Fuel Solar Pumping</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#E2E8F0', fontSize: '0.875rem' }}>
                <CheckCircle2 size={16} color="var(--brand-cyan-300)" />
                <span>Storage Tanks & Pipelines</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual: Real DMEIT Rig in Action */}
          <div style={{ position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
                border: '2px solid rgba(255, 255, 255, 0.15)',
              }}
            >
              <img
                src="/assets/images/borehole_drilling_rig_dmeit.jpg"
                alt="Heavy borehole drilling rig branded DMEIT Ventures Ltd on site drilling"
                style={{
                  width: '100%',
                  height: 'auto',
                  maxHeight: '480px',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />

              {/* Bottom Project Badge on Image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem',
                  background: 'linear-gradient(to top, rgba(7, 28, 51, 0.95) 0%, rgba(7, 28, 51, 0.6) 70%, transparent 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      backgroundColor: 'var(--brand-blue-700)',
                      color: '#FFFFFF',
                      fontSize: '0.725rem',
                      fontWeight: 800,
                      padding: '0.2rem 0.55rem',
                      borderRadius: 'var(--radius-sm)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '0.25rem',
                    }}
                  >
                    Actual DMEIT Site Work
                  </span>
                  <p style={{ color: '#FFFFFF', fontSize: '0.95rem', fontWeight: 700 }}>
                    Heavy Borehole Drilling Rig in Operation
                  </p>
                </div>

                <a
                  href="#our-work"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    padding: '0.5rem 0.85rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    backdropFilter: 'blur(4px)',
                    whiteSpace: 'nowrap',
                  }}
                >
                  View 18 Photos →
                </a>
              </div>
            </div>

            {/* Quick Proof Floating Card */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '-15px',
                backgroundColor: 'var(--bg-primary)',
                color: 'var(--brand-navy-950)',
                padding: '0.75rem 1rem',
                borderRadius: 'var(--radius-md)',
                boxShadow: 'var(--shadow-xl)',
                border: '1px solid var(--border-subtle)',
                display: 'none',
                alignItems: 'center',
                gap: '0.65rem',
              }}
              className="hero-floating-proof"
            >
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: 'var(--radius-full)',
                  backgroundColor: 'var(--brand-cyan-100)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--brand-blue-700)',
                }}
              >
                <ShieldCheck size={20} />
              </div>
              <div>
                <p style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-navy-950)' }}>
                  Certified Field Personnel
                </p>
                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Led by Director David Nkadayo
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 960px) {
          .hero-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3.5rem !important;
          }
          .hero-floating-proof {
            display: flex !important;
          }
        }
      `}</style>
    </section>
  );
}
