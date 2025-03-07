#!/bin/bash

# Color Migration Runner Script
# This script provides a simple interface to run the color migration script with common options

# Display help message
function show_help {
  echo "Color Migration Runner"
  echo "---------------------"
  echo "Usage: ./run-color-migration.sh [option]"
  echo ""
  echo "Options:"
  echo "  --dry-run    Preview changes without applying them"
  echo "  --verbose    Show detailed information about changes"
  echo "  --test       Run the test script to verify the migration script works correctly"
  echo "  --verify     Verify that no old color references remain in the codebase"
  echo "  --help       Show this help message"
  echo ""
  echo "Examples:"
  echo "  ./run-color-migration.sh --dry-run    # Preview changes"
  echo "  ./run-color-migration.sh              # Apply changes"
  echo "  ./run-color-migration.sh --test       # Run tests"
  echo "  ./run-color-migration.sh --verify     # Verify migration"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
  echo "Error: Node.js is not installed. Please install Node.js to run this script."
  exit 1
fi

# Process command line arguments
case "$1" in
  --dry-run)
    echo "Running color migration in dry-run mode (preview only)..."
    node color-migration.mjs --dry-run
    ;;
  --verbose)
    echo "Running color migration with verbose output..."
    node color-migration.mjs --verbose
    ;;
  --test)
    echo "Running color migration tests..."
    node test-color-migration.mjs
    ;;
  --verify)
    echo "Verifying color migration..."
    node verify-color-migration.mjs
    ;;
  --verify-verbose)
    echo "Verifying color migration with verbose output..."
    node verify-color-migration.mjs --verbose
    ;;
  --help)
    show_help
    ;;
  "")
    echo "Running color migration..."
    node color-migration.mjs
    ;;
  *)
    echo "Unknown option: $1"
    show_help
    exit 1
    ;;
esac

# Make scripts executable if they aren't already
chmod +x color-migration.mjs
chmod +x test-color-migration.mjs
chmod +x verify-color-migration.mjs