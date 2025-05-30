import { Link } from "react-router-dom";

import {
  CartIcon,
  ChevronRightIcon,
  HelpIcon,
  StoreIcon,
  UserIcon,
  XMarkIcon,
} from "../../../../../components/Icons";
import { useAuth } from "../../../../../context/AuthContext";
import { useState } from "react";
import SubMenu from "../../../../../components/SubMenu";

const SUB_MENU_ACCOUNT_ITEMS = [
  {
    label: "My Profile",
    link: "/member/my-profile",
  },
  {
    label: "Orders",
    link: "/orders",
  },
  {
    label: "Favorites",
    link: "/favorites",
  },
  {
    label: "Account Settings",
    link: "/settings",
  },
];

const SUB_MENU_MENS_ITEMS = [
  {
    label: "All Clothing",
    link: "/products/all-clothing",
  },
  {
    label: "Shirts",
    link: "/products/category/shirt",
  },
  {
    label: "Jackets",
    link: "/products/category/jacket",
  },
  {
    label: "Suits",
    link: "/products/category/suit",
  },
  {
    label: "Pants",
    link: "/products/category/pants",
  },
  {
    label: "Shorts",
    link: "/products/category/shorts",
  },
  {
    label: "Hoodies",
    link: "/products/category/hoodie",
  },
  {
    label: "Footwears",
    link: "/products/category/footwear",
  },
  {
    label: "Accessories",
    link: "/products/category/accessories",
  },
];

function SliderNavbar({ toggleMenu, animate }) {
  const { user, logout } = useAuth();
  const [subMenu, setSubMenu] = useState(null);

  const SUB_MENU_ACCOUNT_ITEMS_WITH_LOGOUT = [
    ...SUB_MENU_ACCOUNT_ITEMS,
    {
      label: "Log Out",
      onClick: logout,
    },
  ];

  const handleOpenSubMenu = (title, items) => {
    setSubMenu({ title, items });
  };

  const handleCloseSubMenu = () => setSubMenu(null);

  return (
    <div
      className={`fixed overflow-x-hidden top-0 h-screen w-80 right-0 z-50 ${
        animate ? "animate-slideIn" : "animate-slideOut"
      } `}
    >
      <div className="flex flex-col right-0 w-80 h-screen bg-white translate-x-0 overflow-y-scroll scroll-smooth">
        {/* Close button */}
        <div className="flex justify-end py-3 pl-6 pr-4">
          <button
            className="p-2 rounded-full hover:bg-slate-200"
            onClick={toggleMenu}
          >
            <XMarkIcon />
          </button>
        </div>

        {user ? (
          <button
            onClick={() =>
              handleOpenSubMenu(
                "My Account",
                SUB_MENU_ACCOUNT_ITEMS_WITH_LOGOUT
              )
            }
            className="ct-navigation-menu-item-mobile"
          >
            <UserIcon size={36} strokeWidth={2} />
            <span className="text-lg">Hi, {user.name}</span>
            <ChevronRightIcon />
          </button>
        ) : (
          <></>
        )}

        {/* Navigation menu */}
        <div className="py-6">
          <button
            onClick={() => handleOpenSubMenu("Mens", SUB_MENU_MENS_ITEMS)}
            className="ct-navigation-menu-item-mobile"
          >
            <span>Mens</span>
            <ChevronRightIcon />
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/our-story">Our Story</Link>
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/special-offers">Special Offers</Link>
          </button>

          <button className="ct-navigation-menu-item-mobile">
            <Link to="/sales">Sales</Link>
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

      {/* Sub menu */}
      {subMenu && (
        <SubMenu
          title={subMenu.title}
          items={subMenu.items}
          onBack={handleCloseSubMenu}
          onClose={toggleMenu}
        />
      )}

      {/* Submenu account */}
      {user && subMenu && (
        <SubMenu
          title={subMenu.title}
          items={subMenu.items}
          onBack={handleCloseSubMenu}
          onClose={toggleMenu}
        />
      )}
    </div>
  );
}

export default SliderNavbar;
