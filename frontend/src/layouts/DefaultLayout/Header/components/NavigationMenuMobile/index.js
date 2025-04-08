import { Link } from "react-router-dom";

import {
  CartIcon,
  ChevronRightIcon,
  HelpIcon,
  StoreIcon,
  XMarkIcon,
} from "../../../../../components/Icons";

function NavigationMenuMobile({ toggleMenu, animate }) {
  return (
    <div
      className={`fixed overflow-x-hidden top-0 h-screen w-80 right-0 z-50 ${
        animate ? "animate-slideIn" : "animate-slideOut"
      } `}
    >
      <div className="flex flex-col right-0 w-80 h-screen bg-white translate-x-0 overflow-y-scroll scroll-smooth">
        {/* Close button */}
        <div className="flex justify-end py-2 pl-6 pr-4">
          <button
            className="p-2 rounded-full hover:bg-slate-200"
            onClick={toggleMenu}
          >
            <XMarkIcon />
          </button>
        </div>

        {/* Navigation menu */}
        <div className="py-6">
          <button className="ct-navigation-menu-item-mobile">
            <Link to="/trending">Trending</Link>
            <ChevronRightIcon />
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/clothing">Clothing</Link>
            <ChevronRightIcon />
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/shoes">Shoes</Link>
            <ChevronRightIcon />
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/accessories">Accessories</Link>
            <ChevronRightIcon />
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/sales">Sales</Link>
            <ChevronRightIcon />
          </button>
        </div>

        {/* Join Us Wrapper */}
        <div className="py-12 px-9">
          <h4 className="text-xl font-semibold text-slate-600">
            Become our member for the best products and receive member-only
            offers.
            <Link className="text-textColor ml-1" to="/join-us">
              Learn more
            </Link>
          </h4>

          <button className="block w-full bg-blue-500 text-white text-center py-2 px-5 mt-3 rounded-full hover:bg-blue-600">
            <Link className="" to="/join-us">
              Join Us
            </Link>
          </button>
        </div>

        {/* User item wrapper*/}
        <div className="flex flex-col max-h-60 pt- pb-36">
          <Link className="ct-user-item">
            <div className="mr-3">
              <HelpIcon />
            </div>
            <p className="text-textColor text-xs4 font-semibold">Help</p>
          </Link>

          <Link className="ct-user-item">
            <div className="mr-3">
              <CartIcon />
            </div>
            <p className="text-textColor text-xs4 font-semibold">Bag</p>
          </Link>

          <Link className="ct-user-item">
            <div className="mr-3">
              <StoreIcon />
            </div>
            <p className="text-textColor text-xs4 font-semibold">
              Find a Store
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavigationMenuMobile;
