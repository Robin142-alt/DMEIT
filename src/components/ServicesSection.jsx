import React from 'react';
import { ArrowRight, Droplet, Sparkles, Check } from 'lucide-react';
import { serviceCategories } from '../data/companyData';

export default function ServicesSection({ onSelectService }) {
  return (
    <section id="services" className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Droplet size={14} />
            <span>What We Do</span>
          </div>
          <h2 className="section-title">Practical Water Services</h2>
          <p className="section-subtitle">
            From discovering groundwater to drilling, equipping pumps, building storage towers, and piping water right to your taps.
          </p>
        </div>

        {/* Grouped Service Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {serviceCategories.map((group) => (
            <div key={group.id}>
              {/* Category Subheader */}
              <div
                style={{
                  borderLeft: '4px solid var(--brand-blue-700)',
                  paddingLeft: '1rem',
                  marginBottom: '1.75rem',
                }}
              >
                <h3
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: 800,
                    color: 'var(--brand-navy-950)',
                    marginBottom: '0.25rem',
                  }}
                >
                  {group.categoryName}
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.925rem' }}>
                  {group.summary}
                </p>
              </div>

              {/* Service Cards Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                  gap: '1.5rem',
                }}
              >
                {group.services.map((service) => (
                  <div
                    key={service.id}
                    className="card"
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      height: '100%',
                      backgroundColor: 'var(--bg-primary)',
                    }}
                  >
                    {/* Real Project Photo Preview */}
                    <div
                      style={{
                        position: 'relative',
                        height: '180px',
                        overflow: 'hidden',
                        backgroundColor: 'var(--brand-navy-900)',
                      }}
                    >
                      <img
                        src={service.image}
                        alt={service.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform var(--transition-normal)',
                        }}
                        onMouseEnter={(e) => (e.target.style.transform = 'scale(1.05)')}
                        onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                        loading="lazy"
                      />

                      {/* Service Badge Tag */}
                      <div
                        style={{
                          position: 'absolute',
                          top: '12px',
                          left: '12px',
                          backgroundColor: 'rgba(7, 28, 51, 0.85)',
                          backdropFilter: 'blur(4px)',
                          color: '#FFFFFF',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          padding: '0.25rem 0.65rem',
                          borderRadius: 'var(--radius-sm)',
                          border: '1px solid rgba(255, 255, 255, 0.2)',
                        }}
                      >
                        {service.badge}
                      </div>

                      {service.popular && (
                        <div
                          style={{
                            position: 'absolute',
                            top: '12px',
                            right: '12px',
                            backgroundColor: 'var(--color-amber-500)',
                            color: '#78350F',
                            fontSize: '0.725rem',
                            fontWeight: 800,
                            padding: '0.25rem 0.6rem',
                            borderRadius: 'var(--radius-sm)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                          }}
                        >
                          <Sparkles size={12} />
                          Popular
                        </div>
                      )}
                    </div>

                    {/* Card Body */}
                    <div
                      style={{
                        padding: '1.25rem 1.25rem 1.5rem 1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        flex: '1 1 auto',
                      }}
                    >
                      <h4
                        style={{
                          fontSize: '1.2rem',
                          fontWeight: 700,
                          color: 'var(--brand-navy-950)',
                          marginBottom: '0.65rem',
                        }}
                      >
                        {service.name}
                      </h4>

                      {/* Plain, short explanation */}
                      <p
                        style={{
                          fontSize: '0.925rem',
                          color: 'var(--text-body)',
                          lineHeight: '1.5',
                          marginBottom: '1.25rem',
                          flex: '1 1 auto',
                        }}
                      >
                        {service.shortDesc}
                      </p>

                      {/* Action Button */}
                      <button
                        onClick={() => onSelectService(service.name)}
                        className="btn btn-secondary btn-sm"
                        style={{
                          width: '100%',
                          justifyContent: 'space-between',
                          fontWeight: 700,
                          color: 'var(--brand-blue-700)',
                          borderColor: 'var(--brand-blue-500)',
                          backgroundColor: 'var(--brand-cyan-50)',
                        }}
                      >
                        <span>Request {service.name}</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
