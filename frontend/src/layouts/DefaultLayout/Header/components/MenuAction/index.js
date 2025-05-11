import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  CartIcon,
  FavouriteIcon,
  MenuIcon,
  UserIcon,
} from "../../../../../components/Icons";
import Tippy from "@tippyjs/react";
import SeachBar from "../../../../../components/SearchBar";
import SliderNavbar from "../SliderNavbar";
import { useAuth } from "../../../../../context/AuthContext";
import { useCartContext } from "../../../../../context/CartContext";

// const defaultLayout = document.querySelector("#default-layout");

function ActionMenu() {
  const { user } = useAuth();

  const { cart } = useCartContext();

  const [totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => {
    const totalQuantity = cart.items.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    setTotalQuantity(totalQuantity);
  }, [cart]);

  //responsive handle toggle menu bar
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  const toggleMenuBar = () => {
    if (isMenuBarOpen) {
      setAnimate(false);
      setTimeout(() => setIsMenuBarOpen(false), 300); // Animation duration
    } else {
      setIsMenuBarOpen(!isMenuBarOpen);
      setAnimate(true); // Animation duration
    }
  };

  useEffect(() => {
    const app = document.body;

    const improveSidebar = () => {
      if (isMenuBarOpen) {
        app.classList.add("overflow-hidden");

        if (window.innerWidth < 768) {
          app.classList.add("pr-0");
          app.classList.remove("pr-4");
        } else if (window.innerWidth < 1024) {
          app.classList.add("pr-4");
          app.classList.remove("pr-0");
        }
      } else {
        app.classList.remove("overflow-hidden", "pr-0", "pr-4");
      }
    };

    improveSidebar(); // Excecute when component mounted

    window.addEventListener("resize", improveSidebar); // Listen for resize event

    return () => {
      app.classList.remove("overflow-hidden", "pr-0", "pr-4");
      window.removeEventListener("resize", improveSidebar); // Cleanup when unmount
    };
  }, [isMenuBarOpen]);

  //Handle resize to delete menu bar
  const handleResize = () => {
    if (window.innerWidth >= 960) {
      setIsMenuBarOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="action-nav basis-1/6 flex items-center w-full">
      {/* Search part */}
      <SeachBar />

      {/* action part */}
      <Link
        to={user ? "/member/my-profile" : "/auth/login"}
        className="block ct-lg:hidden"
      >
        <div className="action-nav_account ct-icon">
          <UserIcon size={24} strokeWidth={1.5} />
        </div>
      </Link>

      <Tippy
        content={
          <div className="p-3 bg-white shadow-lg rounded-lg w-full">
            <p className="text-gray-700 text-sm">Your favourites</p>
          </div>
        }
        offset={[0, 8]}
        placement="bottom"
      >
        <Link to="/account" className="block">
          <div className="action-nav_account ct-icon">
            <FavouriteIcon size={"size-6"} />
          </div>
        </Link>
      </Tippy>

      <Link to="/cart" className="block">
        <div className="relative action-nav_cart ct-icon">
          <CartIcon />
          {totalQuantity > 0 && (
            <div className="absolute text-[10px] pt-1 font-semibold">
              {totalQuantity >= 10 ? "9+" : totalQuantity}
            </div>
          )}
        </div>
      </Link>

      {/* 'lg': '1024px',
      ct-lg: 960px ct = custom
      // => @media (min-width: 1024px) { ... } */}
      <div className="action-nav_menu flex items-center basis-1/6 ct-lg:hidden">
        <button className="ct-icon" onClick={toggleMenuBar}>
          <MenuIcon />
        </button>
      </div>

      {isMenuBarOpen && (
        <div className="ct-lg:hidden">
          <div
            className="bottom-0 block left-0 fixed right-0 top-0 max-h-screen bg-coverLayout z-10 "
            onClick={toggleMenuBar}
          ></div>
          <SliderNavbar toggleMenu={toggleMenuBar} animate={animate} />
        </div>
      )}
    </div>
  );
}

export default ActionMenu;
