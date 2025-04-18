import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { productCategories } from '@/app/data/products';

export default function Footer() {
  // Get categories
  const drillBitsCategory = productCategories.find(cat => cat.id === 'diamond-core-drill-bits');
  const sawBladesCategory = productCategories.find(cat => cat.id === 'diamond-saw-blades');
  const accessoriesCategory = productCategories.find(cat => cat.id === 'accessories');
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 text-center md:text-right">
              <h3 className="text-xl font-bold text-white">הירשמו לניוזלטר שלנו</h3>
              <p className="text-white opacity-80">קבלו עדכונים על מוצרים חדשים והנחות מיוחדות</p>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3">
              <form className="flex">
                <input
                  type="email"
                  placeholder="כתובת האימייל שלך"
                  className="px-4 py-2 w-full rounded-r-md focus:outline-none text-right"
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-4 py-2 rounded-l-md hover:bg-gray-800 transition duration-300"
                >
                  הרשמה
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-right">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">X-Drill</h3>
            <p className="text-gray-400 mb-6">
              חנות מקוונת לכלי קידוח יהלום מקצועיים, המיועדים לקבלנים, שיפוצניקים ובעלי מקצוע בישראל
            </p>
            <div className="flex space-x-4 justify-end">
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full">
                <FaWhatsapp className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white bg-gray-800 p-2 rounded-full">
                <FaFacebookF className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">מוצרים</h3>
            <ul className="space-y-3 text-right">
              <li>
                <Link href={`/products/${drillBitsCategory?.slug}`} className="text-gray-400 hover:text-orange-400 transition duration-300">
                  {drillBitsCategory?.name}
                </Link>
              </li>
              <li>
                <Link href={`/products/${sawBladesCategory?.slug}`} className="text-gray-400 hover:text-orange-400 transition duration-300">
                  {sawBladesCategory?.name}
                </Link>
              </li>
              <li>
                <Link href={`/products/${accessoriesCategory?.slug}`} className="text-gray-400 hover:text-orange-400 transition duration-300">
                  {accessoriesCategory?.name}
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  כל המוצרים
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">מידע</h3>
            <ul className="space-y-3 text-right">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  בלוג מקצועי
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  שאלות נפוצות
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  מדיניות משלוחים
                </Link>
              </li>
              <li>
                <Link href="/returns" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  החזרות והחלפות
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">צור קשר</h3>
            <ul className="space-y-3 text-right">
              <li className="flex items-center justify-start">
                <FaPhone className="text-orange-500 ml-2" />
                <span className="text-gray-400">03-1234567</span>
              </li>
              <li className="flex items-center justify-start">
                <FaEnvelope className="text-orange-500 ml-2" />
                <span className="text-gray-400">info@x-drill.co.il</span>
              </li>
              <li className="flex items-center justify-start">
                <FaMapMarkerAlt className="text-orange-500 ml-2" />
                <span className="text-gray-400">רחוב התעשייה 1, תל אביב</span>
              </li>
              <li className="flex items-center justify-start">
                <FaClock className="text-orange-500 ml-2" />
                <span className="text-gray-400">א'-ה' 09:00-18:00 | ו' 09:00-13:00</span>
              </li>
            </ul>
            <div className="mt-6">
              <Link 
                href="/contact" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md inline-block transition duration-300 text-center"
              >
                צור קשר
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-right">
              © {new Date().getFullYear()} X-Drill. כל הזכויות שמורות.
            </p>
            <div className="mt-4 md:mt-0">
              <img 
                src="/payment-methods.png" 
                alt="אמצעי תשלום" 
                className="h-8"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 