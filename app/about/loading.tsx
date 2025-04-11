export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="inline-block animate-spin border-4 border-gray-300 border-t-orange-600 rounded-full h-12 w-12 mb-4"></div>
        <p className="text-gray-600">טוען...</p>
      </div>
    </div>
  );
} 