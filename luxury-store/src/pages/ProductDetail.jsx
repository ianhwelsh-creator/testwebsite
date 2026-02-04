import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ProductCard from '../components/product/ProductCard';

export default function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === id);
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ show: false, message: '', type: '' });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.show]);

  if (!product) return <div className="container-luxury py-24">Product not found</div>;

  const relatedProducts = productsData
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      showToast('Please select a size', 'error');
      return;
    }
    addToCart(product, selectedSize);
    showToast('Added to cart!', 'success');
  };

  return (
    <div className="container-luxury py-12">
      {toast.show && (
        <div className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 px-6 py-4 rounded-lg shadow-lg transition-all ${
          toast.type === 'success' ? 'bg-luxury-black text-luxury-white' : 'bg-red-600 text-white'
        }`}>
          {toast.message}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
        <div>
          <div className="aspect-[3/4] bg-luxury-cream mb-4">
            <img src={product.images[selectedImage]} alt={product.name} className="w-full h-full object-cover" />
          </div>
          <div className="grid grid-cols-4 gap-2">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(idx)}
                className={`aspect-square bg-luxury-cream ${idx === selectedImage ? 'ring-2 ring-luxury-black' : ''}`}
              >
                <img src={img} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-wider text-luxury-gray-dark mb-2">{product.brand}</p>
          <h1 className="text-3xl font-serif mb-4">{product.name}</h1>
          <div className="flex items-center space-x-3 mb-8">
            <span className="text-2xl">${product.price.amount}</span>
            {product.price.onSale && product.price.originalPrice && (
              <span className="text-xl text-luxury-gray-medium line-through">${product.price.originalPrice}</span>
            )}
          </div>

          <p className="mb-8 text-luxury-charcoal leading-relaxed">{product.description.long}</p>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider mb-3">Size</h3>
            <div className="grid grid-cols-4 gap-2">
              {product.sizes.map(size => (
                <button
                  key={size.size}
                  onClick={() => setSelectedSize(size.size)}
                  disabled={!size.inStock}
                  className={`py-3 border ${
                    selectedSize === size.size 
                      ? 'border-luxury-black bg-luxury-black text-luxury-white'
                      : 'border-luxury-gray-light hover:border-luxury-black'
                  } ${!size.inStock ? 'opacity-30 cursor-not-allowed' : ''}`}
                >
                  {size.size}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <button onClick={handleAddToCart} className="w-full btn-primary">Add to Cart</button>
            <button 
              onClick={() => toggleWishlist(product.id)}
              className="w-full btn-secondary"
            >
              {isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}
            </button>
          </div>

          <div className="mt-12 space-y-6 border-t border-luxury-gray-light pt-8">
            <details className="group">
              <summary className="cursor-pointer text-sm uppercase tracking-wider flex justify-between items-center">
                Description
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-sm text-luxury-charcoal">
                {product.description.details.map((detail, idx) => (
                  <p key={idx} className="mb-2">• {detail}</p>
                ))}
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer text-sm uppercase tracking-wider flex justify-between items-center">
                Composition & Care
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-sm text-luxury-charcoal">
                <p className="mb-2"><strong>Composition:</strong> {product.description.composition}</p>
                <p><strong>Care:</strong> {product.description.care}</p>
              </div>
            </details>

            <details className="group">
              <summary className="cursor-pointer text-sm uppercase tracking-wider flex justify-between items-center">
                Shipping & Returns
                <span className="group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <div className="mt-4 text-sm text-luxury-charcoal">
                <p className="mb-2">Free shipping on orders over $500</p>
                <p>Free returns within 30 days</p>
              </div>
            </details>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section>
          <h2 className="text-3xl font-serif mb-8">You May Also Like</h2>
          <div className="grid-products">
            {relatedProducts.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
