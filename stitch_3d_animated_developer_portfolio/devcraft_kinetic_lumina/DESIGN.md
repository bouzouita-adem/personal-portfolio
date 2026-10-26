---
name: DevCraft Kinetic Lumina
colors:
  surface: '#0f131c'
  surface-dim: '#0f131c'
  surface-bright: '#353943'
  surface-container-lowest: '#0a0e17'
  surface-container-low: '#181b25'
  surface-container: '#1c1f29'
  surface-container-high: '#262a34'
  surface-container-highest: '#31353f'
  on-surface: '#dfe2ef'
  on-surface-variant: '#bbcac6'
  inverse-surface: '#dfe2ef'
  inverse-on-surface: '#2c303a'
  outline: '#859490'
  outline-variant: '#3c4947'
  surface-tint: '#4fdbc8'
  primary: '#4fdbc8'
  on-primary: '#003731'
  primary-container: '#14b8a6'
  on-primary-container: '#00423b'
  inverse-primary: '#006b5f'
  secondary: '#ffb690'
  on-secondary: '#552100'
  secondary-container: '#ec6a06'
  on-secondary-container: '#4a1c00'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#00b4d2'
  on-tertiary-container: '#00414d'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#71f8e4'
  primary-fixed-dim: '#4fdbc8'
  on-primary-fixed: '#00201c'
  on-primary-fixed-variant: '#005048'
  secondary-fixed: '#ffdbca'
  secondary-fixed-dim: '#ffb690'
  on-secondary-fixed: '#341100'
  on-secondary-fixed-variant: '#783200'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#0f131c'
  on-background: '#dfe2ef'
  surface-variant: '#31353f'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 4.5rem
    fontWeight: '700'
    lineHeight: 5rem
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.75rem
    fontWeight: '700'
    lineHeight: 3.25rem
    letterSpacing: -0.03em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: 4rem
    letterSpacing: -0.035em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: 2.75rem
    letterSpacing: -0.025em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: 2.25rem
    letterSpacing: -0.02em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: 1.75rem
    letterSpacing: -0.015em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: 1.75rem
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: 1.6rem
    letterSpacing: -0.005em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: 1.4rem
  code-mono-md:
    fontFamily: JetBrains Mono
    fontSize: 0.9375rem
    fontWeight: '500'
    lineHeight: 1.5rem
    letterSpacing: -0.01em
  code-mono-sm:
    fontFamily: JetBrains Mono
    fontSize: 0.8125rem
    fontWeight: '500'
    lineHeight: 1.3rem
    letterSpacing: 0.02em
  label-badge:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: 1rem
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
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
---

## Brand & Style

The design system projects an aura of bleeding-edge technical precision, engineering depth, and refined digital craft. Tailored for an elite developer and creative technologist portfolio, the aesthetic marries high-performance software tooling with high-end editorial finesse. It avoids loud cyberpunk clichés in favor of a sleek, dark-mode atmospheric realm: deep obsidian canvases illuminated by directional luminous light cones, precise glass surfaces, and refined neon accents.

The design movement combines **Atmospheric Glassmorphism** with **Technical Futurism**. Translucent panels filter ambient gradient glows, while razor-sharp monospaced metadata pins down the human-scale craft. Interfaces feel alive, responsive, and tactile—grounded by spring-physics micro-interactions, subtle 3D parallax tilts, and kinetic illumination following the cursor.

## Colors

The palette operates on a base of deep space obsidian `#090d16` and midnight coal `#030712`, illuminated by deliberate photonic accents:

- **Primary Teal (`#14b8a6` / `#06b6d4`)**: Acts as the primary energy source. Used for active navigation anchors, primary action triggers, interactive code highlights, and forward-looking status lights.
- **Secondary Warm Orange (`#f97316` / `#fb923c`)**: The complementary contrast flame. Applied deliberately to high-impact callouts, conversion hooks, live experiment indicators, and kinetic hover flares.
- **Surface System**:
  - `canvas-base`: `#030712` (pure deep backdrop with radial mesh overlays)
  - `surface-glass-subtle`: `rgba(255, 255, 255, 0.03)`
  - `surface-glass-default`: `rgba(15, 23, 42, 0.65)` with backdrop blur
  - `surface-glass-raised`: `rgba(30, 41, 59, 0.75)`
- **Border & Rim Lights**:
  - `border-glass-default`: `rgba(255, 255, 255, 0.08)`
  - `border-glass-highlight`: `rgba(255, 255, 255, 0.2)`
  - `border-glow-primary`: `rgba(20, 184, 166, 0.4)`
  - `border-glow-secondary`: `rgba(249, 115, 22, 0.4)`
- **Text & Contrast Ratios**:
  - High emphasis: `#f8fafc` (Slate 50)
  - Medium emphasis: `#94a3b8` (Slate 400)
  - Muted code metadata: `#64748b` (Slate 500)

## Typography

The typographic hierarchy establishes clear structural clarity through a triad pairing:

1. **Space Grotesk (Headlines & Display)**: Provides architectural authority, crisp geometric construction, and subtle futuristic idiosyncrasies. Use tight negative letter spacing (`-0.02em` to `-0.04em`) to create dense, impactful editorial locks.
2. **Inter (Body & Narrative)**: High legibility engine for portfolio case studies, technical explanations, and contextual copy. Retains neutral neutrality without clashing with the headline styling.
3. **JetBrains Mono (Technical Accents & Metadata)**: Anchors development integrity across code snippets, telemetry chips, commit hashes, architecture metrics, and date ranges. Always set in uppercase or strict monospaced tracking for micro-labels.

## Layout & Spacing

The layout model is driven by a flexible **12-column Bento Grid** system engineered to frame heterogeneous engineering artifacts (live demos, code previews, stat cards, visual showcases) inside unified spatial containers.

- **Breakpoints**:
  - `mobile`: `< 768px` (4-column flow, `1rem` gutters, vertical stack)
  - `tablet`: `768px - 1024px` (8-column bento, `1.25rem` gutters)
  - `desktop`: `> 1024px` (12-column bento, max-width `1280px` or `1440px`, `1.5rem` gutters)
- **Spatial Rhythm**:
  - Large sections feature ample vertical breathing room (`space-2xl` to `6rem`) to let background radiance and glass surfaces establish depth.
  - Bento items conform to modular aspect ratios (`1:1`, `2:1`, `2:2`, `3:2`) maintaining consistent internal padding of `space-lg` (`1.5rem`).

## Elevation & Depth

Visual hierarchy does not use opaque grey shadows. Instead, it relies on multi-layer composite lighting, luminous glow diffusions, and physical glass refraction:

- **Level 0 (Atmospheric Floor)**: Dark void (`#030712`) modulated by large (600px - 900px radius) radial gradient orbs of cyan (`rgba(6, 182, 212, 0.12)`) and warm orange (`rgba(249, 115, 22, 0.08)`) with `filter: blur(120px)`.
- **Level 1 (Glass Panes & Bento Canvas)**:
  - Background: `rgba(15, 23, 42, 0.6)`
  - Backdrop Blur: `backdrop-filter: blur(16px) saturate(180%)`
  - Rim Highlight: Top and left border gradient `linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02))`
  - Drop Shadow: `0 10px 30px -10px rgba(0, 0, 0, 0.5)`
- **Level 2 (Interactive Hover / Floating Elements)**:
  - Background: `rgba(30, 41, 59, 0.75)`
  - Accent Inset: `inset 0 0 16px rgba(20, 184, 166, 0.1)`
  - Elevated Shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.7), 0 0 25px -5px rgba(20, 184, 166, 0.25)`
- **Level 3 (Modal / Persistent Floating Dock)**:
  - Ultra-condensed glass pill with `backdrop-filter: blur(24px)`
  - Border: 1px solid `rgba(255, 255, 255, 0.14)`
  - Deep drop shadow: `0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 1px 1px rgba(255, 255, 255, 0.08)`

## Shapes

The design system embraces a **Rounded (Level 2)** geometry:
- Standard interactive elements, code modules, and cards use `0.75rem` to `1rem` radius.
- Bento cards implement `rounded-xl` (`1.5rem`) to maintain elegance at scale.
- Global navigation docks, filter tabs, telemetry status badges, and action buttons employ full pill geometry (`rounded-full` / `9999px`) to create an ergonomic, fluid contrast against the sharp structural grids.

## Components

### Buttons
- **Primary Kinetic Glow Button**: Pill container with solid `#14b8a6` fill or gradient to `#06b6d4`. Deep dark foreground `#030712`, weight 600. Dynamic outer glow on hover (`box-shadow: 0 0 20px rgba(20, 184, 166, 0.45)`). Micro-scale transition: `scale(1.02)` via spring transition.
- **Secondary Ghost Glass Button**: Pill container with `rgba(255, 255, 255, 0.05)` fill, `1px solid rgba(255, 255, 255, 0.12)`, text `#f8fafc`. Hover transitions border to `rgba(249, 115, 22, 0.6)` and background to `rgba(249, 115, 22, 0.1)`.

### Bento Cards & Glow Containers
- Base layout cards with `rounded-xl` (`1.5rem`), translucent background, and a subtle radial mouse-follow illumination effect on hover (`radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(20, 184, 166, 0.15), transparent 80%)`).
- Optional 3D tilt interaction (max 6-8 deg perspective rotation) upon cursor engagement.

### Badges & Code Chips
- JetBrains Mono monospaced micro-containers (`label-badge`).
- Padded with `0.25rem 0.625rem`, border radius `9999px`.
- Status indicators feature an active pulsing dot (green, teal, or warm orange) with infinite CSS beacon animation (`ping`).

### Floating Dock / Pill Navigation
- Centered bottom or top floating navigation bar with full pill border radius (`9999px`).
- Heavy backdrop blur (`blur(20px)`), frosted dark rim, inner shadow, and responsive icon-text pairs with springy active indicators.

### Inputs & Terminal Fields
- Dark translucent fills (`rgba(3, 7, 18, 0.6)`) with `1px solid rgba(255, 255, 255, 0.08)`.
- Focus state brings an immediate transition to Teal border (`#14b8a6`) paired with `box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.18)`.
- Monospaced prefixes (e.g. `>_` or `$` terminal signifiers) set in `JetBrains Mono`.

### Motion & Kinetic Tokens
- **Spring Curves**: `cubic-bezier(0.16, 1, 0.3, 1)` for snappy, organic UI responsiveness.
- **Card Hover Physics**: 240ms duration with subtle lift (`translateY(-4px)`).