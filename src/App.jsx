import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import CartSidebar from "./components/cart/CartSideBar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./components/products/ProductDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/shared/Footer";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <CartSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
        <Route path="/order-confirmation" element={<OrderConfirmation/>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;