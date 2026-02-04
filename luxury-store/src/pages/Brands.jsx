import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

export default function Brands() {
  const brands = [...new Set(productsData.map(p => p.brand))].sort();

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-12">Designers</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map(brand => (
          <Link key={brand} to={`/collection/new-arrivals?brand=${brand}`} className="card text-center hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-serif">{brand}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}
