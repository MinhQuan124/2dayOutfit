import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

import { getProducts } from "../../services/apis/productService";
import ProductList from "./components/ProductList";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";

function Mens() {
  const [listProduct, setListProduct] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({
    Category: [],
    Size: [],
    Brand: [],
    Color: [],
  });

  const { category } = useParams(); //Get category from URL
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);

      try {
        const data = await getProducts(currentPage, category);

        setListProduct(data.products);
        setTotalPages(data.totalPages || 1);

        if (data.page !== currentPage) {
          setSearchParams({ page: data.page });
        }
      } catch (error) {
        console.error("Product error", error);
        setListProduct([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, category, setSearchParams]);

  //Handle page change function
  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ page: newPage });
  };

  //Handle filter change function
  const handleFilterChange = (selectedFilters) => {
    setFilters(selectedFilters);
  };

  const getFilteredProducts = () => {
    return listProduct.filter((product) => {
      //Check if user choose filter by Category and if it include product in chosen category
      if (
        filters.Category?.length &&
        !filters.Category.includes(product.category)
      )
        return false;

      //Check if user choose filter by Brand and if it include product in chosen Brand
      if (filters.Brand?.length && !filters.Brand.includes(product.brand))
        return false;

      //Check if user choose filter by Brand and if it has some product that have chosen color
      if (
        filters.Color?.length &&
        !product.variations.some((variation) =>
          filters.Color.includes(variation.color)
        )
      )
        return false;

      if (
        filters.Size?.length &&
        !product.variations.some((variation) =>
          variation.sizes.some((variationSize) =>
            filters.Size.includes(variationSize.size)
          )
        )
      )
        return false;

      return true;
    });
  };

  const filteredProducts = getFilteredProducts();

  return (
    <div className="flex flex-col pb-8">
      <div className="fixed w-full z-10 bg-white">
        <Filters data={listProduct} onFilterChange={handleFilterChange} />
      </div>

      <div className="mt-40 px-8">
        {isLoading ? (
          <div className="text-center py-8">...</div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-8">No products found [T . T]</div>
        ) : (
          <>
            <ProductList data={filteredProducts} />

            {totalPages > 1 && (
              <div className="mt-8 flex justify-center">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Mens;
