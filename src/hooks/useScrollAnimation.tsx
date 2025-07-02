import { useState, useEffect } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export const useDomeScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isLogoMovedToHeader, setIsLogoMovedToHeader] = useState(false);
  const [showBrandTitle, setShowBrandTitle] = useState(false);
  const [showBrandDescription, setShowBrandDescription] = useState(false);
  const [showAtmosphericOverlay, setShowAtmosphericOverlay] = useState(false);
  const [showWisdomeBackground, setShowWisdomeBackground] = useState(false);

  const { scrollYProgress } = useScroll();

  // ===== HERO SECTION ANIMATIONS =====
  // Logo animations - faster transition to content
  const heroLogoTranslateY = useTransform(scrollYProgress, [0, 0.1], [0, -400]);
  const heroLogoOpacity = useTransform(scrollYProgress, [0, 0.04, 0.09], [1, 1, 0]);
  
  // ===== BRAND INTRODUCTION SECTION ANIMATIONS =====
  // Title animations - much faster fade in and positioning, quicker exit
  const brandTitleOpacity = useTransform(scrollYProgress, [0.02, 0.045, 0.12, 0.135], [0, 1, 1, 0]);
  const brandTitleTranslateY = useTransform(scrollYProgress, [0.02, 0.045, 0.12, 0.135], [40, 0, 0, -40]);
  const brandTitleScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  
  // Paragraph animations - faster fade in following title, quicker exit
  const brandDescriptionOpacity = useTransform(scrollYProgress, [0.0375, 0.0625, 0.12, 0.135], [0, 1, 1, 0]);
  const brandDescriptionTranslateY = useTransform(scrollYProgress, [0.0375, 0.0625, 0.12, 0.135], [20, 0, 0, -20]);
  const brandDescriptionScale = useTransform(scrollYProgress, [0, 1], [1, 1]);
  
  // ===== BACKGROUND TRANSITION ANIMATIONS =====
  // Clean background transitions without black overlays
  const secondImageOpacity = useTransform(scrollYProgress, [0.13, 0.16], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Update boolean states based on scroll position - faster timing
      setIsLogoMovedToHeader(currentScrollY > 10);
      setShowBrandTitle(currentScrollY > window.innerHeight * 0.025);
      setShowBrandDescription(currentScrollY > window.innerHeight * 0.05);
      setShowAtmosphericOverlay(currentScrollY > window.innerHeight * 0.5);
      setShowWisdomeBackground(currentScrollY > window.innerHeight * 2);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ===== WISDOME SECTION ANIMATIONS =====
  // Wisdome section animations - extended visibility by 10% before exit
  const wisdomeOpacity = useTransform(scrollYProgress, [0.14, 0.16, 0.20, 0.21], [0, 1, 1, 0]);
  const wisdomeTranslateY = useTransform(scrollYProgress, [0.14, 0.16, 0.20, 0.21], [40, 0, 0, -40]);
  
  // Brightness effect that increases while scrolling down more - extended timing
  const wisdomeBrightness = useTransform(scrollYProgress, [0.17, 0.21], [1, 1.5]);

  // ===== FANDOME SECTION ANIMATIONS - Actual FREEDOME content =====
  // Fandome section animations - extended visibility
  const fandomeOpacity = useTransform(scrollYProgress, [0.22, 0.225, 0.24, 0.245], [0, 1, 1, 0]);
  const fandomeTranslateY = useTransform(scrollYProgress, [0.22, 0.225, 0.24, 0.245], [40, 0, 0, -40]);
  const thirdImageOpacity = useTransform(scrollYProgress, [0.24, 0.25], [0, 1]);

  // ===== FREEDOME SECTION ANIMATIONS - Actual FANDOME content =====
  // Freedome section animations - extended visibility and later timing
  const freedomeOpacity = useTransform(scrollYProgress, [0.265, 0.27, 0.30, 0.31], [0, 1, 1, 0]);
  const freedomeTranslateY = useTransform(scrollYProgress, [0.265, 0.27, 0.30, 0.31], [40, 0, 0, -40]);
  const fourthImageOpacity = useTransform(scrollYProgress, [0.30, 0.31], [0, 1]);

  // ===== REFERENCES SECTION ANIMATIONS =====
  // References section animations - first section disappears before second appears
  const referencesOpacity = useTransform(scrollYProgress, [0.32, 0.34, 0.51, 0.53], [0, 1, 1, 0]);
  const referencesTranslateY = useTransform(scrollYProgress, [0.32, 0.34, 0.51, 0.53], [40, 0, 0, -40]);

  // ===== CONTACT SECTION ANIMATIONS =====
  // Contact section animations - extended to end of scroll
  const contactOpacity = useTransform(scrollYProgress, [0.69, 0.72, 1.0, 1.0], [0, 1, 1, 1]);
  const contactTranslateY = useTransform(scrollYProgress, [0.69, 0.72, 1.0, 1.0], [40, 0, 0, 0]);

  // ===== SCROLL NAVIGATION ARROWS =====
  // Scroll Up Arrow Animation - appears from Wisdome section, disappears before contact
  const scrollUpArrowOpacity = useTransform(scrollYProgress, [0.14, 0.16, 0.65, 0.69], [0, 1, 1, 0]);
  const scrollUpArrowY = useTransform(scrollYProgress, [0.14, 0.16, 0.65, 0.69], [-20, 0, 0, -20]);
  const scrollUpArrowScale = useTransform(scrollYProgress, [0.14, 0.16, 0.65, 0.69], [0.8, 1, 1, 0.8]);

  return {
    scrollY,
    isLogoMovedToHeader,
    showBrandTitle,
    showBrandDescription,
    showAtmosphericOverlay,
    showWisdomeBackground,
    heroLogoTranslateY,
    heroLogoOpacity,
    brandTitleOpacity,
    brandTitleTranslateY,
    brandTitleScale,
    brandDescriptionOpacity,
    brandDescriptionTranslateY,
    brandDescriptionScale,
    secondImageOpacity,
    wisdomeOpacity,
    wisdomeTranslateY,
    wisdomeBrightness,
    fandomeOpacity,
    fandomeTranslateY,
    thirdImageOpacity,
    freedomeOpacity,
    freedomeTranslateY,
    fourthImageOpacity,
    referencesOpacity,
    referencesTranslateY,
    contactOpacity,
    contactTranslateY,
    scrollUpArrowOpacity,
    scrollUpArrowY,
    scrollUpArrowScale
  };
};
