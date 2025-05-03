import { useEffect, useState } from "react";

import { LeftArrowCircle, RightArrowCircle } from "../Icons";
import { Link } from "react-router-dom";

function Carousel({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const previousSlide = () => {
    if (currentSlide === 0) setCurrentSlide(slides.length - 1);
    else setCurrentSlide(currentSlide - 1);
  };

  const nextSlide = () => {
    if (currentSlide === slides.length - 1) setCurrentSlide(0);
    else setCurrentSlide(currentSlide + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const carouselLink = ["/sales", "/men", "/women", "kids"];

  return (
    // Carousel container
    <div className="overflow-hidden relative w-full h-full">
      {/* Slide container */}
      <div
        className="flex transition-transform ease-in-out duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Link
            to={carouselLink[index]}
            key={index}
            className="w-full flex-shrink-0" // Đảm bảo mỗi ảnh chiếm đúng 100% slide
          >
            <img
              key={index}
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover aspect-[16/9]"
            />
          </Link>
        ))}
      </div>

      {/* Carousel controller */}
      <button
        className="absolute top-0 left-0 h-full w-16 flex items-center justify-center group"
        onClick={previousSlide}
      >
        <span className="bg-black/30 ct-lg:p-4 p-2 rounded-full group-hover:bg-gray-300">
          <LeftArrowCircle className="text-white text-4xl" />
        </span>
      </button>

      {/* Nút điều hướng phải */}
      <button
        className="absolute top-0 right-0 h-full w-16 flex items-center justify-center group"
        onClick={nextSlide}
      >
        <span className="bg-black/30 ct-lg:p-4 p-2 rounded-full group-hover:bg-gray-300">
          <RightArrowCircle className="text-white text-4xl" />
        </span>
      </button>

      {/* Carousel indicators */}
      <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
        {slides.map((slide, index) => {
          return (
            <button
              onClick={() => {
                setCurrentSlide(index);
              }}
              key={"Circle" + index}
              className={`rounded-full w-3 h-3 ${
                index === currentSlide ? "bg-white scale-125" : "bg-gray-300"
              }`}
            ></button>
          );
        })}
      </div>
    </div>
  );
}

export default Carousel;
