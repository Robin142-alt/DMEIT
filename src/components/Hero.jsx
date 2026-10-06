import React from 'react';
import { ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Hero({ onRequestService, onScheduleAppointment }) {
  return (
    <section
      className="hero-cinematic"
      style={{
        position: 'relative',
        minHeight: '82vh',
        display: 'flex',
        alignItems: 'center',
        color: '#FFFFFF',
        overflow: 'hidden',
        paddingTop: '3.5rem',
        paddingBottom: '3.5rem',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ maxWidth: '620px' }}>
          {/* Subtle Small Category Label */}
          <p
            style={{
              fontSize: '0.825rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: 'var(--brand-cyan-300)',
              marginBottom: '0.75rem',
            }}
          >
            DMEIT Ventures Ltd • Water Contractor Kenya
          </p>

          {/* Elegant, Confident Headline */}
          <h1
            style={{
              fontSize: 'clamp(2.15rem, 4.2vw, 3.25rem)',
              fontWeight: 800,
              color: '#FFFFFF',
              lineHeight: 1.18,
              letterSpacing: '-0.025em',
              marginBottom: '1rem',
            }}
          >
            Water Solutions <br />
            You Can Rely On.
          </h1>

          {/* Short, Human Supporting Sentence */}
          <p
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: '#E2E8F0',
              lineHeight: 1.55,
              marginBottom: '2rem',
              maxWidth: '520px',
            }}
          >
            From finding water to drilling, equipping and water infrastructure, DMEIT helps you get the right solution.
          </p>

          {/* Preserved Primary Hero Actions */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            {/* Action 1: Request a Service */}
            <button
              onClick={() => onRequestService()}
              className="btn btn-primary btn-lg"
              style={{
                fontWeight: 700,
                background: 'linear-gradient(135deg, #0284C7 0%, #003B73 100%)',
                boxShadow: '0 4px 16px rgba(2, 132, 199, 0.35)',
              }}
            >
              <span>Request a Service</span>
              <ArrowRight size={17} />
            </button>

            {/* Action 2: Schedule an Appointment */}
            <button
              onClick={() => onScheduleAppointment()}
              className="btn btn-secondary btn-lg"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(8px)',
                borderColor: 'rgba(255, 255, 255, 0.3)',
                color: '#FFFFFF',
                fontWeight: 600,
              }}
            >
              <Calendar size={17} />
              <span>Schedule an Appointment</span>
            </button>

            {/* Action 3: Chat on WhatsApp */}
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{
                fontWeight: 700,
                color: '#04210D',
              }}
            >
              <MessageCircle size={18} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        .hero-cinematic {
          background-color: var(--brand-navy-950);
          background-image: 
            linear-gradient(90deg, rgba(7, 28, 51, 0.94) 0%, rgba(7, 28, 51, 0.78) 48%, rgba(7, 28, 51, 0.25) 100%),
            url('/assets/images/borehole_drilling_rig_dmeit.jpg');
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }

        @media (max-width: 768px) {
          .hero-cinematic {
            min-height: auto;
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
            background-image: 
              linear-gradient(180deg, rgba(7, 28, 51, 0.92) 0%, rgba(7, 28, 51, 0.8) 55%, rgba(7, 28, 51, 0.5) 100%),
              url('/assets/images/borehole_drilling_rig_dmeit.jpg');
            background-position: center;
          }
        }
      `}</style>
    </section>
  );
}
