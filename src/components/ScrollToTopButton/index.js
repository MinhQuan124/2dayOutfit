import { useEffect, useState } from "react";
import { ChevronUpIcon } from "../Icons";

function ScrollToTopButton() {
  const [isShowed, setIsShowed] = useState(false);

  useEffect(() => {
    //Show button when scroll 300px
    const handleScroll = () => {
      setIsShowed(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    //clear after mounting
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    isShowed && (
      <button
        onClick={handleScroll}
        className="fixed bottom-4 right-4 p-3 bg-gray-300 rounded-full shadow-lg hover:bg-gray-500 transition-all z-100"
      >
        <ChevronUpIcon />
      </button>
    )
  );
}

export default ScrollToTopButton;
