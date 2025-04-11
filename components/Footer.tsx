import Link from 'next/link';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
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
              <form className="flex flex-col sm:flex-row">
                <input
                  type="email"
                  placeholder="כתובת האימייל שלך"
                  className="px-4 py-2 w-full rounded-r-md sm:rounded-r-none rounded-md mb-2 sm:mb-0 focus:outline-none text-right"
                />
                <button
                  type="submit"
                  className="bg-gray-900 text-white px-4 py-2 rounded-l-md sm:rounded-l-md rounded-md hover:bg-gray-800 transition duration-300"
                >
                  הרשמה
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-right">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-orange-500">X-Drill</h3>
            <p className="text-gray-400 mb-6">
              חנות מקוונת לכלי קידוח יהלום מקצועיים, המיועדים לקבלנים, שיפוצניקים ובעלי מקצוע בישראל
            </p>
            <div className="flex space-x-4 justify-center md:justify-end space-x-reverse">
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
            <ul className="space-y-3 text-center md:text-right">
              <li>
                <Link href="/products/diamond-core-drill-bits" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  כוסות קידוח יהלום
                </Link>
              </li>
              <li>
                <Link href="/products/diamond-saw-blades" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  מסורי יהלום
                </Link>
              </li>
              <li>
                <Link href="/products/accessories" className="text-gray-400 hover:text-orange-400 transition duration-300">
                  אביזרים נלווים
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
            <ul className="space-y-3 text-center md:text-right">
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
            <ul className="space-y-3">
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-400 mr-2">03-1234567</span>
                <FaPhone className="text-orange-500" />
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-400 mr-2">info@x-drill.co.il</span>
                <FaEnvelope className="text-orange-500" />
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-400 mr-2">רחוב התעשייה 1, תל אביב</span>
                <FaMapMarkerAlt className="text-orange-500" />
              </li>
              <li className="flex items-center justify-center md:justify-end">
                <span className="text-gray-400 mr-2">א'-ה' 09:00-18:00 | ו' 09:00-13:00</span>
                <FaClock className="text-orange-500" />
              </li>
            </ul>
            <div className="mt-6 flex justify-center md:justify-end">
              <Link 
                href="/contact" 
                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md inline-block transition duration-300 text-center w-full sm:w-auto"
              >
                צור קשר
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-right mb-4 md:mb-0">
              © {new Date().getFullYear()} X-Drill. כל הזכויות שמורות.
            </p>
            <div>
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