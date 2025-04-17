'use client';

import { useState } from 'react';
import { FaFilter } from 'react-icons/fa';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

interface PriceRange {
  min: number;
  max: number;
}

interface ProductFilterProps {
  filterGroups: FilterGroup[];
  priceRange: PriceRange;
  onFilterChange: (filters: any) => void;
  className?: string;
}

export default function ProductFilter({ filterGroups, priceRange, onFilterChange, className = '' }: ProductFilterProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{[key: string]: string[]}>({});
  const [priceMin, setPriceMin] = useState<number | ''>('');
  const [priceMax, setPriceMax] = useState<number | ''>('');

  const handleFilterChange = (groupId: string, optionId: string) => {
    setSelectedFilters(prev => {
      const newFilters = { ...prev };
      
      if (!newFilters[groupId]) {
        newFilters[groupId] = [];
      }
      
      if (newFilters[groupId].includes(optionId)) {
        newFilters[groupId] = newFilters[groupId].filter(id => id !== optionId);
      } else {
        newFilters[groupId].push(optionId);
      }
      
      return newFilters;
    });
  };

  const handleApplyFilters = () => {
    onFilterChange({
      filters: selectedFilters,
      price: {
        min: priceMin === '' ? priceRange.min : priceMin,
        max: priceMax === '' ? priceRange.max : priceMax
      }
    });
  };

  const handleClearFilters = () => {
    setSelectedFilters({});
    setPriceMin('');
    setPriceMax('');
    onFilterChange({
      filters: {},
      price: {
        min: priceRange.min,
        max: priceRange.max
      }
    });
  };

  return (
    <div className={`bg-white rounded-lg shadow ${className}`}>
      {/* Mobile Filter Toggle */}
      <div className="md:hidden p-4 border-b">
        <button
          className="flex items-center justify-between w-full"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="font-medium">סינון מוצרים</span>
          <FaFilter />
        </button>
      </div>

      {/* Filter Content */}
      <div className={`p-4 md:p-6 ${isOpen ? 'block' : 'hidden md:block'}`}>
        <div className="hidden md:block mb-4">
          <h3 className="text-lg font-semibold mb-2">סינון מוצרים</h3>
          <div className="h-0.5 w-16 bg-orange-500"></div>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <h4 className="font-medium mb-3">טווח מחירים</h4>
          <div className="flex items-center">
            <input
              type="number"
              placeholder={`${priceRange.min}`}
              className="w-1/2 py-2 px-3 border rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500"
              min={priceRange.min}
              max={priceRange.max}
              value={priceMin}
              onChange={(e) => setPriceMin(e.target.value ? Number(e.target.value) : '')}
            />
            <span className="px-2">-</span>
            <input
              type="number"
              placeholder={`${priceRange.max}`}
              className="w-1/2 py-2 px-3 border rounded-r-md focus:outline-none focus:ring-1 focus:ring-orange-500"
              min={priceRange.min}
              max={priceRange.max}
              value={priceMax}
              onChange={(e) => setPriceMax(e.target.value ? Number(e.target.value) : '')}
            />
          </div>
        </div>

        {/* Filter Groups */}
        {filterGroups.map((group) => (
          <div key={group.id} className="mb-6">
            <h4 className="font-medium mb-3">{group.name}</h4>
            <div className="space-y-2">
              {group.options.map((option) => (
                <label key={option.id} className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                    checked={selectedFilters[group.id]?.includes(option.id) || false}
                    onChange={() => handleFilterChange(group.id, option.id)}
                  />
                  <span className="mr-2">{option.label}</span>
                </label>
              ))}
            </div>
          </div>
        ))}

        {/* Filter Buttons */}
        <div className="flex flex-col space-y-2">
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded"
            onClick={handleApplyFilters}
          >
            החל סינון
          </button>
          <button
            className="border border-gray-300 hover:bg-gray-100 py-2 px-4 rounded"
            onClick={handleClearFilters}
          >
            נקה סינון
          </button>
        </div>
      </div>
    </div>
  );
} 