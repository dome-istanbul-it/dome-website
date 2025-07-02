import React from 'react';
import { Link } from 'react-router-dom';
import DomeLogo from '../components/DomeLogo';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../data/structuredData';

const CookiePolicy = () => {
  const cookieBreadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://dome.istanbul/" },
    { name: "Cookie Policy", url: "https://dome.istanbul/cookie-policy" }
  ]);

  return (
    <>
      <SEOHead 
        title="Cookie Policy | DOME Creative Agency"
        description="Cookie Policy for DOME Creative Agency. Learn about how we use cookies and similar technologies on our website."
        keywords="cookie policy, cookies, tracking, analytics, DOME agency, website cookies"
        canonicalUrl="https://dome.istanbul/cookie-policy"
        structuredData={cookieBreadcrumbs}
        ogType="article"
      />
      
      <div className="min-h-screen bg-black text-dome-cream font-futura">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4 mx-4 sm:mx-8 md:mx-12 lg:mx-[49px]">
          <Link to="/" className="flex items-center">
            <DomeLogo className="w-16 h-12 sm:w-20 sm:h-15 md:w-24 md:h-18" fill="white" />
          </Link>
          <Link 
            to="/" 
            className="text-dome-cream hover:opacity-70 transition-opacity text-sm sm:text-base"
          >
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-16 px-6 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-dome-cream mb-8 tracking-wide">
            Cookie Policy
          </h1>
          <p className="text-sm text-dome-cream/60 mb-12">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <div className="space-y-8 text-dome-cream/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit 
                our website. They help us provide you with a better experience by remembering your preferences 
                and understanding how you use our site.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">How We Use Cookies</h2>
              <p className="mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
                <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
                <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
                <li><strong>Analytics Cookies:</strong> Provide insights into website usage and performance</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Types of Cookies We Use</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-light mb-2 text-dome-cream">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function and cannot be switched off in our systems.</p>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Basic functionality</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-2 text-dome-cream">Analytics Cookies</h3>
                  <p>These cookies help us understand how visitors use our website.</p>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li>Google Analytics (anonymous data)</li>
                    <li>Page visit tracking</li>
                    <li>User behavior analysis</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-light mb-2 text-dome-cream">Performance Cookies</h3>
                  <p>These cookies collect information about how you use our website to help us improve it.</p>
                  <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                    <li>Loading time measurement</li>
                    <li>Error tracking</li>
                    <li>Performance optimization</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Managing Your Cookie Preferences</h2>
              <p className="mb-4">You can control cookies through:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Browser Settings:</strong> Most browsers allow you to block or delete cookies</li>
                <li><strong>Cookie Banner:</strong> Use our cookie preference center when you first visit</li>
                <li><strong>Opt-out Links:</strong> Use third-party opt-out tools for analytics cookies</li>
              </ul>
              <p className="mt-4 text-dome-cream/70">
                Please note that blocking essential cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Third-Party Cookies</h2>
              <p className="mb-4">We may use the following third-party services that place cookies:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Google Analytics:</strong> Website analytics and performance tracking</li>
                <li><strong>Font Services:</strong> Web font delivery and optimization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Cookie Retention</h2>
              <p>
                Cookies are retained for different periods depending on their type:
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain for a set period (typically 1-2 years)</li>
                <li><strong>Analytics Cookies:</strong> Typically retained for 2 years</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our use of cookies, please contact us:
              </p>
              <div className="space-y-2">
                <p>Email: <a href="mailto:info@dome.istanbul" className="hover:opacity-70 transition-opacity">info@dome.istanbul</a></p>
                <p>Company: DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      </div>
    </>
  );
};

export default CookiePolicy; 