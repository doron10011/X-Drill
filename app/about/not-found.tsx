'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">דף לא נמצא</h2>
        <p className="text-gray-600 mb-8">הדף שחיפשת אינו קיים או שהוסר.</p>
        <Link
          href="/"
          className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors inline-block"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
} 