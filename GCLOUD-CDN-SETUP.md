# Setting Up Google Cloud CDN for AQUA

This guide explains how to set up Google Cloud CDN to improve the performance of your AQUA website.

## Benefits of Using Cloud CDN

- **Faster Content Delivery**: Serves content from edge locations closer to users
- **Reduced Server Load**: Caches static assets to reduce origin server load
- **Improved User Experience**: Faster page loads and better performance
- **Cost Savings**: Reduces egress traffic from your origin server

## Prerequisites

- AQUA application deployed to Google Cloud Run
- Custom domain configured for your Cloud Run service
- Google Cloud project with billing enabled

## Step 1: Enable Required APIs

```bash
gcloud services enable compute.googleapis.com
gcloud services enable cloudcdn.googleapis.com
```

## Step 2: Create a Load Balancer

### 1. Create a Backend Service

```bash
# Create a serverless NEG (Network Endpoint Group)
gcloud compute network-endpoint-groups create aqua-neg \
  --region=us-east1 \
  --network-endpoint-type=serverless \
  --cloud-run-service=aqua

# Create a backend service
gcloud compute backend-services create aqua-backend \
  --global \
  --enable-cdn \
  --cache-mode=CACHE_ALL_STATIC \
  --connection-draining-timeout=300s

# Add the NEG to the backend service
gcloud compute backend-services add-backend aqua-backend \
  --global \
  --network-endpoint-group=aqua-neg \
  --network-endpoint-group-region=us-central1
```

### 2. Create a URL Map

```bash
gcloud compute url-maps create aqua-url-map \
  --default-service aqua-backend
```

### 3. Create an SSL Certificate

```bash
gcloud compute ssl-certificates create aqua-ssl-cert \
  --domains=aquapuertoplata.com
```

### 4. Create an HTTPS Target Proxy

```bash
gcloud compute target-https-proxies create aqua-https-proxy \
  --url-map=aqua-url-map \
  --ssl-certificates=aqua-ssl-cert
```

### 5. Create a Forwarding Rule

```bash
gcloud compute forwarding-rules create aqua-https-rule \
  --global \
  --target-https-proxy=aqua-https-proxy \
  --ports=443 \
  --address=$(gcloud compute addresses describe aqua-ip --global --format="value(address)")
```

## Step 3: Configure CDN Caching

Create a `cdn-cache-config.json` file:

```json
{
  "defaultTtl": {
    "seconds": 3600
  },
  "maxTtl": {
    "seconds": 86400
  },
  "minTtl": {
    "seconds": 600
  },
  "cacheMode": "CACHE_ALL_STATIC",
  "clientTtl": {
    "seconds": 3600
  }
}
```

Apply the configuration:

```bash
gcloud compute backend-services update aqua-backend \
  --global \
  --cache-mode=CACHE_ALL_STATIC \
  --cache-control-max-age=3600 \
  --cache-control-s-max-age=86400 \
  --cache-control-min-ttl=600 \
  --cache-key-policy-include-host \
  --cache-key-policy-include-protocol \
  --cache-key-policy-include-query-string
```

## Step 4: Configure DNS

Update your DNS records to point to the IP address of your load balancer:

```bash
# Get the IP address of your load balancer
gcloud compute forwarding-rules describe aqua-https-rule --global --format="value(IPAddress)"
```

Create an A record for `aquapuertoplata.com` pointing to this IP address.

## Step 5: Test CDN Performance

After setting up Cloud CDN, you can verify that it's working by:

1. Visiting your website and checking the response headers
2. Looking for the `X-Cache-Hit` or `X-Cache-Miss` headers
3. Using Chrome DevTools to check the "Size" column for "(from cache)" indicators

## Step 6: Optimize Cache Settings in Next.js

Update your `next.config.js` file to optimize for CDN caching:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other config
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
      // ... other headers
    ];
  },
};
```

## Monitoring CDN Performance

You can monitor your CDN performance in the Google Cloud Console:

1. Go to **Network Services** > **Cloud CDN**
2. Select your backend service
3. View the **Monitoring** tab to see cache hit ratio, bandwidth, and other metrics

## Cost Optimization Tips

- Set appropriate TTLs for your content
- Use cache-control headers to control caching behavior
- Consider using signed URLs for private content
- Monitor your CDN usage and adjust settings as needed 