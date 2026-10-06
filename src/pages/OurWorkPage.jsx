import React, { useState } from 'react';
import { Camera, Maximize2, Tag, ArrowRight } from 'lucide-react';
import { projectGallery } from '../data/companyData';

export default function OurWorkPage({ onOpenLightbox, onRequestService }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Borehole Drilling',
    'Solar Systems',
    'Borehole Equipping',
    'Storage & Tanks',
    'Pipelines',
    'Community & Farms',
  ];

  const filteredProjects =
    activeCategory === 'All'
      ? projectGallery
      : projectGallery.filter((p) => p.category === activeCategory);

  return (
    <div>
      {/* Page Header Banner */}
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
            <Camera size={14} />
            <span>Field Evidence</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Our Work in the Field
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            Browse our complete photo gallery of 18 genuine field installations — heavy drilling rigs, clean water discharge tests, solar arrays, elevated water towers, and pipeline supply trenches.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              justifyContent: 'center',
              marginBottom: '2.5rem',
            }}
          >
            {categories.map((cat) => {
              const count =
                cat === 'All'
                  ? projectGallery.length
                  : projectGallery.filter((p) => p.category === cat).length;
              const isSelected = activeCategory === cat;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '0.55rem 1.15rem',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.875rem',
                    fontWeight: isSelected ? 800 : 600,
                    backgroundColor: isSelected ? 'var(--brand-blue-700)' : 'var(--bg-secondary)',
                    color: isSelected ? '#FFFFFF' : 'var(--brand-navy-950)',
                    border: `1.5px solid ${isSelected ? 'var(--brand-blue-700)' : 'var(--border-subtle)'}`,
                    transition: 'all var(--transition-fast)',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                  }}
                >
                  <span>{cat}</span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      padding: '0.15rem 0.5rem',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: isSelected ? 'rgba(255, 255, 255, 0.25)' : 'var(--border-medium)',
                      color: isSelected ? '#FFFFFF' : 'var(--text-dark)',
                      fontWeight: 700,
                    }}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Photos Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
              marginBottom: '3.5rem',
            }}
          >
            {filteredProjects.map((project) => {
              const globalIndex = projectGallery.findIndex((p) => p.id === project.id);

              return (
                <div
                  key={project.id}
                  onClick={() => onOpenLightbox(globalIndex)}
                  className="card gallery-page-card"
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    overflow: 'hidden',
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1.5px solid var(--border-subtle)',
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      onOpenLightbox(globalIndex);
                    }
                  }}
                  aria-label={`View full photo: ${project.title}`}
                >
                  {/* Photo Container */}
                  <div
                    style={{
                      position: 'relative',
                      height: '250px',
                      backgroundColor: 'var(--brand-navy-950)',
                      overflow: 'hidden',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 250ms ease',
                      }}
                      loading="lazy"
                    />

                    {/* Category Tag */}
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
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                      }}
                    >
                      {project.category}
                    </div>

                    {/* Hover Zoom Icon */}
                    <div
                      className="zoom-hover-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        backgroundColor: 'rgba(7, 28, 51, 0.4)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: 0,
                        transition: 'opacity 200ms ease',
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: 'var(--brand-blue-700)',
                          color: '#FFFFFF',
                          padding: '0.6rem 1rem',
                          borderRadius: 'var(--radius-full)',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                        }}
                      >
                        <Maximize2 size={16} />
                        <span>Enlarge Photo</span>
                      </div>
                    </div>
                  </div>

                  {/* Caption Bar */}
                  <div
                    style={{
                      padding: '1.25rem',
                      display: 'flex',
                      flexDirection: 'column',
                      flex: '1 1 auto',
                      justifyContent: 'space-between',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '1.1rem',
                        fontWeight: 800,
                        color: 'var(--brand-navy-950)',
                        marginBottom: '0.4rem',
                        lineHeight: '1.35',
                      }}
                    >
                      {project.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-muted)',
                        lineHeight: '1.45',
                      }}
                    >
                      {project.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Project CTA Bar */}
          <div
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              border: '1.5px solid var(--border-subtle)',
              maxWidth: '820px',
              margin: '0 auto',
            }}
          >
            <h3 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
              Want a Similar Water Project Executed on Your Land?
            </h3>
            <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              Whether you need borehole drilling, solar water pump equipping, a sturdy elevated steel tank, or long pipelines across your farm, our team is ready.
            </p>
            <button
              onClick={() => onRequestService()}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 700 }}
            >
              <span>Request a Service</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <style>{`
        .gallery-page-card:hover .zoom-hover-overlay {
          opacity: 1 !important;
        }
        .gallery-page-card:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </div>
  );
}
