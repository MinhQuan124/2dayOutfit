import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import {
  getProductDetail,
  getProductsByCategory,
} from "../../services/apis/productService";
import CustomDropdown from "../../components/CustomDropdown";
import { FavouriteIcon } from "../../components/Icons";
import ScrollToTopButton from "../../components/ScrollToTopButton";
import RelatedProducts from "./components/RelatedProducts";
import ReviewsSection from "./components/ReviewsSection";

function ProductDetail() {
  //Get params slug
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedVariation, setSelectedVariation] = useState(null);
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

  return (
    <div className="my-5 px-4 md:p-8 flex flex-col gap-14">
      <div className="flex flex-col md:flex-row gap-14">
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
                className={`w-16 h-16 lg:w-24 lg:h-24 object-cover rounded cursor-pointer border-2 ${
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
            <div className="h-[350px] lg:w-[450px] lg:h-[550px]">
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
                }}
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
              />
            </div>
          </div>

          {/* Order section */}
          <div className="flex flex-col w-full items-center mx-auto">
            <div className="py-2">
              <button className="w-96 border text-lg text-white p-1.5 rounded-full font-semibold bg-[#007A7A] hover:bg-slate-600 transition-all duration-300">
                Add to Bag
              </button>
            </div>
            <div className="py-2">
              <button className="w-96 border text-lg p-1.5 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300">
                <span className="flex items-center justify-center gap-1">
                  <FavouriteIcon />
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
            <RelatedProducts products={relatedProducts} />
          </div>

          {/* Divider */}
          <hr className="border border-gray-100"></hr>
        </div>
      </div>

      {/* Reviews Section */}
      <ReviewsSection />

      <ScrollToTopButton />
    </div>
  );
}

export default ProductDetail;
