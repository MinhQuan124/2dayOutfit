function ProductItem({ src, name, price }) {
  return (
    <div className="flex flex-col group hover:cursor-pointer">
      <div className="bg-white rounded-md overflow-hidden">
        <img
          src={src}
          alt={name}
          className="w-full h-96 rounded-md object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="mt-2 py-4">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
          {name}
        </h3>
        <div className="flex items-center justify-between mt-1">
          <span className="text-lg font-medium">{price}$</span>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
