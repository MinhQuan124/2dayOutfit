import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import {
  getProductDetail,
  getProductsByCategory,
} from "../../services/apis/productService";
import Toast from "../../components/Toast";
import { toast } from "../../components/Toast";
import CustomDropdown from "../../components/CustomDropdown";
import { FavouriteIcon } from "../../components/Icons";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import RelatedProducts from "./components/RelatedProducts";
import { useAuth } from "../../context/AuthContext";
import { addCartItem } from "../../services/apis/cartService";
import { useCartContext } from "../../context/CartContext";

function ProductDetail() {
  //Get params slug
  const { slug } = useParams();

  const { user } = useAuth();
  const userId = user?.id;

  const { cart, fetchCart, setCart } = useCartContext();

  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [relatedProducts, setRelatedProducts] = useState([]);

  //Read more/ Show less description
  const [showFullDes, setShowFullDes] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await getProductDetail(slug);

        setProduct(res);
        setSelectedVariation(res.variations[0] || null); //Get first variation

        const relatedRes = await getProductsByCategory(res.category);
        const exceptProductFiltered = relatedRes.products.filter(
          (product) => product.slug !== slug
        ); //Except its produucts
        setRelatedProducts(exceptProductFiltered);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProduct();
  }, [slug]);

  if (!product) return <div className="p-8 text-center">...</div>;

  const handleAddToCart = async () => {
    //Check if user login
    if (!userId) {
      window.location.href = "/auth/login";
      return;
    }

    if (!selectedColor || !selectedSize)
      return toast.warning("Please choose size and color");

    try {
      const existingItem = (cart?.items || []).find(
        (item) =>
          item.productId._id === product._id &&
          item.color === selectedColor &&
          item.size === selectedSize
      );

      if (existingItem) {
        if (existingItem.quantity >= 10) {
          return toast.error(
            "Sorry, you have reached the quantity limit (10). Please remove an item and try again."
          );
        }

        await addCartItem(
          userId,
          product._id,
          product.price,
          selectedSize,
          selectedColor,
          selectedVariation?.image,
          existingItem ? existingItem.quantity + 1 : 1
        );
      } else {
        await addCartItem(
          userId,
          product._id,
          product.price,
          selectedSize,
          selectedColor,
          selectedVariation?.image
        );
      }

      toast.success("Added to Cart");
      fetchCart(userId, setCart);
    } catch (error) {
      console.error("Add product to cart failed", error);
      toast.error("Something went wrong. Please try again");
    }
  };

  return (
    <div className="p-4 pt-0 lg:p-8 lg:pt-0 flex flex-col gap-14">
      <Toast />
      <div className="flex flex-col lg:flex-row gap-14">
        {/* Image and info section */}
        {/* Image section */}
        <div className="flex flex-row-reverse md:flex-row gap-4 w-full md:w-auto">
          {/* Other images (varitations) */}
          <div className="flex flex-col gap-2 order-1 md:order-none overflow-y-auto">
            {product.variations.map((variation) => (
              <img
                key={variation.image}
                src={variation.image}
                alt={variation.color}
                className={`w-16 h-16 md:w-24 md:h-24 object-cover rounded cursor-pointer border-2 ${
                  selectedVariation === variation
                    ? "border-black"
                    : "border-transparent"
                }`}
                onClick={() => {
                  setSelectedVariation(variation);
                }}
              />
            ))}
          </div>

          {/* main img */}
          <div className="flex-1">
            <div className="h-[350px] sm:h-[600px] lg:w-[450px] lg:h-[550px]">
              <img
                src={selectedVariation?.image}
                alt="Product"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>

        {/* Info section */}
        <div className="flex-1 space-y-6 overflow-hidden">
          {/* Name and price */}
          <div className="flex justify-between pt-4">
            <div>
              <h1 className="font-semibold">{product.name}</h1>
              <p className="text-sm text-gray-400 pt-2">{product.brand}</p>
            </div>
            <p className="font-[550]">{product.price}$</p>
          </div>

          {/* Divider */}
          <hr className="border border-gray-100"></hr>

          {/* Color and size */}
          <div>
            {/* COlor */}
            <>
              <h3 className="text-[1.2rem] text-[rgba(0,0,0,0.8)]">Color</h3>
              <CustomDropdown
                label="Choose color"
                options={product.variations.map((v) => v.color)}
                onClick={(color) => {
                  const variation = product.variations.find(
                    (v) => v.color === color
                  );
                  setSelectedVariation(variation);
                  setSelectedColor(color);
                  setSelectedSize(null);
                }}
                value={selectedColor}
              />
            </>

            {/* Size */}
            <div className="py-3">
              <div className="flex justify-between align-middle">
                <h3 className="text-[1.2rem] text-[rgba(0,0,0,0.8)]">Size</h3>
                <Link
                  to="#"
                  className="text-base underline text-gray-400 font-semibold"
                >
                  Size Guild
                </Link>
              </div>
              <CustomDropdown
                label="Choose size"
                options={[
                  ...new Set(selectedVariation?.sizes.map((s) => s.size) || []),
                ]}
                onClick={(size) => setSelectedSize(size)}
                value={selectedSize}
              />
            </div>
          </div>

          {/* Order section */}
          <div className="flex flex-col w-full items-center mx-auto">
            <div className="py-2 w-full flex justify-center">
              <button
                onClick={handleAddToCart}
                className="w-96 border text-lg text-white p-1.5 rounded-full font-semibold bg-[#007A7A] hover:bg-[#8b9292] transition-all duration-300"
              >
                Add to Cart
              </button>
            </div>
            <div className="py-2 w-full flex justify-center">
              <button className="w-96 border text-lg p-1.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                <span className="flex items-center justify-center gap-1">
                  <FavouriteIcon size={"size-6"} />
                  Favourite
                </span>
              </button>
            </div>
          </div>

          {/* Divider */}
          <hr className="border border-gray-100"></hr>

          <div>
            <p className={`text-sm ${showFullDes ? "" : "line-clamp-2"}`}>
              {product.description}
            </p>
            <button
              onClick={() => setShowFullDes(!showFullDes)}
              className="text-sm text-gray-500 font-semibold underline"
            >
              {showFullDes ? "Show Less" : "Read More"}
            </button>
          </div>

          {/* Divider */}
          <hr className="border border-gray-100"></hr>

          {/* Suggestion related product */}
          <div className="w-full">
            <h3 className="text-sm font-semibold mb-4">You May Also Like</h3>

            <RelatedProducts products={relatedProducts} />
          </div>

          {/* Divider */}
          <hr className="border border-gray-100"></hr>
        </div>
      </div>

      {/* Reviews Section */}

      <ScrollToTopButton />
    </div>
  );
}

export default ProductDetail;
