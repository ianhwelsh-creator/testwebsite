const fs = require('fs');
const path = require('path');

// Header Component
const headerComponent = `import { Link } from 'react-router-dom';
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
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-medium">ATELIER</Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/collection/new-arrivals" className="text-sm uppercase tracking-wider hover:opacity-70">New Arrivals</Link>
            {categories.map(cat => (
              <Link key={cat} to={\`/collection/\${cat.toLowerCase()}\`} className="text-sm uppercase tracking-wider hover:opacity-70">{cat}</Link>
            ))}
            <Link to="/brands" className="text-sm uppercase tracking-wider hover:opacity-70">Designers</Link>
          </nav>

          {/* Icons */}
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 space-y-4">
            <Link to="/collection/new-arrivals" className="block text-sm uppercase tracking-wider">New Arrivals</Link>
            {categories.map(cat => (
              <Link key={cat} to={\`/collection/\${cat.toLowerCase()}\`} className="block text-sm uppercase tracking-wider">{cat}</Link>
            ))}
            <Link to="/brands" className="block text-sm uppercase tracking-wider">Designers</Link>
          </nav>
        )}
      </div>
    </header>
  );
}`;

// Footer Component
const footerComponent = `import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-luxury-black text-luxury-white py-16 mt-24">
      <div className="container-luxury">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div>
            <h3 className="font-serif text-xl mb-6">ATELIER</h3>
            <p className="text-sm text-luxury-gray-light leading-relaxed">Contemporary luxury menswear for the modern gentleman.</p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-3 text-sm text-luxury-gray-light">
              <li><Link to="/collection/new-arrivals" className="hover:text-luxury-white">New Arrivals</Link></li>
              <li><Link to="/collection/outerwear" className="hover:text-luxury-white">Outerwear</Link></li>
              <li><Link to="/collection/knitwear" className="hover:text-luxury-white">Knitwear</Link></li>
              <li><Link to="/collection/accessories" className="hover:text-luxury-white">Accessories</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Help</h4>
            <ul className="space-y-3 text-sm text-luxury-gray-light">
              <li><Link to="/shipping" className="hover:text-luxury-white">Shipping & Returns</Link></li>
              <li><Link to="/faq" className="hover:text-luxury-white">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-luxury-white">Contact</Link></li>
              <li><Link to="/about" className="hover:text-luxury-white">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4">Newsletter</h4>
            <p className="text-sm text-luxury-gray-light mb-4">Subscribe for exclusive offers and updates.</p>
            <input type="email" placeholder="Email address" className="w-full px-4 py-2 bg-luxury-charcoal text-luxury-white placeholder-luxury-gray-medium border-none" />
            <button className="w-full mt-2 btn-primary">Subscribe</button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-luxury-charcoal text-center text-sm text-luxury-gray-medium">
          <p>© 2026 Atelier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}`;

// ProductCard Component
const productCardComponent = `import { Link } from 'react-router-dom';
import { useWishlist } from '../../context/WishlistContext';

export default function ProductCard({ product }) {
  const { isInWishlist, toggleWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  return (
    <div className="product-card">
      <div className="relative product-card-image">
        <Link to={\`/product/\${product.id}\`}>
          <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover" />
        </Link>
        <button
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-4 right-4 p-2 bg-luxury-white rounded-full hover:bg-luxury-cream transition-colors"
        >
          <svg className={\`w-5 h-5 \${inWishlist ? 'fill-luxury-black' : 'fill-none'}\`} stroke="currentColor" viewBox="0 0 24 24">
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

      <Link to={\`/product/\${product.id}\`}>
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-luxury-gray-dark">{product.brand}</p>
          <h3 className="text-sm mt-1">{product.name}</h3>
          <div className="mt-2 flex items-center space-x-2">
            <span className="text-sm font-medium">\${product.price.amount}</span>
            {product.price.onSale && product.price.originalPrice && (
              <span className="text-sm text-luxury-gray-medium line-through">\${product.price.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}`;

// Home Page
const homePage = `import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Home() {
  const newArrivals = productsData.filter(p => p.newArrival).slice(0, 8);
  const featured = productsData.filter(p => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[600px] bg-luxury-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Winter Collection</h1>
          <p className="text-xl text-luxury-gray-dark mb-8">Contemporary luxury for the modern wardrobe</p>
          <Link to="/collection/new-arrivals" className="btn-primary">Shop New Arrivals</Link>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="container-luxury py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Outerwear', 'Knitwear', 'Shoes', 'Accessories'].map(cat => (
            <Link key={cat} to={\`/collection/\${cat.toLowerCase()}\`} className="group">
              <div className="aspect-square bg-luxury-cream mb-4 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <span className="text-2xl font-serif">{cat}</span>
                </div>
              </div>
              <h3 className="text-center text-sm uppercase tracking-wider">{cat}</h3>
            </Link>
          ))}
        </div>
      </section>

      {/* New Arrivals */}
      <section className="container-luxury py-24">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-4xl font-serif">New Arrivals</h2>
          <Link to="/collection/new-arrivals" className="text-sm uppercase tracking-wider hover:opacity-70">View All</Link>
        </div>
        <div className="grid-products">
          {newArrivals.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="container-luxury py-24">
        <h2 className="text-4xl font-serif mb-12">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Editorial Section */}
      <section className="bg-luxury-cream py-24">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-serif mb-6">Crafted with Excellence</h2>
          <p className="text-lg text-luxury-gray-dark max-w-2xl mx-auto mb-8">
            Discover our curated selection of luxury menswear from the world's finest designers.
            Each piece is chosen for its exceptional quality, timeless design, and impeccable craftsmanship.
          </p>
          <Link to="/about" className="btn-secondary">Our Story</Link>
        </div>
      </section>
    </div>
  );
}`;

// Write files
const files = [
  { path: 'src/components/layout/Header.jsx', content: headerComponent },
  { path: 'src/components/layout/Footer.jsx', content: footerComponent },
  { path: 'src/components/product/ProductCard.jsx', content: productCardComponent },
  { path: 'src/pages/Home.jsx', content: homePage },
];

files.forEach(({ path: filePath, content }) => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(fullPath, content);
  console.log(\`Created: \${filePath}\`);
});

console.log('\\nCore components generated successfully!');
