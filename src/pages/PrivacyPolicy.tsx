import React from 'react';
import { Link } from 'react-router-dom';
import DomeLogo from '../components/DomeLogo';
import SEOHead from '../components/SEOHead';
import { breadcrumbSchema } from '../data/structuredData';

const PrivacyPolicy = () => {
  const privacyBreadcrumbs = breadcrumbSchema([
    { name: "Home", url: "https://dome.istanbul/" },
    { name: "Privacy Policy", url: "https://dome.istanbul/privacy-policy" }
  ]);

  return (
    <>
      <SEOHead 
        title="Privacy Policy | DOME Creative Agency"
        description="Privacy Policy for DOME Creative Agency. Learn how we collect, use, and protect your personal information in accordance with applicable data protection laws."
        keywords="privacy policy, data protection, GDPR, KVKK, personal data, DOME agency"
        canonicalUrl="https://dome.istanbul/privacy-policy"
        structuredData={privacyBreadcrumbs}
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
            Privacy Policy
          </h1>
          <p className="text-sm text-dome-cream/60 mb-12">
            Last updated: {new Date().toLocaleDateString('en-GB')}
          </p>

          <div className="space-y-8 text-dome-cream/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">1. Information We Collect</h2>
              <p className="mb-4">
                At DOME Media and Communication Inc., we collect information you provide directly to us, 
                such as when you contact us via email or use our services.
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Business information for potential collaborations</li>
                <li>Communication preferences</li>
                <li>Technical information (IP address, browser type, device information)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">2. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Respond to your inquiries and provide customer support</li>
                <li>Communicate about our services and potential collaborations</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">3. Information Sharing</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this privacy policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">4. Data Security</h2>
              <p>
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">5. Your Rights (GDPR)</h2>
              <p className="mb-4">Under GDPR, you have the right to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Access your personal data</li>
                <li>Rectify inaccurate personal data</li>
                <li>Erase your personal data</li>
                <li>Restrict processing of your personal data</li>
                <li>Data portability</li>
                <li>Object to processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-light mb-4 text-dome-cream">6. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about this Privacy Policy, please contact us:
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

export default PrivacyPolicy; 