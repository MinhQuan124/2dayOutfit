import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getSearchedProducts } from "../../services/apis/productService";
import ProductList from "../Mens/components/ProductList";
import Pagination from "../../components/Pagination";

function SearchPage() {
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  const location = useLocation();
  const navigate = useNavigate();

  //get search query from url
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("q") || "";

  useEffect(() => {
    if (!query.trim()) {
      navigate("/");
      return;
    }

    const fetchResults = async () => {
      try {
        const { data, total, totalPages } = await getSearchedProducts({
          q: query,
          page,
          limit: 12,
        });

        setResults(data);
        setTotalResults(total);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("error searching", error);
      }
    };

    fetchResults();
  }, [query, page, navigate]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!query.trim()) {
    return null;
  }

  return (
    <div className="px-4 sm:px-8">
      {/* Result part */}
      <div className="my-8">
        <h1 className="font-bold">
          Search results for "{query}" ({totalResults})
        </h1>
      </div>

      {/* Products part */}

      {results.length === 0 ? (
        <div className="text-center py-12">
          <div>Cannot find products "{query}"</div>
          <button
            onClick={() => navigate("/")}
            className="text-blue-600 underline"
          >
            Back to Homepage
          </button>
        </div>
      ) : (
        <div className="my-5">
          <ProductList data={results} />

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchPage;
