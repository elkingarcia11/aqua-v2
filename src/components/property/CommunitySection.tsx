'use client';

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { communityInfo } from '@/data/community';
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api';

export default function CommunitySection() {
  const { t, i18n } = useTranslation();
  
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  });

  const communityLocation = { lat: 19.7739099, lng: -70.6520804 };

  return (
    <section id="community" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('community.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {communityInfo.description[i18n.language as keyof typeof communityInfo.description] ||
              communityInfo.description.en}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('community.amenities')}</h3>
            <div className="space-y-4">
              {communityInfo.amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <span className="material-icons text-blue-600 mr-3">{amenity.icon}</span>
                  <span className="font-medium text-gray-800">{amenity.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('community.nearbyAttractions')}</h3>
            <div className="space-y-4">
              {communityInfo.nearbyAttractions.map((attraction, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center p-4 bg-white rounded-lg shadow-md"
                >
                  <span className="material-icons text-blue-600 mr-3">{attraction.icon}</span>
                  <div>
                    <span className="font-medium text-gray-800">
                      {attraction.name[i18n.language as keyof typeof attraction.name] || attraction.name.en}
                    </span>
                    <p className="text-sm text-gray-500">
                      {attraction.distance < 1000
                        ? `${attraction.distance}m`
                        : `${(attraction.distance / 1000).toFixed(1)}km`}{' '}
                      {t('community.away')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{t('community.location')}</h3>
            <p className="text-gray-600 mb-6">{t('community.locationDescription')}</p>
          </div>
          <div className="h-96 relative">
            {isLoaded ? (
              <GoogleMap
                mapContainerStyle={{ width: '100%', height: '100%' }}
                center={communityLocation}
                zoom={18}
                options={{
                  disableDefaultUI: true,
                  zoomControl: true,
                  scrollwheel: false,
                }}
              >
                <MarkerF position={communityLocation} />
              </GoogleMap>
            ) : (
              <div className="h-full w-full bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">{t('community.loadingMap')}</p>
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
                href="https://www.google.com/maps/place/AQUA/@19.7739099,-70.6546553,16z/data=!3m1!4b1!4m6!3m5!1s0x8eb1ef2898f7c08b:0x3b40ce6ce0f444a!8m2!3d19.7739099!4d-70.6520804!16s%2Fg%2F11symfwdgb?entry=ttu&g_ep=EgoyMDI1MDMwMy4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg text-center transition-colors inline-flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
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