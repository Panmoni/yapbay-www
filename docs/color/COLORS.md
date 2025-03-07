# YapBay Color System

This document outlines the color system used in the YapBay project. The color system is designed to provide a consistent and accessible user experience across the application.

## Color Palette

### Primary Colors (Deep Navy)
Primary colors are used for main brand elements, primary actions, and key UI components.

- `--primary-900: #1a365d` - Darkest primary, used for deep emphasis
- `--primary-800: #1e4976` - Used for hover states on dark backgrounds
- `--primary-700: #2c5282` - Used for secondary text on light backgrounds
- `--primary-600: #2b6cb0` - Main primary color, used for primary actions and brand elements
- `--primary-500: #3182ce` - Lighter primary, used for highlights and accents

### Secondary Colors (Mint Green)
Secondary colors represent financial growth and are used for secondary actions and success states.

- `--secondary-500: #38b2ac` - Main secondary color, used for secondary actions
- `--secondary-400: #4fd1c5` - Used for hover states and highlights
- `--secondary-300: #81e6d9` - Used for backgrounds and subtle accents

### Neutral Tones
Neutral colors are used for text, backgrounds, borders, and other UI elements.

- `--neutral-900: #1a202c` - Used for primary text on light backgrounds
- `--neutral-800: #2d3748` - Used for headings and important text
- `--neutral-700: #4a5568` - Used for secondary text
- `--neutral-600: #718096` - Used for tertiary text and icons
- `--neutral-500: #a0aec0` - Used for placeholder text and disabled states
- `--neutral-400: #cbd5e0` - Used for borders and dividers
- `--neutral-300: #e2e8f0` - Used for subtle backgrounds and hover states
- `--neutral-200: #edf2f7` - Used for backgrounds of cards and sections
- `--neutral-100: #f7fafc` - Used for page backgrounds

### Accent Colors
Accent colors are used to communicate status and feedback.

- `--success: #48bb78` - Used for success states and positive actions
- `--warning: #ed8936` - Used for warning states and caution actions
- `--error: #f56565` - Used for error states and destructive actions

### Background Colors
Background colors are used for different levels of UI elements.

- `--bg-primary: var(--neutral-100)` - Main page background
- `--bg-secondary: var(--neutral-200)` - Card and section backgrounds
- `--bg-tertiary: var(--neutral-300)` - Highlighted backgrounds

## Usage Guidelines

### Text Colors
- Primary text on light backgrounds: `text-neutral-900`
- Secondary text on light backgrounds: `text-neutral-700`
- Primary text on dark backgrounds: `text-neutral-100`
- Secondary text on dark backgrounds: `text-neutral-300`
- Brand text: `text-primary-600`

### Background Colors
- Page backgrounds: `bg-neutral-100` or `bg-primary`
- Card backgrounds: `bg-neutral-200` or `bg-secondary`
- Highlighted backgrounds: `bg-neutral-300` or `bg-tertiary`

### Button Colors
- Primary buttons: `bg-primary-600 text-neutral-100 hover:bg-primary-800`
- Secondary buttons: `bg-secondary-500 text-neutral-100 hover:bg-secondary-400`
- Outline buttons: `border-primary-600 text-neutral-900 hover:bg-neutral-200`

### Border Colors
- Default borders: `border-neutral-300`
- Emphasized borders: `border-neutral-400`
- Focus rings: `ring-primary-600`

### Status Colors
- Success states: `text-success` or `bg-success`
- Warning states: `text-warning` or `bg-warning`
- Error states: `text-error` or `bg-error`

## Implementation

The color system is implemented using CSS variables and Tailwind CSS. The CSS variables are defined in `src/styles/colors.css` and are used throughout the application.

### CSS Variables
CSS variables are defined in `:root` and can be accessed using `var(--variable-name)`.

### Tailwind CSS
The color system is extended in the Tailwind configuration to allow using the colors with Tailwind's utility classes.

Example:
```css
.bg-primary-600 { background-color: var(--primary-600); }
.text-neutral-900 { color: var(--neutral-900); }
```

### Utility Classes
Additional utility classes are provided in `src/styles/color-utilities.css` for cases where Tailwind's utility classes are not sufficient.

## Accessibility

The color system is designed with accessibility in mind. The following guidelines should be followed:

- Ensure sufficient contrast between text and background colors
- Do not rely solely on color to convey information
- Provide alternative cues for color-blind users
- Test with accessibility tools to ensure compliance with WCAG guidelines

## Maintenance

When adding new colors or modifying existing ones:

1. Update the CSS variables in `src/styles/colors.css`
2. Update the Tailwind configuration in `tailwind.config.cjs`
3. Update this documentation to reflect the changes
4. Test the changes across the application to ensure consistency