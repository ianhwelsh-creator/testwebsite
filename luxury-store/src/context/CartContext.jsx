import { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.size === action.payload.size
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => item.cartId !== action.payload),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.cartId === action.payload.cartId
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case 'APPLY_PROMO':
      const validCodes = {
        'WELCOME10': 0.10,
        'SALE20': 0.20,
        'LUXURY15': 0.15
      };
      const discount = validCodes[action.payload] || 0;
      return {
        ...state,
        promoCode: action.payload,
        discount: discount,
      };

    case 'CLEAR_CART':
      return {
        items: [],
        promoCode: null,
        discount: 0,
      };

    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    promoCode: null,
    discount: 0,
  }, (initial) => {
    const stored = localStorage.getItem('luxury-cart');
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem('luxury-cart', JSON.stringify(state));
  }, [state]);

  const subtotal = state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discountAmount = subtotal * state.discount;
  const shipping = subtotal > 0 ? (subtotal > 500 ? 0 : 25) : 0;
  const tax = (subtotal - discountAmount) * 0.08;
  const total = subtotal - discountAmount + shipping + tax;

  const addToCart = (product, size) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        id: product.id,
        cartId: `${product.id}-${size}-${Date.now()}`,
        name: product.name,
        brand: product.brand,
        price: product.price.onSale ? product.price.amount : product.price.amount,
        image: product.images[0],
        size,
      },
    });
  };

  const removeFromCart = (cartId) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: cartId });
  };

  const updateQuantity = (cartId, quantity) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { cartId, quantity } });
    }
  };

  const applyPromoCode = (code) => {
    dispatch({ type: 'APPLY_PROMO', payload: code.toUpperCase() });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
        subtotal,
        discount: discountAmount,
        shipping,
        tax,
        total,
        promoCode: state.promoCode,
        addToCart,
        removeFromCart,
        updateQuantity,
        applyPromoCode,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};
