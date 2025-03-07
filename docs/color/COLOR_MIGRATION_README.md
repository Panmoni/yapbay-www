# Color Migration Script

This script automates the process of migrating from the old color scheme to the new color scheme as defined in the Color Scheme Migration Guide (`docs/COLOR_MIGRATION.md`).

## Purpose

The script scans through the remaining files that need to be updated and replaces old color references (indigo, gray, slate) with the new color scheme (primary, neutral) according to the mapping table in the migration guide.

## Features

- Automatically identifies and replaces color references in Tailwind CSS classes
- Handles various CSS utility prefixes (text, bg, border, etc.)
- Supports state variants (hover, focus, active, etc.)
- Provides detailed reporting of changes
- Includes a dry-run mode to preview changes without applying them

## Prerequisites

- Node.js (v14 or later recommended)
- Project using ES modules (has "type": "module" in package.json)

## Usage

You can use the provided shell script to run the migration:

```bash
# Preview changes without applying them (dry run)
./run-color-migration.sh --dry-run

# Apply changes
./run-color-migration.sh

# Show detailed information about changes
./run-color-migration.sh --verbose

# Run tests to verify the script works correctly
./run-color-migration.sh --test

# Verify that no old color references remain in the codebase
./run-color-migration.sh --verify

# Verify with detailed information about any findings
./run-color-migration.sh --verify-verbose

# Show help
./run-color-migration.sh --help
```

Or run the scripts directly:

```bash
# Preview changes without applying them (dry run)
node color-migration.mjs --dry-run

# Apply changes
node color-migration.mjs

# Show detailed information about changes
node color-migration.mjs --verbose

# Verify that no old color references remain
node verify-color-migration.mjs

# Verify with detailed information
node verify-color-migration.mjs --verbose

# Show help
node color-migration.mjs --help
```

## Options

- `--dry-run`, `-d`: Preview changes without applying them
- `--verbose`, `-v`: Show detailed information about changes
- `--help`, `-h`: Show help message

## Files Processed

The script processes the following files as specified in the migration guide:

### UI Components
- `src/components/ui/box.astro`

### Page Components
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

### Pages
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/pages/features.astro`
- `src/pages/integrations.astro`
- `src/pages/pricing.astro`
- `src/pages/blog/[slug].astro`
- `src/pages/blog/[...page].astro`
- `src/pages/404.astro`

## Color Mapping

The script uses the following color mapping as defined in the migration guide:

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

## Verifying the Migration

To ensure that all color references have been properly migrated, you can use the verification script:

```bash
# Basic verification
./run-color-migration.sh --verify

# Detailed verification with context for any findings
./run-color-migration.sh --verify-verbose
```

The verification script:
- Scans the entire codebase for any remaining old color references
- Checks for all combinations of CSS utility prefixes and state variants
- Reports any files that still contain old color references
- Shows the line number and context for each reference when run with --verbose

If the verification script reports "No old color references found!", your migration was successful.

## Best Practices After Migration

After running the script, it's recommended to:

1. **Review the changes**: Check the updated files to ensure the color replacements are correct.
2. **Test the application**: Verify that the updated components look correct in the browser.
3. **Run the verification script**: Use `./run-color-migration.sh --verify` to check for any missed references.
4. **Follow the best practices** outlined in the migration guide:
   - Use CSS variables over hardcoded colors
   - Use semantic colors based on their purpose
   - Maintain consistency throughout the application
   - Consider accessibility and ensure sufficient contrast

## Troubleshooting

If you encounter any issues:

1. Run with the `--verbose` flag to see detailed information about the changes.
2. Check the error messages in the migration summary.
3. For files that couldn't be processed, try manually updating them following the migration guide.