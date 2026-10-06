import React from 'react';
import { Shield, Wrench, Award, UserCheck, CheckCircle } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function AboutSection({ onRequestService }) {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2.5rem',
            alignItems: 'center',
          }}
          className="about-grid"
        >
          {/* Left Column: Authentic Company Story */}
          <div>
            <div className="section-badge">
              <UserCheck size={14} />
              <span>About DMEIT</span>
            </div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              Practical, Hands-On Water Contractors
            </h2>
            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-body)',
                lineHeight: '1.65',
                marginBottom: '1rem',
              }}
            >
              {companyData.name} is a dedicated Kenyan water infrastructure contractor founded on a simple principle: <strong>getting clean, reliable water to people, livestock, and farms through genuine field engineering</strong>.
            </p>
            <p
              style={{
                fontSize: '0.975rem',
                color: 'var(--text-muted)',
                lineHeight: '1.6',
                marginBottom: '1.75rem',
              }}
            >
              Under the active leadership of Director <strong>{companyData.director}</strong>, we don't just subcontract paperwork — our crew and heavy machinery are on the ground drilling rock, installing pumps, raising storage towers, and laying long-distance pipelines across Kenya.
            </p>

            {/* 3 Value Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              {companyData.values.map((v, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'var(--brand-cyan-100)',
                      color: 'var(--brand-blue-700)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>
                      {v.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.15rem' }}>
                      {v.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onRequestService()}
              className="btn btn-primary btn-md"
              style={{ fontWeight: 700 }}
            >
              Discuss Your Water Project
            </button>
          </div>

          {/* Right Column: Visual Feature Box */}
          <div>
            <div
              className="card"
              style={{
                overflow: 'hidden',
                border: '1.5px solid var(--border-subtle)',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <img
                src="/assets/images/solar_pumping_test.jpg"
                alt="Clean water flowing from newly equipped borehole on site"
                style={{
                  width: '100%',
                  height: '320px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-primary)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                    Company Leadership
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Director: {companyData.director}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.35rem' }}>
                  {companyData.name}
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: '1.5' }}>
                  Direct oversight on every borehole, pumping system, and pipeline project. We speak plainly, quote honestly, and deliver working water systems.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .about-grid {
            grid-template-columns: 1.15fr 0.85fr !important;
            gap: 3.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
