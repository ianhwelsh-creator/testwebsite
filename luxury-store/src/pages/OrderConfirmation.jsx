import { Link, useLocation } from 'react-router-dom';

export default function OrderConfirmation() {
  const location = useLocation();
  const { orderNumber, total } = location.state || { orderNumber: 'ORD-123456', total: 0 };

  return (
    <div className="container-luxury py-24 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-4xl font-serif mb-4">Order Confirmed!</h1>
        <p className="text-luxury-gray-dark mb-8">Thank you for your purchase. Your order has been received.</p>
        <div className="bg-luxury-cream p-8 mb-8">
          <p className="text-sm text-luxury-gray-dark mb-2">Order Number</p>
          <p className="text-2xl font-medium mb-4">{orderNumber}</p>
          <p className="text-sm text-luxury-gray-dark mb-2">Total Amount</p>
          <p className="text-2xl font-medium">${total.toFixed(2)}</p>
        </div>
        <p className="text-luxury-gray-dark mb-8">We'll send you shipping confirmation when your items are on the way.</p>
        <div className="flex gap-4 justify-center">
          <Link to="/account/orders" className="btn-secondary">View Orders</Link>
          <Link to="/" className="btn-primary">Continue Shopping</Link>
        </div>
      </div>
    </div>
  );
}
