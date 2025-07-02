import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import DomeLogo from '../components/DomeLogo';
import SEOHead from '../components/SEOHead';
import { organizationSchema, serviceSchemas, websiteSchema, localBusinessSchema, webPageSchema, faqSchema } from '../data/structuredData';

const Index = () => {
  // Get scroll progress for background transitions
  const { scrollYProgress } = useScroll();
  
  // Background transition animations
  const heroBackgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.3, 0.4], [1, 1, 0, 0]);
  const wisdomeBackgroundOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.4, 0.5], [0, 1, 1, 0]);
  const freedomeBackgroundOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.6, 0.7], [0, 1, 1, 0]);
  const fandomeBackgroundOpacity = useTransform(scrollYProgress, [0.6, 0.7, 0.8, 0.9], [0, 1, 1, 0]);
  const contactBackgroundOpacity = useTransform(scrollYProgress, [0.8, 0.9, 1, 1], [0, 1, 1, 1]);

  // Scroll indicator arrow - stays visible throughout the page
  const scrollArrowOpacity = useTransform(scrollYProgress, [0, 0.95, 1], [1, 1, 0]);

  // Create all the brand logos data and sort alphabetically by name
  const brandLogos = [
    { src: "/brands/abdiibrahim.webp", alt: "Abdi İbrahim", file: "abdiibrahim.webp" },
    { src: "/brands/activision.webp", alt: "Activision", file: "activision.webp" },
    { src: "/brands/Adidas-Logo-PNG-Free-Download.webp", alt: "Adidas", file: "Adidas-Logo-PNG-Free-Download.webp" },
    { src: "/brands/asus-white-logo-png-22.png", alt: "ASUS", file: "asus-white-logo-png-22.png" },
    { src: "/brands/Avon_Logo_2.webp", alt: "Avon", file: "Avon_Logo_2.webp" },
    { src: "/brands/blutv.webp", alt: "BluTV", file: "blutv.webp" },
    { src: "/brands/Boyner_Logo-hazir-scaled.png", alt: "Boyner", file: "Boyner_Logo-hazir-scaled.png" },
    { src: "/brands/BP-Logo-Transparent-Background.png", alt: "BP", file: "BP-Logo-Transparent-Background.png" },
    { src: "/brands/canva.webp", alt: "Canva", file: "canva.webp" },
    { src: "/brands/casper-white.png", alt: "Casper", file: "casper-white.png" },
    { src: "/brands/coke-original-white-logo.webp", alt: "Coca-Cola", file: "coke-original-white-logo.webp" },
    { src: "/brands/Danone-logo-white.png", alt: "Danone", file: "Danone-logo-white.png" },
    { src: "/brands/defacto.webp", alt: "DeFacto", file: "defacto.webp" },
    { src: "/brands/disney-hazir.png", alt: "Disney", file: "disney-hazir.png" },
    { src: "/brands/dogus.webp", alt: "Doğuş", file: "dogus.webp" },
    { src: "/brands/doyuyo-logo.webp", alt: "Doyuyo", file: "doyuyo-logo.webp" },
    { src: "/brands/dreame.webp", alt: "Dreame", file: "dreame.webp" },
    { src: "/brands/dubai-brand-white.png", alt: "Dubai", file: "dubai-brand-white.png" },
    { src: "/brands/eti.webp", alt: "ETI", file: "eti.webp" },
    { src: "/brands/garantibbva.webp", alt: "Garanti BBVA", file: "garantibbva.webp" },
    { src: "/brands/getir-hazir-scaled.webp", alt: "Getir", file: "getir-hazir-scaled.webp" },
    { src: "/brands/hepiyi sigorta.webp", alt: "Hepiyi Sigorta", file: "hepiyi sigorta.webp" },
    { src: "/brands/hepsiburada-hazir.webp", alt: "Hepsiburada", file: "hepsiburada-hazir.webp" },
    { src: "/brands/honor.webp", alt: "Honor", file: "honor.webp" },
    { src: "/brands/hp-hazir.webp", alt: "HP", file: "hp-hazir.webp" },
    { src: "/brands/huawei.webp", alt: "Huawei", file: "huawei.webp" },
    { src: "/brands/hyperx.webp", alt: "HyperX", file: "hyperx.webp" },
    { src: "/brands/infinix-logo.png", alt: "Infinix", file: "infinix-logo.png" },
    { src: "/brands/intel.webp", alt: "Intel", file: "intel.webp" },
    { src: "/brands/j&J.webp", alt: "Johnson & Johnson", file: "j&J.webp" },
    { src: "/brands/koc.webp", alt: "Koç", file: "koc.webp" },
    { src: "/brands/konami.webp", alt: "Konami", file: "konami.webp" },
    { src: "/brands/lcwaikiki.webp", alt: "LC Waikiki", file: "lcwaikiki.webp" },
    { src: "/brands/lego.webp", alt: "LEGO", file: "lego.webp" },
    { src: "/brands/lg.webp", alt: "LG", file: "lg.webp" },
    { src: "/brands/LOGI_BIG.D-3f288e21.png", alt: "Logitech", file: "LOGI_BIG.D-3f288e21.png" },
    { src: "/brands/LOGOS_NP_YVES-ROCHER.webp", alt: "Yves Rocher", file: "LOGOS_NP_YVES-ROCHER.webp" },
    { src: "/brands/loreal-hazir.png", alt: "L'Oréal", file: "loreal-hazir.png" },
    { src: "/brands/mackolik.webp", alt: "Mackolik", file: "mackolik.webp" },
    { src: "/brands/mcdonalds.webp", alt: "McDonald's", file: "mcdonalds.webp" },
    { src: "/brands/mi.webp", alt: "Xiaomi", file: "mi.webp" },
    { src: "/brands/migros.png", alt: "Migros", file: "migros.png" },
    { src: "/brands/msi-hazir.png", alt: "MSI", file: "msi-hazir.png" },
    { src: "/brands/multinet.avif", alt: "Multinet", file: "multinet.avif" },
    { src: "/brands/nesine.webp", alt: "Nesine", file: "nesine.webp" },
    { src: "/brands/nestle-logo-png-white-nestle-waters-logo-png.png", alt: "Nestlé", file: "nestle-logo-png-white-nestle-waters-logo-png.png" },
    { src: "/brands/nike.webp", alt: "Nike", file: "nike.webp" },
    { src: "/brands/nivea.webp", alt: "Nivea", file: "nivea.webp" },
    { src: "/brands/nvidia-hazir-scaled.png", alt: "NVIDIA", file: "nvidia-hazir-scaled.png" },
    { src: "/brands/oppo.webp", alt: "OPPO", file: "oppo.webp" },
    { src: "/brands/ozdilek.webp", alt: "Özdilek", file: "ozdilek.webp" },
    { src: "/brands/paribu.webp", alt: "Paribu", file: "paribu.webp" },
    { src: "/brands/penti.webp", alt: "Penti", file: "penti.webp" },
    { src: "/brands/PepsiCo_logo2_069c1d7116064097ac36ce245ff20462-1024x284.png", alt: "PepsiCo", file: "PepsiCo_logo2_069c1d7116064097ac36ce245ff20462-1024x284.png" },
    { src: "/brands/pg.webp", alt: "Procter & Gamble", file: "pg.webp" },
    { src: "/brands/philips.webp", alt: "Philips", file: "philips.webp" },
    { src: "/brands/pladis-logo-1.png", alt: "Pladis", file: "pladis-logo-1.png" },
    { src: "/brands/PrimaryLogo_HeroBlue-2-1024x378.png", alt: "Hero", file: "PrimaryLogo_HeroBlue-2-1024x378.png" },
    { src: "/brands/realme.webp", alt: "Realme", file: "realme.webp" },
    { src: "/brands/Red-Bull-Logo.webp", alt: "Red Bull", file: "Red-Bull-Logo.webp" },
    { src: "/brands/renault.webp", alt: "Renault", file: "renault.webp" },
    { src: "/brands/roborock.webp", alt: "Roborock", file: "roborock.webp" },
    { src: "/brands/royal_canin_id_logo.svg", alt: "Royal Canin", file: "royal_canin_id_logo.svg" },
    { src: "/brands/samsung-hazir.png", alt: "Samsung", file: "samsung-hazir.png" },
    { src: "/brands/sephora-hazir-scaled.png", alt: "Sephora", file: "sephora-hazir-scaled.png" },
    { src: "/brands/Skechers-logo_Black-01.webp", alt: "Skechers", file: "Skechers-logo_Black-01.webp" },
    { src: "/brands/Spotify_Full_Logo_RGB_White-1024x280.png", alt: "Spotify", file: "Spotify_Full_Logo_RGB_White-1024x280.png" },
    { src: "/brands/tab-hazir.png", alt: "TAB", file: "tab-hazir.png" },
    { src: "/brands/tecno.webp", alt: "Tecno", file: "tecno.webp" },
    { src: "/brands/Tencent_English-logo_Reverse-type-1024x421.png", alt: "Tencent", file: "Tencent_English-logo_Reverse-type-1024x421.png" },
    { src: "/brands/TKC_BIG.D-e9fba9f0-e1741621718937-1024x293.png", alt: "TKC", file: "TKC_BIG.D-e9fba9f0-e1741621718937-1024x293.png" },
    { src: "/brands/togg.webp", alt: "TOGG", file: "togg.webp" },
    { src: "/brands/turnet.webp", alt: "Turnet", file: "turnet.webp" },
    { src: "/brands/Uber-logo-white-png-900x313-1.png", alt: "Uber", file: "Uber-logo-white-png-900x313-1.png" },
    { src: "/brands/ulker-logo-black-and-white.png", alt: "Ülker", file: "ulker-logo-black-and-white.png" },
    { src: "/brands/Unilever-White.png", alt: "Unilever", file: "Unilever-White.png" },
    { src: "/brands/vatan computer.webp", alt: "Vatan Computer", file: "vatan computer.webp" },
    { src: "/brands/vestel.png", alt: "Vestel", file: "vestel.png" },
    { src: "/brands/vodafone-hazir.png", alt: "Vodafone", file: "vodafone-hazir.png" },
    { src: "/brands/yandex.webp", alt: "Yandex", file: "yandex.webp" },
    { src: "/brands/zynga.webp", alt: "Zynga", file: "zynga.webp" }
  ].sort((a, b) => a.alt.localeCompare(b.alt));

  // Mobile-optimized brand selection - key/recognizable brands only (40 brands)
  const mobileBrandLogos = [
    { src: "/brands/abdiibrahim.webp", alt: "Abdi İbrahim", file: "abdiibrahim.webp" },
    { src: "/brands/activision.webp", alt: "Activision", file: "activision.webp" },
    { src: "/brands/Adidas-Logo-PNG-Free-Download.webp", alt: "Adidas", file: "Adidas-Logo-PNG-Free-Download.webp" },
    { src: "/brands/asus-white-logo-png-22.png", alt: "ASUS", file: "asus-white-logo-png-22.png" },
    { src: "/brands/Avon_Logo_2.webp", alt: "Avon", file: "Avon_Logo_2.webp" },
    { src: "/brands/blutv.webp", alt: "BluTV", file: "blutv.webp" },
    { src: "/brands/Boyner_Logo-hazir-scaled.png", alt: "Boyner", file: "Boyner_Logo-hazir-scaled.png" },
    { src: "/brands/canva.webp", alt: "Canva", file: "canva.webp" },
    { src: "/brands/casper-white.png", alt: "Casper", file: "casper-white.png" },
    { src: "/brands/coke-original-white-logo.webp", alt: "Coca-Cola", file: "coke-original-white-logo.webp" },
    { src: "/brands/Danone-logo-white.png", alt: "Danone", file: "Danone-logo-white.png" },
    { src: "/brands/defacto.webp", alt: "DeFacto", file: "defacto.webp" },
    { src: "/brands/disney-hazir.png", alt: "Disney", file: "disney-hazir.png" },
    { src: "/brands/eti.webp", alt: "ETI", file: "eti.webp" },
    { src: "/brands/garantibbva.webp", alt: "Garanti BBVA", file: "garantibbva.webp" },
    { src: "/brands/getir-hazir-scaled.webp", alt: "Getir", file: "getir-hazir-scaled.webp" },
    { src: "/brands/hepsiburada-hazir.webp", alt: "Hepsiburada", file: "hepsiburada-hazir.webp" },
    { src: "/brands/honor.webp", alt: "Honor", file: "honor.webp" },
    { src: "/brands/hp-hazir.webp", alt: "HP", file: "hp-hazir.webp" },
    { src: "/brands/huawei.webp", alt: "Huawei", file: "huawei.webp" },
    { src: "/brands/intel.webp", alt: "Intel", file: "intel.webp" },
    { src: "/brands/j&J.webp", alt: "Johnson & Johnson", file: "j&J.webp" },
    { src: "/brands/koc.webp", alt: "Koç", file: "koc.webp" },
    { src: "/brands/lcwaikiki.webp", alt: "LC Waikiki", file: "lcwaikiki.webp" },
    { src: "/brands/lego.webp", alt: "LEGO", file: "lego.webp" },
    { src: "/brands/lg.webp", alt: "LG", file: "lg.webp" },
    { src: "/brands/LOGI_BIG.D-3f288e21.png", alt: "Logitech", file: "LOGI_BIG.D-3f288e21.png" },
    { src: "/brands/loreal-hazir.png", alt: "L'Oréal", file: "loreal-hazir.png" },
    { src: "/brands/mcdonalds.webp", alt: "McDonald's", file: "mcdonalds.webp" },
    { src: "/brands/mi.webp", alt: "Xiaomi", file: "mi.webp" },
    { src: "/brands/migros.png", alt: "Migros", file: "migros.png" },
    { src: "/brands/msi-hazir.png", alt: "MSI", file: "msi-hazir.png" },
    { src: "/brands/nestle-logo-png-white-nestle-waters-logo-png.png", alt: "Nestlé", file: "nestle-logo-png-white-nestle-waters-logo-png.png" },
    { src: "/brands/nike.webp", alt: "Nike", file: "nike.webp" },
    { src: "/brands/nivea.webp", alt: "Nivea", file: "nivea.webp" },
    { src: "/brands/nvidia-hazir-scaled.png", alt: "NVIDIA", file: "nvidia-hazir-scaled.png" },
    { src: "/brands/penti.webp", alt: "Penti", file: "penti.webp" },
    { src: "/brands/samsung-hazir.png", alt: "Samsung", file: "samsung-hazir.png" },
    { src: "/brands/Spotify_Full_Logo_RGB_White-1024x280.png", alt: "Spotify", file: "Spotify_Full_Logo_RGB_White-1024x280.png" },
    { src: "/brands/vodafone-hazir.png", alt: "Vodafone", file: "vodafone-hazir.png" }
  ].sort((a, b) => a.alt.localeCompare(b.alt));

  // Enhanced SEO structured data with 2024 best practices
  const combinedStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema,
      localBusinessSchema,
      websiteSchema,
      webPageSchema(
        "DOME - Creative Agency | Influencer Marketing & Video Production",
        "DOME is a creative agency specializing in influencer marketing, video production, social media management, and strategic planning. From WISDOME to FANDOME to FREEDOME - all under one dome.",
        "https://dome.istanbul/"
      ),
      faqSchema,
      ...serviceSchemas
    ]
  };

  return (
    <>
      <SEOHead 
        title="DOME - Creative Agency | Influencer Marketing & Video Production"
        description="DOME is a creative agency specializing in influencer marketing, video production, social media management, and strategic planning. From WISDOME to FANDOME to FREEDOME - all under one dome."
        keywords="influencer marketing, video production, social media management, creative agency, DOME, Istanbul, Turkey, strategic planning, content creation, brand campaigns, WISDOME, FANDOME, FREEDOME"
        canonicalUrl="https://dome.istanbul/"
        structuredData={combinedStructuredData}
        ogImage="https://dome.istanbul/og-image.jpg"
      />
      
      <div className="min-h-[100vh] sm:min-h-[110vh] bg-black font-futura">
        {/* ===== BACKGROUND TRANSITION LAYER ===== */}
        <div className="fixed inset-0 w-full h-full z-0">
          {/* Hero Background */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(/bg_images/1-hero.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              filter: 'grayscale(100%)',
              opacity: heroBackgroundOpacity
            }}
          />
          
          {/* Wisdome Background */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(/bg_images/2-wisdom.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              filter: 'grayscale(100%)',
              opacity: wisdomeBackgroundOpacity
            }}
          />
          
          {/* Freedome Background */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(/bg_images/3-fandome.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              filter: 'grayscale(100%)',
              opacity: freedomeBackgroundOpacity
            }}
          />
          
          {/* Fandome & References Background */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(/bg_images/3-fandome.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              filter: 'grayscale(100%)',
              opacity: fandomeBackgroundOpacity
            }}
          />
          
          {/* Contact Background */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            style={{
              backgroundImage: `url(/bg_images/4-contact.webp)`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'scroll',
              filter: 'grayscale(100%)',
              opacity: contactBackgroundOpacity
            }}
          />
        </div>

        {/* ===== FIXED HEADER - Logo Navigation ===== */}
        <header className="fixed top-0 left-0 w-full z-50 opacity-100">
          <div className="flex items-center justify-between p-6 sm:p-5 md:p-6 mx-4 sm:mx-8 md:mx-12 lg:mx-[49px] relative">
            {/* Clean logo without black radial background */}
            <div 
              className="relative z-10 flex items-center" 
              style={{
                filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
              }}
            >
              <DomeLogo className="w-24 h-18 sm:w-24 sm:h-18 md:w-28 md:h-21 lg:w-36 lg:h-28" fill="white" />
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              {/* Instagram Icon */}
              <a 
                href="https://instagram.com/dome.istanbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center w-11 h-11">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-dome-cream group-hover:text-white transition-colors duration-300 flex-shrink-0"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                    }}
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="2"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke="currentColor" strokeWidth="2"/>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </a>

              {/* LinkedIn Icon */}
              <a 
                href="https://linkedin.com/company/dome-istanbul" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 flex items-center justify-center w-11 h-11">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    className="text-dome-cream group-hover:text-white transition-colors duration-300 flex-shrink-0"
                    style={{
                      filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                    }}
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" stroke="currentColor" strokeWidth="2"/>
                    <rect x="2" y="9" width="4" height="12" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </header>

        {/* ===== SCROLL INDICATOR ARROW ===== */}
        <motion.div 
          className="fixed bottom-8 left-0 right-0 z-40 pointer-events-none"
          style={{ opacity: scrollArrowOpacity }}
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="flex flex-col items-center justify-center mx-auto w-fit">
            <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 flex items-center justify-center w-12 h-12">
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                className="text-dome-cream flex-shrink-0"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                }}
              >
                <path 
                  d="M7 10L12 15L17 10" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <p className="text-xs text-dome-cream/80 mt-2 text-center font-light tracking-wide">
              Scroll
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="relative z-10">
          {/* ===== HERO SECTION - Logo Introduction ===== */}
          <section className="min-h-screen flex items-center justify-center relative">
            {/* Logo */}
            <div className="absolute flex items-center justify-center px-4">
              <DomeLogo className="w-40 h-30 sm:w-40 sm:h-30 md:w-48 md:h-36 lg:w-64 lg:h-48 relative z-10" fill="white" />
            </div>
          </section>

          {/* ===== BRAND INTRODUCTION SECTION - "We're DOME" ===== */}
          <section className="min-h-screen relative">
            {/* Text container */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 z-20">
              <div className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto text-center">
                {/* Apple Liquid Glass container */}
                <div 
                  className="liquid-glass rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16"
                  style={{
                    background: 'rgba(0, 0, 0, 0.5)',
                    border: '2px solid transparent',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(8px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(8px) saturate(180%)'
                  }}
                >
                  {/* Main description */}
                  <div className="max-w-full space-y-3 sm:space-y-4 md:space-y-5">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light">
                      From influencer marketing to social media management.    
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light">
                     From video production to public relations.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light">
                      From strategic planning to campaign creation.
                    </p>
                  </div>

                  {/* Tagline */}
                  <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-dome-cream font-light tracking-wide">
                      All under one Dome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== WISDOME SECTION - Strategic Planning & Influencer Marketing ===== */}
          <section className="min-h-screen relative">
            {/* Responsive Wisdome container: column on mobile, row on desktop */}
            <div className="absolute inset-0 flex flex-col lg:flex-row items-center lg:items-center justify-center lg:justify-end px-6 sm:px-8 md:px-12 lg:px-16 z-20">
              {/* Wisdome content: centered on mobile, right on desktop */}
              <div className="max-w-sm sm:max-w-2xl md:max-w-4xl w-full lg:w-auto lg:max-w-lg">
                <div 
                  className="liquid-glass rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 text-center lg:text-right"
                  style={{
                    background: 'rgba(0, 0, 0, 0.08)',
                    border: '2px solid transparent',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(15px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(15px) saturate(180%)'
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-dome-cream mb-6 sm:mb-8 tracking-wide">
                  WISDOME. 
                  </h2>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light">
                    We speak fluent creator.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light">
                    Our influencer marketing campaigns don't "translate" into content — they're born as native.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light">
                    If your brand values wisdom, we're the dome.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== FREEDOME SECTION - Video Production & Content Creation ===== */}
          <section className="min-h-screen relative">
            
            {/* Freedome container */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 z-20">
              <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-center">
                <div 
                  className="liquid-glass rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16"
                  style={{
                    background: 'rgba(0, 0, 0, 0.22)',
                    border: '2px solid transparent',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-dome-cream mb-6 sm:mb-8 tracking-wide">
                  FREEDOME.
                  </h2>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light max-w-full sm:max-w-2xl mx-auto">
                    Our producers and videographers are fast, flexible, and fearless.
                    We create video content at the speed of culture — without breaking your budget.
                    </p>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light max-w-full sm:max-w-2xl mx-auto">
                    If your brand needs creative freedom, we're the dome.
                    </p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <img 
                      src="/logos/dome-production-krem.svg"
                      alt="DOME Production - Video Production Services"
                      className=" w-32 h-24 sm:w-40 sm:h-30 md:w-48 md:h-36 lg:w-56 lg:h-42"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== FANDOME SECTION - Social Media Expertise & Trends ===== */}
          <section className="min-h-screen relative mb-16 md:mb-24 lg:mb-0">
            
            {/* Fandome container */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 z-20">
              <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-center">
                <div 
                  className="liquid-glass rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16"
                  style={{
                    background: 'rgba(0, 0, 0, 0.08)',
                    border: '2px solid transparent',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(10px) saturate(180%)'
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-dome-cream mb-6 sm:mb-8 tracking-wide">
                  FANDOME.
                  </h2>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light max-w-full sm:max-w-3xl mx-auto">
                    We bring brands closer to the culture.
                    <br className="hidden sm:inline" />
                    With a sharp eye on trends across YouTube, TikTok, and Instagram, we craft social strategies that build community — not just content.
                    </p>
                  
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-dome-cream leading-relaxed font-light max-w-full sm:max-w-3xl mx-auto">
                      If your brand wants to grow its fandom, we're the dome.
                    </p>
                  </div>
                  <div className="flex justify-center mt-6">
                    <img 
                      src="/logos/dome-communications-krem.svg"
                      alt="DOME Communications - Social Media Management & PR Services"
                      className="w-32 h-24 sm:w-40 sm:h-30 md:w-48 md:h-36 lg:w-56 lg:h-42"
                      style={{
                        filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1)) drop-shadow(0 1px 2px rgba(0, 0, 0, 0.5))'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== REFERENCES SECTION - Brand Logos ===== */}
          <section className="min-h-[40vh] md:min-h-[50vh] lg:min-h-[80vh] relative mb-64 md:mb-80 lg:mb-0">
            
            {/* References container */}
            <div className="absolute inset-0 flex items-center justify-center flex-col px-4 sm:px-6 md:px-8 lg:px-16 z-20">
              <div className="max-w-full lg:max-w-5xl mx-auto text-center">
                <div 
                  className="liquid-glass rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12"
                  style={{
                    background: 'rgba(0, 0, 0, 0.08)',
                    border: '2px solid transparent',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(15px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(15px) saturate(180%)'
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-dome-cream mb-6 sm:mb-8 md:mb-10 lg:mb-12 tracking-wide">
                    References.
                  </h2>
                  <div className="w-full max-w-7xl mx-auto">
                    {/* Mobile Grid: Show only key brands to prevent overflow */}
                    <div className="md:hidden">
                      <div className="grid grid-cols-5 gap-2 auto-rows-fr">
                        {mobileBrandLogos.map((logo, index) => (
                          <div 
                            key={`mobile-${logo.file}`}
                            className="flex items-center justify-center p-1.5 bg-white/8 rounded-lg backdrop-blur-sm min-h-[40px] border border-white/10"
                          >
                            <img 
                              src={logo.src} 
                              alt={logo.alt} 
                              className="h-6 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity max-w-full" 
                            />
                          </div>
                        ))}
                      </div>
                      <p className="text-xs text-dome-cream/70 text-center mt-4 font-light">
                        and many more...
                      </p>
                    </div>
                    
                    {/* Tablet Grid: Show all logos in one section */}
                    <div className="hidden md:grid md:grid-cols-6 lg:hidden gap-2.5 auto-rows-fr">
                      {brandLogos.map((logo, index) => (
                        <div 
                          key={`tablet-${logo.file}`}
                          className="flex items-center justify-center p-2 bg-white/8 rounded-lg backdrop-blur-sm min-h-[45px] border border-white/10"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="h-7 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity max-w-full" 
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Desktop Grid: All logos in one section */}
                    <div className="hidden lg:grid lg:grid-cols-10 xl:grid-cols-12 gap-3 xl:gap-4 items-center justify-items-center">
                      {brandLogos.map((logo, index) => (
                        <div 
                          key={`desktop-${logo.file}`}
                          className="flex items-center justify-center"
                        >
                          <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className="h-8 lg:h-10 xl:h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" 
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ===== CONTACT SECTION - Final Call-to-Action ===== */}
          <section className="min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh] relative mt-24 md:mt-32 lg:mt-0">
            
            {/* Contact container */}
            <div className="absolute inset-0 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-16 z-20">
              <div className="max-w-xs sm:max-w-2xl md:max-w-4xl mx-auto text-center">
                <div 
                  className="liquid-glass rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16"
                  style={{
                    background: 'rgba(0, 0, 0, 0.22)',
                    border: '2px solid transparent',
                    boxShadow: '0 0 0 1px rgba(255, 255, 255, 0.6), 0 16px 32px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)'
                  }}
                >
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-dome-cream mb-8 sm:mb-10 md:mb-12 tracking-wide">
                    Contact.
                  </h2>
                  <div className="space-y-3 sm:space-y-4 md:space-y-5">
                    <a href="mailto:hr@dome.istanbul" className="block text-lg sm:text-xl md:text-2xl text-dome-cream leading-relaxed font-light hover:opacity-80 hover:scale-105 transition-all duration-300">
                      hr@dome.istanbul
                    </a>
                    <a href="mailto:info@dome.istanbul" className="block text-lg sm:text-xl md:text-2xl text-dome-cream leading-relaxed font-light hover:opacity-80 hover:scale-105 transition-all duration-300">
                      info@dome.istanbul
                    </a>
                  </div>
                  {/* Company Name */}
                  <div className="mt-8 sm:mt-10 md:mt-12">
                    <p className="text-sm sm:text-base md:text-lg text-dome-cream leading-relaxed font-light opacity-70 text-center mb-6">
                      DOME MEDYA VE İLETİŞİM ANONİM ŞİRKETİ
                    </p>
                    {/* Legal Links */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
                      <Link 
                        to="/privacy-policy" 
                        className="text-dome-cream/60 hover:text-dome-cream/80 transition-colors underline decoration-1 underline-offset-2"
                      >
                        Privacy Policy
                      </Link>
                      <Link 
                        to="/cookie-policy" 
                        className="text-dome-cream/60 hover:text-dome-cream/80 transition-colors underline decoration-1 underline-offset-2"
                      >
                        Cookie Policy
                      </Link>
                      <Link 
                        to="/kvkk-clarification" 
                        className="text-dome-cream/60 hover:text-dome-cream/80 transition-colors underline decoration-1 underline-offset-2"
                      >
                        KVKK Clarification Text
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Index;
