import { useState, useMemo } from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Search() {
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return productsData.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.description.short.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-8">Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for products, brands, or categories..."
        className="input w-full max-w-2xl mb-12"
        autoFocus
      />

      {query && (
        <div>
          <p className="text-luxury-gray-dark mb-8">{results.length} results for "{query}"</p>
          {results.length > 0 ? (
            <div className="grid-products">
              {results.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-luxury-gray-dark">No products found. Try a different search term.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
