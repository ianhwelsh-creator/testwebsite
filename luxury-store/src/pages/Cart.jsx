import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';

export default function Cart() {
  const { items, subtotal, shipping, tax, discount, total, removeFromCart, updateQuantity, applyPromoCode, promoCode } = useCart();
  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  const handleApplyPromo = () => {
    const validCodes = ['WELCOME10', 'SALE20', 'LUXURY15'];
    if (validCodes.includes(promoInput.toUpperCase())) {
      applyPromoCode(promoInput);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code');
    }
  };

  if (items.length === 0) {
    return (
      <div className="container-luxury py-24 text-center">
        <h1 className="text-4xl font-serif mb-6">Your Cart is Empty</h1>
        <p className="text-luxury-gray-dark mb-8">Start shopping to add items to your cart</p>
        <Link to="/" className="btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map(item => (
            <div key={item.cartId} className="flex gap-6 pb-6 border-b border-luxury-gray-light">
              <img src={item.image} alt={item.name} className="w-32 h-40 object-cover bg-luxury-cream" />
              <div className="flex-1">
                <Link to={`/product/${item.id}`} className="font-medium hover:opacity-70">{item.name}</Link>
                <p className="text-sm text-luxury-gray-dark mt-1">{item.brand}</p>
                <p className="text-sm text-luxury-gray-dark mt-1">Size: {item.size}</p>
                <p className="text-sm mt-2">${item.price}</p>
                
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center border border-luxury-gray-light">
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity - 1)}
                      className="px-3 py-1 hover:bg-luxury-cream"
                    >
                      −
                    </button>
                    <span className="px-4 py-1">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.cartId, item.quantity + 1)}
                      className="px-3 py-1 hover:bg-luxury-cream"
                    >
                      +
                    </button>
                  </div>
                  <button 
                    onClick={() => removeFromCart(item.cartId)}
                    className="text-sm text-luxury-gray-dark hover:text-luxury-black"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h2 className="text-xl font-serif mb-6">Order Summary</h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-sm text-green-600">
                  <span>Discount ({promoCode})</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm">
                <span>Shipping</span>
                <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-medium text-lg pt-3 border-t">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm mb-2">Promo Code</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={promoInput}
                  onChange={(e) => setPromoInput(e.target.value)}
                  placeholder="Enter code"
                  className="input flex-1"
                />
                <button onClick={handleApplyPromo} className="btn-secondary px-4">Apply</button>
              </div>
              {promoError && <p className="text-sm text-red-600 mt-1">{promoError}</p>}
              <p className="text-xs text-luxury-gray-medium mt-2">Try: WELCOME10, SALE20, LUXURY15</p>
            </div>

            <Link to="/checkout" className="btn-primary w-full block text-center">Proceed to Checkout</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
