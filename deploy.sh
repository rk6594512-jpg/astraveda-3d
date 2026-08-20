#!/bin/bash
# AstraVeda 3D — Quick Deploy Script
# Usage: bash deploy.sh [vercel|netlify]

set -e

echo "🚀 AstraVeda 3D Deployment Script"
echo "===================================="

# Check Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js not found. Install from https://nodejs.org/"
    exit 1
fi

echo "✅ Node version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install --no-audit --no-fund

# Type check
echo "🔍 Running type check..."
npm run typecheck || true

# Build
echo "🔨 Building project..."
npm run build

# Deploy based on argument
PLATFORM=${1:-vercel}

if [ "$PLATFORM" = "vercel" ]; then
    echo "🌐 Deploying to Vercel..."
    if ! command -v vercel &> /dev/null; then
        echo "📥 Installing Vercel CLI..."
        npm install -g vercel
    fi
    vercel --prod
elif [ "$PLATFORM" = "netlify" ]; then
    echo "🌐 Deploying to Netlify..."
    if ! command -v netlify &> /dev/null; then
        echo "📥 Installing Netlify CLI..."
        npm install -g netlify-cli
    fi
    netlify deploy --prod --build
else
    echo "⚠️ Unknown platform: $PLATFORM"
    echo "Usage: bash deploy.sh [vercel|netlify]"
    exit 1
fi

echo "✅ Deployment complete!"
