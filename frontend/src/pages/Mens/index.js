import { useEffect, useState } from "react";
import { getProducts } from "../../services/apis/productService";

import ProductList from "./components/ProductList";
import Filters from "../../components/Filters";
import Pagination from "../../components/Pagination";

function Mens() {
  const [listProduct, setListProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = async (page) => {
    try {
      const data = await getProducts(page);
      setListProduct(data.products);
      setCurrentPage(data.page);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Product error", error);
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col pb-8">
      <div>
        <Filters data={listProduct} />
      </div>
      <div className="mt-40 px-8">
        <ProductList data={listProduct} />
      </div>

      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}

export default Mens;
