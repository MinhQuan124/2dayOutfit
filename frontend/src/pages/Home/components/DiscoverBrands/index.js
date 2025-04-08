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
      <div className="w-full mt-24 mb-16">
        <h1 className="text-2xl text-center font-extrabold uppercase">
          Discover Brands
        </h1>
        <div className=" mt-5 flex justify-center gap-1 flex-wrap">
          {brands.map((brand, index) => (
            <Link>
              <div key={index} className="relative overflow-hidden">
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
      </div>
    </FadeInEffect>
  );
}

export default DiscoverBrands;
