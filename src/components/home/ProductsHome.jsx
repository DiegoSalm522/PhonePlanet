import ProductCard from "../products/ProductCard";

const ProductsHome = ({ title, items, isVariantView = false }) => {
  return (
    <div className="pt-8 pb-8">
      <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className="grid grid-cols-2 gap-8 gap-y-8 lg:grid-cols-4">
        {items.map((item) => {
          if (isVariantView) {
            return (
              <ProductCard
                key={`${item.productId}-${item.storage}-${item.color}`}
                id={item.productId}
                title={`${item.title} - ${item.color} ${item.storage}`}
                price={item.price}
                image={item.image}
                colors={[{ color: item.color, hex: item.hex }]}
                selectedColor={item.color}
                selectedStorage={item.storage}
              />
            );
          } else {
            const cheapestVariant = item.variants.reduce((min, v) =>
              v.price < min.price ? v : min
            );
            const colors = [
              ...new Map(
                item.variants.map((v) => [v.color, { color: v.color, hex: v.hex }])
              ).values(),
            ];
            return (
              <ProductCard
                key={item.id}
                id={item.id}
                title={item.title}
                price={cheapestVariant.price}
                image={cheapestVariant.image}
                colors={colors}
                selectedColor={cheapestVariant.color}
                selectedStorage={cheapestVariant.storage}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default ProductsHome;