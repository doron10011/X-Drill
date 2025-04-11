'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full text-center">
        <FaExclamationTriangle className="text-orange-600 text-5xl mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">אירעה שגיאה</h2>
        <p className="text-gray-600 mb-6">
          לא ניתן להציג את המוצר המבוקש. אנא נסו שוב מאוחר יותר או חזרו לדף המוצרים.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => reset()}
            className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
          >
            נסה שוב
          </button>
          <Link
            href="/products/diamond-core-drill-bits/wet-drilling"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded flex items-center justify-center"
          >
            <FaArrowLeft className="ml-2" />
            חזרה למוצרים
          </Link>
        </div>
      </div>
    </div>
  );
} 