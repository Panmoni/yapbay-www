# Astroship Pro - Design Options & Web Components

Astroship Pro is a premium Astro + Tailwind CSS SaaS website template. The repo is cloned at `/tmp/astroship-pro`.

---

## UI Components

### Button (`src/components/ui/button.astro`)
- Variants via `style` prop: `primary`, `outline`, `inverted`
- Sizes: `sm`, `lg`, `block`
- Uses `<button>` or `<a>` tag depending on props

### Link (`src/components/ui/link.astro`)
- Variants via `style` prop: `primary`, `outline`, `inverted`
- Sizes: `sm`, `lg`, `block`
- External link support with `target="_blank" rel="noopener"`

### Badge (`src/components/ui/badge.astro`)
- Color variants: `indigo`, `purple`, `orange`, etc.
- Used for section labels like "MORE FEATURES", "TWO-COL FEATURES"

### Box (`src/components/ui/box.astro`)
- Base container card component
- Accepts arbitrary `class` for styling
- Snap scrolling support for marquee layouts

### Icons (`src/components/ui/icons/`)
- Uses `astro-icon` package with `@iconify/svelte` or Phosphor/Fluent icon sets
- Icon components: `arrow.astro`, `tick.astro`, `zapier.astro`, etc.
- Loaded via `<Icon name="ph:check-circle-fill" />` syntax

---

## Layout & Structure

### Container (`src/components/container.astro`)
- Max-width wrapper with centered content
- Responsive padding (`px-5` mobile, wider desktop)

### Sectionhead (`src/components/sectionhead.astro`)
- Slot-based: `title` and `desc` slots
- Used to standardize section headers

### Layout (`src/layouts/Layout.astro`)
- Base page layout with `<head>`, meta tags, nav, footer
- Supports Astro View Transitions

---

## Section Components

### Hero (`src/components/hero.astro`)
```
Two-column grid layout (lg:col-span-2 + lg:col-span-3)
├── Gradient blur orbs (indigo-200 + purple-200 radial, absolute positioned -z10)
├── Headline (text-3xl to text-6xl, bold, tracking-tight)
├── Subtext (text-lg, text-slate-600, max-w-lg)
├── Dual buttons (Buy Template + Free Version)
└── Hero image (astro:assets Picture, avif/webp, eager loading)
```

### Logos (`src/components/logos.astro`)
- Static "Trusted by popular startups" section
- Flex-wrapped SVG company logos (Vercel, HubSpot, Mailchimp, Stripe)
- Grayscale with hover color via CSS
- `h-7 md:h-9` sizing

### Features (`src/components/features.astro`)
```
Badge ("MORE FEATURES") + headline + subtext (centered, max-w-3xl)
└── 3-column responsive grid (sm:2 → md:3)
    └── Each feature:
        ├── Icon (bg-indigo-50 rounded-lg grid place-items-center p-2 w-10 h-10)
        ├── Title (font-semibold text-lg)
        └── Description (text-slate-500, leading-relaxed)
        └── Hover: bg-slate-50 border-slate-100
```
Feature list:
- Bring Your Own Framework
- 100% Static HTML, No JS
- On-Demand Components
- Broad Integration
- SEO Enabled
- Community

### FeatureGrid (`src/components/feature-grid.astro`)
```
Badge + headline + subtext
└── Two alternating two-column rows
    Row 1: Image left, text+list+CTA right
    Row 2: Text+list+CTA left, image right (md:order-2)
    └── Each row has:
        ├── Badge ("Simplified Workflows" or "AI-Powered Insights")
        ├── Title (text-2xl)
        ├── Description (text-slate-600)
        ├── Checklist (Icon + text)
        └── CTA row (text-link + "Start 14-day trial" with arrow + "Contact Sales")
```

### Testimonials (`src/components/testimonials.astro`)
- Auto-scrolling marquee animation
- Shadow blur orbs (indigo-100 + purple-100)
- **Review** component (card.astro):
  - Quote text (text-lg md:text-xl, balanced)
  - Avatar (rounded-full w-12 h-12, lazy loaded)
  - Name + title

### Pricing (`src/components/pricing.astro`)
- Single plan card component (type `Plan`)
- Fields: `name`, `price` (string | null), `desc`, `color`, `popular`, `features[]`, `button`
- Colors: `indigo`, `orange`, `purple`
- Popular badge (gradient red-to-orange pill, absolute positioned -top-3)
- Icon checklist using `<Icon name="ph:check-circle-fill" />`

### ComparePricing (`src/components/compare-pricing.astro`)
- Full feature comparison table
- 4 plans: Free, Starter ($49/mo), Business ($149/mo, popular), Enterprise (Custom)
- 20 features rows:
  - Storage, Users, Custom Domains, Email Support, API Access, SSO, Data Export, File Uploads, Analytics, Custom Branding, 24/7 Support, Priority Access, Custom Reporting, Team Collaboration, CRM Integration, White Label, Data Security, Mobile App, Permissions, Backup
- Sticky header row with plan name + price + CTA
- Checkmark icons for boolean values

### FAQ (`src/components/faq.astro`)
- Data-driven from `faq` array (`question` + `answer`)
- `<details>/<summary>` HTML elements
- Animated arrow rotate on open (group-open:rotate-180)
- Fade+slide animation for answer (opacity + -translate-y)
- Max-w-xl centered layout

### CTA (`src/components/cta.astro`)
- Full-width gradient banner (from-indigo-900 to-indigo-700)
- Large headline (text-4xl md:text-6xl)
- Subtext (text-white/70)
- Inverted link button

### ContactForm (`src/components/contactform.astro`)
- Web3Forms API integration
- Fields: Full Name, Email, Message (textarea)
- Native HTML validation with custom error messages
- `was-validated` class toggling
- Loading/success/error states
- `astro:page-load` event for view transitions support

### Navbar (`src/components/navbar/navbar.astro` + `dropdown.astro`)
- Responsive with mobile toggle menu
- Dropdown support via separate component
- Sticky positioning

### Footer (`src/components/footer.astro`)
- Multi-column (Company, Product, Resources)
- Social links
- Copyright and legal links

### Card (`src/components/card.astro`)
- Feature highlight cards
- Slots: `image`, `badge`, `title`, `desc`
- Sizes: default (spans 3-col) or `sm` (3-col grid)
- Colors: `indigo`, `purple`

### Pagination (`src/components/pagination.astro`)
- Numbered page navigation

---

## Design Patterns

### Gradient Orbs
Used in Hero, Testimonials, Features sections:
```astro
<div class="absolute w-96 h-96 blur-2xl -z-10 bg-gradient-radial from-indigo-200 right-0 top-0" />
```

### Marquee Animation
```astro
class="md:motion-safe:animate-marquee group"
// With duplicate div for seamless loop
// Shadow DOM trick for smooth animation
```

### Color System
```typescript
const colors = {
  indigo: "text-indigo-600",
  orange: "text-orange-700",
  purple: "text-purple-600",
};
```

### Badge Colors
```astro
<Badge color="purple">TWO-COL FEATURES</Badge>
<Badge color="indigo">FEATURE</Badge>
```

### Checkmark Icons
```astro
<Icon name="ph:check-circle-fill" class="w-5 h-5" />
```

### Image Optimization
```astro
<Picture
  src={heroImage}
  formats={["avif", "webp"]}
  widths={[240, 540, 720, heroImage.width]}
  loading="eager"
  fetchpriority="high"
/>
```

---

## Page Structure

- `/pages/index.astro` - Homepage
- `/pages/about.astro`
- `/pages/pricing.astro`
- `/pages/contact.astro`
- `/pages/features.astro`
- `/pages/integrations.astro`
- `/pages/blog/[slug].astro` + `/pages/blog/[...page].astro`
- `/pages/404.astro`

---

## Tech Stack

- **Astro** - Static site generator with island architecture
- **Tailwind CSS** - Utility-first styling
- **astro-icon** - Icon library (Phosphor, Fluent sets)
- **astro:assets** - Built-in image optimization (AVIF/WebP)
- **View Transitions** - Astro's built-in transition support
