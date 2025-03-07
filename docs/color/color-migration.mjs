#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = fs.promises.readFile;
const writeFile = fs.promises.writeFile;

// Command line arguments
const args = process.argv.slice(2);
const dryRun = args.includes('--dry-run') || args.includes('-d');
const verbose = args.includes('--verbose') || args.includes('-v');
const help = args.includes('--help') || args.includes('-h');

// Help message
if (help) {
  console.log(`
Color Migration Script
----------------------
This script migrates old color references to the new color scheme.

Usage:
  node color-migration.js [options]

Options:
  --dry-run, -d    Preview changes without applying them
  --verbose, -v    Show detailed information about changes
  --help, -h       Show this help message

Example:
  node color-migration.js --dry-run
  `);
  process.exit(0);
}

// Color mapping based on the migration guide
const colorMapping = {
  // Indigo to Primary
  'indigo-900': 'primary-900',
  'indigo-800': 'primary-800',
  'indigo-700': 'primary-700',
  'indigo-600': 'primary-600',
  'indigo-500': 'primary-500',
  
  // Gray to Neutral
  'gray-900': 'neutral-900',
  'gray-800': 'neutral-800',
  'gray-700': 'neutral-700',
  'gray-600': 'neutral-600',
  'gray-500': 'neutral-500',
  'gray-400': 'neutral-400',
  'gray-300': 'neutral-300',
  'gray-200': 'neutral-200',
  'gray-100': 'neutral-100',
  'gray-50': 'neutral-200', // Note: gray-50 maps to neutral-200
  
  // Slate to Neutral
  'slate-900': 'neutral-900',
  'slate-800': 'neutral-800',
  'slate-700': 'neutral-700',
  'slate-600': 'neutral-600',
  'slate-500': 'neutral-500',
  'slate-400': 'neutral-400',
  'slate-300': 'neutral-300',
  'slate-200': 'neutral-200',
  'slate-100': 'neutral-100',
  'slate-50': 'neutral-200', // Note: slate-50 maps to neutral-200
};

// Common CSS utility prefixes
const cssPrefixes = [
  'text',
  'bg',
  'border',
  'ring',
  'from',
  'to',
  'via',
  'placeholder',
  'divide',
  'outline',
  'shadow',
  'accent',
  'fill',
  'stroke'
];

// Common CSS state variants
const cssVariants = [
  'hover',
  'focus',
  'active',
  'disabled',
  'visited',
  'focus-within',
  'focus-visible',
  'group-hover',
  'group-focus',
  'dark'
];

// Files to be processed
const filesToProcess = [
  // UI Components
  'src/components/ui/box.astro',
  
  // Page Components
  'src/components/footer.astro',
  'src/components/hero.astro',
  'src/components/features.astro',
  'src/components/feature-alt.astro',
  'src/components/feature-grid.astro',
  'src/components/testimonials.astro',
  'src/components/pricing.astro',
  'src/components/compare-pricing.astro',
  'src/components/contactform.astro',
  'src/components/logos.astro',
  'src/components/review.astro',
  'src/components/sectionhead.astro',
  
  // Pages
  'src/pages/about.astro',
  'src/pages/contact.astro',
  'src/pages/features.astro',
  'src/pages/integrations.astro',
  'src/pages/pricing.astro',
  'src/pages/blog/[slug].astro',
  'src/pages/blog/[...page].astro',
  'src/pages/404.astro',
];

// Function to find all color references in a file
function findColorReferences(content) {
  const references = [];
  
  // Build a regex pattern for all possible combinations of prefixes, variants, and colors
  const variantPatterns = cssVariants.map(variant => `${variant}\\\\?:`).join('|');
  const prefixPatterns = cssPrefixes.join('|');
  
  for (const [oldColor] of Object.entries(colorMapping)) {
    // Match different patterns for color references
    const classRegex = new RegExp(`(\\s|"|'|:)(((?:${variantPatterns})?)((?:${prefixPatterns})-)(${oldColor}))(\\s|"|'|\\)|\\}|/)`, 'g');
    
    let match;
    while ((match = classRegex.exec(content)) !== null) {
      references.push({
        fullMatch: match[0],
        prefix: match[2], // The full prefix including variant and utility
        variant: match[3], // Just the variant part (e.g., hover\:)
        utility: match[4], // Just the utility part (e.g., text-)
        color: match[5], // Just the color part (e.g., indigo-600)
        position: match.index,
        length: match[0].length
      });
    }
  }
  
  return references;
}

// Function to replace color references in a file
async function processFile(filePath) {
  try {
    console.log(`Processing ${filePath}...`);
    
    // Read the file content
    const content = await readFile(filePath, 'utf8');
    
    // Find all color references
    const references = findColorReferences(content);
    
    if (verbose) {
      console.log(`Found ${references.length} color references in ${filePath}`);
      references.forEach(ref => {
        console.log(`  ${ref.prefix} -> ${ref.utility}${colorMapping[ref.color]}`);
      });
    }
    
    // Create a new content with replaced colors
    let newContent = content;
    let offset = 0; // Track position offset as we make replacements
    
    // Sort references by position (descending) to avoid position shifts
    references.sort((a, b) => b.position - a.position);
    
    // Replace each reference
    for (const ref of references) {
      const oldPrefix = ref.prefix;
      const newPrefix = `${ref.variant}${ref.utility}${colorMapping[ref.color]}`;
      
      // Calculate the actual position accounting for previous replacements
      const actualPosition = ref.position;
      
      // Extract the parts before and after the reference
      const before = newContent.substring(0, actualPosition + 1); // +1 to include the delimiter
      const after = newContent.substring(actualPosition + oldPrefix.length + 1); // +1 to exclude the delimiter
      
      // Replace the reference
      newContent = before + newPrefix + after;
    }
    
    // Write the updated content back to the file
    if (content !== newContent) {
      if (!dryRun) {
        await writeFile(filePath, newContent, 'utf8');
        console.log(`✅ Updated ${filePath} (${references.length} references)`);
      } else {
        console.log(`🔍 Would update ${filePath} (${references.length} references)`);
      }
      return { file: filePath, status: 'updated', count: references.length };
    } else {
      console.log(`⏭️ No changes needed in ${filePath}`);
      return { file: filePath, status: 'unchanged' };
    }
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return { file: filePath, status: 'error', error: error.message };
  }
}

// Main function to process all files
async function migrateColors() {
  console.log(`Starting color migration${dryRun ? ' (DRY RUN)' : ''}...`);
  
  const results = {
    updated: [],
    unchanged: [],
    errors: []
  };
  
  // Process each file
  for (const filePath of filesToProcess) {
    try {
      // Check if file exists
      if (!fs.existsSync(filePath)) {
        console.error(`❌ File not found: ${filePath}`);
        results.errors.push({ file: filePath, error: 'File not found' });
        continue;
      }
      
      const result = await processFile(filePath);
      
      if (result.status === 'updated') {
        results.updated.push({ file: result.file, count: result.count });
      } else if (result.status === 'unchanged') {
        results.unchanged.push(result.file);
      } else {
        results.errors.push(result);
      }
    } catch (error) {
      console.error(`❌ Error processing ${filePath}:`, error.message);
      results.errors.push({ file: filePath, error: error.message });
    }
  }
  
  // Print summary
  console.log('\n--- Migration Summary ---');
  console.log(`Total files processed: ${filesToProcess.length}`);
  console.log(`Files ${dryRun ? 'that would be ' : ''}updated: ${results.updated.length}`);
  console.log(`Files unchanged: ${results.unchanged.length}`);
  console.log(`Errors: ${results.errors.length}`);
  
  if (results.updated.length > 0) {
    console.log('\nUpdated files:');
    results.updated.forEach(item => console.log(`- ${item.file} (${item.count} references)`));
  }
  
  if (results.errors.length > 0) {
    console.log('\nErrors:');
    results.errors.forEach(error => console.log(`- ${error.file}: ${error.error}`));
  }
  
  if (dryRun) {
    console.log('\n⚠️ This was a dry run. No files were actually modified.');
    console.log('Run without --dry-run to apply the changes.');
  }
}

// Run the migration
migrateColors().catch(error => {
  console.error('Migration failed:', error);
  process.exit(1);
});