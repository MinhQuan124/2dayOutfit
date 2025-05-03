import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import {
  getProducts,
  getFilteredProducts,
} from "../../services/apis/productService";
import ProductList from "./components/ProductList";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";

function Mens() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [filters, setFilters] = useState({});
  const [sortOption, setSortOption] = useState("default");

  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = parseInt(searchParams.get("page")) || 1;

  // Fetch products when filter or page tchange
  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const params = {
          page: currentPage,
          ...filters,
          sortBy: getSortField(sortOption),
          sortOrder: getSortOrder(sortOption),
        };

        const data = category
          ? await getProducts(currentPage, category, params)
          : await getFilteredProducts(params);

        setProducts(data.products);
        setTotalPages(data.pagination?.totalPages || 1);

        //Update URL if page change
        if (data.page && data.page !== currentPage) {
          setSearchParams({ page: data.page, ...filters });
        }
      } catch (error) {
        console.error("Product error", error);
        setProducts([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [currentPage, category, filters, sortOption, setSearchParams]);

  // Hàm hỗ trợ chuyển đổi sort option
  const getSortField = (option) => {
    switch (option) {
      case "Price: Low - High":
      case "Price: High - Low":
        return "price";
      case "New In":
        return "createdAt";
      default:
        return;
    }
  };

  const getSortOrder = (option) => {
    switch (option) {
      case "Price: High - Low":
      case "New In":
        return "desc";
      case "Price: Low - High":
        return "asc";
      default:
        return;
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return;
    setSearchParams({ page: newPage, ...filters });
  };

  const handleFilterChange = (newFilters) => {
    const apiFilters = {
      ...(newFilters.Category?.length && {
        category: newFilters.Category.join(","),
      }),
      ...(newFilters.Brand?.length && { brand: newFilters.Brand.join(",") }),
      ...(newFilters.Color?.length && { color: newFilters.Color.join(",") }),
      ...(newFilters.Size?.length && { size: newFilters.Size.join(",") }),
    };

    setFilters(apiFilters);
    setSearchParams({ page: 1, ...apiFilters }); // Reset to page 1 when filter change
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
    setSearchParams({ page: 1, ...filters });
  };

  return (
    <div className="flex flex-col pb-8">
      <div className="fixed w-full z-10 bg-white">
        <Filters
          data={products}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>

      <div className="mt-40 px-8">
        {isLoading ? (
          <div className="text-center py-8">Loading...</div>
        ) : products.length === 0 ? (
          <div className="text-center py-8">No products found</div>
        ) : (
          <>
            <ProductList data={products} />

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
