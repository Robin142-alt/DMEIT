// Comprehensive SEO & Structured Data configuration for DMEIT Ventures Ltd
// Canonical Origin: https://www.dmeitventuresltd.com

export const SITE_URL = 'https://www.dmeitventuresltd.com';
export const SITE_NAME = 'DMEIT Ventures Ltd';
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/images/borehole_drilling_rig_dmeit.jpg`;
export const LOGO_URL = `${SITE_URL}/assets/images/dmeit_logo.jpg`;

export const BUSINESS_INFO = {
  name: 'DMEIT Ventures Ltd',
  alternateName: ['Dmeit Ventures', 'DMEIT', 'DMEIT Kenya', 'DMEIT Water Contractors'],
  director: 'David Nkadayo',
  telephone: '+254704200502',
  telephoneDisplay: '0704 200 502',
  email: 'dmeit256@gmail.com',
  whatsappUrl: 'https://wa.me/254704200502',
  address: {
    streetAddress: 'Nairobi & Kajiado County',
    addressLocality: 'Nairobi',
    addressRegion: 'Nairobi & Kajiado',
    addressCountry: 'KE',
  },
  geo: {
    latitude: -1.2921,
    longitude: 36.8219,
  },
  priceRange: '$$',
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '07:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    'Kenya',
    'Nairobi',
    'Kajiado',
    'Machakos',
    'Kiambu',
    'Nakuru',
    'Rift Valley',
    'Eastern Kenya',
    'Coast Region',
    'Central Kenya',
    'Western Kenya',
  ],
};

export const PAGE_SEO = {
  home: {
    title: 'DMEIT Ventures Ltd — Reliable Water Solutions & Borehole Drilling Kenya',
    description:
      'Professional borehole drilling, hydrogeological ground surveys, solar water pumping systems, elevated steel towers, and HDPE pipelines across Kenya. Call 0704 200 502 or message on WhatsApp.',
    keywords:
      'borehole drilling kenya, borehole drilling contractors kenya, borehole drilling cost in kenya, hydrogeological surveys kenya, solar water pumping kenya, solar borehole pump installation, elevated steel water tank tower, submersible pump installation kenya, cattle watering troughs kenya, sand dam construction kenya, water pan excavation kenya, hdpe pipeline trenching kenya, dmeit ventures ltd, david nkadayo',
    canonical: `${SITE_URL}/`,
    ogImage: `${SITE_URL}/assets/images/borehole_drilling_rig_dmeit.jpg`,
    ogType: 'website',
  },
  services: {
    title: 'Water Infrastructure Services & Borehole Drilling Kenya | DMEIT Ventures Ltd',
    description:
      'End-to-end water solutions in Kenya: scientific ground surveys, heavy rig borehole drilling, solar submersible pumps, elevated steel towers, HDPE pipelines, cattle troughs, and sand dams.',
    keywords:
      'borehole drilling services kenya, hydrogeological survey permit kenya, solar water pumping systems, borehole equipping kenya, booster pumps pedrollo kenya, elevated water storage tower steel, hdpe water pipeline laying, river bridge pipeline crossing, communal water kiosks, reinforced concrete cattle troughs, sand dams kenya, earth water pans',
    canonical: `${SITE_URL}/services`,
    ogImage: `${SITE_URL}/assets/images/solar_pumping_test.jpg`,
    ogType: 'website',
  },
  howItWorks: {
    title: 'How It Works — Step-by-Step Water Project Guide | DMEIT Ventures Ltd',
    description:
      'Simple 3-step process to get dependable groundwater in Kenya: Tell us your project requirements, review your formatted details, and talk directly on WhatsApp with Director David Nkadayo.',
    keywords:
      'borehole drilling process kenya, how to drill borehole kenya, steps to drill borehole in kenya, borehole survey requirements, solar pumping installation guide, dmeit ventures process, water contractor consultation kenya',
    canonical: `${SITE_URL}/how-it-works`,
    ogImage: `${SITE_URL}/assets/images/elevated_steel_tank_tower.jpg`,
    ogType: 'website',
  },
  about: {
    title: 'About DMEIT Ventures Ltd — Kenyan Water Infrastructure Contractors',
    description:
      'Meet DMEIT Ventures Ltd, led by Director David Nkadayo. Hands-on borehole drilling, solar pumping, and water pipeline contractors serving homeowners, farms, and communities across Kenya.',
    keywords:
      'about dmeit ventures, david nkadayo water contractor, borehole drilling companies nairobi kenya, genuine water infrastructure contractors kenya, borehole drilling rig equipment kenya',
    canonical: `${SITE_URL}/about`,
    ogImage: `${SITE_URL}/assets/images/borehole_drilling_rig_dmeit.jpg`,
    ogType: 'website',
  },
  contact: {
    title: 'Contact DMEIT Ventures Ltd — Call, WhatsApp or Request a Quote Kenya',
    description:
      'Contact DMEIT Ventures Ltd. Call 0704 200 502, chat directly on WhatsApp (+254 704 200 502), or schedule a structured consultation and site visit for your water project anywhere in Kenya.',
    keywords:
      'contact dmeit ventures, borehole drilling phone number kenya, david nkadayo contact, borehole quotation kenya, water borehole consultation kenya, water contractor office nairobi kajiado',
    canonical: `${SITE_URL}/contact`,
    ogImage: LOGO_URL,
    ogType: 'website',
  },
  help: {
    title: 'Water Solutions Help & Problem Solver Wizard | DMEIT Ventures Ltd',
    description:
      'Not sure what water solution you need? Use DMEIT’s interactive water problem solver to diagnose borehole requirements, solar pumping, storage towers, or community water needs in Kenya.',
    keywords:
      'borehole troubleshooting kenya, water problems help kenya, choose borehole pump kenya, solar pump sizing kenya, water tank tower consultation, dmeit guided choice wizard',
    canonical: `${SITE_URL}/help`,
    ogImage: `${SITE_URL}/assets/images/concrete_cattle_trough_tower.jpg`,
    ogType: 'website',
  },
};

// Structured Data Generators (JSON-LD)

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness', 'GeneralContractor'],
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_INFO.name,
    alternateName: BUSINESS_INFO.alternateName,
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_URL,
      caption: 'DMEIT Ventures Ltd Logo',
    },
    image: [
      `${SITE_URL}/assets/images/borehole_drilling_rig_dmeit.jpg`,
      `${SITE_URL}/assets/images/solar_pumping_test.jpg`,
      `${SITE_URL}/assets/images/elevated_steel_tank_tower.jpg`,
      `${SITE_URL}/assets/images/concrete_cattle_trough_tower.jpg`,
      `${SITE_URL}/assets/images/sand_dam_water_catchment.jpg`,
    ],
    telephone: BUSINESS_INFO.telephone,
    email: BUSINESS_INFO.email,
    founder: {
      '@type': 'Person',
      name: BUSINESS_INFO.director,
      jobTitle: 'Director',
    },
    description:
      'Professional Kenyan water contractor specializing in hydrogeological ground surveys, heavy rig borehole drilling, solar-powered submersible pumping systems, elevated steel water storage towers, concrete cattle troughs, sand dams, and long-distance HDPE pipelines across Kenya.',
    priceRange: BUSINESS_INFO.priceRange,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_INFO.address.addressLocality,
      addressRegion: BUSINESS_INFO.address.addressRegion,
      addressCountry: BUSINESS_INFO.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_INFO.geo.latitude,
      longitude: BUSINESS_INFO.geo.longitude,
    },
    areaServed: BUSINESS_INFO.areaServed.map((place) => ({
      '@type': 'AdministrativeArea',
      name: place,
    })),
    openingHoursSpecification: BUSINESS_INFO.openingHours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.dayOfWeek,
      opens: h.opens,
      closes: h.closes,
    })),
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BUSINESS_INFO.telephone,
        contactType: 'customer service',
        contactOption: 'TollFree',
        areaServed: 'KE',
        availableLanguage: ['English', 'Swahili'],
      },
    ],
    sameAs: [
      BUSINESS_INFO.whatsappUrl,
    ],
  };
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: 'Reliable Water Solutions & Borehole Drilling Kenya',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    inLanguage: 'en-KE',
  };
}

export function getBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

export function getServicesSchema(servicesList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'DMEIT Ventures Ltd Water Infrastructure Services',
    description: 'Full range of borehole drilling, solar pumping, storage, and civil water works in Kenya',
    itemListElement: servicesList.map((svc, index) => ({
      '@type': 'Service',
      position: index + 1,
      name: svc.name,
      description: svc.fullDesc || svc.shortDesc,
      provider: {
        '@id': `${SITE_URL}/#organization`,
      },
      areaServed: {
        '@type': 'Country',
        name: 'Kenya',
      },
      image: svc.image ? `${SITE_URL}${svc.image}` : DEFAULT_OG_IMAGE,
    })),
  };
}

export function getHowToSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Start a Water Project with DMEIT Ventures Ltd',
    description: 'A simple 3-step process to get clean, reliable water on your land or project in Kenya.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Tell Us What You Need',
        text: 'Pick a service or describe your water project in your own words with site location.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Review & Open WhatsApp',
        text: 'We format your request neatly so you can review details and click to open WhatsApp.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Talk to Director David Nkadayo & Team',
        text: 'Press Send on WhatsApp to discuss your site, get technical advice, and agree on next steps.',
      },
    ],
  };
}

export function getFaqSchema(faqList) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqList.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };
}
