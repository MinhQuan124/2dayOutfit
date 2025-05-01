import { Link } from "react-router-dom";
import { useRef } from "react";
import {
  ChevronRightIcon,
  ChevronLeftIcon,
} from "../../../../components/Icons";

function RelatedProducts({ products }) {
  const scrollRef = useRef(null);

  if (!products || products.length === 0)
    return <p className="text-sm font-semibold">No Available Products</p>;

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative py-6">
      <h3 className="text-sm font-semibold mb-4">You May Also Like</h3>

      {/* Navigation buttons */}
      <button
        onClick={scrollLeft}
        className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronLeftIcon />
      </button>
      <button
        onClick={scrollRight}
        className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        <ChevronRightIcon />
      </button>

      {/* Product List */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth no-scrollbar py-2"
      >
        {products.map((product) => (
          <div
            key={product._id}
            className="flex-shrink-0 w-[140px] sm:w-[120px] md:w-[140px] bg-white"
          >
            <Link to={`/products/${product.slug}`}>
              <div className="w-full h-44 overflow-hidden">
                <img
                  src={product.variations?.[0]?.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-sm font-medium mt-2 px-1 line-clamp-2">
                {product.name}
              </p>
              <p className="text-base font-semibold mt-1 px-1">
                {product.price}$
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedProducts;
