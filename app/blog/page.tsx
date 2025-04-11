'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Mock blog posts data - replace with actual data from your backend
  const blogPosts = [
    {
      id: 1,
      title: 'כיצד לבחור את כוס הקידוח הנכונה',
      excerpt: 'מדריך מקיף לבחירת כוסות קידוח יהלום בהתאם לסוג העבודה והחומר',
      date: '2024-03-15',
      author: 'דוד כהן',
      category: 'טיפים מקצועיים',
      image: '/images/blog/drill-bit-selection.jpg',
    },
    {
      id: 2,
      title: 'תחזוקת כלי קידוח יהלום',
      excerpt: 'כל מה שצריך לדעת על תחזוקה נכונה של כלי קידוח יהלום',
      date: '2024-03-10',
      author: 'שלומי לוי',
      category: 'תחזוקה',
      image: '/images/blog/drill-maintenance.jpg',
    },
    // Add more blog posts as needed
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
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-gray-500">תמונת פוסט</span>
                    </div>
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