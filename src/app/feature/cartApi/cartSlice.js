// src/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
import toast from "react-hot-toast";

const getCartFromLocalStorage = () => {
  const savedCart = localStorage.getItem('cart');
  try {
    // Parse and ensure the cart data is an array
    const parsedCart = savedCart ? JSON.parse(savedCart) : [];
    return Array.isArray(parsedCart) ? parsedCart : [];  // Ensure it's always an array
  } catch (error) {
    console.error('Error parsing cart from localStorage:', error);
    return [];  // Return empty array in case of error
  }
};

const initialState = {
  cartItems: getCartFromLocalStorage(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
   

    // Add multiple products at once (e.g., when restoring cart from localStorage)
    addMultipleToCart: (state, action) => {
      // Add multiple products at once (e.g., when restoring cart from localStorage)
    // Ensure that action.payload is always an array
    const newProductIds = Array.isArray(action.payload) ? action.payload : [action.payload];
    
    // Filter out products that are already in the cart
    const filteredNewProductIds = newProductIds.filter((productId) => !state.cartItems.includes(productId));
  
    if (filteredNewProductIds.length === 0) {
        toast.error('All products are already in the cart.')
    //   toast.warn("");  // You can use a toast or alert for a better user message
    } else {
      // Add new unique products to the cart
      state.cartItems = [...new Set([...state.cartItems, ...filteredNewProductIds])];
  
      // Save the updated cart to localStorage
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
      toast.success(' Products added to cart successfully.')

    }  
    },

    // Remove product from the cart
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.cartItems = state.cartItems.filter(item => item !== productId);
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    },

    // Clear the entire cart
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.removeItem('cart');
    },
  },
});

export const { addToCart, addMultipleToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
