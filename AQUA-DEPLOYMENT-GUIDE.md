# AQUA Deployment Guide for Google Cloud Run

This guide provides comprehensive instructions for deploying the AQUA Next.js application to Google Cloud Run.

## Why Google Cloud Run?

Google Cloud Run is recommended for the AQUA project because:

- **Serverless**: No infrastructure management required
- **Cost-effective**: Pay only for what you use
- **Scalable**: Automatically scales based on traffic
- **Simple**: Easy to deploy and maintain
- **Global CDN**: Can be integrated with Cloud CDN for better performance

## Prerequisites

1. **Google Cloud Account**
   - Create an account at [cloud.google.com](https://cloud.google.com) if you don't have one
   - Set up billing for your account

2. **Google Cloud SDK**
   - Download and install from [cloud.google.com/sdk](https://cloud.google.com/sdk/docs/install)
   - For macOS: `brew install google-cloud-sdk`
   - For Windows: Download the installer from the website
   - For Linux: Follow the instructions on the website

3. **Docker**
   - Install Docker Desktop from [docker.com](https://www.docker.com/products/docker-desktop)

## Step 1: Initial Setup

1. **Initialize Google Cloud SDK**
   ```bash
   gcloud init
   ```
   - Select your Google account
   - Choose or create a project

2. **Set your project ID**
   ```bash
   export PROJECT_ID="your-project-id"  # Replace with your actual project ID
   gcloud config set project $PROJECT_ID
   ```

3. **Enable required APIs**
   ```bash
   gcloud services enable cloudbuild.googleapis.com
   gcloud services enable run.googleapis.com
   gcloud services enable artifactregistry.googleapis.com
   ```

## Step 2: Prepare Your Application

1. **Ensure your next.config.js has the standalone output option**
   ```javascript
   // next.config.js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     // ... other config
     output: 'standalone',
   };
   ```

2. **Update environment variables**
   - Ensure your `.env.production` file has the necessary variables:
   ```
   NEXT_PUBLIC_ENV=production
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

3. **Verify your Dockerfile**
   - Make sure your Dockerfile is properly configured for Next.js
   - The Dockerfile should build the application and set up the production environment

## Step 3: Deploy to Google Cloud Run

### Option 1: Using the Deployment Script (Recommended)

1. **Update the deployment script**
   - Open `deploy-gcloud.sh`
   - Update the following variables:
     ```bash
     PROJECT_ID="your-project-id"  # Replace with your actual GCP project ID
     REGION="us-east1"  # Or your preferred region
     SERVICE_NAME="aqua"  # Or your preferred service name
     MAPS_API_KEY="your-google-maps-api-key"  # Replace with your actual API key
     ```

2. **Run the deployment script**
   ```bash
   chmod +x deploy-gcloud.sh
   ./deploy-gcloud.sh
   ```

### Option 2: Manual Deployment

1. **Build and push your Docker image**
   ```bash
   # Build and tag the image
   gcloud builds submit --tag gcr.io/$PROJECT_ID/aqua-app
   ```

2. **Deploy to Cloud Run**
   ```bash
   gcloud run deploy aqua \
     --image gcr.io/$PROJECT_ID/aqua-app \
     --platform managed \
     --region us-east1 \
     --allow-unauthenticated \
     --set-env-vars="NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_api_key,NEXT_PUBLIC_ENV=production,NEXT_PUBLIC_SITE_URL=https://your-domain.com"
   ```

3. **Verify deployment**
   ```bash
   # Get the URL of your deployed service
   gcloud run services describe aqua --platform managed --region us-east1 --format="value(status.url)"
   ```
   - Open the URL in your browser to verify that your application is running

## Step 4: Set Up Custom Domain

1. **Add your domain to Cloud Run**
   ```bash
   gcloud beta run domain-mappings create \
     --service aqua \
     --domain your-domain.com \
     --region us-east1
   ```

2. **Verify domain ownership**
   - Google Cloud will provide you with DNS records to add to your domain registrar
   - Add these records to verify ownership of your domain

3. **Configure DNS records**
   - Add the CNAME or A records provided by Google Cloud to your domain registrar
   - Wait for DNS propagation (can take up to 48 hours)

4. **Verify domain mapping**
   ```bash
   gcloud beta run domain-mappings describe \
     --domain your-domain.com \
     --region us-east1
   ```

## Step 5: Set Up Continuous Deployment (Optional)

1. **Connect your GitHub repository to Cloud Build**
   - Go to Cloud Build in the Google Cloud Console
   - Connect your GitHub repository

2. **Create a Cloud Build trigger**
   - Create a new trigger that builds and deploys on push to your main branch
   - Use the cloudbuild.yaml file in your repository

3. **Test the trigger**
   - Make a small change to your repository and push it
   - Verify that Cloud Build automatically builds and deploys your application

## Step 6: Performance Optimization

1. **Set up Cloud CDN (Optional)**
   - Follow the instructions in GCLOUD-CDN-SETUP.md to set up Cloud CDN
   - This will improve performance for users around the world

2. **Configure caching headers**
   - Update your next.config.js file with appropriate caching headers:
   ```javascript
   async headers() {
     return [
       {
         source: '/images/:path*',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=31536000',
           },
         ],
       },
       {
         source: '/_next/static/:path*',
         headers: [
           {
             key: 'Cache-Control',
             value: 'public, max-age=31536000, immutable',
           },
         ],
       },
     ];
   },
   ```

## Step 7: Monitoring and Maintenance

1. **View logs**
   ```bash
   gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=aqua" --limit 10
   ```

2. **Set up alerts**
   - Go to Cloud Monitoring in the Google Cloud Console
   - Create alerts for important metrics like error rate and latency

3. **Monitor costs**
   - Go to the Billing section in the Google Cloud Console
   - Set up budget alerts to avoid unexpected charges

## Troubleshooting

### Common Issues and Solutions

1. **Deployment fails with permission errors**
   - Ensure your Google Cloud account has the necessary permissions
   - Try running `gcloud auth login` to re-authenticate

2. **Application crashes after deployment**
   - Check the logs: `gcloud logging read "resource.type=cloud_run_revision AND resource.labels.service_name=aqua" --limit 10`
   - Ensure all required environment variables are set

3. **Custom domain not working**
   - Verify DNS records are correctly set up
   - Check domain mapping status: `gcloud beta run domain-mappings describe --domain your-domain.com --region us-east1`

4. **Slow performance**
   - Consider setting up Cloud CDN
   - Check for performance issues in your application
   - Optimize image sizes and formats

## Cost Management

- **Cloud Run**: 
  - Free tier: 2 million requests/month, 360,000 GB-seconds/month
  - Beyond free tier: ~$0.00002384/request, ~$0.00001650/GB-second
  - Estimated cost for small site: $0-20/month

- **Cloud CDN**:
  - Cache egress: $0.08/GB for first 10TB
  - Cache fill: Standard egress rates apply
  - Estimated cost for small site: $0-15/month

## Next Steps

1. **Set up a staging environment**
   - Create a separate Cloud Run service for staging
   - Use different environment variables for staging

2. **Implement CI/CD**
   - Set up automated testing in your CI/CD pipeline
   - Configure automatic deployments for staging and production

3. **Monitor and optimize**
   - Regularly check performance and costs
   - Make adjustments as needed to improve performance and reduce costs 