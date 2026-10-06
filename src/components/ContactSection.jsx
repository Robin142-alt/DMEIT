import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  Send,
  Calendar,
  Clock,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { companyData, allServices } from '../data/companyData';
import { formatServiceRequestMessage, buildWhatsAppLink } from '../utils/whatsapp';

export default function ContactSection({ onScheduleAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    location: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [readyToSend, setReadyToSend] = useState(false);
  const [copied, setCopied] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number so we can reach you.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please enter a valid phone number (e.g. 0704 200 502).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setReadyToSend(true);
  };

  const formattedMessage = formatServiceRequestMessage(formData);
  const whatsappUrl = buildWhatsAppLink(formattedMessage);

  const handleOpenWhatsApp = () => {
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="section-padding" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-badge">
            <Phone size={14} />
            <span>Digital Front Office</span>
          </div>
          <h2 className="section-title">Talk to Our Team</h2>
          <p className="section-subtitle">
            Reach DMEIT Ventures Ltd directly. Call, send a message on WhatsApp, email us, or use the quick request form below.
          </p>
        </div>

        {/* Top 3 Direct Contact Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {/* Card 1: Direct Phone Call */}
          <a
            href={`tel:${companyData.phoneRaw}`}
            className="card"
            style={{
              padding: '1.75rem 1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-subtle)',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--brand-cyan-100)',
                color: 'var(--brand-blue-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Phone size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Direct Phone Call
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginTop: '0.15rem' }}>
                {companyData.phoneDisplay}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginTop: '0.25rem' }}>
                Tap to dial directly from your smartphone.
              </p>
            </div>
          </a>

          {/* Card 2: WhatsApp Chat */}
          <a
            href={companyData.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="card"
            style={{
              padding: '1.75rem 1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              backgroundColor: '#F0FDF4',
              border: '1.5px solid #BBF7D0',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--color-whatsapp)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <MessageCircle size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#166534', textTransform: 'uppercase' }}>
                Official WhatsApp
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#052E16', marginTop: '0.15rem' }}>
                {companyData.phoneDisplay}
              </h3>
              <p style={{ fontSize: '0.85rem', color: '#166534', marginTop: '0.25rem' }}>
                Chat instantly with our technical team.
              </p>
            </div>
          </a>

          {/* Card 3: Email Us */}
          <a
            href={`mailto:${companyData.email}`}
            className="card"
            style={{
              padding: '1.75rem 1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-subtle)',
              textDecoration: 'none',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: 'var(--radius-lg)',
                backgroundColor: 'var(--brand-cyan-100)',
                color: 'var(--brand-blue-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <Mail size={24} />
            </div>
            <div>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                Official Email
              </span>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginTop: '0.15rem', wordBreak: 'break-all' }}>
                {companyData.email}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-body)', marginTop: '0.25rem' }}>
                For tenders, bill of quantities, and formal inquiries.
              </p>
            </div>
          </a>
        </div>

        {/* Dual Form & Appointment Container */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem',
            maxWidth: '1080px',
            margin: '0 auto',
          }}
          className="contact-layout"
        >
          {/* Quick Request Form on Page */}
          <div
            className="card"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-secondary)',
              border: '1.5px solid var(--border-subtle)',
            }}
          >
            <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.35rem' }}>
              Send a Service Request
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Fill in your project details and we will generate a clean message ready to send on WhatsApp.
            </p>

            {!readyToSend ? (
              <form onSubmit={handleSubmit}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cnt-name">
                      Full Name <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      id="cnt-name"
                      type="text"
                      className={`form-input ${errors.name ? 'has-error' : ''}`}
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: null });
                      }}
                    />
                    {errors.name && (
                      <div className="form-error">
                        <AlertCircle size={14} />
                        <span>{errors.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cnt-phone">
                      Phone Number <span style={{ color: '#DC2626' }}>*</span>
                    </label>
                    <input
                      id="cnt-phone"
                      type="tel"
                      className={`form-input ${errors.phone ? 'has-error' : ''}`}
                      placeholder="e.g. 0704 200 502"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        if (errors.phone) setErrors({ ...errors, phone: null });
                      }}
                    />
                    {errors.phone && (
                      <div className="form-error">
                        <AlertCircle size={14} />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="cnt-service">
                      What service do you need?
                    </label>
                    <select
                      id="cnt-service"
                      className="form-select"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">Select service...</option>
                      <option value="Not Sure / I Need Advice">Not Sure / I Need Advice</option>
                      {allServices.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cnt-location">
                      Where is the project?
                    </label>
                    <input
                      id="cnt-location"
                      type="text"
                      className="form-input"
                      placeholder="e.g. Kajiado / Narok / Nairobi"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label" htmlFor="cnt-desc">
                    Tell us briefly what you need
                  </label>
                  <textarea
                    id="cnt-desc"
                    rows={3}
                    className="form-textarea"
                    placeholder="Briefly describe what you want done (depth, land size, domestic or farm use...)"
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%', fontSize: '1rem', fontWeight: 700 }}
                >
                  <MessageCircle size={20} />
                  <span>Prepare WhatsApp Request</span>
                </button>
              </form>
            ) : (
              <div>
                <div
                  style={{
                    backgroundColor: 'var(--brand-cyan-50)',
                    border: '1.5px solid var(--brand-cyan-300)',
                    borderRadius: 'var(--radius-md)',
                    padding: '1rem',
                    marginBottom: '1rem',
                  }}
                >
                  <p style={{ fontWeight: 700, color: 'var(--brand-navy-950)' }}>
                    Your request is ready.
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                    WhatsApp will open with your pre-filled message, and you can press <strong>Send</strong>.
                  </p>
                </div>

                <div style={{ position: 'relative', marginBottom: '1rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                      PREVIEW
                    </span>
                    <button
                      onClick={handleCopy}
                      style={{ fontSize: '0.8rem', color: 'var(--brand-blue-700)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                    >
                      {copied ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <pre
                    style={{
                      backgroundColor: 'var(--bg-primary)',
                      border: '1px solid var(--border-medium)',
                      borderRadius: 'var(--radius-md)',
                      padding: '0.75rem 1rem',
                      fontSize: '0.85rem',
                      whiteSpace: 'pre-wrap',
                      fontFamily: 'inherit',
                      maxHeight: '160px',
                      overflowY: 'auto',
                    }}
                  >
                    {formattedMessage}
                  </pre>
                </div>

                <button
                  onClick={handleOpenWhatsApp}
                  className="btn btn-whatsapp btn-lg"
                  style={{ width: '100%', fontWeight: 700, marginBottom: '0.75rem' }}
                >
                  <Send size={18} />
                  Open WhatsApp to Send
                </button>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <button
                    onClick={() => setReadyToSend(false)}
                    style={{ fontSize: '0.85rem', color: 'var(--brand-blue-700)', textDecoration: 'underline', fontWeight: 600 }}
                  >
                    ← Edit Details
                  </button>
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 600 }}
                  >
                    Or call {companyData.phoneDisplay}
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Schedule Consultation Card */}
          <div
            className="card"
            style={{
              padding: '2rem',
              backgroundColor: 'var(--bg-primary)',
              border: '1.5px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--brand-cyan-50)',
                  color: 'var(--brand-blue-700)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1rem',
                }}
              >
                <Calendar size={22} />
              </div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--brand-navy-950)', marginBottom: '0.5rem' }}>
                Need to Schedule a Meeting or Site Visit?
              </h3>
              <p style={{ fontSize: '0.925rem', color: 'var(--text-body)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                Prefer a structured discussion or on-site consultation? Pick your convenient date, time, and meeting preference (Phone Call, Physical Meeting, or Site Visit).
              </p>
              <div
                style={{
                  backgroundColor: 'var(--bg-secondary)',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  marginBottom: '1.5rem',
                }}
              >
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                  <strong>Important:</strong> Appointments are subject to confirmation by Director David Nkadayo and our engineering team.
                </p>
              </div>
            </div>

            <button
              onClick={onScheduleAppointment}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', justifyContent: 'center', fontWeight: 700 }}
            >
              <Calendar size={18} />
              <span>Schedule an Appointment</span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .contact-layout {
            grid-template-columns: 1.25fr 0.85fr !important;
          }
        }
      `}</style>
    </section>
  );
}
