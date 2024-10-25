import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <ul className="basis-2/6 hidden ct-lg:flex ct-lg:items-center ct-lg:justify-end ct-lg:gap-8 font-medium uppercase text-sm text-textColor">
      <li className="ct-navigation-menu-item">
        <Link to="/suggestion">Suggestion</Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link to="/men">Men</Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link to="/women">Women</Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link to="/kids">Kids</Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link to="/sales">Sales</Link>
      </li>
    </ul>
  );
}

export default NavigationMenu;
