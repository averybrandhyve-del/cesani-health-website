# Ethos Website Design & Vibe Blueprint

This blueprint captures the core visual identity, design tokens, and components of the [Ethos](https://www.ethos.com/) website to serve as a guide for building a new site with the same look and feel.

---

## 1. Color System
Ethos uses a clean, high-contrast, organic palette consisting of a deep forest green and a vibrant mint green.

| Color Role | Color Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Primary Brand / Text** | Dark Cypress (`--night-100`) | `#00372F` | Hero/body text, footer, dark section backgrounds |
| **Primary Accent / CTA** | Bright Clover (`--bright-clover`) | `#39E598` | High-importance buttons ("Get Quote", "Check Price") |
| **CTA Hover State** | Mint Clover | `#46F1A4` | Hover states on primary buttons |
| **Secondary Brand** | Forest Green | `#005147` | Hover states on dark buttons/elements |
| **Neutral Light** | Off-White (`--night-5`) | `#F4F7F6` | Card backings, testimonial cards, subtle borders |
| **Neutral Pure** | White | `#FFFFFF` | Main background, body text on dark cypress |

---

## 2. Typography
The typography is modern, corporate-casual, and geometric, optimized for clean readability.
- **Font Family:** `Plus Jakarta Sans`, `Inter`, or a similar geometric sans-serif.
- **Heading Styles (`typo-title-xs`):** 
  - Weight: **700 (Bold)**
  - Tracking: Slightly tight (e.g., `-0.02em`)
  - Color: `#00372F` (Dark Cypress) or `#FFFFFF` (on dark backgrounds)
- **Body Text (`body-l-med` / `typo-text-m-medium`):**
  - Weight: **400 (Regular) to 500 (Medium)**
  - Color: `#00372F` (for high readability) or lighter slate colors for secondary information.
- **CTA Typography:** 
  - Weight: **600 (Semibold)**
  - Transform: Normal-case (not uppercase), clear, and direct.

---

## 3. Spacing & Layout System
- **Grid Scale:** Spacings are built on an 8px grid system (`eds2-gap-[12px]` / 1.5rem / 2rem paddings).
- **Page Layouts:**
  - **Header/Nav:** Standard height (approx. 72px) with horizontal menus and dropdown grids.
  - **Split Hero:** Left-aligned copy, badges, and CTA with right-aligned high-quality illustrations or lifestyle photographs.
  - **Feature Grid:** Centered header followed by 3-column benefit cards with rounded corners (`rounded-lg` / `--radii-2`).
  - **Footer:** 5-column, left-aligned layout with extensive compliance text and legal footnotes.

---

## 4. Components & Interactive Vibe
- **Buttons:**
  - Rounded corners (`border-radius: 8px` or `rounded-lg`).
  - Vertically padded (min-height `48px` on mobile, `56px` on desktop).
  - Subtle shadows (`box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1)`) that expand smoothly on hover.
- **Interactive Multi-Step Slider:**
  - Carousels showing the step-by-step process of getting insured with video progression indicators (1/3, 2/3, 3/3).
- **FAQ Accordion:**
  - Simple, borders separating questions, chevron/plus indicators rotating on toggle.
- **Navigation Dropdowns:**
  - Multi-column mega menus that fade or slide down smoothly on click/hover.
