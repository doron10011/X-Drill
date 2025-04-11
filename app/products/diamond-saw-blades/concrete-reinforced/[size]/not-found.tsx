import Link from 'next/link';

export default function ConcreteSawBladeNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4 text-center">
      <h1 className="text-3xl font-bold mb-4">מוצר לא נמצא</h1>
      <p className="text-gray-600 mb-6">מצטערים, דיסק היהלום שחיפשת אינו קיים במערכת שלנו.</p>
      <Link 
        href="/products/diamond-saw-blades/concrete-reinforced" 
        className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-md font-medium"
      >
        חזרה לדיסקים לבטון ובטון מזוין
      </Link>
    </div>
  );
} 