import { Link } from "react-router-dom";

import MenuPopper from "../../../../../components/Popper/MenuPopper";

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

function TopBar() {
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
          <MenuPopper items={TOP_BAR_HELP_ITEM}>
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
          <Link to="/auth/signin" className="ct-header-top-item">
            <p>Sign In</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default TopBar;
