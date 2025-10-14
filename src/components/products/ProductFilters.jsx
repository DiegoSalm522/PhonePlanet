import { HiOutlineSearch } from "react-icons/hi";

const ProductFilters = ({
  searchTerm,
  setSearchTerm,
  sortBy,
  setSortBy,
  selectedBrands,
  setSelectedBrands,
  priceRange,
  setPriceRange,
  setCurrentPage
}) => {
  const brands = ["Apple", "HONOR", "HUAWEI", "Motorola", "Oppo", "Samsung", "Xiaomi", "ZTE"];

  const handleBrandToggle = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSortBy("name-asc");
    setSelectedBrands([]);
    setPriceRange({ min: "", max: "" });
    setCurrentPage(1);
  };

  return (
    <aside className="lg:w-64 flex-shrink-0">
      <div className="p-4 sticky top-4">
        <h3 className="text-xl font-bold mb-4">Filters</h3>
        {/* Search Bar */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Search</label>
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
              }}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <HiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
        {/* Sort By */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Sort By</label>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
          >
            <option value="name-asc">Name (A-Z)</option>
            <option value="name-desc">Name (Z-A)</option>
            <option value="price-asc">Price (Low to High)</option>
            <option value="price-desc">Price (High to Low)</option>
          </select>
        </div>
        {/* Brand Filter */}
        <div className="mb-6">
          <label className="block text-sm font-semibold mb-2">Brands</label>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {brands.map(brand => (
              <label key={brand} className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandToggle(brand)}
                  className="w-4 h-4 text-cyan-600 border-gray-300 rounded focus:ring-cyan-600"
                />
                <span className="ml-2 text-sm">{brand}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Price Range */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-2">Price Range</label>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Min"
              value={priceRange.min}
              onChange={(e) => {
                setPriceRange({ ...priceRange, min: e.target.value });
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
            <input
              type="number"
              placeholder="Max"
              value={priceRange.max}
              onChange={(e) => {
                setPriceRange({ ...priceRange, max: e.target.value });
                setCurrentPage(1);
              }}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600"
            />
          </div>
        </div>
        {/* Clear Filters */}
        <button
          onClick={handleClearFilters}
          className="w-full py-2 bg-gray-200 hover:bg-gray-300 rounded-lg font-semibold text-sm transition-colors"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
};

export default ProductFilters;