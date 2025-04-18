'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaCalendarAlt, FaUser, FaShare, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

// Blog posts data with actual image paths
const blogPosts = [
  {
    id: "1",
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
    image: '/images/Diamond-Core-Drill-Bit/ChatGPT Image Apr 11, 2025, 05_29_14 PM.png',
  },
  {
    id: "2",
    title: 'תחזוקת כלי קידוח יהלום',
    content: `
      <p>תחזוקה נכונה של כלי קידוח יהלום תבטיח אורך חיים מקסימלי וביצועים אופטימליים. במדריך זה נפרט את שיטות התחזוקה המומלצות.</p>
      
      <h2>המלצות לתחזוקת כלי קידוח יהלום</h2>
      
      <h3>1. ניקוי לאחר השימוש</h3>
      <p>תמיד נקו את הכלים לאחר השימוש כדי למנוע הצטברות של אבק ולכלוך שעלולים לפגוע בביצועים.</p>
      
      <h3>2. שימון והחלפת חלקים</h3>
      <p>שמנו את החלקים הנעים באופן קבוע והחליפו חלקים שחוקים בזמן כדי למנוע נזק נוסף למכשיר.</p>
      
      <h3>3. בדיקות תקופתיות</h3>
      <p>בצעו בדיקות תקופתיות של הכלים לאיתור בעיות מוקדם ככל האפשר:</p>
      <ul>
        <li>בדקו סימני בלאי בסגמנטים</li>
        <li>וודאו שאין סדקים או עיוותים בגוף הכלי</li>
        <li>בדקו את תקינות החיבורים</li>
      </ul>
    `,
    date: '2024-03-10',
    author: 'שלומי לוי',
    category: 'תחזוקה',
    image: '/images/vacum-drillers/ChatGPT Image Apr 11, 2025, 04_38_35 PM.png',
  },
  {
    id: "3",
    title: 'יתרונות השימוש במסורי יהלום',
    content: `
      <p>מסורי יהלום מציעים יתרונות רבים בעבודות חיתוך מקצועיות. בפוסט זה נסקור את היתרונות המרכזיים של שימוש במסורי יהלום איכותיים.</p>
      
      <h2>יתרונות מרכזיים של מסורי יהלום</h2>
      
      <h3>1. דיוק גבוה</h3>
      <p>מסורי יהלום מאפשרים חיתוך מדויק יותר בהשוואה לאמצעי חיתוך אחרים, מה שמבטיח תוצאות מקצועיות.</p>
      
      <h3>2. מגוון שימושים</h3>
      <p>ניתן להשתמש במסורי יהלום לחיתוך:</p>
      <ul>
        <li>בטון</li>
        <li>אבן טבעית</li>
        <li>אבן מלאכותית</li>
        <li>קרמיקה ופורצלן</li>
      </ul>
      
      <h3>3. עמידות ואורך חיים</h3>
      <p>מסורי יהלום איכותיים מציעים אורך חיים ארוך יותר ועמידות גבוהה, מה שהופך אותם לכלכליים בטווח הארוך.</p>
    `,
    date: '2024-03-05',
    author: 'רונן ישראלי',
    category: 'ביקורות מוצרים',
    image: '/images/saw-blade/ChatGPT Image Apr 11, 2025, 05_20_38 PM.png',
  },
  {
    id: "4",
    title: 'חידושים בתחום כלי הקידוח',
    content: `
      <p>תחום כלי הקידוח וחיתוך היהלום ממשיך להתפתח עם חידושים טכנולוגיים מרשימים. בפוסט זה נסקור את החידושים האחרונים בתחום.</p>
      
      <h2>חידושים טכנולוגיים בתחום כלי הקידוח</h2>
      
      <h3>1. סגמנטים בטכנולוגיה מתקדמת</h3>
      <p>סגמנטים חדשים עם תרכובות יהלום משופרות מאפשרים קידוח מהיר יותר ואורך חיים ארוך יותר של הכלים.</p>
      
      <h3>2. מערכות קירור מתקדמות</h3>
      <p>מערכות קירור חדשניות מפחיתות את החום בזמן העבודה, משפרות את הביצועים ומאריכות את חיי הכלי.</p>
      
      <h3>3. קידוח חכם</h3>
      <p>טכנולוגיות חדשות מאפשרות:</p>
      <ul>
        <li>בקרת לחץ אוטומטית</li>
        <li>חיישנים לזיהוי חומרים</li>
        <li>התאמת מהירות אוטומטית לסוג החומר</li>
      </ul>
    `,
    date: '2024-02-28',
    author: 'אורי דוד',
    category: 'חדשות',
    image: '/images/Diamond-Core-Drill-Bit/ChatGPT Image Apr 11, 2025, 04_45_12 PM.png',
  },
];

export default function BlogPost({ params }: { params: { id: string } }) {
  const [post, setPost] = useState(blogPosts[0]);
  const [showShareMenu, setShowShareMenu] = useState(false);
  
  // Find the post based on the id param
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === params.id);
    if (foundPost) {
      setPost(foundPost);
    }
  }, [params.id]);

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
                <Image 
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-contain bg-white p-4"
                />
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
                        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md"
                      >
                        <FaShare />
                        שתף
                      </button>
                      {showShareMenu && (
                        <div className="absolute left-0 top-full mt-2 bg-white rounded-md shadow-lg overflow-hidden z-10">
                          <a
                            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            <FaFacebook className="ml-2 text-blue-600" />
                            Facebook
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100"
                          >
                            <FaTwitter className="ml-2 text-blue-400" />
                            Twitter
                          </a>
                          <a
                            href={`https://wa.me/?text=${encodeURIComponent(post.title + ' ' + (typeof window !== 'undefined' ? window.location.href : ''))}`}
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
              
              {/* Related blog posts preview */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4">מאמרים קשורים</h3>
                <div className="space-y-4">
                  {blogPosts
                    .filter(p => p.id !== params.id && p.category === post.category)
                    .slice(0, 2)
                    .map(relatedPost => (
                      <div key={relatedPost.id} className="flex items-start">
                        <div className="w-16 h-16 bg-gray-200 relative flex-shrink-0">
                          <Image 
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="mr-3">
                          <Link
                            href={`/blog/${relatedPost.id}`}
                            className="block font-medium hover:text-orange-600 mb-1 text-sm"
                          >
                            {relatedPost.title}
                          </Link>
                          <span className="text-xs text-gray-500">
                            {new Date(relatedPost.date).toLocaleDateString('he-IL')}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 