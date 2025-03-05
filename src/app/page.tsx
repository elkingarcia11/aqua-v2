'use client';

import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PropertiesSection from '@/components/property/PropertiesSection';
import CommunitySection from '@/components/property/CommunitySection';

export default function Home() {
  // Not using translation in this component
  useTranslation();

  useEffect(() => {
    // Load Google Material Icons
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
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
