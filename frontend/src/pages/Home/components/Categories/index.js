import { Link } from "react-router-dom";

const categories = [
  {
    name: "SUITS",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113076/suit_ljnmf8.jpg",
    link: "/products/category/suit",
  },
  {
    name: "JACKETS",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113073/jacket_koedbe.jpg",
    link: "/products/category/jacket",
  },
  {
    name: "SHIRTS",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113074/shirt_gb6mwb.webp",
    link: "/products/category/shirt",
  },
  {
    name: "PANTS",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113074/pants_a3ivzd.jpg",
    link: "/products/category/pants",
  },
  {
    name: "SHORTS",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113076/short_crwix6.webp",
    link: "/products/category/shorts",
  },
  {
    name: "HOODIES",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113073/hoodies_qh7vd2.jpg",
    link: "/products/category/hoodie",
  },
  {
    name: "FOOTWEAR",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113073/footwear_ztacec.webp",
    link: "/products/category/footwear",
  },
  {
    name: "ACCESSORIES",
    image:
      "https://res.cloudinary.com/draqaiefe/image/upload/v1744113073/accessories_l971yv.jpg",
    link: "/products/category/accessories",
  },
];

function Categories() {
  return (
    <div className="categories_home">
      <h1 className="text-2xl font-extrabold uppercase text-center">
        Categories
      </h1>
      <div className="my-6 flex justify-center gap-6 flex-wrap">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.link}
            className="flex flex-col items-center group transition duration-300"
          >
            <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
              {/* Categories images */}
              <img
                className="w-24 h-24 object-cover rounded-full"
                src={category.image}
                alt={category.name}
              />
            </div>
            {/* Categories titles */}
            <p className="mt-3 text-sm text-gray-600 group-hover:text-black">
              {category.name}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Categories;
