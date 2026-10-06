import React, { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function LightboxModal({ images, activeIndex, isOpen, onClose, onNavigate }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onNavigate((activeIndex - 1 + images.length) % images.length);
      if (e.key === 'ArrowRight') onNavigate((activeIndex + 1) % images.length);
    },
    [isOpen, activeIndex, images.length, onClose, onNavigate]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen || activeIndex === null || !images[activeIndex]) return null;

  const currentItem = images[activeIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onNavigate((activeIndex - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNavigate((activeIndex + 1) % images.length);
  };

  return (
    <div
      className="modal-overlay"
      onClick={onClose}
      style={{
        backgroundColor: 'rgba(4, 18, 36, 0.94)',
        padding: '0.75rem',
        zIndex: 1100,
      }}
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1040px',
          height: '100%',
          maxHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '0.5rem 0.5rem 1rem 0.5rem',
            color: 'var(--text-white)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                padding: '0.25rem 0.65rem',
                borderRadius: 'var(--radius-full)',
                backgroundColor: 'rgba(255, 255, 255, 0.15)',
              }}
            >
              <Tag size={12} />
              {currentItem.category}
            </span>
            <span style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.7)' }}>
              {activeIndex + 1} of {images.length}
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              color: 'var(--text-white)',
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              padding: '0.45rem 0.85rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 600,
              transition: 'background 150ms ease',
            }}
            aria-label="Close lightbox"
          >
            <X size={18} />
            <span>Close</span>
          </button>
        </div>

        {/* Main Image Stage */}
        <div
          style={{
            position: 'relative',
            width: '100%',
            flex: '1 1 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '260px',
            overflow: 'hidden',
          }}
        >
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            style={{
              position: 'absolute',
              left: '0.5rem',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(7, 28, 51, 0.75)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              transition: 'transform 150ms ease, background 150ms ease',
            }}
            aria-label="Previous photograph"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Photograph */}
          <img
            src={currentItem.image}
            alt={currentItem.title}
            style={{
              maxHeight: 'calc(90vh - 140px)',
              maxWidth: '100%',
              objectFit: 'contain',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              userSelect: 'none',
            }}
          />

          {/* Next Button */}
          <button
            onClick={handleNext}
            style={{
              position: 'absolute',
              right: '0.5rem',
              zIndex: 10,
              width: '46px',
              height: '46px',
              borderRadius: 'var(--radius-full)',
              backgroundColor: 'rgba(7, 28, 51, 0.75)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
              cursor: 'pointer',
              transition: 'transform 150ms ease, background 150ms ease',
            }}
            aria-label="Next photograph"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div
          style={{
            width: '100%',
            padding: '0.85rem 1rem',
            backgroundColor: 'rgba(7, 28, 51, 0.85)',
            backdropFilter: 'blur(8px)',
            borderRadius: 'var(--radius-md)',
            marginTop: '0.75rem',
            textAlign: 'center',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <h4 style={{ color: 'var(--text-white)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.2rem' }}>
            {currentItem.title}
          </h4>
          <p style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: '0.875rem', lineHeight: '1.4' }}>
            {currentItem.description}
          </p>
        </div>
      </div>
    </div>
  );
}
