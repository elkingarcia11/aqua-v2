'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import LanguageSwitcher from '../ui/LanguageSwitcher';

export default function Header() {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(true);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          <Link
            href="#properties"
            className="font-medium transition-colors text-gray-800 hover:text-blue-600"
          >
            {t('navigation.properties')}
          </Link>
          <Link
            href="#location"
            className="font-medium transition-colors text-gray-800 hover:text-blue-600"
          >
            {t('navigation.location')}
          </Link>
          <Link
            href="#community"
            className="font-medium transition-colors text-gray-800 hover:text-blue-600"
          >
            {t('navigation.community')}
          </Link>
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
            <Link
              href="#properties"
              className="font-medium text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.properties')}
            </Link>
            <Link
              href="#location"
              className="font-medium text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.location')}
            </Link>
            <Link
              href="#community"
              className="font-medium text-gray-800 hover:text-blue-600 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('navigation.community')}
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
} 