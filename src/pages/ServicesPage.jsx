import React, { useState } from 'react';
import { Droplet, ArrowRight, MessageCircle, HelpCircle, Compass, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { serviceCategories, customerScenarios, companyData, projectGallery } from '../data/companyData';

export default function ServicesPage({ onRequestService, onOpenLightbox }) {
  const [activePhotoMap, setActivePhotoMap] = useState({});

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
            <Droplet size={14} />
            <span>Complete Water Solutions</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Our Services
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            We provide practical, long-lasting water infrastructure across Kenya — from finding the underground source to drilling, solar pump installation, and long-distance pipelines.
          </p>
        </div>
      </section>

      {/* Main Services Categories */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {serviceCategories.map((group) => (
              <div key={group.id}>
                {/* Category Header */}
                <div
                  style={{
                    borderLeft: '4px solid var(--brand-blue-700)',
                    paddingLeft: '1rem',
                    marginBottom: '1.75rem',
                  }}
                >
                  <h2
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 800,
                      color: 'var(--brand-navy-950)',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {group.categoryName}
                  </h2>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                    {group.summary}
                  </p>
                </div>

                {/* Services Grid */}
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: '1.5rem',
                  }}
                >
                  {group.services.map((service) => {
                    const servicePhotos = service.images || [service.image];
                    const activePhotoIdx = activePhotoMap[service.id] || 0;
                    const currentPhoto = servicePhotos[activePhotoIdx] || service.image;

                    const handlePhotoClick = () => {
                      if (onOpenLightbox) {
                        const globalIdx = projectGallery.findIndex((p) => p.image === currentPhoto);
                        if (globalIdx !== -1) {
                          onOpenLightbox(globalIdx);
                        } else {
                          const fallbackIdx = projectGallery.findIndex((p) => p.image === service.image);
                          if (fallbackIdx !== -1) onOpenLightbox(fallbackIdx);
                        }
                      }
                    };

                    return (
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
                        {/* Photo Preview */}
                        <div
                          style={{
                            position: 'relative',
                            height: '200px',
                            backgroundColor: 'var(--brand-navy-900)',
                            overflow: 'hidden',
                            cursor: onOpenLightbox ? 'pointer' : 'default',
                          }}
                          onClick={handlePhotoClick}
                          role={onOpenLightbox ? 'button' : undefined}
                          tabIndex={onOpenLightbox ? 0 : undefined}
                          onKeyDown={(e) => {
                            if (onOpenLightbox && (e.key === 'Enter' || e.key === ' ')) {
                              e.preventDefault();
                              handlePhotoClick();
                            }
                          }}
                          aria-label={`View photo for ${service.name}`}
                        >
                          <img
                            src={currentPhoto}
                            alt={service.name}
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              transition: 'transform 300ms ease',
                            }}
                            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.04)')}
                            onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                            loading="lazy"
                          />
                          <div
                            style={{
                              position: 'absolute',
                              top: '12px',
                              left: '12px',
                              backgroundColor: 'rgba(7, 28, 51, 0.85)',
                              color: '#FFFFFF',
                              fontSize: '0.725rem',
                              fontWeight: 700,
                              padding: '0.25rem 0.65rem',
                              borderRadius: 'var(--radius-sm)',
                              zIndex: 1,
                            }}
                          >
                            {service.badge}
                          </div>

                          {/* Enlarge tag */}
                          {onOpenLightbox && (
                            <span
                              style={{
                                position: 'absolute',
                                bottom: '10px',
                                left: '10px',
                                backgroundColor: 'rgba(7, 28, 51, 0.8)',
                                color: '#E2E8F0',
                                fontSize: '0.7rem',
                                fontWeight: 600,
                                padding: '0.2rem 0.55rem',
                                borderRadius: 'var(--radius-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '4px',
                                zIndex: 1,
                              }}
                            >
                              <Eye size={12} />
                              Enlarge
                            </span>
                          )}

                          {/* Translucent visible navigation arrows when service has multiple photos */}
                          {servicePhotos.length > 1 && (
                            <>
                              {/* Left Arrow */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActivePhotoMap((prev) => ({
                                    ...prev,
                                    [service.id]: (activePhotoIdx - 1 + servicePhotos.length) % servicePhotos.length,
                                  }));
                                }}
                                aria-label="Previous photo"
                                style={{
                                  position: 'absolute',
                                  left: '8px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: 'var(--radius-full)',
                                  backgroundColor: 'rgba(7, 28, 51, 0.58)',
                                  backdropFilter: 'blur(5px)',
                                  WebkitBackdropFilter: 'blur(5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.4)',
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  transition: 'all 200ms ease',
                                  zIndex: 3,
                                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(7, 28, 51, 0.88)';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(7, 28, 51, 0.58)';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                }}
                              >
                                <ChevronLeft size={18} strokeWidth={2.5} />
                              </button>

                              {/* Right Arrow */}
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActivePhotoMap((prev) => ({
                                    ...prev,
                                    [service.id]: (activePhotoIdx + 1) % servicePhotos.length,
                                  }));
                                }}
                                aria-label="Next photo"
                                style={{
                                  position: 'absolute',
                                  right: '8px',
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  width: '32px',
                                  height: '32px',
                                  borderRadius: 'var(--radius-full)',
                                  backgroundColor: 'rgba(7, 28, 51, 0.58)',
                                  backdropFilter: 'blur(5px)',
                                  WebkitBackdropFilter: 'blur(5px)',
                                  border: '1px solid rgba(255, 255, 255, 0.4)',
                                  color: '#FFFFFF',
                                  display: 'flex',
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  cursor: 'pointer',
                                  transition: 'all 200ms ease',
                                  zIndex: 3,
                                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.35)',
                                }}
                                onMouseEnter={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(7, 28, 51, 0.88)';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1.08)';
                                }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.backgroundColor = 'rgba(7, 28, 51, 0.58)';
                                  e.currentTarget.style.transform = 'translateY(-50%) scale(1)';
                                }}
                              >
                                <ChevronRight size={18} strokeWidth={2.5} />
                              </button>

                              {/* Clean photo count indicator */}
                              <span
                                style={{
                                  position: 'absolute',
                                  bottom: '10px',
                                  right: '10px',
                                  backgroundColor: 'rgba(7, 28, 51, 0.65)',
                                  backdropFilter: 'blur(4px)',
                                  WebkitBackdropFilter: 'blur(4px)',
                                  color: '#FFFFFF',
                                  fontSize: '0.7rem',
                                  fontWeight: 700,
                                  padding: '0.2rem 0.55rem',
                                  borderRadius: 'var(--radius-full)',
                                  border: '1px solid rgba(255, 255, 255, 0.25)',
                                  zIndex: 1,
                                }}
                              >
                                {activePhotoIdx + 1} / {servicePhotos.length}
                              </span>
                            </>
                          )}
                        </div>

                      {/* Content */}
                      <div
                        style={{
                          padding: '1.35rem',
                          display: 'flex',
                          flexDirection: 'column',
                          flex: '1 1 auto',
                        }}
                      >
                        <h3
                          style={{
                            fontSize: '1.25rem',
                            fontWeight: 800,
                            color: 'var(--brand-navy-950)',
                            marginBottom: '0.65rem',
                          }}
                        >
                          {service.name}
                        </h3>

                        <p
                          style={{
                            fontSize: '0.925rem',
                            color: 'var(--text-body)',
                            lineHeight: '1.55',
                            marginBottom: '1rem',
                          }}
                        >
                          {service.shortDesc}
                        </p>

                        <p
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            lineHeight: '1.5',
                            marginBottom: '1.35rem',
                            flex: '1 1 auto',
                          }}
                        >
                          {service.fullDesc}
                        </p>

                        <button
                          onClick={() => onRequestService(service.name)}
                          className="btn btn-primary btn-sm"
                          style={{
                            width: '100%',
                            justifyContent: 'space-between',
                            fontWeight: 700,
                          }}
                        >
                          <span>Request {service.name}</span>
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* "Not Sure What You Need" Problem Guide */}
      <section className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge" style={{ backgroundColor: 'var(--color-amber-50)', color: '#B45309' }}>
              <Compass size={14} />
              <span>Problem Guide</span>
            </div>
            <h2 className="section-title">Not Sure What Service You Need?</h2>
            <p className="section-subtitle">
              Tell us your water problem in plain words. You don't need engineering terms — pick the situation below that matches your situation:
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              marginBottom: '3rem',
            }}
          >
            {customerScenarios.map((item, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '1.5rem',
                  backgroundColor: 'var(--bg-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.75rem' }}>
                    "{item.title}"
                  </h3>
                  <div
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-md)',
                      marginBottom: '1.25rem',
                      border: '1px solid var(--border-subtle)',
                    }}
                  >
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--brand-blue-700)', textTransform: 'uppercase' }}>
                      Recommended Solution
                    </span>
                    <p style={{ fontWeight: 800, color: 'var(--brand-navy-950)', fontSize: '0.95rem', marginTop: '0.15rem' }}>
                      {item.solution}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.35rem', lineHeight: '1.45' }}>
                      {item.advice}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => onRequestService(item.solution)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}
                >
                  <span>Request Advice on This</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            ))}
          </div>

          {/* Fallback Banner */}
          <div
            style={{
              backgroundColor: 'var(--brand-cyan-50)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              textAlign: 'center',
              border: '1.5px solid var(--brand-cyan-300)',
              maxWidth: '720px',
              margin: '0 auto',
            }}
          >
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
              Still Unsure? Talk to David Nkadayo & Our Team
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-body)', marginBottom: '1.25rem' }}>
              Choose our guided advice option. Tell us what county your land is in and what you are trying to achieve.
            </p>
            <button
              onClick={() => onRequestService('Not Sure / I Need Advice')}
              className="btn btn-primary btn-lg"
              style={{ fontWeight: 700 }}
            >
              Get Guided Technical Advice
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
