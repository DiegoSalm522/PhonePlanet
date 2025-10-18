import { useState, useMemo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { phones } from "../data/phones";
import ProductCard from "../components/products/ProductCard";
import ProductFilters from "../components/products/ProductFilters";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Products = () => {
  const location = useLocation();
  
  // Load saved state
  const loadSavedState = () => {
    try {
      const savedState = sessionStorage.getItem("productsPageState");
      if (savedState) {
        return JSON.parse(savedState);
      }
    } catch (error) {
      console.error("Error loading saved state:", error);
    }
    return null;
  };

  const savedState = loadSavedState();
  const [searchTerm, setSearchTerm] = useState(savedState?.searchTerm || "");
  const [sortBy, setSortBy] = useState(savedState?.sortBy || "name-asc");
  const [selectedBrands, setSelectedBrands] = useState(savedState?.selectedBrands || []);
  const [priceRange, setPriceRange] = useState(savedState?.priceRange || { min: "", max: "" });
  const [currentPage, setCurrentPage] = useState(savedState?.currentPage || 1);
  const [scrollPosition, setScrollPosition] = useState(savedState?.scrollPosition || 0);
  const productsPerPage = 20;

  // Save state in sessionStorage every time it changes
  useEffect(() => {
    const stateToSave = {
      searchTerm,
      sortBy,
      selectedBrands,
      priceRange,
      currentPage,
      scrollPosition: window.scrollY,
    };
    sessionStorage.setItem("productsPageState", JSON.stringify(stateToSave));
  }, [searchTerm, sortBy, selectedBrands, priceRange, currentPage]);

  // Restore scroll position
  useEffect(() => {
    if (savedState?.scrollPosition && location.state?.fromProductDetails) {
      setTimeout(() => {
        window.scrollTo(0, savedState.scrollPosition);
      }, 0);
    }
  }, []);

  const filteredAndSortedPhones = useMemo(() => {
    let filtered = [...phones];
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(phone =>
        phone.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    // Filter by brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter(phone =>
        selectedBrands.includes(phone.brand)
      );
    }
    // Filter by price range
    if (priceRange.min || priceRange.max) {
      filtered = filtered.filter(phone => {
        const cheapestPrice = Math.min(...phone.variants.map(v => v.price));
        const min = priceRange.min ? parseFloat(priceRange.min) : 0;
        const max = priceRange.max ? parseFloat(priceRange.max) : Infinity;
        return cheapestPrice >= min && cheapestPrice <= max;
      });
    }

    // Sort
    filtered.sort((a, b) => {
      const priceA = Math.min(...a.variants.map(v => v.price));
      const priceB = Math.min(...b.variants.map(v => v.price));
      switch (sortBy) {
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        case "price-asc":
          return priceA - priceB;
        case "price-desc":
          return priceB - priceA;
        default:
          return 0;
      }
    });
    return filtered;
  }, [phones, searchTerm, selectedBrands, priceRange, sortBy]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedPhones.length / productsPerPage);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = filteredAndSortedPhones.slice(startIndex, endIndex);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container my-8 flex-1">
      <div className="py-4 mx-8">
        <h2 className="text-3xl font-semibold text-center pb-4 md:text-4xl lg:text-5xl">
          Products
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 pt-4">
          {/* Filters Sidebar */}
          <ProductFilters
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            sortBy={sortBy}
            setSortBy={setSortBy}
            selectedBrands={selectedBrands}
            setSelectedBrands={setSelectedBrands}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
            setCurrentPage={setCurrentPage}
          />
          {/* Products Grid */}
          <div className="flex-1">
            {/* Results count */}
            {currentProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-xl text-gray-500">No products found matching your criteria.</p>
              </div>
            ) : (
              <>
                <div className="mb-4 text-gray-600">
                  Showing {startIndex + 1}-{Math.min(endIndex, filteredAndSortedPhones.length)} of {filteredAndSortedPhones.length} products
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
                  {currentProducts.map((phone) => {
                    const cheapestVariant = phone.variants.reduce((min, v) =>
                      v.price < min.price ? v : min
                    );
                    const colors = [
                      ...new Map(
                        phone.variants.map((v) => [v.color, { color: v.color, hex: v.hex }])
                      ).values(),
                    ];
                    return (
                      <ProductCard
                        key={phone.id}
                        id={phone.id}
                        title={phone.title}
                        price={cheapestVariant.price}
                        image={cheapestVariant.image}
                        colors={colors}
                        selectedColor={cheapestVariant.color}
                        selectedStorage={cheapestVariant.storage}
                      />
                    );
                  })}
                </div>
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaChevronLeft />
                    </button>
                    <div className="md:flex grid grid-cols-5">
                    {[...Array(totalPages)].map((_, index) => {
                      const page = index + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`flex px-4 py-2 mx-1 mb-2 rounded-lg font-semibold text-center justify-center ${
                              currentPage === page
                                ? "bg-black text-white"
                                : "bg-white border border-gray-300 hover:bg-gray-100"
                            }`}
                          >
                            {page}
                          </button>
                        );
                    })}
                    </div>
                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === totalPages}
                      className="p-2 rounded-lg bg-white border border-gray-300 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;