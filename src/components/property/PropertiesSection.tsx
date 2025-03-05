'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { properties, Property } from '@/data/properties';
import PropertyCard from './PropertyCard';
import PropertyDetail from './PropertyDetail';
import PropertyFilter, { FilterOptions } from './PropertyFilter';

export default function PropertiesSection() {
  const { t } = useTranslation();
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>(properties);
  const [filters, setFilters] = useState<FilterOptions>({
    beachView: null,
    minBedrooms: null,
    minBathrooms: null,
    minCapacity: null,
  });

  useEffect(() => {
    // Check if all filters are null (reset state)
    const isAllFiltersNull = Object.values(filters).every(value => value === null);
    
    if (isAllFiltersNull) {
      // If all filters are null, show all properties
      setFilteredProperties(properties);
      return;
    }
    
    const filtered = properties.filter((property) => {
      // Beach View Filter
      if (filters.beachView !== null && property.features.beachView !== filters.beachView) {
        return false;
      }

      // Bedrooms Filter
      if (filters.minBedrooms !== null && property.features.bedrooms < filters.minBedrooms) {
        return false;
      }

      // Bathrooms Filter
      if (filters.minBathrooms !== null && property.features.bathrooms < filters.minBathrooms) {
        return false;
      }

      // Capacity Filter
      if (filters.minCapacity !== null && property.features.capacity < filters.minCapacity) {
        return false;
      }

      return true;
    });

    setFilteredProperties(filtered);
  }, [filters]);

  const handlePropertyClick = (property: Property) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="properties" className="pt-32 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t('properties.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('properties.subtitle')}</p>
        </div>

        <PropertyFilter
          onFilterChange={handleFilterChange}
          totalProperties={properties.length}
          filteredCount={filteredProperties.length}
        />

        {filteredProperties.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-700 mb-4">{t('properties.noResults')}</h3>
            <p className="text-gray-500">{t('properties.tryDifferentFilters')}</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
            key={filteredProperties.map(p => p.id).join(',')}
          >
            {filteredProperties.map((property) => (
              <motion.div key={property.id} variants={item}>
                <PropertyCard property={property} onClick={() => handlePropertyClick(property)} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      <PropertyDetail
        property={selectedProperty}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
} 