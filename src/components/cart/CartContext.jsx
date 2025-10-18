import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("phoneplanet_cart");
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("phoneplanet_cart", JSON.stringify(cart));
  }, [cart]);

  // Add item to cart
  const addToCart = (item) => {
    setCart(prevCart => {
      // Verify if item already exists in cart
      const existingIndex = prevCart.findIndex(
        cartItem => 
          cartItem.productId === item.productId &&
          cartItem.color === item.color &&
          cartItem.storage === item.storage
      );
      if (existingIndex > -1) {
        // If exists, update quantity
        const newCart = [...prevCart];
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newCart[existingIndex].quantity + item.quantity
        };
        return newCart;
      } else {
        // If not, add new item
        return [...prevCart, item];
      }
    });
  };

  // Remove item from cart
  const removeFromCart = (productId, color, storage) => {
    setCart(prevCart => 
      prevCart.filter(
        item => !(item.productId === productId && item.color === color && item.storage === storage)
      )
    );
  };

  // Update item quantity
  const updateQuantity = (productId, color, storage, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId, color, storage);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.productId === productId && item.color === color && item.storage === storage
          ? { ...item, quantity: newQuantity }
          : item
      )
    );
  };

  // Empty car
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("phoneplanet_cart");
  };

  // Get total items in cart
  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // Get total price of items in cart
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  // Open/close/toggle cart sidebar
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  const value = {
    cart,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    openCart,
    closeCart,
    toggleCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};