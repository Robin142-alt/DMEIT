import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Droplets,
  Wrench,
  Camera,
  Calendar,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import Hero from '../components/Hero';
import QuickHelpBanner from '../components/QuickHelpBanner';
import HowItWorks from '../components/HowItWorks';
import { companyData, serviceCategories, projectGallery } from '../data/companyData';

export default function HomePage({ onRequestService, onScheduleAppointment, onOpenLightbox }) {
  // Select top featured projects for homepage preview
  const featuredProjects = projectGallery.filter((p) => p.featured).slice(0, 4);

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero
        onRequestService={() => onRequestService()}
        onScheduleAppointment={onScheduleAppointment}
      />

      {/* 2. Quick Help Banner */}
      <QuickHelpBanner
        onNotSureClick={() => onRequestService('Not Sure / I Need Advice')}
        onRequestService={() => onRequestService('Not Sure / I Need Advice')}
      />

      {/* 3. Services Overview Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Droplets size={14} />
              <span>Core Water Solutions</span>
            </div>
            <h2 className="section-title">What DMEIT Does</h2>
            <p className="section-subtitle">
              We handle the entire water journey — finding underground aquifers, drilling boreholes, equipping solar pumps, and piping water where you need it.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}
          >
            {serviceCategories.map((cat) => (
              <div
                key={cat.id}
                className="card"
                style={{
                  padding: '1.75rem 1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  backgroundColor: 'var(--bg-primary)',
                  border: '1.5px solid var(--border-subtle)',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      padding: '0.4rem 0.75rem',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: 'var(--brand-cyan-50)',
                      color: 'var(--brand-blue-700)',
                      fontSize: '0.8rem',
                      fontWeight: 800,
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                    }}
                  >
                    Category
                  </div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                    {cat.categoryName}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: '1.5', marginBottom: '1.25rem' }}>
                    {cat.summary}
                  </p>

                  <ul style={{ listStyle: 'none', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                    {cat.services.map((s) => (
                      <li key={s.id} style={{ fontSize: '0.875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
                        <CheckCircle2 size={15} color="var(--brand-blue-500)" style={{ flexShrink: 0 }} />
                        <span>{s.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/services"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'space-between', fontWeight: 700 }}
                >
                  <span>Explore Services</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/services"
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 700 }}
            >
              <span>View All Detailed Services</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. How It Works 3-Step Section */}
      <HowItWorks />

      {/* 5. Featured Work Preview */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">
              <Camera size={14} />
              <span>Field Proof</span>
            </div>
            <h2 className="section-title">Actual DMEIT Project Work</h2>
            <p className="section-subtitle">
              Take a look at genuine field photos from our drilling sites, solar pumping installations, elevated towers, and pipeline supply lines.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {featuredProjects.map((p, idx) => {
              const globalIdx = projectGallery.findIndex((item) => item.id === p.id);
              return (
                <div
                  key={p.id}
                  onClick={() => onOpenLightbox(globalIdx)}
                  className="card"
                  style={{
                    cursor: 'pointer',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 250ms ease',
                      }}
                      onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                      onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                      loading="lazy"
                    />
                    <div
                      style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: 'rgba(7, 28, 51, 0.85)',
                        color: '#FFFFFF',
                        fontSize: '0.725rem',
                        fontWeight: 700,
                        padding: '0.2rem 0.6rem',
                        borderRadius: 'var(--radius-sm)',
                      }}
                    >
                      {p.category}
                    </div>
                  </div>
                  <div style={{ padding: '1rem' }}>
                    <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--brand-navy-950)', marginBottom: '0.25rem' }}>
                      {p.title}
                    </h4>
                    <p style={{ fontSize: '0.825rem', color: 'var(--text-muted)' }}>
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link
              to="/our-work"
              className="btn btn-secondary btn-lg"
              style={{ fontWeight: 700, borderColor: 'var(--brand-blue-700)', color: 'var(--brand-blue-700)' }}
            >
              <span>Explore All 18 Field Photos in Gallery</span>
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Director & Practical Assurance Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--brand-navy-950)', color: '#FFFFFF' }}>
        <div className="container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              alignItems: 'center',
            }}
            className="home-director-grid"
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.35rem 0.85rem',
                  backgroundColor: 'rgba(2, 132, 199, 0.25)',
                  border: '1px solid rgba(14, 165, 233, 0.4)',
                  color: 'var(--brand-cyan-300)',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                }}
              >
                <ShieldCheck size={14} />
                <span>Genuine Hands-On Leadership</span>
              </div>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem', lineHeight: 1.25 }}>
                Direct Accountability with Director David Nkadayo
              </h2>
              <p style={{ color: '#CBD5E1', fontSize: '1.05rem', lineHeight: '1.65', marginBottom: '1.5rem' }}>
                At {companyData.name}, we do not pass your borehole or water project through layers of third-party agents. Our director and technical personnel personally supervise operations from the first ground survey until clean water flows into your tanks.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                <Link to="/about" className="btn btn-white btn-md" style={{ fontWeight: 700 }}>
                  <span>About Our Company</span>
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => onRequestService()}
                  className="btn btn-outline-white btn-md"
                  style={{ fontWeight: 600 }}
                >
                  Request a Service
                </button>
              </div>
            </div>

            <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', border: '2px solid rgba(255, 255, 255, 0.15)' }}>
              <img
                src="/assets/images/borehole_drilling_rig_dmeit.jpg"
                alt="DMEIT heavy drilling rig on site"
                style={{ width: '100%', height: '320px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 900px) {
            .home-director-grid {
              grid-template-columns: 1.2fr 0.8fr !important;
            }
          }
        `}</style>
      </section>

      {/* 7. Bottom Front Office Action Strip */}
      <section style={{ backgroundColor: 'var(--brand-cyan-50)', padding: '3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center', maxWidth: '720px' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.75rem' }}>
            Ready to Start Your Water Project?
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '1.75rem' }}>
            Speak directly with Director David Nkadayo and our technical crew. Tell us what you need and we will advise you on the quickest path forward.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', justifyContent: 'center' }}>
            <button
              onClick={() => onRequestService()}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 700 }}
            >
              Request a Service
            </button>
            <button
              onClick={onScheduleAppointment}
              className="btn btn-secondary btn-lg"
              style={{ fontWeight: 600 }}
            >
              <Calendar size={18} />
              Schedule Appointment
            </button>
            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ fontWeight: 700 }}
            >
              <MessageCircle size={19} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
