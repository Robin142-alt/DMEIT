import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Menu, X, ArrowRight } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Header({ onRequestService, onScheduleAppointment }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Our Work', href: '#our-work' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 900,
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.98)' : 'var(--bg-primary)',
        backdropFilter: 'blur(10px)',
        borderBottom: `1px solid ${scrolled ? 'var(--border-subtle)' : 'transparent'}`,
        boxShadow: scrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'all 200ms ease',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
          }}
        >
          {/* Logo Brand */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.85rem',
              textDecoration: 'none',
            }}
          >
            <img
              src={companyData.logo}
              alt="DMEIT Ventures Ltd Logo"
              style={{
                height: '48px',
                width: 'auto',
                maxWidth: '180px',
                objectFit: 'contain',
              }}
            />
          </a>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '1.75rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: 'var(--brand-navy-900)',
                  transition: 'color var(--transition-fast)',
                }}
                onMouseEnter={(e) => (e.target.style.color = 'var(--brand-blue-500)')}
                onMouseLeave={(e) => (e.target.style.color = 'var(--brand-navy-900)')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Header Action Buttons (Desktop) */}
          <div
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '0.75rem',
            }}
            className="desktop-actions"
          >
            {/* Direct Phone Call Link */}
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="btn btn-secondary btn-sm"
              title="Call DMEIT directly"
              style={{ fontWeight: 600 }}
            >
              <Phone size={15} color="var(--brand-blue-700)" />
              <span>{companyData.phoneDisplay}</span>
            </a>

            {/* Request a Service CTA */}
            <button
              onClick={() => onRequestService()}
              className="btn btn-primary btn-sm"
              style={{ fontWeight: 700 }}
            >
              Request a Service
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="mobile-toggle-group">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="btn btn-secondary btn-sm"
              style={{ padding: '0.4rem 0.6rem', display: 'flex', alignItems: 'center' }}
              aria-label="Call DMEIT"
            >
              <Phone size={16} color="var(--brand-blue-700)" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)',
                color: 'var(--brand-navy-900)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: 'var(--bg-primary)',
            borderTop: '1px solid var(--border-subtle)',
            padding: '1.25rem 1.5rem 2rem 1.5rem',
            boxShadow: 'var(--shadow-lg)',
            animation: 'fadeIn 150ms ease forwards',
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: 'var(--brand-navy-950)',
                  padding: '0.4rem 0',
                  borderBottom: '1px solid var(--bg-tertiary)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span>{link.label}</span>
                <ArrowRight size={16} color="var(--text-muted)" />
              </a>
            ))}
          </nav>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestService();
              }}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Request a Service
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onScheduleAppointment();
              }}
              className="btn btn-secondary btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Schedule an Appointment
            </button>

            <a
              href={companyData.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <MessageCircle size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .desktop-actions { display: flex !important; }
          .mobile-toggle-group { display: none !important; }
        }
      `}</style>
    </header>
  );
}
