'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Blog posts data with actual image paths from our project
  const blogPosts = [
    {
      id: 1,
      title: 'כיצד לבחור את כוס הקידוח הנכונה',
      excerpt: 'מדריך מקיף לבחירת כוסות קידוח יהלום בהתאם לסוג העבודה והחומר',
      date: '2024-03-15',
      author: 'דוד כהן',
      category: 'טיפים מקצועיים',
      image: '/images/Diamond-Core-Drill-Bit/6.png',
    },
    {
      id: 2,
      title: 'תחזוקת כלי קידוח יהלום',
      excerpt: 'כל מה שצריך לדעת על תחזוקה נכונה של כלי קידוח יהלום',
      date: '2024-03-10',
      author: 'שלומי לוי',
      category: 'תחזוקה',
      image: '/images/vacum-drillers/6.png',
    },
    {
      id: 3,
      title: 'יתרונות השימוש במסורי יהלום',
      excerpt: 'סקירה של היתרונות המרכזיים בשימוש במסורי יהלום איכותיים לעבודות חיתוך',
      date: '2024-03-05',
      author: 'רונן ישראלי',
      category: 'ביקורות מוצרים',
      image: '/images/saw-blade/7.png',
    },
    {
      id: 4,
      title: 'חידושים בתחום כלי הקידוח',
      excerpt: 'סקירה של החידושים האחרונים בתחום כלי הקידוח והמסורים המקצועיים',
      date: '2024-02-28',
      author: 'אורי דוד',
      category: 'חדשות',
      image: '/images/Diamond-Core-Drill-Bit/6.png',
    },
  ];

  const categories = ['all', 'טיפים מקצועיים', 'תחזוקה', 'חדשות', 'ביקורות מוצרים'];

  const filteredPosts = selectedCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">בלוג</h1>
            <p className="text-xl text-gray-300">
              טיפים, מדריכים וחדשות מעולם הקידוח המקצועי
            </p>
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
            <li className="text-gray-700 font-medium">בלוג</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Search */}
              <div className="mb-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="חיפוש בבלוג..."
                    className="w-full border border-gray-300 rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <FaSearch className="absolute left-3 top-3 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">קטגוריות</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`block w-full text-right px-4 py-2 rounded-md ${
                        selectedCategory === category
                          ? 'bg-orange-500 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {category === 'all' ? 'כל הפוסטים' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blog Posts */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="h-48 bg-gray-200 relative">
                    <Image 
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <FaCalendarAlt className="ml-1" />
                        {new Date(post.date).toLocaleDateString('he-IL')}
                      </span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <FaUser className="ml-1" />
                        {post.author}
                      </span>
                    </div>
                    <h2 className="text-xl font-semibold mb-4">
                      <Link href={`/blog/${post.id}`} className="hover:text-orange-600">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <Link
                      href={`/blog/${post.id}`}
                      className="text-orange-600 hover:text-orange-700 font-medium"
                    >
                      קרא עוד
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 