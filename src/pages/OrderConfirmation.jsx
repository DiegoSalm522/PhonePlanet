import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/cart/CartContext";
import { FaCheckCircle } from "react-icons/fa";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    clearCart();
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="container my-8 flex-1 bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
        <div className="flex justify-center mb-6">
          <FaCheckCircle className="text-green-500" size={80} />
        </div>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Thank You for Your Order!
        </h1>
        <p className="text-gray-600 mb-2">
          Your order has been successfully placed.
        </p>
        <p className="text-gray-600 mb-2">
          You will receive a confirmation email shortly with your order details.
        </p>
        <div className="bg-gray-100 p-4 rounded-lg mb-8">
          <p className="text-sm text-gray-600">Order Number</p>
          <p className="text-xl font-bold text-gray-900">
            #{Math.random().toString(36).substr(2, 9).toUpperCase()}
          </p>
        </div>
        <div className="space-y-3">
          <button
            onClick={() => handleNavigation("/")}
            className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => handleNavigation("/products")}
            className="w-full py-3 bg-white border border-black text-black rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;