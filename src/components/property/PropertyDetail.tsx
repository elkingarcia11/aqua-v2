'use client';

import { useEffect, useRef, useState, useMemo } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import Slider from 'react-slick';
import { Property } from '@/data/properties';

interface PropertyDetailProps {
  property: Property | null;
  onClose: () => void;
  isOpen: boolean;
}

export default function PropertyDetail({ property, onClose, isOpen }: PropertyDetailProps) {
  const { t, i18n } = useTranslation();
  const modalRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const sliderSettings = useMemo(() => ({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    lazyLoad: 'ondemand' as const,
    swipeToSlide: true,
  }), []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  // Preload images when modal is opened
  useEffect(() => {
    if (isOpen && property && property.images.length > 0) {
      // Simpler approach to preload images
      property.images.forEach((src) => {
        const prefetchLink = document.createElement('link');
        prefetchLink.rel = 'prefetch';
        prefetchLink.as = 'image';
        prefetchLink.href = src;
        document.head.appendChild(prefetchLink);
        
        // Clean up prefetch links when modal closes
        return () => {
          try {
            document.head.removeChild(prefetchLink);
          } catch {
            // Ignore errors if element was already removed
          }
        };
      });
    }
  }, [isOpen, property]);

  if (!property) return null;

  // For demo purposes, use placeholder images if property images are not available
  const images = property.images.length > 0
    ? property.images
    : ['/images/placeholder.jpg', '/images/placeholder.jpg', '/images/placeholder.jpg'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-xl shadow-2xl overflow-hidden w-full max-w-5xl max-h-[90vh] flex flex-col"
            ref={modalRef}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-2xl font-bold text-gray-900">{property.name}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Close"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="overflow-y-auto flex-grow">
              <div className="h-96 relative">
                <Slider {...sliderSettings} className="h-full">
                  {images.map((image, index) => (
                    <div key={index} className="h-96 relative">
                      <Image
                        src={image}
                        alt={`${property.name} - Image ${index + 1}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 70vw"
                        className="object-cover"
                        priority={index === 0}
                        loading={index === 0 ? "eager" : "lazy"}
                        quality={index === 0 ? 90 : 80}
                      />
                    </div>
                  ))}
                </Slider>
                <div className="absolute bottom-4 right-4 z-10">
                  <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {currentSlide + 1}/{images.length}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                    <span className="text-gray-700">
                      {t('property.floor')}: {property.floor}
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                      />
                    </svg>
                    <span className="text-gray-700">
                      {t('property.bedrooms')}: {property.features.bedrooms}
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="text-gray-700">
                      {t('property.bathrooms')}: {property.features.bathrooms}
                    </span>
                  </div>
                  <div className="flex items-center bg-gray-100 px-4 py-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-500 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span className="text-gray-700">
                      {t('property.capacity')}: {property.features.capacity}
                    </span>
                  </div>
                  {property.features.beachView && (
                    <div className="flex items-center bg-teal-100 px-4 py-2 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-teal-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                        />
                      </svg>
                      <span className="text-teal-700">{t('property.beachView')}</span>
                    </div>
                  )}
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('property.description')}</h3>
                  <p className="text-gray-700">
                    {property.description[i18n.language as keyof typeof property.description] ||
                      property.description.en}
                  </p>
                </div>

                {/* Commodities Section */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('commodities.title')}</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">wifi</span>
                      <span className="text-gray-700">{t('commodities.wifi')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">ac_unit</span>
                      <span className="text-gray-700">{t('commodities.airConditioning')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">kitchen</span>
                      <span className="text-gray-700">{t('commodities.kitchen')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">tv</span>
                      <span className="text-gray-700">{t('commodities.tv')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">local_parking</span>
                      <span className="text-gray-700">{t('commodities.publicParking')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">beach_access</span>
                      <span className="text-gray-700">{t('commodities.beachAccess')}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="material-icons text-blue-600 mr-2">deck</span>
                      <span className="text-gray-700">{t('commodities.rooftop')}</span>
                    </div>
                  </div>
                </div>

                {property.airbnbLink && (
                  <div className="mb-6">
                    <a
                      href={property.airbnbLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-red-600 hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center"
                    >
                      {t('property.bookOnAirbnb')}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
} 