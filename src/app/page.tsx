'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import dynamic from 'next/dynamic';

// Lazy load components that are below the fold
const PropertiesSection = dynamic(() => import('@/components/property/PropertiesSection'), {
  loading: () => <div className="h-screen flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg h-96 w-full max-w-4xl"></div>
  </div>,
  ssr: true
});

const CommunitySection = dynamic(() => import('@/components/property/CommunitySection'), {
  loading: () => <div className="h-96 flex items-center justify-center">
    <div className="animate-pulse bg-gray-200 rounded-lg h-64 w-full max-w-4xl"></div>
  </div>,
  ssr: true
});

export default function Home() {
  // Not using translation in this component
  useTranslation();

  useEffect(() => {
    // Load Google Material Icons with preconnect for better performance
    const preconnect = document.createElement('link');
    preconnect.rel = 'preconnect';
    preconnect.href = 'https://fonts.googleapis.com';
    document.head.appendChild(preconnect);

    const preconnectGstatic = document.createElement('link');
    preconnectGstatic.rel = 'preconnect';
    preconnectGstatic.href = 'https://fonts.gstatic.com';
    preconnectGstatic.crossOrigin = 'anonymous';
    document.head.appendChild(preconnectGstatic);

    // Load Material Icons with media="print" onload hack for non-blocking
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    link.media = 'print';
    link.onload = () => { link.media = 'all'; };
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(preconnect);
      document.head.removeChild(preconnectGstatic);
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Header />
      <PropertiesSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
