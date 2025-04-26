import ProductItem from "../ProductItem";

function ProductList({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 p-0 sm:p-4">
      {data.map((item) => (
        <ProductItem
          key={item._id}
          src={item.variations[0].image}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default ProductList;
