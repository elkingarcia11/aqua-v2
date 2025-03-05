#!/bin/bash

# AQUA Deployment Script for Google Cloud Run
# This script automates the deployment process for the AQUA website to Google Cloud Run

# Exit on error
set -e

# Check if required environment variables are set
if [ -z "$GCP_PROJECT_ID" ]; then
    echo "Error: GCP_PROJECT_ID environment variable is not set"
    echo "Please set it with: export GCP_PROJECT_ID=your-project-id"
    exit 1
fi

if [ -z "$MAPS_API_KEY" ]; then
    echo "Error: MAPS_API_KEY environment variable is not set"
    echo "Please set it with: export MAPS_API_KEY=your-api-key"
    exit 1
fi

# Configuration
PROJECT_ID="$GCP_PROJECT_ID"
REGION="us-east1"
SERVICE_NAME="aqua"

echo "Starting AQUA deployment to Google Cloud Run..."

# Check if gcloud is installed
if ! command -v gcloud &> /dev/null; then
    echo "Error: gcloud CLI is not installed. Please install it from https://cloud.google.com/sdk/docs/install"
    exit 1
fi

# Check if user is logged in to gcloud
if ! gcloud auth list --filter=status:ACTIVE --format="value(account)" &> /dev/null; then
    echo "You are not logged in to gcloud. Please run 'gcloud auth login' first."
    exit 1
fi

# Set the current project
echo "Setting project to $PROJECT_ID..."
gcloud config set project $PROJECT_ID

# Enable required APIs
echo "Enabling required APIs..."
gcloud services enable cloudbuild.googleapis.com
gcloud services enable run.googleapis.com
gcloud services enable artifactregistry.googleapis.com

# Build and push the Docker image to Google Container Registry
echo "Building and pushing Docker image..."
gcloud builds submit --tag gcr.io/$PROJECT_ID/aqua-app

# Deploy to Cloud Run
echo "Deploying to Cloud Run..."
gcloud run deploy $SERVICE_NAME \
  --image gcr.io/$PROJECT_ID/aqua-app \
  --platform managed \
  --region $REGION \
  --allow-unauthenticated \
  --set-env-vars="NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=$MAPS_API_KEY,NEXT_PUBLIC_ENV=production,NEXT_PUBLIC_SITE_URL=https://aquapuertoplata.com"

# Get the deployed URL
SERVICE_URL=$(gcloud run services describe $SERVICE_NAME --platform managed --region $REGION --format="value(status.url)")

echo "Deployment completed successfully!"
echo "Your application is now running at: $SERVICE_URL"
echo ""
echo "To map your custom domain (aquapuertoplata.com), run:"
echo "gcloud beta run domain-mappings create --service $SERVICE_NAME --domain aquapuertoplata.com --region $REGION"
echo ""
echo "Then follow the DNS verification steps provided by Google Cloud to complete the domain mapping." 