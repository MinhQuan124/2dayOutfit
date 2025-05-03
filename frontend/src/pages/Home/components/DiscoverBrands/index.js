import { Link } from "react-router-dom";
import FadeInEffect from "../../../../components/FadeInEffect";

const brands = [
  {
    name: "Nike",
    image:
      "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/Search/Lge/526458.jpg?im=Resize,width=450",
  },
  {
    name: "The North Face",
    image:
      "https://www.next.co.uk/cms/resource/blob/937178/5d164f08fb3c0923e7dbf5be684427d0/06-03-25-brands-2-mens-data.jpg",
  },
  {
    name: "Levi's",
    image:
      "https://www.next.co.uk/cms/resource/blob/937180/5684d305f6118b19e7caadd304abad0d/06-03-25-brands-3-mens-data.jpg",
  },
];

function DiscoverBrands() {
  return (
    <FadeInEffect>
      <div className="w-full mt-24">
        <h1 className="text-2xl text-center font-extrabold uppercase">
          Discover Brands
        </h1>
        <div className=" mt-5 flex justify-center gap-1 flex-wrap">
          {brands.map((brand, index) => (
            <Link key={index}>
              <div className="relative overflow-hidden">
                <img
                  src={brand.image}
                  alt={brand.alt}
                  className="w-[480px] h-[600px] object-cover"
                />

                {/* Brand name */}
                <div className="absolute bottom-4 left-4 text-xl uppercase text-white font-bold">
                  {brand.name}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex justify-center align-middle w-full">
          <Link className="flex max-w-[50%] my-5 text-2xl text-center font-extrabold">
            <p className="pr-1">View More </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </FadeInEffect>
  );
}

export default DiscoverBrands;
