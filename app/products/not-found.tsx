'use client';

import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">מוצר לא נמצא</h2>
        <p className="text-gray-600 mb-8">המוצר שחיפשת אינו קיים או שהוסר מהמלאי.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/products"
            className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors"
          >
            חזרה לכל המוצרים
          </Link>
          <Link
            href="/"
            className="px-5 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-md transition-colors"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
} 