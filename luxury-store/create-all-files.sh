#!/bin/bash

# ProductCard Component
cat > src/components/product/ProductCard.jsx << 'EOF'
import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card">
      <div className="relative product-card-image">
        <Link to={`/product/${product.id}`}>
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </Link>
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-4 right-4 p-2 bg-luxury-white rounded-full hover:bg-luxury-cream transition-colors"
        >
          <svg className={`w-5 h-5 ${inWishlist ? 'fill-luxury-black' : 'fill-none'}`} stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </button>
        {product.tags && product.tags.includes('new') && (
          <span className="absolute top-4 left-4 badge-new">New</span>
        )}
        {product.price.onSale && (
          <span className="absolute top-4 left-4 badge-sale">Sale</span>
        )}
      </div>

      <Link to={`/product/${product.id}`}>
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-luxury-gray-dark">{product.brand}</p>
          <h3 className="text-sm mt-1">{product.name}</h3>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-sm font-medium">${product.price.amount}</span>
            {product.price.onSale && product.price.originalPrice && (
              <span className="text-sm text-luxury-gray-medium line-through">${product.price.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
EOF

echo "Created ProductCard.jsx"

