#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

// ES modules equivalent of __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const readFile = fs.promises.readFile;
const writeFile = fs.promises.writeFile;
const mkdir = fs.promises.mkdir;

// Create test directory
const testDir = path.join(__dirname, 'test-migration');

// Sample test files with old color references
const testFiles = {
  'test-component.astro': `---
const { class: className } = Astro.props;
---

<div
  class:list={[
    "rounded-2xl p-8 bg-gray-50 text-indigo-600 border-slate-200 hover:bg-slate-100",
    className,
  ]}>
  <h2 class="text-2xl font-bold text-gray-900">Test Component</h2>
  <p class="mt-2 text-slate-600">
    This is a test component with various color references.
  </p>
  <button class="mt-4 px-4 py-2 bg-indigo-600 text-white hover:bg-indigo-700 rounded">
    Click me
  </button>
</div>`,

  'test-page.astro': `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Test Page">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-gray-900">Test Page</h1>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-slate-50 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-indigo-800">Feature One</h2>
        <p class="mt-2 text-slate-700">
          This is a description with slate-700 text color.
        </p>
      </div>
      <div class="bg-gray-100 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-indigo-700">Feature Two</h2>
        <p class="mt-2 text-gray-600">
          This is a description with gray-600 text color.
        </p>
      </div>
    </div>
  </div>
</Layout>`
};

// Expected results after migration
const expectedResults = {
  'test-component.astro': `---
const { class: className } = Astro.props;
---

<div
  class:list={[
    "rounded-2xl p-8 bg-neutral-200 text-primary-600 border-neutral-200 hover:bg-neutral-100",
    className,
  ]}>
  <h2 class="text-2xl font-bold text-neutral-900">Test Component</h2>
  <p class="mt-2 text-neutral-600">
    This is a test component with various color references.
  </p>
  <button class="mt-4 px-4 py-2 bg-primary-600 text-white hover:bg-primary-700 rounded">
    Click me
  </button>
</div>`,

  'test-page.astro': `---
import Layout from '../layouts/Layout.astro';
---

<Layout title="Test Page">
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-4xl font-bold text-neutral-900">Test Page</h1>
    <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="bg-neutral-200 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-primary-800">Feature One</h2>
        <p class="mt-2 text-neutral-700">
          This is a description with slate-700 text color.
        </p>
      </div>
      <div class="bg-neutral-100 p-6 rounded-lg shadow-md">
        <h2 class="text-2xl font-semibold text-primary-700">Feature Two</h2>
        <p class="mt-2 text-neutral-600">
          This is a description with gray-600 text color.
        </p>
      </div>
    </div>
  </div>
</Layout>`
};

// Function to set up test environment
async function setupTestEnvironment() {
  console.log('Setting up test environment...');
  
  // Create test directory if it doesn't exist
  try {
    await mkdir(testDir, { recursive: true });
  } catch (error) {
    if (error.code !== 'EEXIST') {
      throw error;
    }
  }
  
  // Create test files
  for (const [filename, content] of Object.entries(testFiles)) {
    const filePath = path.join(testDir, filename);
    await writeFile(filePath, content, 'utf8');
    console.log(`Created test file: ${filePath}`);
  }
  
  // Create a temporary color-migration script for testing
  const migrationScriptPath = path.join(testDir, 'color-migration-test.mjs');
  const originalScript = await readFile(path.join(__dirname, 'color-migration.mjs'), 'utf8');
  
  // Modify the script to only process our test files
  const modifiedScript = originalScript
    .replace(
      /const filesToProcess = \[[\s\S]*?\];/,
      `const filesToProcess = [
  '${path.join(testDir, 'test-component.astro').replace(/\\/g, '\\\\')}',
  '${path.join(testDir, 'test-page.astro').replace(/\\/g, '\\\\')}',
];`
    );
  
  await writeFile(migrationScriptPath, modifiedScript, 'utf8');
  console.log(`Created test migration script: ${migrationScriptPath}`);
  
  return migrationScriptPath;
}

// Function to run the migration script
function runMigrationScript(scriptPath) {
  console.log('Running migration script...');
  try {
    const output = execSync(`node ${scriptPath}`, { encoding: 'utf8' });
    console.log(output);
    return true;
  } catch (error) {
    console.error('Error running migration script:', error.message);
    return false;
  }
}

// Function to verify the results
async function verifyResults() {
  console.log('Verifying results...');
  let allPassed = true;
  
  for (const [filename, expectedContent] of Object.entries(expectedResults)) {
    const filePath = path.join(testDir, filename);
    const actualContent = await readFile(filePath, 'utf8');
    
    if (actualContent.trim() === expectedContent.trim()) {
      console.log(`✅ ${filename}: Migration successful`);
    } else {
      console.log(`❌ ${filename}: Migration failed`);
      console.log('Expected:');
      console.log(expectedContent);
      console.log('Actual:');
      console.log(actualContent);
      allPassed = false;
    }
  }
  
  return allPassed;
}

// Main function to run the test
async function runTest() {
  try {
    const scriptPath = await setupTestEnvironment();
    const migrationSuccess = runMigrationScript(scriptPath);
    
    if (migrationSuccess) {
      const verificationSuccess = await verifyResults();
      
      if (verificationSuccess) {
        console.log('\n✅ All tests passed! The color migration script is working correctly.');
      } else {
        console.log('\n❌ Some tests failed. Please check the output above for details.');
      }
    }
  } catch (error) {
    console.error('Test failed:', error);
  }
}

// Run the test
runTest();