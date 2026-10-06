import React, { useState } from 'react';
import { Camera, Maximize2, Filter, Layers } from 'lucide-react';
import { projectGallery } from '../data/companyData';

export default function OurWorkGallery({ onOpenLightbox }) {
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
    <section id="our-work" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Camera size={14} />
            <span>Real Project Evidence</span>
          </div>
          <h2 className="section-title">Our Work in the Field</h2>
          <p className="section-subtitle">
            Every photograph below represents actual field projects executed by DMEIT Ventures Ltd — drilling rigs in action, solar arrays, pump equipping, towers, and pipelines.
          </p>
        </div>

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
                  padding: '0.5rem 1rem',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.85rem',
                  fontWeight: isSelected ? 700 : 500,
                  backgroundColor: isSelected ? 'var(--brand-blue-700)' : 'var(--bg-secondary)',
                  color: isSelected ? '#FFFFFF' : 'var(--brand-navy-900)',
                  border: `1.5px solid ${isSelected ? 'var(--brand-blue-700)' : 'var(--border-subtle)'}`,
                  transition: 'all var(--transition-fast)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                }}
              >
                <span>{cat}</span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '0.1rem 0.45rem',
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

        {/* Responsive Gallery Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {filteredProjects.map((project) => {
            // Find global index in full gallery so lightbox navigation is consistent
            const globalIndex = projectGallery.findIndex((p) => p.id === project.id);

            return (
              <div
                key={project.id}
                onClick={() => onOpenLightbox(globalIndex)}
                className="card gallery-card"
                style={{
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-subtle)',
                }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onOpenLightbox(globalIndex);
                  }
                }}
                aria-label={`View photo: ${project.title}`}
              >
                {/* Image Container with Safe Aspect Ratio */}
                <div
                  style={{
                    position: 'relative',
                    height: '240px',
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
                      transition: 'transform 300ms ease',
                    }}
                    loading="lazy"
                  />

                  {/* Category Pill Over Image */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      backgroundColor: 'rgba(7, 28, 51, 0.85)',
                      backdropFilter: 'blur(4px)',
                      color: '#FFFFFF',
                      fontSize: '0.725rem',
                      fontWeight: 700,
                      padding: '0.2rem 0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(255, 255, 255, 0.15)',
                    }}
                  >
                    {project.category}
                  </div>

                  {/* Zoom Overlay Trigger */}
                  <div
                    className="gallery-overlay"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(7, 28, 51, 0.45)',
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
                        padding: '0.55rem 0.95rem',
                        borderRadius: 'var(--radius-full)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.4rem',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        boxShadow: 'var(--shadow-md)',
                      }}
                    >
                      <Maximize2 size={16} />
                      <span>View Photo</span>
                    </div>
                  </div>
                </div>

                {/* Caption Bar */}
                <div
                  style={{
                    padding: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1 1 auto',
                    justifyContent: 'space-between',
                  }}
                >
                  <h4
                    style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: 'var(--brand-navy-950)',
                      lineHeight: '1.35',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {project.title}
                  </h4>
                  <p
                    style={{
                      fontSize: '0.825rem',
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
      </div>

      <style>{`
        .gallery-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-card:hover img {
          transform: scale(1.04);
        }
      `}</style>
    </section>
  );
}
