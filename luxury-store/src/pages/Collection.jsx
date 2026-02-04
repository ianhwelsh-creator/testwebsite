import { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Collection() {
  const { category } = useParams();
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    brands: [],
    priceRange: [0, 10000],
    sizes: [],
  });

  const filteredProducts = useMemo(() => {
    let filtered = productsData;

    if (category !== 'new-arrivals') {
      filtered = filtered.filter(p => 
        p.category.toLowerCase() === category.replace('-', ' ')
      );
    } else {
      filtered = filtered.filter(p => p.newArrival);
    }

    if (filters.brands.length > 0) {
      filtered = filtered.filter(p => filters.brands.includes(p.brand));
    }

    filtered = filtered.filter(p => 
      p.price.amount >= filters.priceRange[0] && p.price.amount <= filters.priceRange[1]
    );

    if (sortBy === 'price-asc') filtered.sort((a, b) => a.price.amount - b.price.amount);
    if (sortBy === 'price-desc') filtered.sort((a, b) => b.price.amount - a.price.amount);
    if (sortBy === 'newest') filtered.sort((a, b) => b.newArrival - a.newArrival);

    return filtered;
  }, [category, sortBy, filters]);

  const brands = [...new Set(productsData.map(p => p.brand))];

  return (
    <div className="container-luxury py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-serif mb-4">{category.replace('-', ' ').toUpperCase()}</h1>
        <p className="text-luxury-gray-dark">{filteredProducts.length} products</p>
      </div>

      <div className="flex gap-8">
        <aside className="w-64 hidden md:block">
          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider mb-4">Designers</h3>
            {brands.slice(0, 5).map(brand => (
              <label key={brand} className="flex items-center mb-2">
                <input
                  type="checkbox"
                  checked={filters.brands.includes(brand)}
                  onChange={(e) => {
                    setFilters(f => ({
                      ...f,
                      brands: e.target.checked 
                        ? [...f.brands, brand]
                        : f.brands.filter(b => b !== brand)
                    }));
                  }}
                  className="mr-2"
                />
                <span className="text-sm">{brand}</span>
              </label>
            ))}
          </div>

          <div className="mb-8">
            <h3 className="text-sm uppercase tracking-wider mb-4">Price</h3>
            <input
              type="range"
              min="0"
              max="10000"
              value={filters.priceRange[1]}
              onChange={(e) => setFilters(f => ({ ...f, priceRange: [0, parseInt(e.target.value)] }))}
              className="w-full"
            />
            <p className="text-sm mt-2">Up to ${filters.priceRange[1]}</p>
          </div>
        </aside>

        <div className="flex-1">
          <div className="flex justify-between mb-8">
            <div></div>
            <select 
              value={sortBy} 
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-luxury-gray-light"
            >
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
            </select>
          </div>

          <div className="grid-products">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
