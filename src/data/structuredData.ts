// Enhanced Structured Data schemas for SEO - 2024 Best Practices

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://dome.istanbul/#organization",
  "name": "DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ",
  "alternateName": ["DOME Creative Agency", "DOME Istanbul", "DOME"],
  "description": "Creative agency specializing in influencer marketing, video production, social media management, and strategic planning.",
  "url": "https://dome.istanbul",
  "logo": {
    "@type": "ImageObject",
    "url": "https://dome.istanbul/logos/dome-logo.svg",
    "width": 400,
    "height": 300
  },
  "image": "https://dome.istanbul/og-image.jpg",
  "sameAs": [
    "https://www.instagram.com/domeistanbul",
    "https://www.linkedin.com/company/domeistanbul",
    "https://twitter.com/domeistanbul"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR",
    "addressLocality": "Istanbul",
    "addressRegion": "Istanbul"
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+90",
      "contactType": "customer service",
      "email": "info@dome.istanbul",
      "availableLanguage": ["Turkish", "English"]
    },
    {
      "@type": "ContactPoint",
      "contactType": "human resources",
      "email": "hr@dome.istanbul",
      "availableLanguage": ["Turkish", "English"]
    }
  ],
  "foundingDate": "2020",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "knowsAbout": [
    "Influencer Marketing",
    "Video Production",
    "Social Media Management",
    "Strategic Planning",
    "Content Creation",
    "Brand Campaigns",
    "Digital Marketing"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "Turkey"
  },
  "slogan": "All under one dome"
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService", 
  "@id": "https://dome.istanbul/#business",
  "name": "DOME Creative Agency",
  "description": "Professional creative agency offering influencer marketing, video production, social media management, and strategic planning services.",
  "url": "https://dome.istanbul",
  "telephone": "+90",
  "email": "info@dome.istanbul",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "TR",
    "addressLocality": "Istanbul",
    "addressRegion": "Istanbul"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 41.0082,
    "longitude": 28.9784
  },
  "openingHours": "Mo,Tu,We,Th,Fr 09:00-18:00",
  "priceRange": "$$",
  "currenciesAccepted": "TRY, USD, EUR",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "DOME Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Influencer Marketing",
          "description": "Comprehensive influencer marketing campaigns and strategy"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Video Production",
          "description": "Professional video content creation and production services"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Social Media Management",
          "description": "Complete social media strategy and management services"
        }
      }
    ]
  }
};

// Enhanced Service Schemas with detailed properties
export const serviceSchemas = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dome.istanbul/#wisdome-service",
    "name": "WISDOME - Influencer Marketing",
    "description": "Strategic influencer marketing campaigns that speak fluent creator. Our campaigns don't translate into content — they're born as native.",
    "provider": {
      "@id": "https://dome.istanbul/#organization"
    },
    "serviceType": "Influencer Marketing",
    "category": "Marketing Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "WISDOME Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Influencer Campaign Strategy",
          "description": "Complete influencer marketing strategy and campaign planning"
        },
        {
          "@type": "Offer", 
          "name": "Creator Partnerships",
          "description": "Building authentic partnerships with content creators"
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dome.istanbul/#freedome-service",
    "name": "FREEDOME - Video Production",
    "description": "Fast, flexible, and fearless video production. We create video content at the speed of culture — without breaking your budget.",
    "provider": {
      "@id": "https://dome.istanbul/#organization"
    },
    "serviceType": "Video Production",
    "category": "Creative Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FREEDOME Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Video Content Creation",
          "description": "Professional video production and content creation"
        },
        {
          "@type": "Offer",
          "name": "Creative Direction",
          "description": "Creative direction and video production planning"
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://dome.istanbul/#fandome-service", 
    "name": "FANDOME - Social Media Management",
    "description": "We bring brands closer to the culture. With a sharp eye on trends across YouTube, TikTok, and Instagram, we craft social strategies that build community — not just content.",
    "provider": {
      "@id": "https://dome.istanbul/#organization"
    },
    "serviceType": "Social Media Management",
    "category": "Digital Marketing Services",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "FANDOME Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Social Media Strategy",
          "description": "Comprehensive social media strategy and planning"
        },
        {
          "@type": "Offer",
          "name": "Community Management", 
          "description": "Building and managing social media communities"
        },
        {
          "@type": "Offer",
          "name": "Content Creation",
          "description": "Social media content creation and curation"
        }
      ]
    },
    "areaServed": {
      "@type": "Country",
      "name": "Turkey"
    }
  }
];

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://dome.istanbul/#website",
  "name": "DOME Creative Agency",
  "alternateName": "DOME Istanbul",
  "description": "Creative agency specializing in influencer marketing, video production, social media management, and strategic planning.",
  "url": "https://dome.istanbul",
  "publisher": {
    "@id": "https://dome.istanbul/#organization"
  },
  "potentialAction": [
    {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dome.istanbul/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  ],
  "inLanguage": ["en-US", "tr-TR"],
  "copyrightYear": 2024,
  "copyrightHolder": {
    "@id": "https://dome.istanbul/#organization"
  }
};

// Enhanced Breadcrumb Schema
export const breadcrumbSchema = (items: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});

// Enhanced WebPage Schema
export const webPageSchema = (
  name: string,
  description: string,
  url: string,
  breadcrumbs?: { name: string; url: string }[]
) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${url}#webpage`,
  "name": name,
  "description": description,
  "url": url,
  "publisher": {
    "@id": "https://dome.istanbul/#organization"
  },
  "isPartOf": {
    "@id": "https://dome.istanbul/#website"
  },
  "inLanguage": "en-US",
  "datePublished": "2024-01-01",
  "dateModified": new Date().toISOString(),
  "author": {
    "@id": "https://dome.istanbul/#organization"
  },
  ...(breadcrumbs && {
    "breadcrumb": breadcrumbSchema(breadcrumbs)
  }),
  "mainEntity": {
    "@type": "Organization",
    "@id": "https://dome.istanbul/#organization"
  }
});

// FAQ Schema for services
export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What services does DOME Creative Agency offer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DOME offers three main services: WISDOME (influencer marketing), FREEDOME (video production), and FANDOME (social media management). We provide comprehensive creative solutions from strategic planning to campaign creation."
      }
    },
    {
      "@type": "Question",
      "name": "Where is DOME Creative Agency located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "DOME Creative Agency is located in Istanbul, Turkey. We serve clients both locally and internationally."
      }
    },
    {
      "@type": "Question",
      "name": "How can I contact DOME Creative Agency?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can contact us via email at info@dome.istanbul for general inquiries or hr@dome.istanbul for career opportunities."
      }
    }
  ]
}; 