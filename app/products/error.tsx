'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

export default function ProductsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <FaExclamationTriangle className="text-orange-600 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-red-600 mb-4">שגיאה בטעינת המוצרים</h2>
        <p className="text-gray-600 mb-6">אירעה שגיאה בטעינת עמוד המוצרים. אנא נסו שוב.</p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 sm:space-x-reverse justify-center">
          <button
            onClick={() => reset()}
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
          >
            נסה שוב
          </button>
          <Link href="/" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md flex items-center justify-center">
            <FaArrowLeft className="ml-2" />
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
} 