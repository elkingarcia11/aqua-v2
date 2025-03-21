'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';

// Memoize the header links to prevent unnecessary re-renders
const HeaderLink = memo(({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="font-medium transition-colors text-gray-800 hover:text-blue-600"
  >
    {label}
  </Link>
));

HeaderLink.displayName = 'HeaderLink';

export default function Header() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Optimize scroll handler with useCallback
  const handleScroll = useCallback(() => {
    // No need to set isScrolled since we're not using it
  }, []);

  useEffect(() => {
    // Use passive event listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/90 backdrop-blur-md shadow-md py-2"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/header-logo.png"
            alt="AQUA"
            width={150}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <HeaderLink href="#properties" label={t('navigation.properties')} />
          <HeaderLink href="#location" label={t('navigation.location')} />
          <HeaderLink href="#community" label={t('navigation.community')} />
          <LanguageSwitcher />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="ml-4 p-2 rounded-md focus:outline-none"
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 transition-colors text-gray-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <HeaderLink href="#properties" label={t('navigation.properties')} />
            <HeaderLink href="#location" label={t('navigation.location')} />
            <HeaderLink href="#community" label={t('navigation.community')} />
          </div>
        </motion.div>
      )}
    </header>
  );
} 