#!/bin/bash

# AQUA Environment Setup Script
# This script helps set up environment variables for local development and deployment

# Exit on error
set -e

echo "AQUA Environment Setup"
echo "======================"
echo ""
echo "This script will help you set up environment variables for local development and deployment."
echo "The values will be saved to .env.local and used for deployment."
echo ""
echo "WARNING: Never commit .env.local or .env.production to version control!"
echo ""

# Prompt for Google Cloud Project ID
read -p "Enter your Google Cloud Project ID: " GCP_PROJECT_ID

# Prompt for Google Maps API Key
read -p "Enter your Google Maps API Key: " MAPS_API_KEY

# Prompt for site URL
read -p "Enter your site URL (e.g., https://aquapuertoplata.com): " SITE_URL

# Create .env.local
cat > .env.local << EOF
# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${MAPS_API_KEY}

# Environment
NEXT_PUBLIC_ENV=development

# Google Cloud Project ID (for deployment)
GCP_PROJECT_ID=${GCP_PROJECT_ID}

# Site URL
NEXT_PUBLIC_SITE_URL=${SITE_URL}
EOF

# Create .env.production
cat > .env.production << EOF
# Production environment variables
NEXT_PUBLIC_ENV=production

# Google Maps API Key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=${MAPS_API_KEY}

# Site URL
NEXT_PUBLIC_SITE_URL=${SITE_URL}
EOF

echo ""
echo "Environment files created successfully!"
echo ""
echo "For deployment, run:"
echo "export GCP_PROJECT_ID=${GCP_PROJECT_ID}"
echo "export MAPS_API_KEY=${MAPS_API_KEY}"
echo "./deploy-gcloud.sh"
echo ""
echo "Remember to add these environment variables to your Cloud Build trigger as well." 