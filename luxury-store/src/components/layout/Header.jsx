import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { itemCount } = useCart();
  const { wishlist } = useWishlist();

  const categories = ['Outerwear', 'Knitwear', 'Shirts', 'Trousers', 'Shoes', 'Accessories'];

  return (
    <header className="sticky top-0 z-50 bg-luxury-white border-b border-luxury-gray-light">
      <div className="container-luxury py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-serif font-medium">ATELIER</Link>

          <nav className="hidden md:flex space-x-8">
            <Link to="/collection/new-arrivals" className="text-sm uppercase tracking-wider hover:opacity-70">New Arrivals</Link>
            {categories.map(cat => (
              <Link key={cat} to={`/collection/${cat.toLowerCase()}`} className="text-sm uppercase tracking-wider hover:opacity-70">{cat}</Link>
            ))}
            <Link to="/brands" className="text-sm uppercase tracking-wider hover:opacity-70">Designers</Link>
          </nav>

          <div className="flex items-center space-x-6">
            <Link to="/search" className="hover:opacity-70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </Link>
            <Link to="/wishlist" className="relative hover:opacity-70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-luxury-black text-luxury-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{wishlist.length}</span>
              )}
            </Link>
            <Link to="/cart" className="relative hover:opacity-70">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-luxury-black text-luxury-white text-xs w-4 h-4 flex items-center justify-center rounded-full">{itemCount}</span>
              )}
            </Link>
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/collection/new-arrivals" className="block text-sm uppercase tracking-wider">New Arrivals</Link>
            {categories.map(cat => (
              <Link key={cat} to={`/collection/${cat.toLowerCase()}`} className="block text-sm uppercase tracking-wider">{cat}</Link>
            ))}
            <Link to="/brands" className="block text-sm uppercase tracking-wider">Designers</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
