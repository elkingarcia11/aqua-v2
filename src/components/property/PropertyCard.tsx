'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
  onClick: () => void;
}

export default function PropertyCard({ property, onClick }: PropertyCardProps) {
  const { t, i18n } = useTranslation();
  const [isHovered, setIsHovered] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // For demo purposes, use placeholder images if property images are not available
  const images = property.images.length > 0
    ? property.images
    : ['/images/placeholder.jpg', '/images/placeholder.jpg', '/images/placeholder.jpg'];

  const sliderSettings = {
    dots: false, // Changed to false as we're showing custom counter
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isHovered,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: isHovered,
    beforeChange: (_: any, next: number) => setCurrentSlide(next),
  };

  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger card click when clicking the book button
    if ((e.target as HTMLElement).closest('.book-button')) {
      e.stopPropagation();
      return;
    }
    onClick();
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden h-full flex flex-col"
      whileHover={{ y: -5, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="relative h-64">
        <Slider {...sliderSettings} className="h-full">
          {images.map((image, index) => (
            <div key={index} className="h-64 relative">
              <Image
                src={image}
                alt={`${property.name} - Image ${index + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
        </Slider>
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {property.name}
          </span>
        </div>
        {property.features.beachView && (
          <div className="absolute top-4 right-4 z-10">
            <span className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {t('property.beachView')}
            </span>
          </div>
        )}
        {/* Image counter */}
        <div className="absolute bottom-4 right-4 z-10">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
            {currentSlide + 1}/{images.length}
          </span>
        </div>
      </div>

      <div className="p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{property.name}</h3>
        <p className="text-gray-600 mb-4">
          {property.description[i18n.language as keyof typeof property.description] ||
            property.description.en}
        </p>

        <div className="flex flex-wrap gap-3 mb-4">
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 mr-1"
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
            <span className="text-sm text-gray-700">
              {t('property.floor')}: {property.floor}
            </span>
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 mr-1"
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
            <span className="text-sm text-gray-700">
              {t('property.bedrooms')}: {property.features.bedrooms}
            </span>
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 mr-1"
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
            <span className="text-sm text-gray-700">
              {t('property.bathrooms')}: {property.features.bathrooms}
            </span>
          </div>
          <div className="flex items-center bg-gray-100 px-3 py-1 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-500 mr-1"
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
            <span className="text-sm text-gray-700">
              {t('property.capacity')}: {property.features.capacity}
            </span>
          </div>
        </div>
      </div>

      <div className="px-6 pb-6 mt-auto">
        {/* Book now button */}
        {property.airbnbLink && (
          <a
            href={property.airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="book-button block w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {t('property.bookOnAirbnb')}
          </a>
        )}
      </div>
    </motion.div>
  );
} 