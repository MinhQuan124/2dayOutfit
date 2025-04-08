import Categories from "./components/Categories";
import DiscoverBrands from "./components/DiscoverBrands";
import Newsletter from "./components/Newsletter";
import Suggestion from "./components/Suggestion";
import VideoBanner from "./components/VideoBanner";

function Home() {
  return (
    <div className="homePage bg-[#f7f6f3]">
      {/* Video banner section */}
      <VideoBanner />

      <div className="max-w-screen-2xl mx-4 ct-lg:mx-8 mt-10">
        {/* Categories section */}
        <Categories />

        {/* Suggestion section */}
        <Suggestion />

        {/* Free delivery badge */}
        <div className="flex items-center justify-between max-sm:flex-col bg-white border-2 border-blue-500 p-3 rounded-md">
          <p className=" font-bold text-red-700 px-2">Unlimited</p>
          <p className="text-lg max-sm:text-center max-sm:py-2">
            Enjoy <b>free delivery</b> across fashion, just 10$ a year
          </p>
          <button className="text-sm py-2 px-4 max-sm:text-lg rounded-full bg-blue-500 text-white hover:bg-blue-800">
            ADD TO CART
          </button>
        </div>

        {/* Discover brands section */}
        <DiscoverBrands />
      </div>

      {/* Newsletter section */}
      <div className="max-w-screen-2xl mt-5 bg-white">
        <Newsletter />
      </div>
    </div>
  );
}

export default Home;
