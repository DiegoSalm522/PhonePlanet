import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/cart/CartContext";

const Checkout = () => {
  const { cart, getTotalPrice} = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    // Personal Info
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    // Address
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    // Payment
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let cleanedValue = value;
    if (["phone", "zipCode", "cardNumber", "expiryDate", "cvv"].includes(name)) {
      cleanedValue = value.replace(/\D/g, "");
      if (name === "expiryDate") {
        if (cleanedValue.length > 2) {
          cleanedValue = cleanedValue.slice(0, 2) + "/" + cleanedValue.slice(2, 4);
        }
        if (cleanedValue.length > 5) {
          cleanedValue = cleanedValue.slice(0, 5);
        }
      }
    }
    else if (["firstName", "lastName", "city", "state", "country", "cardName"].includes(name)) {
      cleanedValue = value.replace(/[^a-zA-Z\sáéíóúÁÉÍÓÚñÑ]/g, "");
    }
    else {
      cleanedValue = value;
    }
    setFormData({ ...formData, [name]: cleanedValue });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    const form = document.querySelector("form");
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    navigate("/order-confirmation", { 
      state: { fromCheckout: true } 
    });
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl h-full mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <button
          onClick={() => navigate("/products")}
          className="px-6 py-3 bg-black text-white rounded-full hover:scale-105 transition duration-300 ease-in-out"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="container my-8 flex-1">
      <div className="py-4 max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold pb-8 text-center">Checkout</h1>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Side - Forms */}
          <div className="space-y-6">
            <form className="space-y-6">
              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Personal Information</h2>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  minLength="10"
                  maxLength="10"
                  required
                  className="w-full mt-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
              </div>
              {/* Shipping Address */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Shipping Address</h2>
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="Street Address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    id="zipCode"
                    name="zipCode"
                    type="text"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <input
                    id="country"
                    name="country"
                    type="text"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    required
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>
              </div>
              {/* Payment Information */}
              <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-xl font-bold mb-4">Payment Information</h2>
                <input
                  id="cardNumber"
                  name="cardNumber"
                  type="text"
                  placeholder="Card Number"
                  value={formData.cardNumber}
                  onChange={handleChange}
                  required
                  minLength="16"
                  maxLength="16"
                  className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
                <input
                  id="cardName"
                  name="cardName"
                  type="text"
                  placeholder="Cardholder Name"
                  value={formData.cardName}
                  onChange={handleChange}
                  required
                  className="w-full mb-4 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                />
                <div className="grid grid-cols-2 gap-4">
                  <input
                    id="expiryDate"
                    name="expiryDate"
                    type="text"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    required
                    maxLength="5"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                  <input
                    id="cvv"
                    name="cvv"
                    type="text"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleChange}
                    required
                    minLength="3"
                    maxLength="3"
                    className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
                  />
                </div>
              </div>
              {/* Submit Button - Visible on mobile */}
              <button
                onClick={handleSubmit}
                className="w-full md:hidden py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Complete Order
              </button>
            </form>
          </div>
          {/* Right Side - Order Summary */}
          <div className="md:sticky md:top-8 h-fit">
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-4 mb-6 overflow-y-auto">
                {cart.map((item) => (
                  <div key={`${item.productId}-${item.color}-${item.storage}`} className="flex gap-4 pb-4 border-b">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-16 h-16 object-contain rounded"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-sm">{item.title} {item.color} - {item.storage}</h3>
                      <p className="text-sm mt-1">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="space-y-2 pt-4 border-t">
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span>${getTotalPrice().toLocaleString()}</span>
                </div>
              </div>
              {/* Submit Button - Visible on desktop */}
              <button
                onClick={handleSubmit}
                className="hidden md:block w-full mt-6 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;