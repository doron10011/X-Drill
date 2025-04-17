'use client';

import Link from 'next/link';

export default function ProductsNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 rtl">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold text-orange-600 mb-4">המוצר לא נמצא</h2>
        <p className="text-gray-600 mb-6">
          אנחנו מצטערים, אבל המוצר שחיפשת לא קיים או אינו זמין יותר.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3 sm:space-x-reverse justify-center">
          <Link 
            href="/products"
            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
          >
            צפייה בכל המוצרים
          </Link>
          <Link 
            href="/"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
          >
            חזרה לדף הבית
          </Link>
        </div>
      </div>
    </div>
  );
} 