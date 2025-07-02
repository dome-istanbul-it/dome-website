import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  structuredData?: object;
  noIndex?: boolean;
}

const SEOHead = ({
  title = "DOME - Creative Agency | Influencer Marketing & Video Production",
  description = "DOME is a creative agency specializing in influencer marketing, video production, social media management, and strategic planning. From WISDOME to FANDOME to FREEDOME - all under one dome.",
  keywords = "influencer marketing, video production, social media management, creative agency, DOME, Istanbul, Turkey, strategic planning, content creation, brand campaigns",
  ogImage = "/og-image.jpg",
  ogType = "website",
  canonicalUrl,
  structuredData,
  noIndex = false
}: SEOHeadProps) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Improved meta tag management with deduplication
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      const selector = `meta[${attribute}="${name}"]`;
      let element = document.querySelector(selector);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Remove duplicate structured data before adding new ones
    const removeExistingStructuredData = () => {
      const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
      existingScripts.forEach(script => {
        if (script.parentNode === document.head) {
          document.head.removeChild(script);
        }
      });
    };

    // Basic meta tags with enhanced properties for 2024
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ');
    updateMetaTag('generator', 'React, Vite, TypeScript');
    updateMetaTag('theme-color', '#000000');
    updateMetaTag('color-scheme', 'dark light');

    // Open Graph tags with enhanced coverage
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', ogType, true);
    updateMetaTag('og:image', ogImage, true);
    updateMetaTag('og:image:alt', 'DOME Creative Agency - Influencer Marketing & Video Production', true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:site_name', 'DOME Creative Agency', true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:locale:alternate', 'tr_TR', true);

    // Enhanced Twitter Cards for 2024
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', ogImage);
    updateMetaTag('twitter:image:alt', 'DOME Creative Agency - Creative Marketing Solutions');
    updateMetaTag('twitter:site', '@domeistanbul');
    updateMetaTag('twitter:creator', '@domeistanbul');

    // Additional social media meta tags for 2024
    updateMetaTag('pinterest-rich-pin', 'true');
    updateMetaTag('linkedin:owner', 'dome-creative-agency');

    // Canonical URL management
    if (canonicalUrl) {
      let canonicalElement = document.querySelector('link[rel="canonical"]');
      if (canonicalElement) {
        canonicalElement.setAttribute('href', canonicalUrl);
      } else {
        canonicalElement = document.createElement('link');
        canonicalElement.setAttribute('rel', 'canonical');
        canonicalElement.setAttribute('href', canonicalUrl);
        document.head.appendChild(canonicalElement);
      }
      
      // Add OG URL
      updateMetaTag('og:url', canonicalUrl, true);
    }

    // Enhanced robots meta tag for 2024
    const robotsContent = noIndex ? 'noindex, nofollow, noarchive, nosnippet' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1';
    updateMetaTag('robots', robotsContent);
    updateMetaTag('googlebot', robotsContent);
    updateMetaTag('bingbot', robotsContent);

    // Core Web Vitals optimization hints
    updateMetaTag('format-detection', 'telephone=no');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');

    // Enhanced structured data management
    if (structuredData) {
      removeExistingStructuredData();
      
      const structuredDataElement = document.createElement('script');
      structuredDataElement.setAttribute('type', 'application/ld+json');
      structuredDataElement.textContent = JSON.stringify(structuredData, null, 2);
      document.head.appendChild(structuredDataElement);
    }

    // Performance optimization meta tags for 2024
    updateMetaTag('preload', 'true');

  }, [title, description, keywords, ogImage, ogType, canonicalUrl, structuredData, noIndex]);

  return null;
};

export default SEOHead; 