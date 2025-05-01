import { Link } from "react-router-dom";

import ProductItem from "../ProductItem";
import ScrollToTopButton from "../../../../components/ScrollToTopButton";

function ProductList({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-0 sm:p-4">
      {data.map((item) => (
        <Link to={`/products/${item.slug}`}>
          <ProductItem
            key={item._id}
            src={item.variations[0].image}
            name={item.name}
            price={item.price}
          />
        </Link>
      ))}
      <ScrollToTopButton />
    </div>
  );
}

export default ProductList;
