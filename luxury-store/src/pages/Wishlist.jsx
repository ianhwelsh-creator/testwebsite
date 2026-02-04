import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import productsData from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Wishlist() {
  const { wishlist } = useWishlist();
  const wishlistProducts = productsData.filter(p => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="container-luxury py-24 text-center">
        <h1 className="text-4xl font-serif mb-6">Your Wishlist is Empty</h1>
        <p className="text-luxury-gray-dark mb-8">Save your favorite items for later</p>
        <Link to="/" className="btn-primary">Start Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-12">My Wishlist</h1>
      <div className="grid-products">
        {wishlistProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
