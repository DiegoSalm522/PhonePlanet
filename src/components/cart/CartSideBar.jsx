import { useCart } from "./CartContext";
import { FaTimes, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const CartSidebar = () => {
  const { 
    cart, 
    isCartOpen, 
    closeCart, 
    removeFromCart, 
    updateQuantity, 
    getTotalPrice 
  } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isCartOpen]);

  const handleNavigation = (path) => {
    closeCart();
    navigate(`/${path}`);
  }

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity"
        onClick={closeCart}
      />
      {/* Sidebar */}
      <div className="fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b flex-shrink-0">
          <h2 className="text-2xl font-bold">Shopping Cart</h2>
          <button className="p-2" onClick={closeCart}>
            <FaTimes size={24} />
          </button>
        </div>
        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <p className="text-xl mb-4">Your cart is empty</p>
              <button
                onClick={() => handleNavigation("products")}
                className="px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition duration-300 ease-in-out"
              >
                Go to Shop
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div 
                  key={`${item.productId}-${item.color}-${item.storage}`}
                  className="flex gap-4 p-4 border rounded-lg"
                >
                  {/* Image */}
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded"
                  />
                  {/* Details */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{item.title}</h3>
                    <p className="text-sm text-gray-800">
                      {item.color} - {item.storage}
                    </p>
                    <p className="font-bold text-sm mt-1">
                      ${item.price.toLocaleString()}
                    </p>
                    {/* Quantity Controls */}
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(item.productId, item.color, item.storage, item.quantity - 1)}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        -
                      </button>
                      <span className="text-sm font-medium">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.color, item.storage, item.quantity + 1)}
                        className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.productId, item.color, item.storage)}
                    className="text-red-500 hover:text-red-700 transition"
                  >
                    <FaTrash size={18} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t p-4 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span>${getTotalPrice().toLocaleString()}</span>
            </div>
            <button
              onClick={() => handleNavigation("checkout")}
              className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;