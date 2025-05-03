import Home from "../pages/Home";
import Mens from "../pages/Mens";
import OurStory from "../pages/OurStory";
import SpecialOffers from "../pages/SpecialOffers";
import Sales from "../pages/Sales";
import SearchPage from "../pages/SearchPage";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

import ProductDetail from "../pages/ProductDetail";

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/products/all-clothing", component: Mens },
  { path: "/products/category/:category", component: Mens },
  { path: "/products/:slug", component: ProductDetail },
  { path: "/our-story", component: OurStory },
  { path: "/special-offers", component: SpecialOffers },
  { path: "/sales", component: Sales },
  { path: "/search", component: SearchPage },
  { path: "/account", component: Account },
  { path: "/cart", component: Cart },
  { path: "/auth/signin", component: SignIn, layout: null },
  { path: "/auth/signup", component: SignUp, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
