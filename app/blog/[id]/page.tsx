'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaShare, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

export default function BlogPost({ params }: { params: { id: string } }) {
  // Mock data - replace with actual data from your backend
  const post = {
    id: params.id,
    title: 'כיצד לבחור את כוס הקידוח הנכונה',
    content: `
      <p>בחירת כוס קידוח יהלום מתאימה היא קריטית להצלחת העבודה. במדריך זה נסביר כיצד לבחור את הכוס המתאימה ביותר לצרכים שלכם.</p>
      
      <h2>גורמים מרכזיים בבחירת כוס קידוח</h2>
      
      <h3>1. סוג החומר</h3>
      <p>כל חומר דורש סוג שונה של כוס קידוח:</p>
      <ul>
        <li>בטון רגיל - כוסות עם חיתוך מהיר</li>
        <li>בטון מזוין - כוסות עם חיתוך איטי ועמידות גבוהה</li>
        <li>אספלט - כוסות עם חיתוך מהיר ועמידות לחום</li>
      </ul>
      
      <h3>2. קוטר הקידוח</h3>
      <p>הקוטר משפיע על:</p>
      <ul>
        <li>מהירות הקידוח</li>
        <li>עומק הקידוח האפשרי</li>
        <li>עוצמת המקדחה הנדרשת</li>
      </ul>
      
      <h3>3. סוג הקידוח</h3>
      <p>קידוח רטוב או יבש:</p>
      <ul>
        <li>קידוח רטוב - מתאים לעבודות גדולות, מפחית חום ואבק</li>
        <li>קידוח יבש - מתאים לעבודות קטנות, נוח יותר לשימוש</li>
      </ul>
    `,
    date: '2024-03-15',
    author: 'דוד כהן',
    category: 'טיפים מקצועיים',
    image: '/images/blog/drill-bit-selection.jpg',
  };

  const [showShareMenu, setShowShareMenu] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            <div className="flex items-center justify-center text-gray-300">
              <span className="flex items-center mx-4">
                <FaCalendarAlt className="ml-1" />
                {new Date(post.date).toLocaleDateString('he-IL')}
              </span>
              <span className="flex items-center mx-4">
                <FaUser className="ml-1" />
                {post.author}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center">
            <li>
              <Link href="/" className="text-gray-500 hover:text-orange-600">
                דף הבית
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href="/blog" className="text-gray-500 hover:text-orange-600">
                בלוג
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700 font-medium">{post.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-96 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-500">תמונת פוסט</span>
                </div>
              </div>
              <div className="p-8">
                <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
                
                {/* Share Buttons */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">שתף את המאמר</h3>
                    <div className="relative">
                      <button
                        onClick={() => setShowShareMenu(!showShareMenu)}
                        className="flex items-center text-gray-600 hover:text-orange-600"
                      >
                        <FaShare className="ml-1" />
                        שתף
                      </button>
                      {showShareMenu && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            <FaFacebook className="ml-2" />
                            Facebook
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            <FaTwitter className="ml-2" />
                            Twitter
                          </a>
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + window.location.href)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            <FaWhatsapp className="ml-2" />
                            WhatsApp
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-4">קטגוריות</h3>
              <div className="space-y-2">
                {['טיפים מקצועיים', 'תחזוקה', 'חדשות', 'ביקורות מוצרים'].map((category) => (
                  <Link
                    key={category}
                    href={`/blog?category=${encodeURIComponent(category)}`}
                    className={`block px-4 py-2 rounded-md ${
                      post.category === category
                        ? 'bg-orange-500 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 