# AQUA

A modern, responsive landing page for AQUA, featuring 6 beachfront properties at El Pueblito Beach, Puerto Plata, Dominican Republic.

## Features

- **Dynamic Property Showcase**: Interactive slideshow for each property with image counter and navigation
- **Multilingual Support**: Full localization for English, Spanish, French, Russian, Dutch, German, and Italian
- **Smart Filtering**: User-friendly filtering system based on guest capacity, view type, bathrooms, and bedrooms
- **Direct Booking**: "Book on Airbnb" buttons for each property with direct links
- **Location Details**: Clear directions and location information with embedded Google Maps
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Property Details**: Comprehensive information including amenities, commodities, and descriptions
- **Community Section**: Information about the local area and attractions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Google Maps API
- **Internationalization**: i18next with custom provider
- **Image Slider**: React Slick
- **Deployment**: Google Cloud Run

## Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/aqua-v2.git
   cd aqua-v2
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables using the provided script:
   ```bash
   chmod +x setup-env.sh
   ./setup-env.sh
   ```
   This script will prompt you for your Google Maps API key and other necessary information, and create the required `.env.local` and `.env.production` files.

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `/src/app`: Main application pages and layouts
- `/src/components`: Reusable UI components
  - `/layout`: Layout components (Header, Footer)
  - `/property`: Property-related components (PropertyCard, PropertyDetail, PropertyFilter, etc.)
  - `/ui`: Generic UI components (LanguageSwitcher)
- `/src/data`: Data files for properties and community information
- `/src/lib`: Utility functions and configurations
  - `/i18n`: Internationalization setup with custom provider
- `/public`: Static assets
  - `/images`: Property and UI images
  - `/locales`: Translation files
  - `/videos`: Video assets

## Internationalization

The project uses a custom i18n provider that directly imports translations for all supported languages:

- English (en)
- Spanish (es)
- French (fr)
- Russian (ru)
- Dutch (nl)
- German (de)
- Italian (it)

All translations are managed in the `src/lib/i18n/i18n-provider.tsx` file.

## Adding Property Images

Place property images in the following directories:
- `/public/images/properties/aqua1/`
- `/public/images/properties/aqua2/`
- `/public/images/properties/aqua3/`
- `/public/images/properties/aqua4/`
- `/public/images/properties/aqua5/`
- `/public/images/properties/aqua6/`

Images should follow a consistent naming convention (e.g., `1.jpg`, `2.jpg`, etc.).

## Deployment

### Google Cloud Run (Recommended)

This project is configured for deployment to Google Cloud Run. Follow these steps:

1. Make sure you have the Google Cloud SDK installed:
   ```bash
   # For macOS
   brew install google-cloud-sdk
   
   # For other platforms, visit:
   # https://cloud.google.com/sdk/docs/install
   ```

2. Set up environment variables for deployment:
   ```bash
   export GCP_PROJECT_ID=your-project-id
   export MAPS_API_KEY=your-google-maps-api-key
   ```

3. Run the deployment script:
   ```bash
   chmod +x deploy-gcloud.sh
   ./deploy-gcloud.sh
   ```

4. For continuous deployment, set up a Cloud Build trigger with the following substitution variables:
   - `_MAPS_API_KEY`: Your Google Maps API key
   - `_SITE_URL`: Your site URL (e.g., https://aquapuertoplata.com)

For detailed deployment instructions, refer to the `AQUA-DEPLOYMENT-GUIDE.md` file.

### Security Best Practices

- **Never commit sensitive information** to version control, including API keys and credentials
- Use environment variables for all sensitive information
- The `.env.local` and `.env.production` files are excluded from version control
- Use the provided `setup-env.sh` script to set up your environment variables
- For deployment, use environment variables or Cloud Build substitution variables

## License

This project is licensed under the MIT License - see the LICENSE file for details.
