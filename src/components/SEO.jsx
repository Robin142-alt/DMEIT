import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from '../data/seoData';

function setMetaTag(name, content, attribute = 'name') {
  if (!content) return;
  let element = document.querySelector(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setCanonical(url) {
  if (!url) return;
  let element = document.querySelector('link[rel="canonical"]');
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', 'canonical');
    document.head.appendChild(element);
  }
  element.setAttribute('href', url);
}

function setJsonLd(id, data) {
  if (!data) return;
  let element = document.getElementById(id);
  if (!element) {
    element = document.createElement('script');
    element.setAttribute('type', 'application/ld+json');
    element.setAttribute('id', id);
    document.head.appendChild(element);
  }
  element.textContent = JSON.stringify(data);
}

/**
 * Reusable SEO component for dynamically managing meta tags, canonical link,
 * Open Graph / Twitter cards, and JSON-LD structured data per page route.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  schema,
}) {
  const location = useLocation();
  const currentCanonical =
    canonical ||
    `${SITE_URL}${location.pathname === '/' ? '/' : location.pathname.replace(/\/$/, '')}`;

  useEffect(() => {
    // 1. Document title
    if (title) {
      document.title = title;
    }

    // 2. Primary meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('googlebot', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

    // 3. Canonical URL
    setCanonical(currentCanonical);

    // 4. Open Graph tags
    setMetaTag('og:site_name', SITE_NAME, 'property');
    setMetaTag('og:title', title, 'property');
    setMetaTag('og:description', description, 'property');
    setMetaTag('og:url', currentCanonical, 'property');
    setMetaTag('og:type', ogType, 'property');
    setMetaTag('og:image', ogImage, 'property');
    setMetaTag('og:locale', 'en_KE', 'property');

    // 5. Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', title);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImage);

    // 6. Dynamic Page-level Structured Data (JSON-LD)
    if (schema) {
      setJsonLd('dmeit-page-schema', schema);
    }
  }, [title, description, keywords, currentCanonical, ogImage, ogType, schema]);

  return null;
}
