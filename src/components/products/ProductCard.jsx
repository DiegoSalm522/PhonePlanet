import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ id, title, price, image, colors, selectedColor, selectedStorage }) => {
  const location = useLocation();
  
  return (
    <Link 
      to={`/products/${id}`}
      state={{ 
        selectedColor, 
        selectedStorage,
        fromProducts: location.pathname === "/products"
      }}
    >
      <div className="flex flex-col w-auto h-full p-4 border rounded-2xl shadow-xl hover:scale-105 mx-auto transition duration-300">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-auto xl:h-[228px] md:h-[208px] sm:h-[180px] rounded-lg mb-4 mx-auto"
          />
        )}
        <h2 className="md:text-lg text-base font-semibold text-center">{title}</h2>
        <p className="md:text-2xl text-xl text-center">
          ${price.toLocaleString()}
        </p>
        <div className="flex justify-center gap-2 mt-3 flex-wrap">
          {colors.map(({ color, hex }) => (
            <span
              key={color}
              className="w-6 h-6 rounded-full border border-gray-400"
              style={{ backgroundColor: hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;