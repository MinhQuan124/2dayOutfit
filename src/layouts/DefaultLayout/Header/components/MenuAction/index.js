import { Link } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";

import {
  CartIcon,
  MenuIcon,
  SearchIcon,
  UserIcon,
} from "../../../../../components/Icons";
import NavigationMenuMobile from "../NavigationMenuMobile";

// const defaultLayout = document.querySelector("#default-layout");

function ActionMenu() {
  //responsive handle toggle menu bar
  const [isMenuBarOpen, setIsMenuBarOpen] = useState(false);

  const toggleMenuBar = () => {
    setIsMenuBarOpen(!isMenuBarOpen);
  };

  useEffect(() => {
    const app = document.querySelector(".App");

    if (isMenuBarOpen) {
      app.classList.add("overflow-hidden");
    } else {
      app.classList.remove("overflow-hidden");
    }

    return () => app.classList.remove("overflow-hidden");
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
    <div className="action-nav basis-1/6 flex items-center w-full ">
      {/* Search part */}
      <div className="action-nav_search flex items-center max-w-fit ct-lg:w-48 h-9 mr-0 ct-lg:mr-2 bg-transparent ct-lg:bg-slate-100 rounded-3xl overflow-hidden ct-lg:hover:bg-slate-200">
        <button className="ct-icon bg-transparent ct-lg:bg-slate-100 hover:bg-slate-200 ct-lg:hover:bg-slate-300">
          <Link to="/search">
            <SearchIcon />
          </Link>
        </button>

        <input
          className="flex-1 w-full bg-transparent placeholder:text-slate-400 text-base py-1 pl-1 pr-3 outline-none hidden ct-lg:inline"
          type="text"
          placeholder="Search"
        />
      </div>

      <div className="action-nav_account ct-icon ">
        <Link to="/account">
          <UserIcon />
        </Link>
      </div>

      <div className="action-nav_cart ct-icon">
        <Link to="/cart">
          <CartIcon />
        </Link>
      </div>

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
          <NavigationMenuMobile toggleMenu={toggleMenuBar} />
        </div>
      )}
    </div>
  );
}

export default ActionMenu;
