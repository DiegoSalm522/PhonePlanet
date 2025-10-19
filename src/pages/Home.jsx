import Banner from "../components/home/Banner";
import Brands from "../components/home/Brands";
import ProductsHome from "../components/home/ProductsHome";
import { phones } from "../data/phones";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Get latest products
const latestProducts = [...phones]
  .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
  .slice(0, 8);

// Get top variants
const topVariants = phones
  .flatMap((phone) =>
    phone.variants.map((variant) => ({
      ...variant,
      title: phone.title,
      productId: phone.id,
    }))
  )
  .sort((a, b) => b.unitsSold - a.unitsSold)
  .slice(0, 8);

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedScroll = sessionStorage.getItem(location.key);
    if (savedScroll) {
      const { x, y } = JSON.parse(savedScroll);
      window.scrollTo(x, y);
    }
    return () => {
      sessionStorage.setItem(
        location.key,
        JSON.stringify({ x: window.scrollX, y: window.scrollY })
      );
    };
  }, [location]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const keysToRemove = [];
    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);
      if (key && key.startsWith("@react-router")) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach(key => sessionStorage.removeItem(key));
    window.history.replaceState(null, "", "/");
    window.history.pushState(null, "", "/");
  }, []);

  useEffect(() => {
    const handleBeforeUnload = () => {
      window.history.replaceState(null, "", "/");
    };

    const handlePopState = (event) => {
      window.history.pushState(null, "", "/");
      event.preventDefault();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);
    window.addEventListener('popstate', handlePopState);
    window.history.pushState(null, "", "/");

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  return (
    <div>
      <Banner/>
      <div className="container my-8 flex-1">
        <div className="mx-8">
          <ProductsHome title="Latest Products" items={latestProducts} />
          <ProductsHome title="Top Picks" items={topVariants} isVariantView />
          <Brands/>
        </div>
      </div>
    </div>
  );
};

export default Home;