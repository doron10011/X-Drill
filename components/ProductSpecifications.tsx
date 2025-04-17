'use client';

import { FaCheck } from 'react-icons/fa';

interface Specification {
  label: string;
  value: string | number;
}

interface SpecificationGroup {
  title?: string;
  specs: Specification[];
}

interface ProductSpecificationsProps {
  groups: SpecificationGroup[];
  className?: string;
}

export default function ProductSpecifications({ groups, className = '' }: ProductSpecificationsProps) {
  return (
    <div className={`bg-white rounded-lg shadow p-6 ${className}`}>
      {groups.map((group, groupIndex) => (
        <div key={groupIndex} className={groupIndex > 0 ? 'mt-6' : ''}>
          {group.title && <h3 className="text-lg font-semibold mb-3">{group.title}</h3>}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
            {group.specs.map((spec, specIndex) => (
              <div key={specIndex} className="flex items-center py-1">
                <FaCheck className="text-green-500 ml-2 flex-shrink-0" />
                <div>
                  <span className="font-medium">{spec.label}: </span>
                  <span className="text-gray-700">{spec.value}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
} 