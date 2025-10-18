import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative bg-gray-900 text-white">
      {/* Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/img/phones-banner.png)" }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80" />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 lg:px-8 min-h-screen">
        <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4">
          Smartphones for Every Lifestyle
        </h1>
        <p className="text-base sm:text-lg lg:text-2xl mb-8">
          Find the perfect phone at the perfect price
        </p>
        <Link
          to="/products"
          className="bg-white text-black hover:scale-105 text-sm sm:text-lg font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default Banner;
