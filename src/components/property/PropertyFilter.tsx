'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export interface FilterOptions {
  beachView: boolean | null;
  minBedrooms: number | null;
  minBathrooms: number | null;
  minCapacity: number | null;
}

interface PropertyFilterProps {
  onFilterChange: (filters: FilterOptions) => void;
  totalProperties: number;
  filteredCount: number;
}

export default function PropertyFilter({ onFilterChange, totalProperties, filteredCount }: PropertyFilterProps) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterOptions>({
    beachView: null,
    minBedrooms: null,
    minBathrooms: null,
    minCapacity: null,
  });
  const [isExpanded, setIsExpanded] = useState(false);

  // Ensure the filter component is expanded if any filters are applied
  useEffect(() => {
    if (Object.values(filters).some(value => value !== null)) {
      setIsExpanded(true);
    }
  }, [filters]);

  const handleFilterChange = (key: keyof FilterOptions, value: boolean | number | null) => {
    // If the current value matches the clicked value, set to null (deselect)
    // otherwise set to the new value (select)
    const newValue = filters[key] === value ? null : value;
    
    // Create a new filters object with the updated value
    const newFilters = { ...filters, [key]: newValue };
    
    // Update local state
    setFilters(newFilters);
    
    // Notify parent component
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const resetFilters = {
      beachView: null,
      minBedrooms: null,
      minBathrooms: null,
      minCapacity: null,
    };
    setFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  const isFiltersApplied = Object.values(filters).some((value) => value !== null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <div 
        className="flex justify-between items-center mb-4 cursor-pointer" 
        onClick={toggleExpand}
        aria-expanded={isExpanded}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            toggleExpand();
          }
        }}
      >
        <h2 className="text-xl font-bold text-gray-900">{t('filter.title')}</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">
            {t('filter.showing')} {filteredCount} {t('filter.of')} {totalProperties}
          </span>
          <div
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isExpanded ? t('filter.collapse') : t('filter.expand')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Beach View Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('filter.beachView')}</label>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFilterChange('beachView', true);
                }}
                className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                  filters.beachView === true
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
                aria-pressed={filters.beachView === true}
              >
                {t('filter.yes')}
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFilterChange('beachView', false);
                }}
                className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                  filters.beachView === false
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                }`}
                aria-pressed={filters.beachView === false}
              >
                {t('filter.no')}
              </button>
            </div>
          </div>

          {/* Bedrooms Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('filter.bedrooms')}</label>
            <div className="flex gap-2">
              {[1, 2].map((num) => (
                <button
                  key={`bedroom-${num}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFilterChange('minBedrooms', num);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                    filters.minBedrooms === num
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-pressed={filters.minBedrooms === num}
                >
                  {num}+
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('filter.bathrooms')}</label>
            <div className="flex gap-2">
              {[1, 2].map((num) => (
                <button
                  key={`bathroom-${num}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFilterChange('minBathrooms', num);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                    filters.minBathrooms === num
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-pressed={filters.minBathrooms === num}
                >
                  {num}+
                </button>
              ))}
            </div>
          </div>

          {/* Capacity Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">{t('filter.capacity')}</label>
            <div className="flex gap-2">
              {[2, 4].map((num) => (
                <button
                  key={`capacity-${num}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleFilterChange('minCapacity', num);
                  }}
                  className={`flex-1 py-2 px-4 rounded-lg border transition-colors ${
                    filters.minCapacity === num
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                  }`}
                  aria-pressed={filters.minCapacity === num}
                >
                  {num}+
                </button>
              ))}
            </div>
          </div>
        </div>

        {isFiltersApplied && (
          <div className="flex justify-end">
            <button
              onClick={(e) => {
                e.stopPropagation();
                resetFilters();
              }}
              className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                />
              </svg>
              {t('filter.resetAll')}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
} 