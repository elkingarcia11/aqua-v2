import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import I18nProvider from "../lib/i18n/i18n-provider";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "AQUA",
  description: "Discover luxury beachfront apartments at AQUA, El Pueblito Beach, Puerto Plata. Enjoy oceanfront views, modern amenities, and direct beach access.",
  keywords: "beachfront apartments, luxury apartments, Puerto Plata, El Pueblito Beach, vacation rentals, oceanfront property, Dominican Republic",
  authors: [{ name: "AQUA Apartments" }],
  creator: "AQUA Apartments",
  publisher: "AQUA Apartments",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aquapuertoplata.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'es-ES': '/es-ES',
      'fr-FR': '/fr-FR',
      'ru-RU': '/ru-RU',
      'nl-NL': '/nl-NL',
      'de-DE': '/de-DE',
      'it-IT': '/it-IT',
    },
  },
  openGraph: {
    title: "AQUA",
    description: "Discover luxury beachfront apartments at AQUA, El Pueblito Beach, Puerto Plata. Enjoy oceanfront views, modern amenities, and direct beach access.",
    url: 'https://aquapuertoplata.com',
    siteName: 'AQUA',
    images: [
      {
        url: '/logo.ico',
        width: 1200,
        height: 630,
        alt: 'AQUA Beachfront Luxury Apartments',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "AQUA",
    description: "Discover luxury beachfront apartments at AQUA, El Pueblito Beach, Puerto Plata.",
    images: ['/logo.ico'],
    creator: '@aquaapartments',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    shortcut: [
      { url: '/favicon.ico', type: 'image/x-icon' }
    ],
    apple: [
      { url: '/header-logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  other: {
    'google-site-verification': 'your-verification-code',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/header-logo.png" sizes="180x180" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <style>
          {`
            /* Hide Next.js badge and dev tools */
            [data-nextjs-dialog-overlay],
            [data-nextjs-dialog],
            [data-nextjs-toast],
            [data-nextjs-toast-errors],
            [data-nextjs-toast-wrapper],
            [data-next-badge-root],
            [data-next-badge],
            [data-nextjs-dev-tools-button],
            [data-nextjs-toast="true"],
            [data-nextjs-function_calls],
            .nextjs-toast,
            .dev-tools-indicator-menu,
            .dev-tools-indicator-inner,
            .dev-tools-indicator-item,
            .dev-tools-indicator-footer {
              display: none !important;
              visibility: hidden !important;
              opacity: 0 !important;
              pointer-events: none !important;
              z-index: -9999 !important;
              width: 0 !important;
              height: 0 !important;
              position: absolute !important;
              overflow: hidden !important;
            }
          `}
        </style>
        <Script
          id="schema-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              "name": "AQUA",
              "description": "Discover luxury beachfront apartments at AQUA, El Pueblito Beach, Puerto Plata. Enjoy oceanfront views, modern amenities, and direct beach access.",
              "url": "https://aquapuertoplata.com",
              "telephone": "+1-809-123-4567",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "El Pueblito Beach",
                "addressLocality": "Puerto Plata",
                "addressRegion": "Puerto Plata",
                "postalCode": "57000",
                "addressCountry": "DO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "19.7934",
                "longitude": "-70.6884"
              },
              "priceRange": "$$$",
              "image": "https://aquapuertoplata.com/header-logo.png",
              "amenityFeature": [
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Beachfront Access",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Ocean View",
                  "value": true
                },
                {
                  "@type": "LocationFeatureSpecification",
                  "name": "Free WiFi",
                  "value": true
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}
