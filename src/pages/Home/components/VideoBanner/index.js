import { Link } from "react-router-dom";

const VideoBanner = () => {
  return (
    <div className="relative w-full h-[40vh] ct-lg:min-h-[88vh] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="https://xcdn.next.co.uk/COMMON/Items/Default/Default/Videos%5CNewSeason-DT-3.2.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Overlay & Content */}
      <div className="absolute inset-0 bg-black/30 flex flex-col justify-end pl-4 ct-lg:pl-10 text-white">
        <h1 className="text-3xl ct-lg:text-6xl font-bold">NEW SEASON</h1>
        <Link
          to="/products/all-clothing"
          className="mt-4 mb-8 max-w-fit inline-block px-6 py-3 bg-white text-black text-sm ct-lg:text-lg font-semibold rounded-full"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default VideoBanner;
