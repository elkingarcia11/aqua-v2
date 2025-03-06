#!/bin/bash
# AQUA Vercel Deployment Script

echo "🚀 Starting AQUA Vercel deployment process..."

# Step 1: Pull latest changes if using git
# git pull origin main

# Step 2: Install dependencies
echo "📦 Installing dependencies..."
npm install

# Step 3: Build the application
echo "🔨 Building the application..."
npm run build

# Check if build was successful
if [ $? -ne 0 ]; then
  echo "❌ Build failed. Please fix the errors and try again."
  exit 1
fi

# Step 4: Deploy to Vercel
echo "🚀 Deploying to Vercel..."
vercel --prod

echo "✅ Deployment process completed!"
echo "📝 Remember: You can also set up automatic deployments by connecting your GitHub repository to Vercel." 