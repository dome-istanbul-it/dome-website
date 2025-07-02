import { useEffect } from 'react';

interface SEOConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Update document title
    if (config.title) {
      document.title = config.title;
    }

    // Update meta description
    if (config.description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', config.description);
      }
    }

    // Update canonical URL
    if (config.canonicalUrl) {
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', config.canonicalUrl);
    }

    // Update Open Graph image
    if (config.ogImage) {
      const ogImage = document.querySelector('meta[property="og:image"]');
      if (ogImage) {
        ogImage.setAttribute('content', config.ogImage);
      }
    }

    // Update robots meta tag
    const robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      const robotsContent = config.noIndex ? 'noindex, nofollow' : 'index, follow';
      robotsMeta.setAttribute('content', robotsContent);
    }
  }, [config]);
};

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title: "DOME - Creative Agency | Influencer Marketing & Video Production",
    description: "DOME is a creative agency specializing in influencer marketing, video production, social media management, and strategic planning. From WISDOME to FANDOME to FREEDOME - all under one dome.",
    keywords: "influencer marketing, video production, social media management, creative agency, DOME, Istanbul, Turkey, strategic planning, content creation, brand campaigns, WISDOME, FANDOME, FREEDOME",
    canonicalUrl: "https://dome.istanbul/",
    ogImage: "https://dome.istanbul/og-image.jpg"
  },
  privacyPolicy: {
    title: "Privacy Policy | DOME Creative Agency",
    description: "Privacy Policy for DOME Creative Agency. Learn how we collect, use, and protect your personal information in accordance with applicable data protection laws.",
    keywords: "privacy policy, data protection, GDPR, KVKK, personal data, DOME agency",
    canonicalUrl: "https://dome.istanbul/privacy-policy"
  },
  cookiePolicy: {
    title: "Cookie Policy | DOME Creative Agency", 
    description: "Cookie Policy for DOME Creative Agency. Learn about how we use cookies and similar technologies on our website.",
    keywords: "cookie policy, cookies, tracking, analytics, DOME agency, website cookies",
    canonicalUrl: "https://dome.istanbul/cookie-policy"
  },
  kvkkClarification: {
    title: "KVKK Clarification Text | DOME Creative Agency",
    description: "KVKK (Personal Data Protection Law) clarification text for DOME Creative Agency. Information about personal data processing in accordance with Turkish data protection law.",
    keywords: "KVKK, personal data protection, data processing, Turkish law, DOME agency, data privacy",
    canonicalUrl: "https://dome.istanbul/kvkk-clarification"
  },
  notFound: {
    title: "Page Not Found | DOME Creative Agency",
    description: "The page you are looking for could not be found. Return to DOME Creative Agency homepage.",
    noIndex: true
  }
}; 