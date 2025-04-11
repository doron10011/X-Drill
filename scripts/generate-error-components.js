const fs = require('fs');
const path = require('path');

// Base templates for components
const errorTemplate = `'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
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
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">שגיאה בטעינת העמוד</h2>
        <p className="text-gray-600 mb-8">אירעה שגיאה בטעינת העמוד. אנא נסו שוב מאוחר יותר.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={reset}
            className="px-5 py-3 bg-orange-600 hover:bg-orange-700 text-white rounded-md transition-colors"
          >
            נסה שוב
          </button>
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
}`;

const loadingTemplate = `export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-block animate-spin border-4 border-gray-300 border-t-orange-600 rounded-full h-12 w-12 mb-4"></div>
        <p className="text-gray-600">טוען...</p>
      </div>
    </div>
  );
}`;

const notFoundTemplate = `'use client';

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
}`;

// Function to get all subdirectories recursively
function getDirectories(srcpath) {
    return fs.readdirSync(srcpath)
        .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
        .map(file => path.join(srcpath, file));
}

// Function to get all directories recursively
function getAllDirectories(dir) {
    let dirs = [dir];
    getDirectories(dir).forEach(subdir => {
        dirs = dirs.concat(getAllDirectories(subdir));
    });
    return dirs;
}

// Get all directories in app/
const appDirectory = path.join(__dirname, '..', 'app');
const allDirectories = getAllDirectories(appDirectory);

// Create error components for each directory
allDirectories.forEach(dir => {
    // error.tsx
    const errorFilePath = path.join(dir, 'error.tsx');
    if (!fs.existsSync(errorFilePath)) {
        fs.writeFileSync(errorFilePath, errorTemplate);
        console.log(`Created error.tsx in ${dir}`);
    }

    // loading.tsx
    const loadingFilePath = path.join(dir, 'loading.tsx');
    if (!fs.existsSync(loadingFilePath)) {
        fs.writeFileSync(loadingFilePath, loadingTemplate);
        console.log(`Created loading.tsx in ${dir}`);
    }

    // not-found.tsx
    const notFoundFilePath = path.join(dir, 'not-found.tsx');
    if (!fs.existsSync(notFoundFilePath)) {
        fs.writeFileSync(notFoundFilePath, notFoundTemplate);
        console.log(`Created not-found.tsx in ${dir}`);
    }
});

console.log('All error components generated successfully!'); 