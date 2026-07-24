#!/bin/bash

# CDSS "Острый Живот 2026" - Deployment Script for Vercel

echo "🚀 CDSS Deployment to Vercel"
echo "================================"

# 1. Verify Node and npm
echo "✓ Checking Node.js..."
node --version
npm --version

# 2. Install dependencies
echo "✓ Installing dependencies..."
npm install --legacy-peer-deps

# 3. Build project
echo "✓ Building project..."
npm run build

# 4. Check dist folder
echo "✓ Verifying build..."
if [ -d "dist" ]; then
    echo "✓ Build successful: $(du -sh dist | cut -f1)"
else
    echo "✗ Build failed: dist folder not found"
    exit 1
fi

# 5. Check Vercel CLI
echo "✓ Checking Vercel CLI..."
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

vercel --version

# 6. Deploy to production
echo ""
echo "🎯 Deploying to production..."
echo "You will be prompted to authenticate if not already logged in."
echo ""

vercel --prod

echo ""
echo "✅ Deployment complete!"
echo "Visit your project dashboard: https://vercel.com"
