import { brands } from "../../data/brands"

const Brands = () => {
  return (
    <div className="pt-8 pb-8">
      <h2 className="text-3xl font-semibold text-center mb-8 md:text-4xl lg:text-5xl">
        Our Brands
      </h2>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
        {brands.map((brand, index) => (
          <div key={index} className="flex p-4 w-auto h-full">
            <img src={brand.image} alt={brand.alt} className="w-auto xl:h-28 h-20 mx-auto"/>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands