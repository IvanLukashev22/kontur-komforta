---
name: Architectural Precision & Comfort
colors:
  surface: '#faf9f5'
  surface-dim: '#dbdad6'
  surface-bright: '#faf9f5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f4f0'
  surface-container: '#efeeea'
  surface-container-high: '#e9e8e4'
  surface-container-highest: '#e3e2df'
  on-surface: '#1b1c1a'
  on-surface-variant: '#434748'
  inverse-surface: '#30312e'
  inverse-on-surface: '#f2f1ed'
  outline: '#747879'
  outline-variant: '#c3c7c8'
  surface-tint: '#5a5f60'
  primary: '#111617'
  on-primary: '#ffffff'
  primary-container: '#252a2b'
  on-primary-container: '#8c9192'
  inverse-primary: '#c3c7c8'
  secondary: '#52634b'
  on-secondary: '#ffffff'
  secondary-container: '#d2e6c7'
  on-secondary-container: '#56674f'
  tertiary: '#141613'
  on-tertiary: '#ffffff'
  tertiary-container: '#282a27'
  on-tertiary-container: '#90918d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dfe3e4'
  primary-fixed-dim: '#c3c7c8'
  on-primary-fixed: '#171c1d'
  on-primary-fixed-variant: '#434849'
  secondary-fixed: '#d5e8ca'
  secondary-fixed-dim: '#b9ccaf'
  on-secondary-fixed: '#101f0d'
  on-secondary-fixed-variant: '#3a4b35'
  tertiary-fixed: '#e3e3de'
  tertiary-fixed-dim: '#c6c7c2'
  on-tertiary-fixed: '#1a1c19'
  on-tertiary-fixed-variant: '#464744'
  background: '#faf9f5'
  on-background: '#1b1c1a'
  surface-variant: '#e3e2df'
typography:
  display-hero:
    fontFamily: Manrope
    fontSize: 56px
    fontWeight: '300'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-hero-mobile:
    fontFamily: Manrope
    fontSize: 36px
    fontWeight: '300'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Manrope
    fontSize: 40px
    fontWeight: '400'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '400'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Manrope
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Manrope
    fontSize: 22px
    fontWeight: '500'
    lineHeight: 30px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
    letterSpacing: 0em
  body-lg:
    fontFamily: Manrope
    fontSize: 17px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Manrope
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Manrope
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-technical:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-caps:
    fontFamily: Manrope
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.12em
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 3rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
  space-2xl: 4rem
  space-3xl: 6rem
---

## Brand & Style

The design system embodies modern European architectural precision, quiet luxury, and structural permanence. Built for a full-cycle design, construction, and engineering ecosystem (private residences, premium timber saunas, custom panoramic glazing, and structural aluminum systems), the visual philosophy treats the digital canvas as a blueprint: disciplined, measured, and tactile.

The visual direction combines **Architectural Minimalism** with **Tectonic Structure**:
- Generous, intentional negative space evoking open-floor plans and panoramic volumes.
- Precision detailing: structural 1px grid guides, balanced proportions, and authentic architectural textures.
- Complete elimination of novelty effects, high-saturated accents, and generic rounded elements.
- An authoritative, calm, and trustworthy presence crafted for discerning homeowners, architects, and technical partners.

## Colors

The palette draws directly from honest architectural materials: raw slate, anodized aluminum, patinated pine needles, and textured chalk plaster.

### Hierarchy & Application
- **Primary (`#252A2B` - Deep Graphite):** Serves as primary structural text, sharp structural frames, dominant dark surfaces, and technical callouts. In dark surfaces, it acts as the primary canvas.
- **Secondary (`#66785F` - Coniferous Olive):** A biological architectural accent used sparingly for active states, key interactive indicators, verified engineering badges, and progress milestones. Never used as large background washes.
- **Neutral Canvas (`#F7F6F2` - Architectural Chalk White):** The primary background color for editorial and narrative spaces, offering tactile warmth superior to harsh optical white.
- **Tertiary Border & Structural Gray (`#E8E8E3` - Milled Stone):** Applied for layout dividers, tectonic grid tracks, and structural containment borders.
- **Muted Text Neutral (`#5A6061` - Weathered Zinc):** Provides legible yet understated secondary hierarchy for specifications, dimensions, metadata, and architectural captions.

Alpha-driven borders are explicitly defined: `rgba(37, 42, 43, 0.08)` for light-mode technical lines and `rgba(247, 246, 242, 0.12)` on dark graphite surfaces.

## Typography

Typography prioritizes clarity, structural hierarchy, and engineering balance.

- **Primary Typeface (`Manrope`):** A geometric grotesque with semi-rationalist details. Headings favor light to medium weights with tight negative tracking, echoing architectural drafts and signage. Body copy maintains optimal optical proportions for high readability across dense technical specifications and storytelling.
- **Technical & Metric Accent (`JetBrains Mono`):** Reserved strictly for engineering readouts, cadastral data, square meterage (`m²`), glass thermal conductivity values (`U-values`), product codes, and specification tables.
- **Letter Spacing & Casing:** Uppercase treatment is restricted to `label-caps` and technical micro-metadata with generous tracking (`0.12em`). Large headlines remain strictly sentence-case to preserve literary elegance.

## Layout & Spacing

The layout operates on a strict **12-column architectural grid** on desktop and tablet landscape, collapsing into a **4-column grid** on mobile devices.

### Rhythm and Spatial Rules
- **Desktop (1200px+):** Outer canvas margins are broad (`3rem` to `5rem`), framing content like museum white mats. Column gutters are fixed at `1.5rem`.
- **Tablet (768px - 1199px):** Margins drop to `2rem` with `1rem` gutters; content groups shift from multi-column cards to alternating 2-column bands.
- **Mobile (< 768px):** Margins contract to `1.25rem` to maximize screen estate for architectural photography, with `1rem` gutters.
- **Modular Division:** Layout sections are separated not by heavy background alternating bands, but by razor-thin hairline borders (`1px solid #E8E8E3` or `rgba(37,42,43,0.08)`) and rhythmic vertical negative space (`space-2xl` to `space-3xl`).

## Elevation & Depth

This design system avoids decorative dropshadows, layered blurs, and skeuomorphic bevels. Elevation is achieved through **Tectonic Layering** and **Low-Contrast Structural Outlines**.

### Elevation Hierarchy
1. **Base Surface (Level 0):** Architectural Chalk White (`#F7F6F2`) or Deep Graphite (`#252A2B`).
2. **Structural Panels (Level 1):** Delimited solely by continuous hairline borders (`1px solid #E8E8E3` on light; `1px solid rgba(247, 246, 242, 0.12)` on dark). Depth is perceived through razor-sharp framing, not shadow.
3. **Floating Contextual Drawers & Modals (Level 2):** Elevated using a deliberate, tinted, low-opacity ambient drop:
   `box-shadow: 0 16px 36px -8px rgba(37, 42, 43, 0.07), 0 0 0 1px rgba(37, 42, 43, 0.06)`.
4. **Interactive Hover States:** Elevation is conveyed by sharp micro-translations (`transform: translateY(-2px)`) coupled with a subtle border darkening from `#E8E8E3` to `#252A2B`.

## Shapes

The shape system is strictly **sharp and orthogonal (0px radius)**.

- All structural modules, buttons, form controls, media viewports, and technical dialogs have completely square corners (`border-radius: 0px`).
- This angular language honors steel fabrication, precision glass cutting, stone masonry, and timber joinery. 
- Circular elements are banned except for status indicator dots (e.g., live camera feed indicators, green technical validation points).

## Components

### Buttons
- **Primary:** Background `#252A2B`, text `#F7F6F2`, zero radius. Height 48px or 56px. Hover transitions background to `#66785F` with linear motion.
- **Secondary (Technical Outline):** Background transparent, 1px border `#252A2B`, text `#252A2B`. Hover fills with `#252A2B` and shifts text to `#F7F6F2`.
- **Text Action:** Monospace indicator or `Manrope` with an arrow (`→`), baseline border that expands on hover.

### Cards & Project Showcases
- Sharp rectangular containers bound by 1px `#E8E8E3` border.
- Media aspect ratios strictly locked to architectural standards: `16:9`, `4:3`, or `1:1`.
- Photographic overlays utilize `#252A2B` at 15% opacity on hover. Specifications table embedded with `JetBrains Mono` at the bottom of the card.

### Input Fields & Selectors
- Flat fields without background fills; bottom border or 4-sided 1px stroke `#E8E8E3`.
- Focus state: Border transitions to `#252A2B` or `#66785F` without glow or ring spread.
- Floating technical labels in `label-technical` (`JetBrains Mono`).

### Checkboxes & Radios
- Exact 16x16px squares. Unchecked: 1px border `#5A6061`. Checked: Filled `#252A2B` with sharp white square or checkmark.

### Chips & Badges
- Zero radius, compact padding (`4px 10px`).
- Border 1px `#E8E8E3`, background `#F7F6F2`, text `#5A6061` in `JetBrains Mono` 11px uppercase.
- Accent Badges (e.g., "In Production", "Passivhaus Standard"): 1px border `#66785F`, text `#66785F`, transparent background.

### Architectural Blueprint Specifier (Custom Component)
- Interactive engineering parameter table with alternating column dividers, metric annotations, and synchronized 2D/3D cutaway viewer.