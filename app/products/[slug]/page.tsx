'use client';

import { useState, useEffect, useMemo, useCallback, useReducer } from 'react';
import Link from 'next/link';
import { FaArrowLeft, FaShoppingCart, FaTruck, FaShieldAlt, FaInfoCircle, FaExchangeAlt, FaFilter, FaSort, FaChevronLeft, FaSearch, FaSlidersH, FaTimes } from 'react-icons/fa';
import Image from 'next/image';
import { 
  getProductBySlug, 
  getRelatedProducts, 
  getProductsByCategory,
  productCategories, 
  ProductCategory, 
  Product,
  getFiltersForCategory
} from '@/app/data/products';
import { notFound } from 'next/navigation';
import { useCart } from '@/components/CartContext';

interface FilterOption {
  id: string;
  label: string;
}

interface FilterGroup {
  id: string;
  name: string;
  options: FilterOption[];
}

// נגדיר את טיפוסי הפעולות בפילטור
type FilterAction = 
  | { type: 'TOGGLE_FILTER'; filterKey: string; value: string }
  | { type: 'RESET_FILTERS' }
  | { type: 'SET_INITIAL_FILTERS'; filters: {[key: string]: string[]} };

// נגדיר את פונקציית ה-reducer - פישטנו את המימוש למניעת בעיות
function filterReducer(state: {[key: string]: string[]}, action: FilterAction): {[key: string]: string[]} {
  switch (action.type) {
    case 'TOGGLE_FILTER': {
      const { filterKey, value } = action;
      const currentValues = state[filterKey] || [];
      
      // בדוק אם הערך כבר קיים
      const valueExists = currentValues.includes(value);
      
      // צור מערך חדש עם הערכים המעודכנים
      const newValues = valueExists
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      
      // צור אובייקט סטייט חדש לגמרי
      const newState = { ...state, [filterKey]: newValues };
      
      // לוג לדיבוג
      console.log(`Filter ${filterKey} toggle ${value}: ${valueExists ? 'removed' : 'added'}`, newState);
      
      return newState;
    }
    case 'RESET_FILTERS': {
      // יצירת אובייקט חדש לגמרי עם מערכים ריקים
      const newState: {[key: string]: string[]} = {};
      
      for (const key of Object.keys(state)) {
        newState[key] = [];
      }
      
      console.log('Resetting all filters', newState);
      return newState;
    }
    case 'SET_INITIAL_FILTERS': {
      console.log('Setting initial filters', action.filters);
      return { ...action.filters };
    }
    default:
      return state;
  }
}

export default function DynamicProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null);
  const [isProduct, setIsProduct] = useState<boolean | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<any>(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [isLoading, setIsLoading] = useState(true);
  const [sortOption, setSortOption] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get cart context
  const { addItem } = useCart();
  
  // פילטרים
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);
  const [filterGroups, setFilterGroups] = useState<FilterGroup[]>([]);
  const [showFiltersMobile, setShowFiltersMobile] = useState(false);
  const [allAvailableOptions, setAllAvailableOptions] = useState<{[key: string]: FilterOption[]}>({});
  
  // שימוש ב-useReducer במקום useState
  const [filterState, dispatchFilter] = useReducer(filterReducer, {});

  useEffect(() => {
    // First try to find if this is a product
    const productData = getProductBySlug(params.slug);
    
    if (productData) {
      // This is a product
      setIsProduct(true);
      setProduct(productData);
      
      // Get related products
      if (productData.id) {
        const related = getRelatedProducts(productData.id);
        setRelatedProducts(related);
      }
      
      setIsLoading(false);
      return;
    }
    
    // If not a product, check if it's a category
    const categoryData = productCategories.find(cat => cat.slug === params.slug);
    if (categoryData) {
      // This is a category
      setIsProduct(false);
      setCategory(categoryData);
      
      // Get products for this category
      let categoryEnum: ProductCategory;
      switch (params.slug) {
        case 'diamond-core-drill-bits':
          categoryEnum = ProductCategory.DIAMOND_CORE_DRILL_BITS;
          break;
        case 'diamond-saw-blades':
          categoryEnum = ProductCategory.DIAMOND_SAW_BLADES;
          break;
        case 'accessories':
          categoryEnum = ProductCategory.ACCESSORIES;
          break;
        case 'drilling-machines':
          categoryEnum = ProductCategory.DRILLING_MACHINES;
          break;
        case 'special-products':
          categoryEnum = ProductCategory.SPECIAL_PRODUCTS;
          break;
        default:
          notFound();
          return;
      }
      
      const categoryProducts = getProductsByCategory(categoryEnum);
      setProducts(categoryProducts);
      setFilteredProducts(categoryProducts);
      
      // קביעת טווח מחירים לפי המוצרים בקטגוריה
      if (categoryProducts.length > 0) {
        const minPrice = Math.min(...categoryProducts.map(p => p.discountPrice || p.price));
        const maxPrice = Math.max(...categoryProducts.map(p => p.price));
        setPriceRange([minPrice, maxPrice]);
      }
      
      // Get dynamic filter configuration for this category
      const filters = getFiltersForCategory(categoryEnum);
      setFilterGroups(filters);
      
      // שמירה של כל אפשרויות הפילטור הזמינות בקטגוריה
      const availableOptionsMap: {[key: string]: FilterOption[]} = {};
      const initialFilters: {[key: string]: string[]} = {};
      
      filters.forEach(filter => {
        availableOptionsMap[filter.id] = [...filter.options];
        initialFilters[filter.id] = [];
      });
      
      setAllAvailableOptions(availableOptionsMap);
      dispatchFilter({ type: 'SET_INITIAL_FILTERS', filters: initialFilters });
      
      setIsLoading(false);
      return;
    }
    
    // If neither a product nor a category, 404
    notFound();
  }, [params.slug]);

  // עדכון הפילטרים - מאפשר לבחור כל שילוב של פילטרים
  useEffect(() => {
    applyFilters();
  }, [searchQuery, filterState, sortOption, products]);

  const applyFilters = useCallback(() => {
    let filtered = [...products];
    
    // פילטור לפי מחיר
    filtered = filtered.filter(product => {
      const price = product.discountPrice || product.price;
      return price >= priceRange[0] && price <= priceRange[1];
    });
    
    // החלת פילטרים דינמיים בהתאם לערכים שנבחרו
    for (const [filterKey, selectedValues] of Object.entries(filterState)) {
      if (selectedValues && selectedValues.length > 0) {
        filtered = filtered.filter(product => {
          if (!product.specifications[filterKey]) return false;
          return selectedValues.includes(product.specifications[filterKey]);
        });
      }
    }
    
    // פילטור לפי חיפוש טקסט
    if (searchQuery.trim()) {
      const query = searchQuery.trim().toLowerCase();
      filtered = filtered.filter(product => 
        product.name.toLowerCase().includes(query) || 
        (product.shortDescription && product.shortDescription.toLowerCase().includes(query)) ||
        product.description.toLowerCase().includes(query)
      );
    }
    
    // מיון תוצאות
    sortProducts(filtered);
  }, [products, priceRange, filterState, searchQuery, sortOption]);
  
  // עדכון אוטומטי של הפילטרים כשמשנים אותם
  useEffect(() => {
    console.log("Filters changed, applying filters:", filterState);
    applyFilters();
  }, [applyFilters]);
  
  // מיון המוצרים
  const sortProducts = (productsToSort: Product[]) => {
    const sorted = [...productsToSort];
    
    switch (sortOption) {
      case 'price_asc':
        sorted.sort((a, b) => (a.discountPrice || a.price) - (b.discountPrice || b.price));
        break;
      case 'price_desc':
        sorted.sort((a, b) => (b.discountPrice || b.price) - (a.discountPrice || a.price));
        break;
      case 'name_asc':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name_desc':
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (featured first, then by ID)
        sorted.sort((a, b) => {
          if (a.isFeatured && !b.isFeatured) return -1;
          if (!a.isFeatured && b.isFeatured) return 1;
          return a.id.localeCompare(b.id);
        });
    }
    
    setFilteredProducts(sorted);
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    // Implement add to cart functionality
    if (product) {
      console.log('Adding to cart:', { product, quantity });
      
      // Create cart item with all relevant details
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.discountPrice || product.price,
        quantity: quantity,
        image: product.images?.[0],
        attributes: {
          diameter: product.specifications?.diameter,
          thread: product.specifications?.thread
        }
      };
      
      console.log('Prepared cart item:', cartItem);
      
      // Add to cart
      addItem(cartItem);
      
      // Verify cart state after adding
      setTimeout(() => {
        try {
          const savedCart = localStorage.getItem('cart');
          console.log('Cart in localStorage after adding:', savedCart);
        } catch (error) {
          console.error('Error checking localStorage:', error);
        }
      }, 100);
    }
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };
  
  const handleFilterChange = (filterKey: string, value: string) => {
    console.log(`Toggle filter: ${filterKey} = ${value}`);
    
    // שימוש ב-dispatch פשוט
    dispatchFilter({ type: 'TOGGLE_FILTER', filterKey, value });
  };
  
  const resetFilters = () => {
    console.log("Reset all filters");
    dispatchFilter({ type: 'RESET_FILTERS' });
    setSearchQuery('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-orange-600"></div>
      </div>
    );
  }

  // Render product page
  if (isProduct && product) {
    return (
      <div className="min-h-screen bg-gray-50 rtl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
          {/* Breadcrumb */}
          <nav className="flex mb-4 sm:mb-8 overflow-x-auto whitespace-nowrap" aria-label="Breadcrumb">
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
                <Link href={`/products/${product.category}`} className="text-gray-500 hover:text-gray-700">
                  {product.category === 'diamond-core-drill-bits' ? 'כוסות קידוח יהלום' : 
                   product.category === 'diamond-saw-blades' ? 'מסורי יהלום' : 
                   product.category === 'accessories' ? 'אביזרים נלווים' : 'מוצרים'}
                </Link>
              </li>
              <li>
                <span className="text-gray-500 mx-2">/</span>
              </li>
              <li className="text-gray-700 truncate max-w-[150px] sm:max-w-none">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 mb-8 sm:mb-12">
            {/* Product Images */}
            <div>
              <div className="bg-white rounded-lg shadow overflow-hidden mb-4">
                <div className="h-64 sm:h-96 bg-gray-200 flex items-center justify-center">
                  {product.images && product.images.length > 0 ? (
                    <Image 
                      src={product.images[selectedImage]} 
                      alt={product.name}
                      width={600}
                      height={600}
                      className="object-contain w-full h-full"
                    />
                  ) : (
                    <span className="text-gray-500">תמונת מוצר לא זמינה</span>
                  )}
                </div>
              </div>
              <div className="overflow-x-auto pb-2">
                <div className="flex gap-2 sm:gap-4" style={{ minWidth: 'max-content' }}>
                  {product.images.slice(0, 8).map((image, index) => (
                    <button
                      key={index}
                      className={`bg-white rounded-lg shadow overflow-hidden flex-shrink-0 ${
                        selectedImage === index ? 'ring-2 ring-orange-500' : ''
                      }`}
                      onClick={() => setSelectedImage(index)}
                    >
                      <div className="h-16 sm:h-24 w-16 sm:w-24 bg-gray-200 flex items-center justify-center">
                        <Image 
                          src={image} 
                          alt={`${product.name} - תמונה ${index + 1}`}
                          width={120}
                          height={120}
                          className="object-contain w-full h-full"
                        />
                      </div>
                    </button>
                  ))}
                  {product.images.length > 8 && (
                    <div className="flex-shrink-0 h-16 sm:h-24 w-16 sm:w-24 bg-gray-100 flex items-center justify-center rounded-lg text-xs text-gray-600">
                      +{product.images.length - 8} תמונות נוספות
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">{product.name}</h1>
              {product.nameEn && <p className="text-gray-600 mb-2">{product.nameEn}</p>}
              <p className="text-gray-600 mb-6">{product.description}</p>

              <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold mb-4">מפרט טכני</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {Object.entries(product.specifications).map(([key, value], index) => (
                    <p key={index} className="text-gray-600">
                      <span className="font-semibold">{getSpecificationLabel(key)}:</span> {value}
                    </p>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg shadow p-4 sm:p-6 mb-4 sm:mb-6">
                <div className="flex flex-wrap sm:flex-nowrap items-center justify-between mb-4 gap-3">
                  {product.discountPrice ? (
                    <div className="flex flex-wrap items-baseline gap-3">
                      <div className="flex items-baseline">
                        <span className="text-3xl font-bold text-orange-600">{product.discountPrice}</span>
                        <span className="text-xl mr-1">₪</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-xl font-medium text-gray-400 line-through">{product.price}</span>
                        <span className="text-lg mr-1 text-gray-400">₪</span>
                      </div>
                    </div>
                  ) : (
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold">{product.price}</span>
                      <span className="text-xl mr-1">₪</span>
                    </div>
                  )}
                  <div className="flex items-center w-full sm:w-auto">
                    <button
                      className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-l"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                    <button
                      className="bg-gray-200 hover:bg-gray-300 px-3 py-1 rounded-r"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <p className="flex items-center text-sm text-green-600 mb-4">
                  <span className="font-semibold ml-1">מלאי:</span> 
                  {product.stock > 10 ? 'במלאי' : product.stock > 0 ? `נותרו רק ${product.stock} יחידות` : 'אזל מהמלאי'}
                </p>
                <p className="flex items-center text-sm text-gray-600 mb-4">
                  <FaTruck className="ml-1 text-orange-500" />
                  <span className="font-semibold ml-1">זמן אספקה:</span> {product.deliveryTime}
                </p>
                <button
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-md flex items-center justify-center mb-3"
                  onClick={() => handleAddToCart(product, quantity)}
                  disabled={product.stock === 0}
                >
                  <FaShoppingCart className="ml-2" />
                  הוסף לעגלה
                </button>
                <button
                  className="w-full border border-orange-600 text-orange-600 hover:bg-orange-50 py-3 rounded-md flex items-center justify-center"
                >
                  <FaInfoCircle className="ml-2" />
                  שאל שאלה על המוצר
                </button>
              </div>

              <div className="flex flex-wrap gap-2 sm:gap-3 mb-6">
                <div className="flex items-center text-xs sm:text-sm text-gray-700 bg-gray-100 rounded-full px-3 sm:px-4 py-1">
                  <FaShieldAlt className="ml-1 text-orange-500" />
                  אחריות יצרן
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700 bg-gray-100 rounded-full px-3 sm:px-4 py-1">
                  <FaTruck className="ml-1 text-orange-500" />
                  משלוח מהיר
                </div>
                <div className="flex items-center text-xs sm:text-sm text-gray-700 bg-gray-100 rounded-full px-3 sm:px-4 py-1">
                  <FaExchangeAlt className="ml-1 text-orange-500" />
                  30 יום להחזרה
                </div>
              </div>
            </div>
          </div>

          {/* Additional Product Information Tabs */}
          <div className="bg-white rounded-lg shadow overflow-hidden mb-8 sm:mb-12">
            <div className="flex flex-wrap border-b overflow-x-auto">
              <button 
                className={`px-3 sm:px-4 py-3 font-medium text-xs sm:text-sm ${activeTab === 'description' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('description')}
              >
                תיאור מורחב
              </button>
              {product.applications && product.applications.length > 0 && (
                <button 
                  className={`px-3 sm:px-4 py-3 font-medium text-xs sm:text-sm ${activeTab === 'applications' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('applications')}
                >
                  שימושים מומלצים
                </button>
              )}
              {product.features && product.features.length > 0 && (
                <button 
                  className={`px-3 sm:px-4 py-3 font-medium text-xs sm:text-sm ${activeTab === 'features' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('features')}
                >
                  תכונות המוצר
                </button>
              )}
              <button 
                className={`px-3 sm:px-4 py-3 font-medium text-xs sm:text-sm ${activeTab === 'shipping' ? 'text-orange-600 border-b-2 border-orange-600' : 'text-gray-600'}`}
                onClick={() => setActiveTab('shipping')}
              >
                משלוח והחזרות
              </button>
            </div>
            <div className="p-4 sm:p-6">
              {activeTab === 'description' && (
                <div>
                  <p className="mb-4">{product.description}</p>
                </div>
              )}
              {activeTab === 'applications' && product.applications && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">שימושים מומלצים</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.applications.map((app, index) => (
                      <li key={index} className="text-gray-600">{app}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'features' && product.features && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">תכונות המוצר</h3>
                  <ul className="list-disc list-inside space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="text-gray-600">{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
              {activeTab === 'shipping' && (
                <div>
                  <h3 className="text-lg font-semibold mb-3">מדיניות משלוחים והחזרות</h3>
                  <p className="mb-3">אנו מספקים משלוח לכל חלקי הארץ. זמן האספקה הוא בדרך כלל 1-3 ימי עסקים, תלוי באזור המשלוח.</p>
                  <p className="mb-3">ניתן להחזיר מוצרים בתוך 30 יום מיום הקבלה, בתנאי שהמוצר במצב מקורי ולא נעשה בו שימוש. דמי משלוח להחזרה יחולו על הלקוח אלא אם המוצר פגום.</p>
                  <p>לקבלת מידע נוסף, אנא צרו קשר עם צוות שירות הלקוחות שלנו.</p>
                </div>
              )}
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mb-8 sm:mb-12">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">מוצרים קשורים</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                {relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white rounded-lg shadow overflow-hidden">
                    <Link href={`/products/${relatedProduct.slug}`}>
                      <div className="h-36 sm:h-48 bg-gray-200 flex items-center justify-center">
                        {relatedProduct.images && relatedProduct.images.length > 0 ? (
                          <Image 
                            src={relatedProduct.images[0]} 
                            alt={relatedProduct.name}
                            width={300}
                            height={200}
                            className="object-contain w-full h-full"
                          />
                        ) : (
                        <span className="text-gray-500">תמונת מוצר</span>
                        )}
                      </div>
                    </Link>
                    <div className="p-4">
                      <h3 className="text-base sm:text-lg font-semibold mb-2 line-clamp-2">
                        <Link href={`/products/${relatedProduct.slug}`} className="hover:text-orange-600">
                          {relatedProduct.name}
                        </Link>
                      </h3>
                      <div className="flex items-center justify-between">
                        {relatedProduct.discountPrice ? (
                          <div className="flex flex-wrap items-center">
                            <span className="text-base sm:text-lg font-bold text-orange-600">{relatedProduct.discountPrice}&#8362;</span>
                            <span className="text-xs sm:text-sm text-gray-500 line-through mr-2 pr-2">{relatedProduct.price}&#8362;</span>
                          </div>
                        ) : (
                          <span className="text-base sm:text-lg font-bold">{relatedProduct.price}&#8362;</span>
                        )}
                        <Link
                          href={`/products/${relatedProduct.slug}`}
                          className="text-orange-600 hover:text-orange-700"
                        >
                          פרטים נוספים
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
  
  // Render category page
  if (!isProduct && category) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>
              <p className="text-lg text-gray-300">
                {category.description}
              </p>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="flex mb-8 rtl" aria-label="Breadcrumb">
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
              <li className="text-gray-700">{category.name}</li>
            </ol>
          </nav>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow mb-8 p-4 md:hidden w-full">
            <div className="flex flex-col gap-4">
              {/* חיפוש */}
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="חפש מוצרים..."
                  className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                {searchQuery && (
                  <button
                    className="absolute inset-y-0 left-0 flex items-center pl-3"
                    onClick={() => setSearchQuery('')}
                  >
                    <FaTimes className="text-gray-400 hover:text-gray-600" />
                  </button>
                )}
              </div>
              
              {/* מיון */}
              <select
                className="w-full bg-white rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
                value={sortOption}
                onChange={handleSortChange}
              >
                <option value="default">מוצרים מובחרים</option>
                <option value="price_asc">מחיר: מהנמוך לגבוה</option>
                <option value="price_desc">מחיר: מהגבוה לנמוך</option>
                <option value="name_asc">שם: א-ת</option>
                <option value="name_desc">שם: ת-א</option>
              </select>
              
              {/* כפתור פילטרים למובייל */}
              <button
                className="w-full flex items-center justify-center px-4 py-2 rounded-lg border bg-orange-50 border-orange-300 text-orange-700"
                onClick={() => setShowFiltersMobile(!showFiltersMobile)}
              >
                <FaSlidersH className="ml-2" />
                {showFiltersMobile ? 'הסתר פילטרים' : 'הצג פילטרים'}
              </button>
              
              {/* פילטרים למובייל */}
              {showFiltersMobile && (
                <div className="bg-gray-50 p-4 rounded-lg mt-2 border border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium">סינון מתקדם</h3>
                    <button
                      className="text-sm text-orange-600 hover:text-orange-800"
                      onClick={resetFilters}
                    >
                      נקה הכל
                    </button>
                  </div>
                  
                  <div className="space-y-6">
                    {/* פילטר חומרים */}
                    {filterGroups.map((group) => (
                      <div key={group.id} className="mb-6">
                        <details open className="group">
                          <summary className="font-medium mb-2 text-gray-800 cursor-pointer flex justify-between items-center">
                            <span>{group.name}</span>
                            <span className="transition-transform duration-200 group-open:rotate-180">
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                            </span>
                          </summary>
                          <div className="pt-2 space-y-1 max-h-48 overflow-y-auto pr-1 pl-1">
                            {allAvailableOptions[group.id]?.map((option: FilterOption) => (
                              <div key={option.id} className="flex items-center py-1 hover:bg-gray-50 px-1 rounded">
                                <input
                                  type="checkbox"
                                  id={`filter-mobile-${group.id}-${option.id}`}
                                  checked={filterState[group.id]?.includes(option.id) || false}
                                  onChange={() => handleFilterChange(group.id, option.id)}
                                  className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label htmlFor={`filter-mobile-${group.id}-${option.id}`} className="mr-2 text-sm text-gray-700 cursor-pointer select-none flex-1">
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {/* סיכום התוצאות */}
              <div className="text-sm text-gray-600">
                <div>
                  {filteredProducts.length} {filteredProducts.length === 1 ? 'מוצר נמצא' : 'מוצרים נמצאו'}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden md:block w-full md:w-64 lg:w-72 flex-shrink-0">
              <div className="bg-white rounded-lg shadow sticky top-24">
                <div className="p-4 border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">סינון מוצרים</h3>
                    <button
                      className="text-sm text-orange-600 hover:text-orange-800"
                      onClick={resetFilters}
                    >
                      נקה הכל
                    </button>
                  </div>
                </div>
                
                <div className="p-4">
                  {/* חיפוש */}
                  <div className="mb-6">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="חפש מוצרים..."
                        className="w-full py-2 px-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <FaSearch className="text-gray-400" />
                      </div>
                      {searchQuery && (
                        <button
                          className="absolute inset-y-0 left-0 flex items-center pl-3"
                          onClick={() => setSearchQuery('')}
                        >
                          <FaTimes className="text-gray-400 hover:text-gray-600" />
                        </button>
                      )}
                    </div>
                  </div>
                  
                  {/* מיון */}
                  <div className="mb-6">
                    <h4 className="font-medium mb-2 text-gray-800">מיון לפי</h4>
                    <select
                      className="w-full bg-white rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      value={sortOption}
                      onChange={handleSortChange}
                    >
                      <option value="default">מוצרים מובחרים</option>
                      <option value="price_asc">מחיר: מהנמוך לגבוה</option>
                      <option value="price_desc">מחיר: מהגבוה לנמוך</option>
                      <option value="name_asc">שם: א-ת</option>
                      <option value="name_desc">שם: ת-א</option>
                    </select>
                  </div>
                  
                  {/* פילטר חומרים */}
                  {filterGroups.map((group) => (
                    <div key={group.id} className="mb-6">
                      <details open className="group">
                        <summary className="font-medium mb-2 text-gray-800 cursor-pointer flex justify-between items-center">
                          <span>{group.name}</span>
                          <span className="transition-transform duration-200 group-open:rotate-180">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                          </span>
                        </summary>
                        <div className="pt-2 space-y-1 max-h-48 overflow-y-auto pr-1 pl-1">
                          {allAvailableOptions[group.id]?.map((option: FilterOption) => (
                            <div key={option.id} className="flex items-center py-1 hover:bg-gray-50 px-1 rounded">
                              <input
                                type="checkbox"
                                id={`filter-desktop-${group.id}-${option.id}`}
                                checked={filterState[group.id]?.includes(option.id) || false}
                                onChange={() => handleFilterChange(group.id, option.id)}
                                className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                              />
                              <label htmlFor={`filter-desktop-${group.id}-${option.id}`} className="mr-2 text-sm text-gray-700 cursor-pointer select-none flex-1">
                                {option.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  ))}
                  
                  {/* סיכום תוצאות */}
                  <div className="pt-4 mt-4 border-t border-gray-200 text-sm text-gray-600">
                    <div>
                      {filteredProducts.length} {filteredProducts.length === 1 ? 'מוצר נמצא' : 'מוצרים נמצאו'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Products Section */}
            <div className="flex-1">
              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts.map(product => (
                  <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                    <Link href={`/products/${product.slug}`} className="block overflow-hidden">
                      <div className="h-52 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                        {product.mainImage ? (
                          <Image 
                            src={product.mainImage}
                            alt={product.name}
                            width={300}
                            height={220}
                            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : product.images && product.images.length > 0 ? (
                           <Image 
                            src={product.images[0]} // Fallback
                            alt={product.name}
                            width={300}
                            height={220}
                            className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <span className="text-gray-400">תמונת מוצר</span>
                        )}
                        {product.discountPrice && (
                          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
                            מבצע!
                          </div>
                        )}
                      </div>
                    </Link>
                    <div className="p-4 rtl border-t border-gray-100">
                      <h3 className="text-lg font-medium mb-2 h-14 line-clamp-2">
                        <Link href={`/products/${product.slug}`} className="hover:text-orange-600 transition-colors">
                          {product.name}
                        </Link>
                      </h3>
                      <div className="flex items-center justify-between mb-4">
                        {product.discountPrice ? (
                          <div className="flex flex-wrap items-baseline gap-2">
                            <div className="flex items-baseline">
                              <span className="text-xl font-bold text-orange-600">{product.discountPrice}</span>
                              <span className="text-base mr-1">₪</span>
                            </div>
                            <div className="flex items-baseline">
                              <span className="text-base font-medium text-gray-400 line-through">{product.price}</span>
                              <span className="text-sm mr-1 text-gray-400">₪</span>
                            </div>
                          </div>
                        ) : (
                          <div className="flex items-baseline">
                            <span className="text-xl font-bold text-gray-800">{product.price}</span>
                            <span className="text-base mr-1">₪</span>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleAddToCart(product, 1)}
                        className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2 font-medium"
                      >
                        <FaShoppingCart size={16} />
                        הוסף לעגלה
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return notFound();
}

// Helper function to get human-readable specification labels
function getSpecificationLabel(key: string): string {
  const labelMap: { [key: string]: string } = {
    diameter: 'קוטר',
    length: 'אורך',
    thread: 'הברגה',
    segments: 'מספר סגמנטים',
    segmentHeight: 'גובה סגמנט',
    segmentType: 'סוג סגמנט',
    material: 'חומר קידוח',
    usageType: 'סוג קידוח',
    warranty: 'אחריות',
    power: 'הספק',
    speed: 'מהירות',
    weight: 'משקל',
    dimensions: 'מידות',
    inputThread: 'הברגת כניסה',
    outputThread: 'הברגת יציאה'
  };

  return labelMap[key] || key;
} 