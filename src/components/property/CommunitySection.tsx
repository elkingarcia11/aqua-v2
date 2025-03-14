'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { communityInfo } from '@/data/community';

// Define interfaces for our data structures
interface MultilingualText {
  en: string;
  es?: string;
  [key: string]: string | undefined;
}

interface NamedItem {
  name: MultilingualText;
  icon?: string;
  distance?: number;
}

export default function CommunitySection() {
  const { t, i18n } = useTranslation();
  
  // Community location coordinates
  const communityLocation = {
    lat: 19.773993872098327,
    lng: -70.65216997523102
  };

  // API key from environment variables
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  
  // Format the location query for the embed URL
  const locationQuery = encodeURIComponent('AQUA EL PUEBLITO PUERTO PLATA RD');
  
  // Safely get description based on language
  const getDescription = () => {
    if (!communityInfo.description) return '';
    return communityInfo.description[i18n.language as keyof typeof communityInfo.description] || 
           communityInfo.description.en || '';
  };
  
  // Safely get name based on language
  const getName = (item: NamedItem | undefined) => {
    if (!item || !item.name) return '';
    return item.name[i18n.language as keyof typeof item.name] || item.name.en || '';
  };
  
  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('community.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {getDescription()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('community.amenities')}</h3>
            <div className="space-y-4">
              {communityInfo.amenities && communityInfo.amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <span className="material-icons text-blue-600 mr-3">{amenity.icon || ''}</span>
                  <span className="font-medium text-gray-800">
                    {getName(amenity)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('community.nearbyAttractions')}</h3>
            <div className="space-y-4">
              {communityInfo.nearbyAttractions && communityInfo.nearbyAttractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <span className="material-icons text-blue-600 mr-3">{attraction.icon || ''}</span>
                  <div>
                    <span className="font-medium text-gray-800">
                      {getName(attraction)}
                    </span>
                    <p className="text-sm text-gray-500">
                      {attraction.distance !== undefined ? (
                        <>
                          {attraction.distance < 1000
                            ? `${attraction.distance}m`
                            : `${(attraction.distance / 1000).toFixed(1)}km`}{' '}
                          {t('community.away')}
                        </>
                      ) : ''}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-3 pb-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">{t('community.location')}</h3>
            <p className="text-gray-600 mb-2">{t('community.locationDescription')}</p>
          </div>
          <div className="h-96 relative">
            {apiKey ? (
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src={`https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${locationQuery}&center=${communityLocation.lat},${communityLocation.lng}&zoom=17`}
                title="Google Maps - AQUA EL PUEBLITO PUERTO PLATA RD"
                aria-label="Map showing location of AQUA EL PUEBLITO PUERTO PLATA RD"
              ></iframe>
            ) : (
              <div className="h-full w-full flex items-center justify-center bg-gray-100">
                <p className="text-red-500">Google Maps API key is missing</p>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div className="mb-4 md:mb-0">
                <h4 className="font-bold text-gray-900 mb-1">{t('community.parkingInfo')}</h4>
                <p className="text-gray-600">{t('community.parkingDescription')}</p>
              </div>
              <a
                href="https://www.google.com/maps/place/AQUA+EL+PUEBLITO+PUERTO+PLATA+RD/@19.773993872098327,-70.65216997523102,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg text-center transition-colors inline-flex items-center"
                aria-label="Get directions to AQUA EL PUEBLITO PUERTO PLATA RD"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {t('community.getDirections')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 