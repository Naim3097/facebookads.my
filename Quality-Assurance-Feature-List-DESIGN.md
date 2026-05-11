---
version: "alpha"
name: "Quality Assurance Feature List"
description: "Quality Assurance Feature Section is designed for highlighting product capabilities and value points. Key features include reusable structure, responsive behavior, and production-ready presentation. It is suitable for component libraries and responsive product interfaces."
colors:
  primary: "#00F0FF"
  secondary: "#FFFFFF"
  tertiary: "#0A45FF"
  neutral: "#FFFFFF"
  background: "#FFFFFF"
  surface: "#FFFFFF"
  text-primary: "#FFFFFF"
  text-secondary: "#FFFFFF"
  border: "#FFFFFF"
  accent: "#00F0FF"
typography:
  display-lg:
    fontFamily: "Inter"
    fontSize: "64px"
    fontWeight: 300
    lineHeight: "67.2px"
    letterSpacing: "-0.025em"
  body-md:
    fontFamily: "Inter"
    fontSize: "14px"
    fontWeight: 300
    lineHeight: "22.4px"
spacing:
  base: "4px"
  sm: "1px"
  md: "4px"
  lg: "6px"
  xl: "8px"
  gap: "6px"
  section-padding: "40px"
components:
  card:
    rounded: "0px"
    padding: "20px"
---

## Overview

- **Composition cues:**
  - Layout: Grid
  - Content Width: Bounded
  - Framing: Glassy
  - Grid: Strong

## Colors

The color system uses dark mode with #00F0FF as the main accent and #FFFFFF as the neutral foundation.

- **Primary (#00F0FF):** Main accent and emphasis color.
- **Secondary (#FFFFFF):** Supporting accent for secondary emphasis.
- **Tertiary (#0A45FF):** Reserved accent for supporting contrast moments.
- **Neutral (#FFFFFF):** Neutral foundation for backgrounds, surfaces, and supporting chrome.

- **Usage:** Background: #FFFFFF; Surface: #FFFFFF; Text Primary: #FFFFFF; Text Secondary: #FFFFFF; Border: #FFFFFF; Accent: #00F0FF

## Typography

Typography relies on Inter across display, body, and utility text.

- **Display (`display-lg`):** Inter, 64px, weight 300, line-height 67.2px, letter-spacing -0.025em.
- **Body (`body-md`):** Inter, 14px, weight 300, line-height 22.4px.

## Layout

Layout follows a grid composition with reusable spacing tokens. Preserve the grid, bounded structural frame before changing ornament or component styling. Use 4px as the base rhythm and let larger gaps step up from that cadence instead of introducing unrelated spacing values.

Treat the page as a grid / bounded composition, and keep that framing stable when adding or remixing sections.

- **Layout type:** Grid
- **Content width:** Bounded
- **Base unit:** 4px
- **Scale:** 1px, 4px, 6px, 8px, 10px, 12px, 24px, 32px
- **Section padding:** 40px, 128px
- **Gaps:** 6px, 24px, 32px, 48px

## Elevation & Depth

Depth is communicated through glass, border contrast, and reusable shadow or blur treatments. Keep those recipes consistent across hero panels, cards, and controls so the page reads as one material system.

Surfaces should read as glass first, with borders, shadows, and blur only reinforcing that material choice.

- **Surface style:** Glass
- **Borders:** 1px #FFFFFF
- **Shadows:** rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px
- **Blur:** 12px

### Techniques
- **Gradient border shell:** Use a thin gradient border shell around the main card. Wrap the surface in an outer shell with 0px padding and a 0px radius. Drive the shell with linear-gradient(rgb(8, 33, 66) 0%, rgb(30, 82, 139) 45%, rgb(110, 159, 197) 100%) so the edge reads like premium depth instead of a flat stroke. Keep the actual stroke understated so the gradient shell remains the hero edge treatment. Inset the real content surface inside the wrapper with a slightly smaller radius so the gradient only appears as a hairline frame.

## Shapes

Shapes rely on a tight radius system anchored by 1px and scaled across cards, buttons, and supporting surfaces. Icon geometry should stay compatible with that soft-to-controlled silhouette.

Use the radius family intentionally: larger surfaces can open up, but controls and badges should stay within the same rounded DNA instead of inventing sharper or pill-only exceptions.

- **Corner radii:** 1px, 9999px
- **Icon treatment:** Linear
- **Icon sets:** Solar

## Components

Reuse the existing card surface recipe for content blocks.

### Cards and Surfaces
- **Card surface:** radius 0px, padding 20px, shadow none.

### Iconography
- **Treatment:** Linear.
- **Sets:** Solar.

## Do's and Don'ts

Use these constraints to keep future generations aligned with the current system instead of drifting into adjacent styles.

### Do
- Do use the primary palette as the main accent for emphasis and action states.
- Do keep spacing aligned to the detected 4px rhythm.
- Do reuse the Glass surface treatment consistently across cards and controls.
- Do keep corner radii within the detected 1px, 9999px family.

### Don't
- Don't introduce extra accent colors outside the core palette roles unless the page needs a new semantic state.
- Don't mix unrelated shadow or blur recipes that break the current depth system.
- Don't exceed the detected minimal motion intensity without a deliberate reason.

## Motion

Motion stays restrained and interface-led across text, layout, and scroll transitions. Timing clusters around 500ms. Easing favors ease and cubic-bezier(0.4. Hover behavior focuses on stroke changes.

**Motion Level:** minimal

**Durations:** 500ms

**Easings:** ease, cubic-bezier(0.4, 0, 0.2, 1)

**Hover Patterns:** stroke

## WebGL

Reconstruct the graphics as a 3d scene surface using webgl, renderer, alpha, antialias, dpr clamp. The effect should read as retro-futurist, technical, and meditative: perspective grid field with green on black and sparse spacing. Build it from grid lines + depth fade so the effect reads clearly. Animate it as slow breathing pulse. Interaction can react to the pointer, but only as a subtle drift. Preserve dom fallback.

**Id:** webgl

**Label:** WebGL

**Stack:** ThreeJS, WebGL

**Insights:**
  - **Scene:**
    - **Value:** 3D scene surface
  - **Effect:**
    - **Value:** Perspective grid field
  - **Primitives:**
    - **Value:** Grid lines + depth fade
  - **Motion:**
    - **Value:** Slow breathing pulse
  - **Interaction:**
    - **Value:** Pointer-reactive drift
  - **Render:**
    - **Value:** WebGL, Renderer, alpha, antialias, DPR clamp

**Techniques:** Perspective grid, Breathing pulse, Pointer parallax, DOM fallback

**Code Evidence:**
  - **JS reference:**
    - **Language:** js
    - **Snippet:**
      ```
      import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 100);
      ```
  - **Renderer setup:**
    - **Language:** js
    - **Snippet:**
      ```
      const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 15);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      ```
  - **Scene setup:**
    - **Language:** js
    - **Snippet:**
      ```
      import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      ```

## ThreeJS

Reconstruct the Three.js layer as a 3d scene surface with layered spatial depth that feels retro-futurist and technical. Use alpha, antialias, dpr clamp renderer settings, perspective, ~30deg fov, plane geometry, meshstandardmaterial + meshbasicmaterial materials, and ambient + directional lighting. Motion should read as ambient scene idle, with poster frame + dom fallback.

**Id:** threejs

**Label:** ThreeJS

**Stack:** ThreeJS, WebGL

**Insights:**
  - **Scene:**
    - **Value:** 3D scene surface with layered spatial depth
  - **Render:**
    - **Value:** alpha, antialias, DPR clamp
  - **Camera:**
    - **Value:** Perspective, ~30deg FOV
  - **Lighting:**
    - **Value:** ambient + directional
  - **Materials:**
    - **Value:** MeshStandardMaterial + MeshBasicMaterial
  - **Geometry:**
    - **Value:** plane
  - **Motion:**
    - **Value:** Ambient scene idle

**Techniques:** PBR shading, Timeline beats, alpha, antialias, DPR clamp, Poster frame + DOM fallback

**Code Evidence:**
  - **JS reference:**
    - **Language:** js
    - **Snippet:**
      ```
      import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();

      const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 100);
      ```
  - **Renderer setup:**
    - **Language:** js
    - **Snippet:**
      ```
      const camera = new THREE.PerspectiveCamera(30, container.clientWidth / container.clientHeight, 0.1, 100);
      camera.position.set(0, 0, 15);

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setSize(container.clientWidth, container.clientHeight);
      container.appendChild(renderer.domElement);
      ```
  - **Scene setup:**
    - **Language:** js
    - **Snippet:**
      ```
      import * as THREE from 'https://unpkg.com/three@0.160.0/build/three.module.js';

      const container = document.getElementById('canvas-container');
      const scene = new THREE.Scene();
      ```
