#!/bin/bash
cd /home/user/testwebsite/luxury-store

# Home Page
cat > src/pages/Home.jsx << 'EOF'
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Home() {
  const newArrivals = productsData.filter(p => p.newArrival).slice(0, 8);
  const featured = productsData.filter(p => p.featured).slice(0, 4);

  return (
    <div>
      <section className="relative h-[600px] bg-luxury-cream flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl md:text-7xl font-serif mb-6">Winter Collection</h1>
          <p className="text-xl text-luxury-gray-dark mb-8">Contemporary luxury for the modern wardrobe</p>
          <Link to="/collection/new-arrivals" className="btn-primary">Shop New Arrivals</Link>
        </div>
      </section>

      <section className="container-luxury py-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Outerwear', 'Knitwear', 'Shoes', 'Accessories'].map(cat => (
            <Link key={cat} to={`/collection/${cat.toLowerCase()}`} className="group">
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

      <section className="container-luxury py-24">
        <h2 className="text-4xl font-serif mb-12">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featured.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-luxury-cream py-24">
        <div className="container-luxury text-center">
          <h2 className="text-4xl font-serif mb-6">Crafted with Excellence</h2>
          <p className="text-lg text-luxury-gray-dark max-w-2xl mx-auto mb-8">
            Discover our curated selection of luxury menswear from the world's finest designers.
          </p>
          <Link to="/about" className="btn-secondary">Our Story</Link>
        </div>
      </section>
    </div>
  );
}
EOF

echo "Created Home.jsx"

