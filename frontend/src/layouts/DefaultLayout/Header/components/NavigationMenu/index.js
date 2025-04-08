import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <ul className="basis-2/6 hidden ct-lg:flex ct-lg:items-center ct-lg:justify-end ct-lg:gap-8 font-bold uppercase text-sm text-textColor">
      <li className="ct-navigation-menu-item">
        <Link className="block p-1 pb-0" to="/trending">
          Trending
        </Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 pb-0" to="/clothing">
          Clothing
        </Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 pb-0" to="/shoes">
          Shoes
        </Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 pb-0" to="/accessories">
          Accessories
        </Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 pb-0" to="/sales">
          Sales
        </Link>
      </li>
    </ul>
  );
}

export default NavigationMenu;
