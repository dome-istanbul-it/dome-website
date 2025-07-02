# DOME Agency Portfolio - Technical Documentation

## Project Overview

**DOME** is a sophisticated scroll-driven single-page portfolio website showcasing an agency's three core services through immersive storytelling and smooth animations.

### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Animation**: Framer Motion
- **Styling**: Tailwind CSS + shadcn/ui
- **Build Tool**: Vite
- **Font**: Futura

---

## Architecture Overview

### Core Components
- **Index.tsx**: Main page component with all sections
- **useDomeScrollAnimation.tsx**: Custom hook managing scroll-based animations
- **DomeLogo.tsx**: SVG logo component

### Animation System
- **Scroll Progress**: Uses Framer Motion's `useScroll` and `useTransform`
- **Timing**: Precise percentage-based scroll triggers
- **Performance**: Passive scroll listeners and optimized rendering

---

## Section Breakdown

### 1. **HERO SECTION** (0% - 10% scroll)
**Purpose**: Brand introduction and logo showcase

#### Elements:
- Large DOME logo (center-positioned)
- Radial darkening overlay effect

#### Animations:
- **Logo Movement**: Transitions from center to top-left header position
- **Opacity Fade**: Logo fades out as it moves to header
- **Radial Darkening**: Progressive darkening from center outward

#### Technical Details:
```typescript
// Animation Variables
heroLogoTranslateY: [0, 0.1] → [0, -400px]
heroLogoOpacity: [0, 0.04, 0.09] → [1, 1, 0]
radialDarkness: [0, 0.03] → [0, 1]
```

#### Background:
- **Image**: Grayscale landscape (`/bg_images/1-hero.webp`)
- **Filter**: `grayscale(100%)`
- **Overlay**: Dynamic radial gradient

---

### 2. **BRAND INTRODUCTION SECTION** (2% - 13.5% scroll)
**Purpose**: Company tagline and mission statement

#### Elements:
- **Title**: "We're DOME" (6xl-8xl font size)
- **Description**: DOME company description
- **Layout**: Center-aligned, fixed positioning

#### Animations:
- **Title**: Fade in with upward movement and scale
- **Description**: Delayed fade in following title
- **Exit**: Both elements fade out before next section

#### Technical Details:
```typescript
// Title Animations
brandTitleOpacity: [0.02, 0.045, 0.12, 0.135] → [0, 1, 1, 0]
brandTitleTranslateY: [0.02, 0.045, 0.12, 0.135] → [40, 0, 0, -40]

// Description Animations
brandDescriptionOpacity: [0.0375, 0.0625, 0.12, 0.135] → [0, 1, 1, 0]
brandDescriptionTranslateY: [0.0375, 0.0625, 0.12, 0.135] → [20, 0, 0, -20]
```

#### Styling:
- **Text Color**: `text-dome-cream`
- **Font Weight**: `font-light`
- **Tracking**: `tracking-wide`

---

### 3. **WISDOME SECTION** (14% - 19% scroll)
**Purpose**: Strategic planning and influencer marketing expertise

#### Elements:
- **Heading**: "Wisdome." (4xl-6xl font size)
- **Description**: Strategic planning and data-driven approach
- **Layout**: Right-aligned content

#### Animations:
- **Content**: Right-side entrance with brightness enhancement
- **Background**: Radial lightening effect from right side
- **Transition**: Smooth exit to Fandome section

#### Technical Details:
```typescript
// Content Animations
wisdomeOpacity: [0.14, 0.16, 0.18, 0.19] → [0, 1, 1, 0]
wisdomeTranslateY: [0.14, 0.16, 0.18, 0.19] → [40, 0, 0, -40]

// Visual Effects
wisdomeRadialLightening: [0.12, 0.18] → [1, 0]
wisdomeBrightness: [0.17, 0.19] → [1, 1.5]
wisdomeToFandomeRadial: [0.185, 0.195] → [0, 1]
```

#### Background:
- **Image**: Strategic planning image (`/bg_images/2-wisdom.webp`)
- **Filter**: `grayscale(100%) brightness(0.6)`
- **Overlay**: `bg-black opacity-70`

#### Specialty:
- Influencer marketing wisdom
- Strategic planning expertise
- Data-oriented approach

---

### 4. **FANDOME SECTION** (19.5% - 23% scroll)
**Purpose**: Social media expertise and trend awareness

#### Elements:
- **Heading**: "Fandome" (4xl-6xl font size)
- **Description**: Social media trends and creative content
- **Layout**: Center-aligned with left margin offset

#### Animations:
- **Content**: Center entrance with radial transition
- **Background**: New background image fade-in
- **Transition**: Circular reveal effect from Wisdome

#### Technical Details:
```typescript
// Content Animations
fandomeOpacity: [0.195, 0.2, 0.22, 0.23] → [0, 1, 1, 0]
fandomeTranslateY: [0.195, 0.2, 0.22, 0.23] → [40, 0, 0, -40]

// Background Transition
thirdImageOpacity: [0.19, 0.195, 0.22, 0.23] → [0, 1, 1, 0]
```

#### Background:
- **Image**: Social media image (`/bg_images/3-fandome.webp`)
- **Filter**: `grayscale(100%) brightness(0.7)`
- **Overlay**: `bg-black opacity-60`

#### Specialty:
- Social media expertise
- Trend awareness and FOMO culture
- Creative content creation

---

### 5. **FREEDOME SECTION** (23% - 27% scroll)
**Purpose**: Video production and content creation services

#### Elements:
- **Heading**: "Freedome." (4xl-6xl font size)
- **Description**: Video production and budget-friendly content
- **Call-to-Action**: "Shoot." (2xl-3xl font size)
- **Layout**: Center-aligned

#### Animations:
- **Content**: Center entrance with circular reveal
- **Background**: Fourth background image transition
- **Transition**: Smooth circular reveal from Fandome

#### Technical Details:
```typescript
// Content Animations
freedomeOpacity: [0.23, 0.235, 0.26, 0.27] → [0, 1, 1, 0]
freedomeTranslateY: [0.23, 0.235, 0.26, 0.27] → [40, 0, 0, -40]

// Background Transition
fourthImageOpacity: [0.225, 0.23, 0.26, 0.27] → [0, 1, 1, 0]
fandomeToFreedomeRadial: [0.225, 0.235] → [0, 1]
```

#### Background:
- **Image**: Production image (`/lovable-uploads/WhatsApp Image 2025-05-23 at 21.27.26.jpeg`)
- **Filter**: `grayscale(100%) brightness(0.7)`
- **Overlay**: `bg-black opacity-30`

#### Specialty:
- Fast video production
- Budget-friendly content creation
- Vertical video expertise

---

### 6. **CONTACT SECTION** (27% - 100% scroll)
**Purpose**: Contact information and final call-to-action

#### Elements:
- **Heading**: "Contact." (4xl-6xl font size)
- **Email Addresses**: 
  - hr@dome.istanbul
  - info@dome.istanbul
- **Layout**: Center-aligned

#### Animations:
- **Content**: Persistent visibility after entrance
- **Background**: Heavy darkening overlay
- **Transition**: Radial darkening from Freedome

#### Technical Details:
```typescript
// Content Animations (Persistent)
contactOpacity: [0.27, 0.275, 1.0, 1.0] → [0, 1, 1, 1]
contactTranslateY: [0.27, 0.275, 1.0, 1.0] → [40, 0, 0, 0]

// Background Transition
freedomeToContactRadial: [0.265, 0.275] → [0, 1]
```

#### Background:
- **Image**: Continues fourth image with heavy darkening
- **Overlay**: Progressive radial darkening to near-black

---

## Buffer Sections

### Transition Sections
- **Fandome to Freedome Buffer** (23% - 25% scroll)
- **Extended Scroll Buffer** (25% - 27% scroll)
- **Freedome Extension** (27% - 29% scroll)
- **Contact Extension** (29% - 31% scroll)
- **Final Buffer** (31% - 33% scroll)
- **End Section** (33% - 100% scroll)

**Purpose**: Provide smooth scroll experience and prevent jarring transitions

---

## Animation Timing System

### Scroll Progress Mapping
```typescript
// Example timing breakdown
0% - 10%    → Hero Section (Logo movement)
2% - 13.5%  → Brand Introduction
14% - 19%   → Wisdome Section
19.5% - 23% → Fandome Section
23% - 27%   → Freedome Section
27% - 100%  → Contact Section (persistent)
```

### Animation Patterns
1. **Entrance**: Fade in + upward movement (translateY: 40 → 0)
2. **Visibility**: Full opacity and stable position
3. **Exit**: Fade out + downward movement (translateY: 0 → -40)
4. **Transitions**: Radial overlays for smooth background changes

---

## Visual Effects System

### Radial Overlays
- **Hero**: Center-outward darkening
- **Wisdome**: Right-side lightening (reverse radial)
- **Fandome**: Circular reveal from right
- **Freedome**: Center circular reveal
- **Contact**: Heavy radial darkening

### Background Images
1. **Hero/Brand**: Landscape with radial darkening
2. **Wisdome**: Strategic planning image
3. **Fandome**: Social media themed image
4. **Freedome/Contact**: Video production image

### Color Scheme
- **Background**: Black (`bg-black`)
- **Text**: Dome cream (`text-dome-cream`)
- **Overlays**: Dynamic black with varying opacity
- **Images**: Grayscale with brightness adjustments

---

## Performance Optimizations

### Scroll Handling
- **Passive Listeners**: `{ passive: true }` for smooth scrolling
- **Efficient Updates**: Boolean state updates for major transitions
- **Framer Motion**: Hardware-accelerated animations

### Rendering
- **Fixed Positioning**: Reduces reflow/repaint
- **Z-Index Layering**: Proper stacking context
- **Pointer Events**: `pointer-events: none` for non-interactive overlays

---

## File Structure

```
src/
├── pages/
│   └── Index.tsx              # Main page component
├── hooks/
│   └── useScrollAnimation.tsx # Animation logic
├── components/
│   └── DomeLogo.tsx          # Logo component
└── lib/
    └── utils.ts              # Utility functions
```

---

## Development Guidelines

### Adding New Sections
1. Define scroll percentage range
2. Create animation variables in hook
3. Add section markup in Index.tsx
4. Update return object in hook
5. Test transition timing

### Modifying Animations
1. Adjust scroll percentage arrays
2. Test on different screen sizes
3. Ensure smooth transitions
4. Verify performance impact

### Background Images
- Use grayscale filter for consistency
- Optimize image sizes for web
- Test loading performance
- Ensure proper aspect ratios

---

## Browser Support

### Minimum Requirements
- **Modern Browsers**: Chrome 88+, Firefox 85+, Safari 14+
- **JavaScript**: ES2020 features
- **CSS**: CSS Grid, Flexbox, Custom Properties

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Scroll Performance**: 60fps
- **Animation Smoothness**: No jank during transitions

---

## Deployment Considerations

### Build Optimization
- Image compression and WebP conversion
- Code splitting for better loading
- CSS purging for smaller bundle size

### CDN Configuration
- Cache static assets (images, fonts)
- Gzip compression for text assets
- Proper cache headers

---

## Maintenance Notes

### Regular Updates
- Monitor scroll performance on new devices
- Test animation timing on different screen sizes
- Update content while maintaining animation timing
- Optimize images as needed

### Known Limitations
- Heavy scroll animations may impact battery life on mobile
- Large background images require optimization
- Complex radial gradients may affect older devices

---

*Last Updated: January 2025*
*Version: 1.0.0* 