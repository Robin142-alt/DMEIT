// WhatsApp message generators and URL builders for DMEIT Ventures Ltd
import { companyData } from '../data/companyData';

/**
 * Creates the exact formatted WhatsApp message for a Service Request as requested:
 *
 * Hello DMEIT Ventures,
 *
 * I would like to request a service.
 *
 * Name: [name]
 * Phone: [phone]
 * Service: [service]
 * Location: [location]
 *
 * What I need:
 * [description]
 *
 * Please contact me about the next step.
 *
 * Thank you.
 */
export function formatServiceRequestMessage({ name, phone, service, location, description }) {
  const parts = [
    'Hello DMEIT Ventures,',
    '',
    'I would like to request a service.',
    '',
    `Name: ${name || 'Not provided'}`,
    `Phone: ${phone || 'Not provided'}`,
    `Service: ${service || 'Not specified'}`,
    `Location: ${location || 'Not specified'}`,
    '',
    'What I need:',
    description || 'I would like more information and a quote.',
    '',
    'Please contact me about the next step.',
    '',
    'Thank you.',
  ];

  return parts.join('\n');
}

/**
 * Creates the exact formatted WhatsApp message for Scheduling an Appointment:
 *
 * Hello DMEIT Ventures,
 *
 * I would like to request an appointment.
 *
 * Name: [name]
 * Phone: [phone]
 * Reason: [reason]
 * Preferred Date: [date]
 * Preferred Time: [time]
 * Meeting Preference: [preference]
 *
 * Notes:
 * [notes]
 *
 * Please confirm whether this time is available.
 *
 * Thank you.
 */
export function formatAppointmentMessage({ name, phone, reason, date, time, preference, notes }) {
  const parts = [
    'Hello DMEIT Ventures,',
    '',
    'I would like to request an appointment.',
    '',
    `Name: ${name || 'Not provided'}`,
    `Phone: ${phone || 'Not provided'}`,
    `Reason: ${reason || 'Consultation'}`,
    `Preferred Date: ${date || 'Soon as possible'}`,
    `Preferred Time: ${time || 'Anytime'}`,
    `Meeting Preference: ${preference || 'Phone Call'}`,
  ];

  if (notes && notes.trim().length > 0) {
    parts.push('', 'Notes:', notes.trim());
  }

  parts.push('', 'Please confirm whether this time is available.', '', 'Thank you.');

  return parts.join('\n');
}

/**
 * Generates the wa.me link with proper URL encoding
 */
export function buildWhatsAppLink(messageText) {
  const encodedText = encodeURIComponent(messageText);
  return `https://wa.me/${companyData.whatsappNumber}?text=${encodedText}`;
}
