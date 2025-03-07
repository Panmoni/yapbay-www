#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Command line arguments
const args = process.argv.slice(2);
const verbose = args.includes('--verbose') || args.includes('-v');
const help = args.includes('--help') || args.includes('-h');

// Help message
if (help) {
  console.log(`
Color Migration Verification Script
----------------------------------
This script verifies that no old color references remain in the codebase.

Usage:
  node verify-color-migration.mjs [options]

Options:
  --verbose, -v    Show detailed information about findings
  --help, -h       Show this help message

Example:
  node verify-color-migration.mjs --verbose
  `);
  process.exit(0);
}

// Old color patterns to search for
const oldColorPatterns = [
  'indigo-900', 'indigo-800', 'indigo-700', 'indigo-600', 'indigo-500',
  'gray-900', 'gray-800', 'gray-700', 'gray-600', 'gray-500', 'gray-400', 'gray-300', 'gray-200', 'gray-100', 'gray-50',
  'slate-900', 'slate-800', 'slate-700', 'slate-600', 'slate-500', 'slate-400', 'slate-300', 'slate-200', 'slate-100', 'slate-50'
];

// CSS utility prefixes to check
const cssPrefixes = [
  'text', 'bg', 'border', 'ring', 'from', 'to', 'via', 'placeholder', 
  'divide', 'outline', 'shadow', 'accent', 'fill', 'stroke'
];

// CSS state variants to check
const cssVariants = [
  'hover', 'focus', 'active', 'disabled', 'visited', 'focus-within',
  'focus-visible', 'group-hover', 'group-focus', 'dark'
];

// Directories to exclude from search
const excludeDirs = [
  'node_modules',
  '.git',
  '.vscode',
  '.astro'
];

// Function to check if a file should be processed
function shouldProcessFile(filePath) {
  // Skip excluded directories
  for (const dir of excludeDirs) {
    if (filePath.includes(`/${dir}/`)) {
      return false;
    }
  }
  
  // Only process certain file types
  const extensions = ['.astro', '.js', '.jsx', '.ts', '.tsx', '.vue', '.svelte', '.css', '.scss', '.html'];
  const ext = path.extname(filePath).toLowerCase();
  return extensions.includes(ext);
}

// Function to find old color references in a file
async function findOldColorReferences(filePath) {
  try {
    const content = await fs.promises.readFile(filePath, 'utf8');
    const references = [];
    
    // Build regex patterns for all possible combinations
    for (const oldColor of oldColorPatterns) {
      for (const prefix of cssPrefixes) {
        // Check for direct utility classes (e.g., text-indigo-600)
        const directPattern = new RegExp(`(\\s|"|'|:)(${prefix}-${oldColor})(\\s|"|'|\\)|\\}|/)`, 'g');
        let match;
        while ((match = directPattern.exec(content)) !== null) {
          references.push({
            color: oldColor,
            pattern: match[2],
            line: content.substring(0, match.index).split('\n').length,
            context: getContext(content, match.index)
          });
        }
        
        // Check for variant utility classes (e.g., hover:text-indigo-600)
        for (const variant of cssVariants) {
          const variantPattern = new RegExp(`(\\s|"|'|:)(${variant}\\\\?:${prefix}-${oldColor})(\\s|"|'|\\)|\\}|/)`, 'g');
          while ((match = variantPattern.exec(content)) !== null) {
            references.push({
              color: oldColor,
              pattern: match[2],
              line: content.substring(0, match.index).split('\n').length,
              context: getContext(content, match.index)
            });
          }
        }
      }
    }
    
    return references;
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error.message);
    return [];
  }
}

// Function to get context around a match
function getContext(content, index) {
  const lines = content.split('\n');
  let lineIndex = content.substring(0, index).split('\n').length - 1;
  
  // Get a few lines before and after for context
  const startLine = Math.max(0, lineIndex - 2);
  const endLine = Math.min(lines.length - 1, lineIndex + 2);
  
  return lines.slice(startLine, endLine + 1).join('\n');
}

// Function to recursively scan a directory for files
async function scanDirectory(dirPath, results = []) {
  const entries = await fs.promises.readdir(dirPath, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    
    if (entry.isDirectory()) {
      // Skip excluded directories
      if (!excludeDirs.includes(entry.name)) {
        await scanDirectory(fullPath, results);
      }
    } else if (shouldProcessFile(fullPath)) {
      const references = await findOldColorReferences(fullPath);
      if (references.length > 0) {
        results.push({
          file: fullPath,
          references
        });
      }
    }
  }
  
  return results;
}

// Main function to verify the migration
async function verifyMigration() {
  console.log('Verifying color migration...');
  
  // Scan the src directory for any remaining old color references
  const results = await scanDirectory(path.join(__dirname, 'src'));
  
  // Print results
  if (results.length === 0) {
    console.log('✅ No old color references found! The migration was successful.');
  } else {
    console.log(`❌ Found ${results.length} files with old color references:`);
    
    let totalReferences = 0;
    
    for (const result of results) {
      totalReferences += result.references.length;
      console.log(`\n📁 ${result.file} (${result.references.length} references)`);
      
      if (verbose) {
        for (const ref of result.references) {
          console.log(`  Line ${ref.line}: ${ref.pattern}`);
          console.log(`  Context:\n${ref.context}\n`);
        }
      } else {
        // Just show the patterns without context
        const patterns = [...new Set(result.references.map(ref => ref.pattern))];
        console.log(`  Patterns: ${patterns.join(', ')}`);
      }
    }
    
    console.log(`\nTotal: ${totalReferences} old color references found in ${results.length} files.`);
    console.log('Run with --verbose for detailed information about each reference.');
  }
}

// Run the verification
verifyMigration().catch(error => {
  console.error('Verification failed:', error);
  process.exit(1);
});