// SEO Utility Functions - 2024 Best Practices

export interface SEOAuditResult {
  passed: boolean;
  message: string;
  priority: 'high' | 'medium' | 'low';
  category: string;
}

export const validateMetaTags = (): SEOAuditResult[] => {
  const results: SEOAuditResult[] = [];
  
  // Check title tag
  const title = document.title;
  if (!title) {
    results.push({
      passed: false,
      message: 'Missing title tag',
      priority: 'high',
      category: 'Meta Tags'
    });
  } else if (title.length > 60) {
    results.push({
      passed: false,
      message: `Title too long (${title.length} chars). Recommended: 50-60 characters`,
      priority: 'medium',
      category: 'Meta Tags'
    });
  } else {
    results.push({
      passed: true,
      message: 'Title tag is optimized',
      priority: 'low',
      category: 'Meta Tags'
    });
  }

  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute('content');
  if (!metaDesc) {
    results.push({
      passed: false,
      message: 'Missing meta description',
      priority: 'high',
      category: 'Meta Tags'
    });
  } else if (metaDesc.length > 160) {
    results.push({
      passed: false,
      message: `Meta description too long (${metaDesc.length} chars). Recommended: 150-160 characters`,
      priority: 'medium',
      category: 'Meta Tags'
    });
  } else {
    results.push({
      passed: true,
      message: 'Meta description is optimized',
      priority: 'low',
      category: 'Meta Tags'
    });
  }

  // Check Open Graph tags
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogDesc = document.querySelector('meta[property="og:description"]');
  const ogImage = document.querySelector('meta[property="og:image"]');

  if (!ogTitle || !ogDesc || !ogImage) {
    results.push({
      passed: false,
      message: 'Missing essential Open Graph tags',
      priority: 'high',
      category: 'Social Media'
    });
  } else {
    results.push({
      passed: true,
      message: 'Open Graph tags are present',
      priority: 'low',
      category: 'Social Media'
    });
  }

  return results;
};

export const validateStructuredData = (): SEOAuditResult[] => {
  const results: SEOAuditResult[] = [];
  
  const structuredDataScripts = document.querySelectorAll('script[type="application/ld+json"]');
  
  if (structuredDataScripts.length === 0) {
    results.push({
      passed: false,
      message: 'No structured data found',
      priority: 'high',
      category: 'Structured Data'
    });
  } else {
    try {
      structuredDataScripts.forEach((script, index) => {
        const data = JSON.parse(script.textContent || '{}');
        if (data['@context'] === 'https://schema.org') {
          results.push({
            passed: true,
            message: `Valid structured data found (${index + 1})`,
            priority: 'low',
            category: 'Structured Data'
          });
        } else {
          results.push({
            passed: false,
            message: `Invalid structured data context (${index + 1})`,
            priority: 'medium',
            category: 'Structured Data'
          });
        }
      });
    } catch (error) {
      results.push({
        passed: false,
        message: 'Malformed structured data JSON',
        priority: 'high',
        category: 'Structured Data'
      });
    }
  }

  return results;
};

export const validateImages = (): SEOAuditResult[] => {
  const results: SEOAuditResult[] = [];
  const images = document.querySelectorAll('img');
  let imagesWithoutAlt = 0;
  let totalImages = images.length;

  images.forEach(img => {
    if (!img.alt || img.alt.trim() === '') {
      imagesWithoutAlt++;
    }
  });

  if (imagesWithoutAlt > 0) {
    results.push({
      passed: false,
      message: `${imagesWithoutAlt} out of ${totalImages} images missing alt text`,
      priority: 'medium',
      category: 'Accessibility & SEO'
    });
  } else if (totalImages > 0) {
    results.push({
      passed: true,
      message: `All ${totalImages} images have alt text`,
      priority: 'low',
      category: 'Accessibility & SEO'
    });
  }

  return results;
};

export const validatePerformance = (): SEOAuditResult[] => {
  const results: SEOAuditResult[] = [];

  // Check for viewport meta tag
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    results.push({
      passed: false,
      message: 'Missing viewport meta tag for mobile optimization',
      priority: 'high',
      category: 'Mobile & Performance'
    });
  } else {
    results.push({
      passed: true,
      message: 'Viewport meta tag is present',
      priority: 'low',
      category: 'Mobile & Performance'
    });
  }

  // Check for HTTPS
  if (location.protocol !== 'https:' && location.hostname !== 'localhost') {
    results.push({
      passed: false,
      message: 'Site is not using HTTPS',
      priority: 'high',
      category: 'Security & SEO'
    });
  } else {
    results.push({
      passed: true,
      message: 'Site is using HTTPS',
      priority: 'low',
      category: 'Security & SEO'
    });
  }

  return results;
};

export const runFullSEOAudit = (): SEOAuditResult[] => {
  return [
    ...validateMetaTags(),
    ...validateStructuredData(),
    ...validateImages(),
    ...validatePerformance()
  ];
};

export const generateSEOReport = (): {
  passed: number;
  failed: number;
  total: number;
  results: SEOAuditResult[];
  score: number;
} => {
  const results = runFullSEOAudit();
  const passed = results.filter(r => r.passed).length;
  const failed = results.filter(r => !r.passed).length;
  const total = results.length;
  const score = Math.round((passed / total) * 100);

  return {
    passed,
    failed,
    total,
    results,
    score
  };
};

// 2024 SEO Checklist
export const seoChecklist2024 = {
  technical: [
    'Core Web Vitals optimization (LCP, FID, CLS)',
    'Mobile-first responsive design',
    'HTTPS implementation',
    'XML sitemap with image extensions',
    'Robots.txt optimization',
    'Canonical URLs for all pages',
    'Structured data implementation',
    'Image optimization (WebP format)',
    'Critical resource preloading'
  ],
  content: [
    'Unique, valuable content for each page',
    'Proper heading hierarchy (H1-H6)',
    'Optimized meta titles and descriptions',
    'Alt text for all images',
    'Internal linking strategy',
    'Content cluster organization',
    'User intent optimization',
    'E-E-A-T signal optimization'
  ],
  social: [
    'Open Graph meta tags',
    'Twitter Card optimization',
    'Social media schema markup',
    'Pinterest Rich Pins',
    'LinkedIn Company Page optimization'
  ],
  analytics: [
    'Google Search Console setup',
    'Google Analytics 4 implementation',
    'Core Web Vitals monitoring',
    'Search performance tracking',
    'Click-through rate analysis'
  ]
}; 