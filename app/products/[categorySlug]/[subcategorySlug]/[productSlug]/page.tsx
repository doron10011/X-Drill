'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { FaChevronLeft, FaShoppingCart, FaCheck, FaTimes } from 'react-icons/fa';
import { getCategoryBySlug, getSubcategoryBySlug } from '../../../../data/categories';
import { getProductById, getRelatedProducts } from '../../../../data/products';
import { Category, Product, RelatedProduct, Subcategory } from '../../../../data/types';

export default function ProductPage() {
  const params = useParams();
  const router = useRouter();
  const productSlug = params.productSlug as string;
  
  const [product, setProduct] = useState<Product | undefined>(undefined);
  const [category, setCategory] = useState<Category | undefined>(undefined);
  const [subcategory, setSubcategory] = useState<Subcategory | undefined>(undefined);
  const [relatedProducts, setRelatedProducts] = useState<RelatedProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Find product by taking the slug from the URL
    // In a real app, this would be a server request using the slug
    const allProducts = require('../../../../data/products').getAllProducts();
    const foundProduct = allProducts.find((p: Product) => p.slug.endsWith(`/${productSlug}`));
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Get category and subcategory
      const cat = getCategoryBySlug(params.categorySlug as string);
      setCategory(cat);
      
      if (cat) {
        const subcat = getSubcategoryBySlug(params.categorySlug as string, params.subcategorySlug as string);
        setSubcategory(subcat);
      }
      
      // Get related products
      const related = getRelatedProducts(foundProduct.id);
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }, [productSlug, params]);

  const handleAddToCart = () => {
    // This would add the product to cart in a real app
    alert(`הוספת ${quantity} יחידות של ${product?.name} לסל הקניות`);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="spinner w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-lg">טוען...</p>
        </div>
      </div>
    );
  }

  if (!product || !category || !subcategory) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">המוצר לא נמצא</h1>
          <Link href="/products" className="text-orange-600 hover:text-orange-700">
            חזרה לעמוד המוצרים
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                דף הבית
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-700">
                מוצרים
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href={`/products/${category.slug}`} className="text-gray-500 hover:text-gray-700">
                {category.name}
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li>
              <Link href={`/products/${category.slug}/${subcategory.slug}`} className="text-gray-500 hover:text-gray-700">
                {subcategory.name}
              </Link>
            </li>
            <li>
              <span className="text-gray-500 mx-2">/</span>
            </li>
            <li className="text-gray-700">{product.name}</li>
          </ol>
        </nav>

        {/* Product Detail */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="flex flex-col">
              <div className="h-96 bg-gray-200 flex items-center justify-center mb-4 rounded">
                <span className="text-gray-500">תמונת מוצר ראשית</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((img, index) => (
                  <div key={index} className="h-20 bg-gray-200 flex items-center justify-center rounded">
                    <span className="text-gray-500 text-xs">תמונה {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              <div className="mb-6">
                {product.discount_price ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-orange-600 ml-4">₪{product.discount_price}</span>
                    <span className="text-xl line-through text-gray-500">₪{product.price}</span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold">₪{product.price}</span>
                )}
              </div>

              <div className="mb-6">
                <p className="text-gray-700 mb-4">{product.description}</p>
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 font-medium ml-2">סטטוס מלאי:</span>
                  {product.stock > 0 ? (
                    <span className="text-green-600 flex items-center">
                      <FaCheck className="ml-1" /> במלאי ({product.stock} יחידות)
                    </span>
                  ) : (
                    <span className="text-red-600 flex items-center">
                      <FaTimes className="ml-1" /> אזל מהמלאי
                    </span>
                  )}
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 font-medium ml-2">זמן אספקה:</span>
                  <span>{product.delivery_time}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="text-gray-700 font-medium ml-2">אחריות:</span>
                  <span>{product.warranty}</span>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <span className="text-gray-700 font-medium ml-4">כמות:</span>
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 border-l"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4">{quantity}</span>
                    <button
                      onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                      className="px-3 py-1 border-r"
                      disabled={quantity >= product.stock}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className={`w-full py-3 px-6 flex items-center justify-center rounded-md ${
                    product.stock > 0
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-gray-300 cursor-not-allowed text-gray-700'
                  }`}
                >
                  <FaShoppingCart className="ml-2" />
                  {product.stock > 0 ? 'הוספה לסל הקניות' : 'אזל מהמלאי'}
                </button>
              </div>
            </div>
          </div>

          {/* Tabs Section */}
          <div className="border-t">
            <div className="flex overflow-x-auto">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-4 whitespace-nowrap font-medium ${
                  activeTab === 'description'
                    ? 'border-b-2 border-orange-600 text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                תיאור מורחב
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`px-6 py-4 whitespace-nowrap font-medium ${
                  activeTab === 'specs'
                    ? 'border-b-2 border-orange-600 text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                מפרט טכני
              </button>
              <button
                onClick={() => setActiveTab('features')}
                className={`px-6 py-4 whitespace-nowrap font-medium ${
                  activeTab === 'features'
                    ? 'border-b-2 border-orange-600 text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                יתרונות
              </button>
              <button
                onClick={() => setActiveTab('applications')}
                className={`px-6 py-4 whitespace-nowrap font-medium ${
                  activeTab === 'applications'
                    ? 'border-b-2 border-orange-600 text-orange-600'
                    : 'text-gray-700'
                }`}
              >
                שימושים
              </button>
            </div>

            <div className="p-6">
              {activeTab === 'description' && (
                <div dangerouslySetInnerHTML={{ __html: product.longDescription }} />
              )}

              {activeTab === 'specs' && (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <tbody className="divide-y divide-gray-200">
                      {'diameter' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            קוטר
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.diameter}
                          </td>
                        </tr>
                      )}
                      {'bore' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            קדח
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.bore}
                          </td>
                        </tr>
                      )}
                      {'thickness' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            עובי
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.thickness}
                          </td>
                        </tr>
                      )}
                      {'segments' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            מספר סגמנטים
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.segments}
                          </td>
                        </tr>
                      )}
                      {'segment_height' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            גובה סגמנט
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.segment_height}
                          </td>
                        </tr>
                      )}
                      {'segment_type' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            סוג סגמנט
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.segment_type}
                          </td>
                        </tr>
                      )}
                      {'material' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            מתאים לחומרים
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.material}
                          </td>
                        </tr>
                      )}
                      {'usage_type' in product && (
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                            סוג שימוש
                          </th>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {product.usage_type}
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {activeTab === 'features' && (
                <ul className="list-disc pr-6 space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              )}

              {activeTab === 'applications' && (
                <ul className="list-disc pr-6 space-y-2">
                  {product.applications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">מוצרים קשורים</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related) => (
                <div key={related.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <Link href={related.slug}>
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">תמונת מוצר</span>
                    </div>
                  </Link>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      <Link href={related.slug} className="hover:text-orange-600">
                        {related.name}
                      </Link>
                    </h3>
                    <div className="flex items-center justify-between">
                      <div>
                        {related.discount_price ? (
                          <div className="flex flex-col">
                            <span className="text-sm line-through text-gray-500">₪{related.price}</span>
                            <span className="text-xl font-bold text-orange-600">₪{related.discount_price}</span>
                          </div>
                        ) : (
                          <span className="text-xl font-bold">₪{related.price}</span>
                        )}
                      </div>
                      <Link
                        href={related.slug}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-3 py-1 rounded-md text-sm"
                      >
                        פרטים
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 