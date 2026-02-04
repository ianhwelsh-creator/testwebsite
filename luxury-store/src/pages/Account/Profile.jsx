import { Link } from 'react-router-dom';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user') || '{"name":"Guest","email":"guest@example.com"}');

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-12">My Account</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div className="card">
            <h2 className="text-xl font-serif mb-4">Account Details</h2>
            <div className="space-y-3">
              <div><span className="text-luxury-gray-dark">Name:</span> <span className="ml-2">{user.name}</span></div>
              <div><span className="text-luxury-gray-dark">Email:</span> <span className="ml-2">{user.email}</span></div>
            </div>
          </div>
        </div>
        <div>
          <div className="card space-y-3">
            <Link to="/account/orders" className="block hover:opacity-70">Order History</Link>
            <Link to="/wishlist" className="block hover:opacity-70">Wishlist</Link>
            <button onClick={() => { localStorage.removeItem('user'); alert('Logged out'); }} className="text-red-600 hover:opacity-70">Logout</button>
          </div>
        </div>
      </div>
    </div>
  );
}
