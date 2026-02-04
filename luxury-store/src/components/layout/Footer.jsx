import { Link } from 'react-router-dom';

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
}
