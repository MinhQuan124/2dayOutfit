import { Link } from "react-router-dom";

function NavigationMenu() {
  return (
    <ul className="basis-2/6 hidden ct-lg:flex ct-lg:items-center ct-lg:justify-end ct-lg:gap-8 font-bold uppercase text-sm text-textColor">
      <li className="relative block group">
        <div className="ct-navigation-menu-item">
          <div className="p-1 py-0">Mens</div>
        </div>

        {/* fake component */}
        <div className="absolute top-full left-1/2 -translate-x-1/2 w-[100px] h-5 z-40"></div>

        {/* SubMenu hover */}
        <div className="absolute mt-[12px] hidden group-hover:flex w-[600px] left-1/2 -translate-x-1/2 z-30 bg-white shadow normal-case p-5">
          {/* Column 1 */}
          <div className="w-1/3 text-left">
            <p className="text-orange-400 text-[13px] mb-3">New In</p>
            <h3 className="pb-2">CLOTHING</h3>
            <ul className="font-normal">
              <li className="ct-menu-item-list">
                <Link to="/products/all-clothing">All Clothing</Link>
              </li>
              <li className="ct-menu-item-list">
                <Link to="/products/category/shirt">Shirts</Link>
              </li>
              <li className="ct-menu-item-list">
                <Link to="/products/category/jacket">Jackets</Link>
              </li>
              <li className="ct-menu-item-list">
                <Link to="/products/category/suit">Suits</Link>
              </li>
              <li className="ct-menu-item-list">
                <Link to="/products/category/pants">Pants</Link>
              </li>
              <li className="ct-menu-item-list">
                <Link to="/products/category/shorts">Shorts</Link>
              </li>
              <li className="ct-menu-item-list">
                <Link to="/products/category/hoodie">Hoodies</Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="w-1/3 text-left">
            <h3 className="pb-2">FOOTWEAR</h3>
            <ul className="font-normal">
              <li className="ct-menu-item-list">
                <Link to="/products/category/footwear">All Footwear</Link>
              </li>
              <li className="ct-menu-item-list">Sport Shoes</li>
              <li className="ct-menu-item-list">Boots</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="w-1/3 text-left">
            <h3 className="pb-2">ACCESSORIES</h3>
            <ul className="font-normal">
              <li className="ct-menu-item-list">
                <Link to="/products/category/accessories">All Accessories</Link>
              </li>
              <li className="ct-menu-item-list">Watch</li>
              <li className="ct-menu-item-list">Glasses</li>
              <li className="ct-menu-item-list">Necklace</li>
            </ul>
          </div>
        </div>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 py-0" to="/our-story">
          Our Story
        </Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 py-0" to="/special-offer">
          Special Offers
        </Link>
      </li>

      <li className="ct-navigation-menu-item">
        <Link className="block p-1 py-0" to="/sales">
          Sales
        </Link>
      </li>
    </ul>
  );
}

export default NavigationMenu;
