import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Wrench, Droplets, ArrowUpRight, MessageSquare, Send } from 'lucide-react';
import Hero from '../components/Hero';
import { projectGallery, companyData } from '../data/companyData';

export default function HomePage({ onRequestService, onScheduleAppointment, onOpenLightbox }) {
  // 4 Simple Homepage Service Summaries as instructed
  const homeServices = [
    {
      title: 'Find Water',
      subtitle: 'Survey & Borehole Drilling',
      description: 'Ground assessments and deep borehole drilling to reach reliable groundwater.',
      link: '/services',
    },
    {
      title: 'Equip Boreholes',
      subtitle: 'Borehole Equipment & Pumping',
      description: 'Submersible pumps, solar power systems, and control equipment to lift water.',
      link: '/services',
    },
    {
      title: 'Store & Move Water',
      subtitle: 'Storage & Pipelines',
      description: 'Elevated steel towers, durable ground tanks, and long-distance piping.',
      link: '/services',
    },
    {
      title: 'Community & Farm Water',
      subtitle: 'Water Points, Troughs, Pans & Dams',
      description: 'Livestock troughs, communal tap kiosks, and bulk catchment works.',
      link: '/services',
    },
  ];

  // 4 Curated Real Photos with larger visuals and minimal text
  const homePhotos = [
    {
      id: 'proj-01',
      title: 'Borehole Drilling',
      category: 'Borehole Drilling',
      image: '/assets/images/borehole_drilling_rig_dmeit.jpg',
    },
    {
      id: 'proj-02',
      title: 'Solar Water Flow',
      category: 'Solar Pumping',
      image: '/assets/images/solar_pumping_test.jpg',
    },
    {
      id: 'proj-04',
      title: 'Elevated Storage Tower',
      category: 'Water Storage',
      image: '/assets/images/elevated_steel_tank_tower.jpg',
    },
    {
      id: 'proj-08',
      title: 'Pipeline Installation',
      category: 'Pipelines',
      image: '/assets/images/hdpe_pipeline_laying.jpg',
    },
  ];

  return (
    <div className="homepage-rebuild">
      {/* 1. Hero Section (Cinematic photo background + 3 preserved primary actions) */}
      <Hero
        onRequestService={() => onRequestService()}
        onScheduleAppointment={onScheduleAppointment}
      />

      {/* 2. Short Service Overview (Open layout, 4 simple categories, ONE 'View All Services' button) */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '4rem 0 3.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '620px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--brand-blue-700)',
                marginBottom: '0.4rem',
              }}
            >
              Services Overview
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--brand-navy-950)',
                marginBottom: '0.65rem',
              }}
            >
              Water Services Made Simple
            </h2>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
              We manage the entire project from initial ground study to turning on your tap.
            </p>
          </div>

          {/* 4 Clean Categories Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {homeServices.map((item, idx) => (
              <div
                key={idx}
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--radius-lg)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <span
                    style={{
                      display: 'inline-block',
                      fontSize: '0.75rem',
                      fontWeight: 800,
                      color: 'var(--brand-blue-700)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.04em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    {item.title}
                  </span>
                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 800,
                      color: 'var(--brand-navy-950)',
                      marginBottom: '0.5rem',
                      lineHeight: '1.35',
                    }}
                  >
                    {item.subtitle}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--text-body)',
                      lineHeight: '1.5',
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Single Clear Next Step Button */}
          <div style={{ textAlign: 'center' }}>
            <Link
              to="/services"
              className="btn btn-secondary btn-md"
              style={{
                fontWeight: 700,
                borderColor: 'var(--brand-blue-700)',
                color: 'var(--brand-blue-700)',
              }}
            >
              <span>View All Services & Details</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Real Work / Trust Preview (Larger photos, minimal text, ONE 'See Our Work' button) */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '4rem 0 3.5rem 0' }}>
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              maxWidth: '620px',
              margin: '0 auto 2.5rem auto',
            }}
          >
            <p
              style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--brand-blue-700)',
                marginBottom: '0.4rem',
              }}
            >
              Real Evidence
            </p>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
                fontWeight: 800,
                color: 'var(--brand-navy-950)',
                marginBottom: '0.65rem',
              }}
            >
              Real Work in the Field
            </h2>
            <p style={{ fontSize: '0.975rem', color: 'var(--text-muted)', lineHeight: '1.55' }}>
              Real photos from DMEIT project sites across Kenya.
            </p>
          </div>

          {/* 4 Large Clean Photos */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem',
            }}
          >
            {homePhotos.map((item) => {
              const globalIndex = projectGallery.findIndex((p) => p.id === item.id);
              return (
                <div
                  key={item.id}
                  onClick={() => onOpenLightbox(globalIndex !== -1 ? globalIndex : 0)}
                  style={{
                    position: 'relative',
                    borderRadius: 'var(--radius-lg)',
                    overflow: 'hidden',
                    backgroundColor: 'var(--brand-navy-950)',
                    cursor: 'pointer',
                    boxShadow: 'var(--shadow-sm)',
                    border: '1px solid var(--border-subtle)',
                    height: '270px',
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(globalIndex !== -1 ? globalIndex : 0);
                    }
                  }}
                  aria-label={`View photo: ${item.title}`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 300ms ease',
                    }}
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                    loading="lazy"
                  />

                  {/* Clean Bottom Label */}
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      padding: '1rem',
                      background: 'linear-gradient(to top, rgba(7, 28, 51, 0.9) 0%, rgba(7, 28, 51, 0.4) 60%, transparent 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div>
                      <span
                        style={{
                          fontSize: '0.725rem',
                          fontWeight: 700,
                          color: 'var(--brand-cyan-300)',
                          textTransform: 'uppercase',
                        }}
                      >
                        {item.category}
                      </span>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#FFFFFF', margin: 0 }}>
                        {item.title}
                      </h4>
                    </div>
                    <span
                      style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.2)',
                        color: '#FFFFFF',
                        borderRadius: 'var(--radius-full)',
                        padding: '0.25rem 0.65rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}
                    >
                      Enlarge
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Compact 1-Row Process & Quick Assistance Strip */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '2.5rem 0 3rem 0', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div
            style={{
              backgroundColor: 'var(--brand-cyan-50)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.5rem 1.75rem',
              border: '1px solid var(--brand-cyan-100)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            {/* Minimal Horizontal Process Row */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                paddingBottom: '1rem',
                borderBottom: '1px solid rgba(2, 132, 199, 0.15)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--brand-blue-700)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>1</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>Tell us what you need</span>
              </div>

              <span style={{ color: 'var(--brand-blue-500)', fontWeight: 700, display: 'none' }} className="process-arrow">→</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--brand-blue-700)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>2</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>WhatsApp opens ready</span>
              </div>

              <span style={{ color: 'var(--brand-blue-500)', fontWeight: 700, display: 'none' }} className="process-arrow">→</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <span style={{ width: '22px', height: '22px', borderRadius: '50%', backgroundColor: 'var(--brand-blue-700)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 800 }}>3</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>Press Send and talk to our team</span>
              </div>
            </div>

            {/* Quick Contextual Action Prompt */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
              }}
            >
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', margin: 0 }}>
                Have questions or need advice on your land? <strong>Talk to our team</strong>.
              </p>

              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                <Link
                  to="/contact"
                  className="btn btn-primary btn-sm"
                  style={{ fontWeight: 700 }}
                >
                  <span>Talk to Our Team</span>
                  <ArrowRight size={15} />
                </Link>
                <Link
                  to="/how-it-works"
                  className="btn btn-secondary btn-sm"
                  style={{ fontWeight: 600 }}
                >
                  <span>Process & FAQs</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <style>{`
          @media (min-width: 768px) {
            .process-arrow {
              display: inline-block !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
