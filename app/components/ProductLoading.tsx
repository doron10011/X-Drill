'use client';

import { FaCircleNotch } from 'react-icons/fa';

export default function ProductLoading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <FaCircleNotch className="text-orange-600 text-4xl animate-spin mb-4" />
      <h2 className="text-xl font-semibold text-gray-700">טוען פרטי מוצר...</h2>
    </div>
  );
} 