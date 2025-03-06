# AQUA

A modern, responsive landing page for AQUA, featuring 6 beachfront properties at El Pueblito Beach, Puerto Plata, Dominican Republic.

## Features

- **Dynamic Property Showcase**: Interactive slideshow for each property with image counter and navigation
- **Multilingual Support**: Full localization for English, Spanish, French, Russian, Dutch, German, and Italian
- **Smart Filtering**: User-friendly filtering system based on guest capacity, view type, bathrooms, and bedrooms
- **Direct Booking**: "Book on Airbnb" buttons for each property with direct links
- **Location Details**: Clear directions and location information with integrated Google Maps
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop viewing
- **Property Details**: Comprehensive information including amenities, commodities, and descriptions
- **Community Section**: Information about the local area and attractions

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Maps**: Google Maps JavaScript API
- **Internationalization**: i18next with custom provider
- **Image Slider**: React Slick
- **Deployment**: Vercel

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

3. Create a `.env.local` file with your Google Maps API key:
   ```
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
   ```

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

### Vercel Deployment

This project is configured for deployment to Vercel. Follow these steps:

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy to Vercel:
   ```bash
   # For preview deployment
   vercel
   
   # For production deployment
   vercel --prod
   ```

Alternatively, you can use the provided deployment script:
   ```bash
   chmod +x deploy-vercel.sh
   ./deploy-vercel.sh
   ```

### Automatic Deployments

For automatic deployments, connect your GitHub repository to Vercel:

1. Go to the [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "New Project"
3. Import your GitHub repository
4. Configure your project settings
5. Deploy

With this setup, Vercel will automatically deploy:
- Production deployments when you push to the main branch
- Preview deployments when you create pull requests

### Environment Variables

For deployment, the following environment variables should be set in the Vercel dashboard:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`: Your Google Maps API key
- `NEXT_PUBLIC_SITE_URL`: The URL of your deployed site

### Security Best Practices

- **Never commit sensitive information** to version control, including API keys and credentials
- Use environment variables for all sensitive information
- The `.env` file is excluded from version control

## License

This project is licensed under the MIT License - see the LICENSE file for details.
