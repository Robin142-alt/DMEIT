import React, { useState, useEffect } from 'react';
import {
  X,
  Send,
  Phone,
  Mail,
  Copy,
  Check,
  AlertCircle,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { companyData, allServices } from '../data/companyData';
import { formatServiceRequestMessage, buildWhatsAppLink } from '../utils/whatsapp';

export default function ServiceRequestModal({ isOpen, onClose, initialService = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || '',
    location: '',
    description: '',
  });

  const [errors, setErrors] = useState({});
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  useEffect(() => {
    // Reset state when modal opens
    if (isOpen) {
      setIsReadyToSend(false);
      setCopied(false);
      setErrors({});
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please enter your name so our team knows who to address.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number so our team can reach you.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please enter a valid phone number (e.g. 0704 200 502).';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsReadyToSend(true);
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
    <div
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="request-modal-title"
    >
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div
          style={{
            padding: '1.25rem 1.5rem',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: 'var(--bg-secondary)',
          }}
        >
          <div>
            <h3 id="request-modal-title" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>
              {isReadyToSend ? 'Review & Send via WhatsApp' : 'Request a Water Service'}
            </h3>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              {isReadyToSend
                ? 'Your message is prepared below'
                : 'Direct connection with DMEIT technical team'}
            </p>
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '0.5rem',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            aria-label="Close modal"
          >
            <X size={22} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '1.5rem', overflowY: 'auto' }}>
          {!isReadyToSend ? (
            <form onSubmit={handleSubmit}>
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="req-name">
                  Full Name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  id="req-name"
                  type="text"
                  className={`form-input ${errors.name ? 'has-error' : ''}`}
                  placeholder="e.g. John K. Kariuki"
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

              {/* Phone Number */}
              <div className="form-group">
                <label className="form-label" htmlFor="req-phone">
                  Phone Number <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  id="req-phone"
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

              {/* What service do you need? */}
              <div className="form-group">
                <label className="form-label" htmlFor="req-service">
                  What service do you need?
                </label>
                <select
                  id="req-service"
                  className="form-select"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service...</option>
                  <option value="Not Sure / I Need Advice">Not Sure / I Need Advice</option>
                  {allServices.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name}
                    </option>
                  ))}
                </select>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                  If you are unsure, pick "Not Sure / I Need Advice" and we will guide you.
                </p>
              </div>

              {/* Where is the project? */}
              <div className="form-group">
                <label className="form-label" htmlFor="req-location">
                  Where is the project?
                </label>
                <input
                  id="req-location"
                  type="text"
                  className="form-input"
                  placeholder="e.g. Kajiado, Kitengela, Rongai, Narok..."
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              {/* Tell us briefly what you need */}
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="req-description">
                  Tell us briefly what you need
                </label>
                <textarea
                  id="req-description"
                  rows={3}
                  className="form-textarea"
                  placeholder="e.g. I need to drill a borehole on my 2-acre farm for livestock and domestic use. Looking for a survey and drilling estimate."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', fontSize: '1rem', fontWeight: 700 }}
              >
                <MessageCircle size={20} />
                Continue to WhatsApp
              </button>
              <p
                style={{
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  textAlign: 'center',
                  marginTop: '0.65rem',
                }}
              >
                No account or login required. You can review your details on the next step.
              </p>
            </form>
          ) : (
            <div>
              {/* Important Instructions Box */}
              <div
                style={{
                  backgroundColor: 'var(--brand-cyan-50)',
                  border: '1.5px solid var(--brand-cyan-300)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                }}
              >
                <MessageCircle size={24} color="var(--brand-blue-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <p style={{ fontWeight: 700, color: 'var(--brand-navy-950)', fontSize: '0.95rem' }}>
                    Your request is ready.
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                    WhatsApp will open with your pre-filled message, and you can press <strong>Send</strong>.
                  </p>
                </div>
              </div>

              {/* Message Preview Box */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '0.4rem',
                  }}
                >
                  <span style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Message Preview
                  </span>
                  <button
                    onClick={handleCopy}
                    style={{
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      color: 'var(--brand-blue-700)',
                      fontWeight: 600,
                    }}
                  >
                    {copied ? <Check size={14} color="#16A34A" /> : <Copy size={14} />}
                    {copied ? 'Copied to Clipboard' : 'Copy Text'}
                  </button>
                </div>
                <pre
                  style={{
                    backgroundColor: 'var(--bg-secondary)',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-md)',
                    padding: '0.85rem 1rem',
                    fontSize: '0.85rem',
                    color: 'var(--brand-navy-950)',
                    whiteSpace: 'pre-wrap',
                    wordBreak: 'break-word',
                    fontFamily: 'inherit',
                    lineHeight: '1.5',
                    maxHeight: '180px',
                    overflowY: 'auto',
                  }}
                >
                  {formattedMessage}
                </pre>
              </div>

              {/* Main Action: Open WhatsApp */}
              <button
                onClick={handleOpenWhatsApp}
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}
              >
                <Send size={18} />
                Open WhatsApp to Send
              </button>

              {/* Fallback Section */}
              <div
                style={{
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '1rem',
                }}
              >
                <p
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  If WhatsApp does not open automatically, use these direct options:
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '0.65rem',
                  }}
                >
                  {/* Call DMEIT */}
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Phone size={15} />
                    Call DMEIT
                  </a>

                  {/* Copy Phone */}
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(companyData.phoneDisplay);
                      alert('Phone number copied: ' + companyData.phoneDisplay);
                    }}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Copy size={15} />
                    Copy Phone
                  </button>

                  {/* Email DMEIT */}
                  <a
                    href={`mailto:${companyData.email}?subject=Service%20Request%20-%20DMEIT&body=${encodeURIComponent(
                      formattedMessage
                    )}`}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Mail size={15} />
                    Email DMEIT
                  </a>
                </div>

                <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                  <button
                    onClick={() => setIsReadyToSend(false)}
                    style={{
                      fontSize: '0.85rem',
                      color: 'var(--brand-blue-700)',
                      textDecoration: 'underline',
                      fontWeight: 600,
                    }}
                  >
                    ← Edit my details
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
