import React, { useState, useEffect } from 'react';
import {
  X,
  Calendar,
  Clock,
  Phone,
  Mail,
  Copy,
  Check,
  AlertCircle,
  MessageCircle,
  Send,
  Info,
} from 'lucide-react';
import { companyData } from '../data/companyData';
import { formatAppointmentMessage, buildWhatsAppLink } from '../utils/whatsapp';

export default function AppointmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    reason: '',
    date: '',
    time: 'Morning (8:00 AM - 12:00 PM)',
    preference: 'Phone Call',
    notes: '',
  });

  const [errors, setErrors] = useState({});
  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
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
      errs.name = 'Please enter your name.';
    }
    if (!formData.phone.trim()) {
      errs.phone = 'Please enter your phone number so we can reach you.';
    } else if (formData.phone.replace(/[^0-9]/g, '').length < 9) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.reason.trim()) {
      errs.reason = 'Please state what you would like to discuss.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsReadyToSend(true);
  };

  const formattedMessage = formatAppointmentMessage(formData);
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
      aria-labelledby="appointment-modal-title"
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
            <h3 id="appointment-modal-title" style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--brand-navy-950)' }}>
              {isReadyToSend ? 'Confirm Appointment Request' : 'Schedule an Appointment'}
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Book a discussion or site consultation with DMEIT
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
              {/* Important confirmation alert banner */}
              <div
                style={{
                  backgroundColor: 'var(--brand-cyan-50)',
                  border: '1px solid var(--brand-cyan-300)',
                  borderRadius: 'var(--radius-md)',
                  padding: '0.85rem',
                  marginBottom: '1.25rem',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                }}
              >
                <Info size={20} color="var(--brand-blue-700)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.85rem', color: 'var(--brand-navy-950)' }}>
                  <strong>Please note:</strong> Your preferred time will be confirmed by our team once we review your request.
                </p>
              </div>

              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="apt-name">
                  Full Name <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  id="apt-name"
                  type="text"
                  className={`form-input ${errors.name ? 'has-error' : ''}`}
                  placeholder="e.g. David Mutua"
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
                <label className="form-label" htmlFor="apt-phone">
                  Phone Number <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  id="apt-phone"
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

              {/* What would you like to discuss? */}
              <div className="form-group">
                <label className="form-label" htmlFor="apt-reason">
                  What would you like to discuss? <span style={{ color: '#DC2626' }}>*</span>
                </label>
                <input
                  id="apt-reason"
                  type="text"
                  className={`form-input ${errors.reason ? 'has-error' : ''}`}
                  placeholder="e.g. Borehole survey consultation / Solar pump quote"
                  value={formData.reason}
                  onChange={(e) => {
                    setFormData({ ...formData, reason: e.target.value });
                    if (errors.reason) setErrors({ ...errors, reason: null });
                  }}
                />
                {errors.reason && (
                  <div className="form-error">
                    <AlertCircle size={14} />
                    <span>{errors.reason}</span>
                  </div>
                )}
              </div>

              {/* Preferred Date & Time grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <label className="form-label" htmlFor="apt-date">
                    Preferred Date
                  </label>
                  <input
                    id="apt-date"
                    type="date"
                    className="form-input"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div>
                  <label className="form-label" htmlFor="apt-time">
                    Preferred Time
                  </label>
                  <select
                    id="apt-time"
                    className="form-select"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option value="Morning (8:00 AM - 12:00 PM)">Morning (8:00 AM - 12:00 PM)</option>
                    <option value="Afternoon (12:00 PM - 4:00 PM)">Afternoon (12:00 PM - 4:00 PM)</option>
                    <option value="Evening (4:00 PM - 6:30 PM)">Evening (4:00 PM - 6:30 PM)</option>
                    <option value="Anytime">Anytime during working hours</option>
                  </select>
                </div>
              </div>

              {/* Meeting Preference */}
              <div className="form-group">
                <label className="form-label" htmlFor="apt-pref">
                  Meeting Preference
                </label>
                <select
                  id="apt-pref"
                  className="form-select"
                  value={formData.preference}
                  onChange={(e) => setFormData({ ...formData, preference: e.target.value })}
                >
                  <option value="Phone Call">Phone Call</option>
                  <option value="Site Visit">Site Visit on Land</option>
                  <option value="Physical Meeting">Physical Meeting</option>
                  <option value="WhatsApp Discussion">WhatsApp Discussion</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Optional Note */}
              <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                <label className="form-label" htmlFor="apt-notes">
                  Optional Note
                </label>
                <textarea
                  id="apt-notes"
                  rows={2}
                  className="form-textarea"
                  placeholder="Any extra details about your location or availability..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', fontSize: '1rem', fontWeight: 700 }}
              >
                <Calendar size={18} />
                Continue to WhatsApp
              </button>
            </form>
          ) : (
            <div>
              {/* Ready notice */}
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
                    Your appointment request is ready.
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-body)', marginTop: '0.2rem' }}>
                    WhatsApp will open with your details. Press <strong>Send</strong> and our team will confirm your preferred time.
                  </p>
                </div>
              </div>

              {/* Message Preview */}
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
                    Appointment Details
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

              {/* Send Button */}
              <button
                onClick={handleOpenWhatsApp}
                className="btn btn-whatsapp btn-lg"
                style={{ width: '100%', fontSize: '1.05rem', fontWeight: 700, marginBottom: '1.25rem' }}
              >
                <Send size={18} />
                Open WhatsApp to Send
              </button>

              {/* Fallback actions */}
              <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                <p
                  style={{
                    fontSize: '0.825rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    marginBottom: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  Direct Contact Alternatives:
                </p>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
                    gap: '0.65rem',
                  }}
                >
                  <a
                    href={`tel:${companyData.phoneRaw}`}
                    className="btn btn-secondary btn-sm"
                    style={{ justifyContent: 'center' }}
                  >
                    <Phone size={15} />
                    Call DMEIT
                  </a>
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
                  <a
                    href={`mailto:${companyData.email}?subject=Appointment%20Request%20-%20DMEIT&body=${encodeURIComponent(
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
                    ← Edit my appointment details
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
