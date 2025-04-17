'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaCheckCircle, FaWhatsapp, FaTools, FaCog, FaHardHat, FaQuestionCircle } from 'react-icons/fa';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    productType: '',
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
          productType: '',
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
              המומחים לקידוח יהלום - כאן לעזור לכם למצוא את הפתרון המושלם
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
                        תודה שפנית אלינו! נציג יחזור אליך בהקדם האפשרי. אנו מתחייבים לתת מענה מקצועי לכל שאלה בנושא קידוח יהלום.
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
                        <option value="product-inquiry">התייעצות לגבי בחירת מוצר</option>
                        <option value="technical-support">תמיכה טכנית ועצות מקצועיות</option>
                        <option value="order-tracking">מעקב אחר הזמנה</option>
                        <option value="bulk-order">הזמנה בכמויות גדולות / מחירים מיוחדים</option>
                        <option value="custom-solution">פתרונות מותאמים אישית לקידוח</option>
                        <option value="other">אחר</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                        סוג מוצר
                      </label>
                      <select
                        id="productType"
                        name="productType"
                        value={formData.productType}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      >
                        <option value="">בחר סוג מוצר (אופציונלי)</option>
                        <option value="wet-drilling">כוסות קידוח יהלום לקידוח רטוב</option>
                        <option value="dry-drilling">כוסות קידוח יהלום לקידוח יבש/ואקום</option>
                        <option value="special-bits">כוסות קידוח מיוחדות (Arix, וכו')</option>
                        <option value="concrete-saw-blades">מסורי יהלום לבטון ובטון מזוין</option>
                        <option value="stone-saw-blades">מסורי יהלום לאבן וגרניט</option>
                        <option value="drilling-machines">מכונות קידוח</option>
                        <option value="accessories">אביזרים נלווים</option>
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
                        placeholder="פרט את שאלתך או בקשתך. ככל שתספק יותר מידע, נוכל לעזור לך טוב יותר (למשל: סוג החומר שברצונך לקדוח, קוטר הקידוח, סוג המכונה בה אתה משתמש)"
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
                      <FaWhatsapp className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">וואטסאפ</h4>
                      <a href="https://wa.me/9721234567" className="text-gray-600 hover:text-orange-600 block">050-1234567</a>
                      <p className="text-sm text-gray-500 mt-1">מענה מהיר לשאלות טכניות</p>
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

            {/* Expert Support Section */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-6 border-b border-gray-200 pb-4 text-gray-800">
                  תמיכה מקצועית
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-3 shrink-0">
                      <FaTools className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">ייעוץ טכני</h4>
                      <p className="text-gray-600 text-sm">מומחים בתחום קידוח היהלום זמינים לעזור בבחירת כוסות קידוח, מסורים ואביזרים מתאימים לצרכים שלך</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-3 shrink-0">
                      <FaCog className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">פתרונות מותאמים אישית</h4>
                      <p className="text-gray-600 text-sm">אנו מספקים פתרונות ייחודיים לאתגרי קידוח מורכבים - צור קשר לדיון בצרכים הספציפיים שלך</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-orange-100 rounded-full p-2 ml-3 shrink-0">
                      <FaHardHat className="text-orange-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">תמיכה לקבלנים</h4>
                      <p className="text-gray-600 text-sm">שירות מיוחד לקבלנים ואנשי מקצוע - הנחות כמות, אספקה מהירה ותמיכה בפרויקטים גדולים</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Teaser */}
            <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
              <div className="flex items-start">
                <FaQuestionCircle className="text-orange-600 text-xl ml-3 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">שאלות נפוצות</h4>
                  <p className="text-gray-600 text-sm mb-3">למידע על סוגי קידוח יהלום, בחירת כוסות קידוח, והמלצות מקצועיות, בקר בעמוד השאלות הנפוצות שלנו.</p>
                  <Link 
                    href="/faq"
                    className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center"
                  >
                    לשאלות נפוצות
                    <FaArrowLeft className="mr-1 text-sm" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-96 bg-gray-200 flex items-center justify-center">
            <p className="text-gray-500">מפת מיקום החנות תוצג כאן</p>
          </div>
        </div>
      </div>
    </div>
  );
} 