'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 rtl">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">404 - העמוד לא נמצא</h2>
        <p className="text-gray-600 mb-6">
          אנחנו מצטערים, אבל העמוד שחיפשת לא קיים.
        </p>
        <Link 
          href="/" 
          className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md inline-block"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
} 