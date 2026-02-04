import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export default function Checkout() {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    zipCode: '',
    country: 'United States',
    shipping: 'standard',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCVV: '',
  });

  if (items.length === 0) {
    return (
      <div className="container-luxury py-24 text-center">
        <h1 className="text-4xl font-serif mb-6">Your Cart is Empty</h1>
        <p className="text-luxury-gray-dark mb-8">Add items to your cart before checking out</p>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Mock order processing
      setTimeout(() => {
        clearCart();
        navigate('/order-confirmation', { 
          state: { 
            orderNumber: `ORD-${Date.now()}`,
            total,
            items
          } 
        });
      }, 1500);
    }
  };

  return (
    <div className="container-luxury py-12">
      <h1 className="text-4xl font-serif mb-8">Checkout</h1>

      <div className="flex justify-center mb-12">
        <div className="flex items-center space-x-4">
          {['Shipping', 'Delivery', 'Payment'].map((label, idx) => (
            <div key={label} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                idx + 1 <= step ? 'bg-luxury-black text-luxury-white' : 'bg-luxury-gray-light'
              }`}>
                {idx + 1}
              </div>
              <span className={`ml-2 text-sm ${idx + 1 <= step ? 'text-luxury-black' : 'text-luxury-gray-medium'}`}>{label}</span>
              {idx < 2 && <div className="w-12 h-px bg-luxury-gray-light mx-4" />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Shipping Information</h2>
                <input name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="Email" className="input" />
                <div className="grid grid-cols-2 gap-4">
                  <input name="firstName" required value={formData.firstName} onChange={handleInputChange} placeholder="First Name" className="input" />
                  <input name="lastName" required value={formData.lastName} onChange={handleInputChange} placeholder="Last Name" className="input" />
                </div>
                <input name="address" required value={formData.address} onChange={handleInputChange} placeholder="Address" className="input" />
                <div className="grid grid-cols-3 gap-4">
                  <input name="city" required value={formData.city} onChange={handleInputChange} placeholder="City" className="input" />
                  <input name="zipCode" required value={formData.zipCode} onChange={handleInputChange} placeholder="ZIP Code" className="input" />
                  <select name="country" value={formData.country} onChange={handleInputChange} className="input">
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <button type="submit" className="btn-primary">Continue to Delivery</button>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Delivery Method</h2>
                <label className="flex items-center p-4 border border-luxury-gray-light cursor-pointer hover:border-luxury-black">
                  <input type="radio" name="shipping" value="standard" checked={formData.shipping === 'standard'} onChange={handleInputChange} className="mr-3" />
                  <div className="flex-1">
                    <p className="font-medium">Standard Delivery</p>
                    <p className="text-sm text-luxury-gray-dark">5-7 business days</p>
                  </div>
                  <span>$25</span>
                </label>
                <label className="flex items-center p-4 border border-luxury-gray-light cursor-pointer hover:border-luxury-black">
                  <input type="radio" name="shipping" value="express" checked={formData.shipping === 'express'} onChange={handleInputChange} className="mr-3" />
                  <div className="flex-1">
                    <p className="font-medium">Express Delivery</p>
                    <p className="text-sm text-luxury-gray-dark">2-3 business days</p>
                  </div>
                  <span>$45</span>
                </label>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(1)} className="btn-secondary">Back</button>
                  <button type="submit" className="btn-primary flex-1">Continue to Payment</button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-serif">Payment Information</h2>
                <input name="cardNumber" required value={formData.cardNumber} onChange={handleInputChange} placeholder="Card Number" className="input" />
                <input name="cardName" required value={formData.cardName} onChange={handleInputChange} placeholder="Cardholder Name" className="input" />
                <div className="grid grid-cols-2 gap-4">
                  <input name="cardExpiry" required value={formData.cardExpiry} onChange={handleInputChange} placeholder="MM/YY" className="input" />
                  <input name="cardCVV" required value={formData.cardCVV} onChange={handleInputChange} placeholder="CVV" className="input" />
                </div>
                <p className="text-xs text-luxury-gray-medium">Note: This is a demo. No real payment will be processed.</p>
                <div className="flex gap-4">
                  <button type="button" onClick={() => setStep(2)} className="btn-secondary">Back</button>
                  <button type="submit" className="btn-primary flex-1">Place Order</button>
                </div>
              </div>
            )}
          </form>
        </div>

        <div className="lg:col-span-1">
          <div className="card sticky top-24">
            <h3 className="text-xl font-serif mb-6">Order Summary</h3>
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.cartId} className="flex gap-3">
                  <img src={item.image} alt={item.name} className="w-16 h-20 object-cover bg-luxury-cream" />
                  <div className="flex-1 text-sm">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-luxury-gray-dark">Size: {item.size}</p>
                    <p className="text-luxury-gray-dark">Qty: {item.quantity}</p>
                  </div>
                  <p className="text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="border-t border-luxury-gray-light pt-4">
              <div className="flex justify-between font-medium text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
