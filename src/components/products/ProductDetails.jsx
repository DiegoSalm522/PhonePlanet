import { useParams, useLocation } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { phones } from "../../data/phones";
import { useCart } from "../cart/CartContext";
import Alert from "../shared/Alert";

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart, openCart } = useCart();
  const product = phones.find((p) => p.id === parseInt(id));

  if (!product) {
    return <p className="text-center text-xl">Product not found</p>;
  }

  // Get unique colors
  const colors = useMemo(
    () => [...new Set(product.variants.map((v) => v.color))],
    [product]
  );

  // Get unique storages, sorted from smallest to largest (GB first, then TB)
  const storages = useMemo(() => {
    return [...new Set(product.variants.map((v) => v.storage))].sort((a, b) => {
      const numA = parseInt(a);
      const numB = parseInt(b);
      const unitA = a.includes("TB") ? "TB" : "GB";
      const unitB = b.includes("TB") ? "TB" : "GB";
      if (unitA !== unitB) {
        return unitA === "GB" ? -1 : 1;
      }
      return numA - numB;
    });
  }, [product]);

  // Get color and storage of navigation state
  const navigationState = location.state || {};
  const initialColor = navigationState.selectedColor && colors.includes(navigationState.selectedColor) 
    ? navigationState.selectedColor 
    : colors[0];
  const initialStorage = navigationState.selectedStorage && storages.includes(navigationState.selectedStorage)
    ? navigationState.selectedStorage
    : storages[0];

  // State for selected options
  const [selectedColor, setSelectedColor] = useState(initialColor);
  const [selectedStorage, setSelectedStorage] = useState(initialStorage);
  const [quantity, setQuantity] = useState(1);

  // Scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Find the variant that matches selected options
  const exactVariant = product.variants.find(
    (v) => v.color === selectedColor && v.storage === selectedStorage
  );

  // If no exact match, fallback to any variant with the selected color
  const fallbackVariant =
    product.variants.find((v) => v.color === selectedColor) ||
    product.variants[0];

  // Determine which variant to display
  const selectedVariant = exactVariant || fallbackVariant;

  // Handle Add to Cart
  const handleAddToCart = () => {
    if (!exactVariant) return;
    const cartItem = {
      productId: product.id,
      title: product.title,
      color: selectedColor,
      storage: selectedStorage,
      price: exactVariant.price,
      image: exactVariant.image,
      quantity: quantity,
    };
    addToCart(cartItem);
    showAlertMessage("success", "Product added to cart");
  };

  // Handle Buy Now
  const handleBuyNow = () => {
    if (!exactVariant) return;
    const cartItem = {
      productId: product.id,
      title: product.title,
      color: selectedColor,
      storage: selectedStorage,
      price: exactVariant.price,
      image: exactVariant.image,
      quantity: quantity,
    };
    addToCart(cartItem);
    openCart(); 
  };

  // Show alert after adding to cart
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };

  return (
    <div className="container my-8 flex-1">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="max-w-4xl mx-auto pt-8 pb-8 px-4">
        <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center">{product.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Image */}
          <div>
            <img
              src={selectedVariant.image}
              alt={`${product.title} - ${selectedColor} ${selectedStorage}`}
              className="w-full h-96 object-contain rounded-lg border shadow"
            />
          </div>
          {/* Product Info */}
          <div className="flex flex-col justify-between">
            <div>
              {/* Price */}
              <p className="text-2xl font-semibold text-gray-800 mb-4">
                {exactVariant ? `$${exactVariant.price.toLocaleString()}` : "Product not available"}
              </p>
              {/* Select Color */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Color: {selectedColor}</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  {colors.map((color) => {
                    const variant = product.variants.find((v) => v.color === color);
                    return (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`w-8 h-8 rounded-full border-2 transition ${
                          selectedColor === color
                            ? "ring-2 ring-offset-2 ring-gray-800"
                            : ""
                        }`}
                        style={{ backgroundColor: variant?.hex }}
                      />
                    );
                  })}
                </div>
              </div>
              {/* Select Storage */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Storage:</h3>
                <div className="flex flex-wrap gap-3">
                  {storages.map((storage) => (
                    <button
                      key={storage}
                      onClick={() => setSelectedStorage(storage)}
                      className={`px-4 py-2 rounded-lg border ${
                        selectedStorage === storage
                          ? "bg-gray-900 text-white"
                          : "bg-gray-100"
                      }`}
                    >
                      {storage}
                    </button>
                  ))}
                </div>
              </div>
              {/* Quantity */}
              <div className="mb-4">
                <h3 className="font-medium mb-2">Quantity:</h3>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="h-8 w-8 bg-white border border-black rounded-full"
                  >
                    -
                  </button>
                  <span className="text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="h-8 w-8 bg-white border border-black rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            {/* Action Buttons */}
            <div className="flex gap-4 mt-6">
              <button
                onClick={handleBuyNow}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
                  exactVariant
                    ? "bg-gray-950 text-white cursor-pointer hover:-translate-y-1 duration-200"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
                disabled={!exactVariant}
              >
                Buy Now
              </button>
              <button
                onClick={handleAddToCart}
                className={`flex-1 px-6 py-3 rounded-lg font-semibold transition ${
                  exactVariant
                    ? "bg-white border border-black text-black hover:-translate-y-1 duration-200"
                    : "bg-gray-400 text-white cursor-not-allowed"
                }`}
                disabled={!exactVariant}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;