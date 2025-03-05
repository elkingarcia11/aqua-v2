'use client';

import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';

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

// Preset filters for quick selection
const FILTER_PRESETS = [
  { 
    id: 'all', 
    labelKey: 'filter.presets.all',
    filters: { beachView: null, minBedrooms: null, minBathrooms: null, minCapacity: null }
  },
  { 
    id: 'beachView', 
    labelKey: 'filter.presets.beachView',
    filters: { beachView: true, minBedrooms: null, minBathrooms: null, minCapacity: null }
  },
  { 
    id: 'family', 
    labelKey: 'filter.presets.family',
    filters: { beachView: null, minBedrooms: 2, minBathrooms: null, minCapacity: 4 }
  },
  { 
    id: 'couple', 
    labelKey: 'filter.presets.couple',
    filters: { beachView: null, minBedrooms: 1, minBathrooms: 1, minCapacity: 2 }
  }
];

export default function PropertyFilter({ onFilterChange, totalProperties, filteredCount }: PropertyFilterProps) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FilterOptions>({
    beachView: null,
    minBedrooms: null,
    minBathrooms: null,
    minCapacity: null,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [activePreset, setActivePreset] = useState('all');

  // Ensure the filter component is expanded if any filters are applied
  useEffect(() => {
    if (Object.values(filters).some(value => value !== null)) {
      setIsExpanded(true);
    }
  }, [filters]);

  // Update active preset when filters change
  useEffect(() => {
    const matchingPreset = FILTER_PRESETS.find(preset => 
      preset.filters.beachView === filters.beachView &&
      preset.filters.minBedrooms === filters.minBedrooms &&
      preset.filters.minBathrooms === filters.minBathrooms &&
      preset.filters.minCapacity === filters.minCapacity
    );
    
    if (matchingPreset) {
      setActivePreset(matchingPreset.id);
    } else {
      setActivePreset('custom');
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

  const applyPreset = (presetId: string) => {
    const preset = FILTER_PRESETS.find(p => p.id === presetId);
    if (preset) {
      setFilters(preset.filters);
      onFilterChange(preset.filters);
      setActivePreset(presetId);
    }
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
    setActivePreset('all');
  };

  const isFiltersApplied = Object.values(filters).some((value) => value !== null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Count active filters for badge display
  const activeFilterCount = Object.values(filters).filter(value => value !== null).length;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8 transition-all duration-300 hover:shadow-xl">
      {/* Filter Header */}
      <div 
        className="flex justify-between items-center p-6 cursor-pointer border-b border-gray-100" 
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
        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-900 mr-3">{t('filter.title')}</h2>
          {activeFilterCount > 0 && (
            <span className="inline-flex items-center justify-center w-6 h-6 bg-blue-600 text-white text-xs font-medium rounded-full">
              {activeFilterCount}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full">
            {filteredCount} {t('filter.of')} {totalProperties}
          </span>
          <div
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label={isExpanded ? t('filter.collapse') : t('filter.expand')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Quick Filter Presets */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-gray-100 px-6 py-4"
          >
            <div className="flex flex-wrap gap-2">
              {FILTER_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  onClick={() => applyPreset(preset.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activePreset === preset.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {t(preset.labelKey)}
                </button>
              ))}
              {activePreset === 'custom' && (
                <span className="px-4 py-2 rounded-full text-sm font-medium bg-blue-600 text-white shadow-md">
                  {t('filter.presets.custom')}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Filter Options */}
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Beach View Filter */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <label className="block text-sm font-medium text-gray-700 mb-3">{t('filter.beachView')}</label>
                <div className="flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFilterChange('beachView', true);
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg border transition-all duration-200 ${
                      filters.beachView === true
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    aria-pressed={filters.beachView === true}
                  >
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      {t('filter.yes')}
                    </div>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleFilterChange('beachView', false);
                    }}
                    className={`flex-1 py-2 px-4 rounded-lg border transition-all duration-200 ${
                      filters.beachView === false
                        ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                    aria-pressed={filters.beachView === false}
                  >
                    <div className="flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                        <path d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                      </svg>
                      {t('filter.no')}
                    </div>
                  </button>
                </div>
              </div>

              {/* Capacity Filter */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">{t('filter.capacity')}</label>
                  {filters.minCapacity && (
                    <span className="text-sm font-medium text-blue-600">{filters.minCapacity}+ {t('property.capacity')}</span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {[2, 4].map((num) => (
                    <button
                      key={`capacity-${num}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFilterChange('minCapacity', num);
                      }}
                      className={`py-2 px-4 rounded-lg border transition-all duration-200 ${
                        filters.minCapacity === num
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      aria-pressed={filters.minCapacity === num}
                    >
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                        </svg>
                        {num}+ {t('property.capacity')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedrooms Filter */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">{t('filter.bedrooms')}</label>
                  {filters.minBedrooms && (
                    <span className="text-sm font-medium text-blue-600">{filters.minBedrooms}+ {t('property.bedrooms')}</span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {[1, 2].map((num) => (
                    <button
                      key={`bedroom-${num}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFilterChange('minBedrooms', num);
                      }}
                      className={`py-2 px-4 rounded-lg border transition-all duration-200 ${
                        filters.minBedrooms === num
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      aria-pressed={filters.minBedrooms === num}
                    >
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
                        </svg>
                        {num}+ {t('property.bedrooms')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bathrooms Filter */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <label className="block text-sm font-medium text-gray-700">{t('filter.bathrooms')}</label>
                  {filters.minBathrooms && (
                    <span className="text-sm font-medium text-blue-600">{filters.minBathrooms}+ {t('property.bathrooms')}</span>
                  )}
                </div>
                <div className="flex flex-col gap-3">
                  {[1, 2].map((num) => (
                    <button
                      key={`bathroom-${num}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleFilterChange('minBathrooms', num);
                      }}
                      className={`py-2 px-4 rounded-lg border transition-all duration-200 ${
                        filters.minBathrooms === num
                          ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                      aria-pressed={filters.minBathrooms === num}
                    >
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                        </svg>
                        {num}+ {t('property.bathrooms')}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Reset Filters Button */}
            {isFiltersApplied && (
              <div className="flex justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    resetFilters();
                  }}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center bg-blue-50 hover:bg-blue-100 px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 mr-2"
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
        )}
      </AnimatePresence>
    </div>
  );
} 