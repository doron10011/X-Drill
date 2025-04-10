'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft } from '@react-icons/all-files/fa/FaArrowLeft';
import { FaPhone } from '@react-icons/all-files/fa/FaPhone';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import { FaMapMarkerAlt } from '@react-icons/all-files/fa/FaMapMarkerAlt';
import { FaClock } from '@react-icons/all-files/fa/FaClock';
import { FaCheckCircle } from '@react-icons/all-files/fa/FaCheckCircle';
import { FaWhatsapp } from '@react-icons/all-files/fa/FaWhatsapp';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isSubmitting: false,
    error: null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your server or a service
    setFormStatus({ isSubmitting: true, isSubmitted: false, error: null });
    
    // Simulate server request
    setTimeout(() => {
      // Successful submission
      setFormStatus({ isSubmitting: false, isSubmitted: true, error: null });
      console.log('Form submitted:', formData);
      
      // Reset form after successful submission
      if (!formStatus.error) {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 animate-fadeIn">
      {/* Hero Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">צור קשר</h1>
            <p className="text-xl text-gray-300">
              אנחנו כאן לענות על כל שאלה ולעזור לכם למצוא את הפתרון המושלם
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
            <li className="text-gray-700 font-medium">צור קשר</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-6 border-b border-gray-200 pb-4 text-gray-800">שלח לנו הודעה</h2>
                
                {formStatus.isSubmitted ? (
                  <div className="bg-green-50 border-r-4 border-green-500 p-6 flex items-start">
                    <FaCheckCircle className="text-green-600 text-2xl ml-4 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-green-700">ההודעה נשלחה בהצלחה!</h3>
                      <p className="text-green-600">
                        תודה שפנית אלינו! נציג יחזור אליך בהקדם האפשרי.
                      </p>
                      <button 
                        onClick={() => setFormStatus({isSubmitted: false, isSubmitting: false, error: null})}
                        className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                      >
                        שלח הודעה נוספת
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          שם מלא <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          טלפון <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        אימייל <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        נושא <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      >
                        <option value="">בחר נושא</option>
                        <option value="product">שאלה על מוצר</option>
                        <option value="order">מעקב הזמנה</option>
                        <option value="technical">תמיכה טכנית</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        הודעה <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus.isSubmitting}
                      className={`btn btn-primary py-3 px-8 font-semibold text-lg w-full flex items-center justify-center ${formStatus.isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {formStatus.isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-3"></div>
                          שולח...
                        </>
                      ) : (
                        'שלח הודעה'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-4 text-gray-800">
                  פרטי התקשרות
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-4 shrink-0">
                      <FaPhone className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">טלפון</h4>
                      <a href="tel:03-1234567" className="text-gray-600 hover:text-orange-600 block">03-1234567</a>
                      <a href="tel:050-1234567" className="text-gray-600 hover:text-orange-600 block">050-1234567</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-4 shrink-0">
                      <FaEnvelope className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">אימייל</h4>
                      <a href="mailto:info@x-drill.co.il" className="text-gray-600 hover:text-orange-600">info@x-drill.co.il</a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-4 shrink-0">
                      <FaMapMarkerAlt className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">כתובת</h4>
                      <p className="text-gray-600">רחוב התעשייה 1, תל אביב</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-4 shrink-0">
                      <FaClock className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">שעות פעילות</h4>
                      <p className="text-gray-600">א'-ה': 08:00-17:00</p>
                      <p className="text-gray-600">ו': 08:00-13:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 border-b border-gray-200 pb-4 text-gray-800">
                  צור קשר מהיר
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  <a 
                    href="https://wa.me/972501234567" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-md flex items-center justify-center"
                  >
                    <FaWhatsapp className="ml-2 text-xl" />
                    שלח הודעת וואטסאפ
                  </a>
                  <a 
                    href="tel:+972501234567" 
                    className="bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-md flex items-center justify-center"
                  >
                    <FaPhone className="ml-2" />
                    התקשר עכשיו
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-4 text-gray-800">
                  מפת הגעה
                </h3>
                <div className="h-64 bg-gray-200 rounded-lg relative overflow-hidden">
                  {/* You would insert an actual map iframe here */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-gray-500">מפה תוצג כאן</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 