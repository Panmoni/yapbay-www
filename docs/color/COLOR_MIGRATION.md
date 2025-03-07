# Color Scheme Migration Guide

This document provides guidance on migrating from the old color scheme to the new color scheme defined in `docs/color_scheme.css`.

## Changes Made

1. **CSS Variables**
   - Created `src/styles/colors.css` with CSS variables from `docs/color_scheme.css`
   - Created `src/styles/color-utilities.css` with utility classes for the new color scheme

2. **Tailwind Configuration**
   - Extended Tailwind configuration in `tailwind.config.cjs` to use our custom colors

3. **Global Styles**
   - Updated `src/layouts/Layout.astro` to import the new CSS files

4. **Component Updates**
   - Updated `src/components/ui/button.astro` to use the new color scheme
   - Updated `src/components/ui/link.astro` to use the new color scheme
   - Updated `src/components/navbar/navbar.astro` to use the new color scheme
   - Updated `src/components/navbar/dropdown.astro` to use the new color scheme
   - Updated `src/components/ui/badge.astro` to use the new color scheme
   - Updated `src/components/card.astro` to use the new color scheme

## Color Mapping

The following table shows how the old colors map to the new colors:

| Old Color | New Color |
|-----------|-----------|
| indigo-900 | primary-900 |
| indigo-800 | primary-800 |
| indigo-700 | primary-700 |
| indigo-600 | primary-600 |
| indigo-500 | primary-500 |
| gray-900 | neutral-900 |
| gray-800 | neutral-800 |
| gray-700 | neutral-700 |
| gray-600 | neutral-600 |
| gray-500 | neutral-500 |
| gray-400 | neutral-400 |
| gray-300 | neutral-300 |
| gray-200 | neutral-200 |
| gray-100 | neutral-100 |
| gray-50 | neutral-200 |
| slate-900 | neutral-900 |
| slate-800 | neutral-800 |
| slate-700 | neutral-700 |
| slate-600 | neutral-600 |
| slate-500 | neutral-500 |
| slate-400 | neutral-400 |
| slate-300 | neutral-300 |
| slate-200 | neutral-200 |
| slate-100 | neutral-100 |
| slate-50 | neutral-200 |

## Remaining Tasks

The following files still need to be updated to use the new color scheme:

1. **UI Components**
   - `src/components/ui/box.astro`
   - Other UI components that use hardcoded colors

2. **Page Components**
   - `src/components/footer.astro`
   - `src/components/hero.astro`
   - `src/components/features.astro`
   - `src/components/feature-alt.astro`
   - `src/components/feature-grid.astro`
   - `src/components/testimonials.astro`
   - `src/components/pricing.astro`
   - `src/components/compare-pricing.astro`
   - `src/components/contactform.astro`
   - `src/components/logos.astro`
   - `src/components/review.astro`
   - `src/components/sectionhead.astro`

3. **Pages**
   - `src/pages/about.astro`
   - `src/pages/contact.astro`
   - `src/pages/features.astro`
   - `src/pages/integrations.astro`
   - `src/pages/pricing.astro`
   - `src/pages/blog/[slug].astro`
   - `src/pages/blog/[...page].astro`
   - `src/pages/404.astro`

## How to Update Additional Files

To update additional files, follow these steps:

1. **Identify Color References**
   - Use the search_files tool to find color references in the file
   - Look for classes like `text-indigo-*`, `bg-gray-*`, `border-slate-*`, etc.

2. **Map to New Colors**
   - Use the color mapping table above to map old colors to new colors
   - Replace hardcoded color references with the new color scheme

3. **Test the Changes**
   - Verify that the updated components look correct
   - Check for any missed color references

## Best Practices

1. **Use CSS Variables**
   - Prefer using CSS variables over hardcoded colors
   - Example: `var(--primary-600)` instead of `#2b6cb0`

2. **Use Semantic Colors**
   - Use colors based on their purpose, not their appearance
   - Example: `text-primary-600` for primary actions, `text-neutral-900` for main text

3. **Maintain Consistency**
   - Use the same color for the same purpose throughout the application
   - Follow the usage guidelines in `COLORS.md`

4. **Consider Accessibility**
   - Ensure sufficient contrast between text and background colors
   - Test with accessibility tools to ensure compliance with WCAG guidelines