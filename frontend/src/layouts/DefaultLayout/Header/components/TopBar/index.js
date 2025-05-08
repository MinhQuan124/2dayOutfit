import { Link } from "react-router-dom";

import MenuPopper from "../../../../../components/Popper/MenuPopper";
import { useAuth } from "../../../../../context/AuthContext";

const TOP_BAR_HELP_ITEM = [
  {
    label: "Order status",
  },
  {
    label: "Dispatch and Delivery",
  },
  {
    label: "Returns",
  },
  {
    label: "Privacy Policy",
  },
  {
    label: "Terms of Sale",
  },
  {
    label: "Terms of Use",
  },
  {
    label: "Send Us Feedback",
  },
];

const TOP_BAR_ACCOUNT_ITEMS = [
  {
    label: "Profile",
    link: "/member/my-profile",
  },
  {
    label: "Orders",
    link: "/orders",
  },
  {
    label: "Favourites",
    link: "/favorites",
  },
  {
    label: "Account Settings",
    link: "/settings",
  },
];

function TopBar() {
  const { user, logout } = useAuth();

  const TOP_BAR_ACCOUNT_ITEMS_WITH_LOGOUT = [
    ...TOP_BAR_ACCOUNT_ITEMS,
    {
      label: "Log Out",
      onClick: logout,
    },
  ];

  return (
    <div className="hidden ct-lg:flex justify-end items-center h-9 w-full max-w-screen-2xl ct-lg:px-6 px-1">
      <ul className="flex items-center text-xs">
        <li className="flex items-center">
          <Link to="/" className="ct-header-top-item">
            <p>Find a Store</p>
          </Link>
          <div className="border-r border-white h-3 mx-1"></div>
        </li>

        <li className="flex items-center">
          <MenuPopper title="Help" items={TOP_BAR_HELP_ITEM}>
            <Link to="/" className="ct-header-top-item">
              <p>Help</p>
            </Link>
          </MenuPopper>
          <div className="border-r border-white h-3 mx-1"></div>
        </li>

        <li className="flex items-center">
          <Link to="/" className="ct-header-top-item">
            <p>Join Us</p>
          </Link>
          <div className="border-r border-white h-3 mx-1"></div>
        </li>
        <li className="flex items-center">
          {user ? (
            <MenuPopper
              title="Account"
              items={TOP_BAR_ACCOUNT_ITEMS_WITH_LOGOUT}
            >
              <div className="ct-header-top-item">Hi, {user.name}</div>
            </MenuPopper>
          ) : (
            <Link to="/auth/login" className="ct-header-top-item">
              <p>Login</p>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
