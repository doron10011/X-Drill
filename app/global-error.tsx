'use client';

import { useEffect } from 'react';

export default function GlobalError({
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
    <html lang="he" dir="rtl">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-4">שגיאה מערכתית</h2>
            <p className="text-gray-600 mb-6">
              אירעה שגיאה מערכתית. אנו מתנצלים על אי הנוחות. צוות הפיתוח שלנו עובד על פתרון.
            </p>
            <button
              onClick={() => reset()}
              className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md"
            >
              נסה שוב
            </button>
          </div>
        </div>
      </body>
    </html>
  );
} 