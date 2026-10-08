import React, { useMemo } from 'react';
import { Phone } from 'lucide-react';
import ContactSection from '../components/ContactSection';
import SEO from '../components/SEO';
import { PAGE_SEO, getBreadcrumbSchema, SITE_URL } from '../data/seoData';

export default function ContactPage({ onScheduleAppointment }) {
  const contactSchema = useMemo(() => ({
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ]),
      {
        '@type': 'ContactPage',
        '@id': `${SITE_URL}/contact#webpage`,
        url: `${SITE_URL}/contact`,
        name: 'Contact DMEIT Ventures Ltd',
        description:
          'Get in touch directly with Director David Nkadayo and our engineering team. Call, WhatsApp, email, or send your project details.',
        mainEntity: {
          '@id': `${SITE_URL}/#organization`,
        },
      },
    ],
  }), []);

  return (
    <div>
      <SEO {...PAGE_SEO.contact} schema={contactSchema} />
      {/* Page Header */}
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
            <Phone size={14} />
            <span>Digital Front Office</span>
          </div>

          <h1 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.25rem)', fontWeight: 800, color: '#FFFFFF', marginBottom: '1rem' }}>
            Contact DMEIT Ventures Ltd
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#CBD5E1', lineHeight: '1.6' }}>
            Get in touch directly with Director David Nkadayo and our engineering team. Call, WhatsApp, email, or send your project details below.
          </p>
        </div>
      </section>

      {/* Main Interactive Contact Section */}
      <ContactSection onScheduleAppointment={onScheduleAppointment} />
    </div>
  );
}
