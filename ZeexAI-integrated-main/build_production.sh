#!/bin/bash
# Production build script for ZeexAI Frontend

echo "Building ZeexAI Frontend for production..."

# Check if API URL is set
if [ -z "$VITE_API_BASE_URL" ]; then
    echo "WARNING: VITE_API_BASE_URL not set!"
    echo "Using default: http://127.0.0.1:8000"
    echo "Set VITE_API_BASE_URL environment variable for production build"
    echo ""
    echo "Example:"
    echo "  VITE_API_BASE_URL=https://api.zeexai.com npm run build"
    echo ""
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Build for production
echo "Building production bundle..."
npm run build

echo ""
echo "Build complete! Files are in the 'dist' folder."
echo "Deploy the 'dist' folder to your hosting provider."

