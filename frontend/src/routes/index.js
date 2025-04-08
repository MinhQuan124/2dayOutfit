import Home from "../pages/Home";
import Trending from "../pages/Trending";
import Clothing from "../pages/Clothing";
import Shoes from "../pages/Shoes";
import Accessories from "../pages/Accessories";
import Sales from "../pages/Sales";
import Search from "../pages/Search";
import Account from "../pages/Account";
import Cart from "../pages/Cart";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/trending", component: Trending },
  { path: "/clothing", component: Clothing },
  { path: "/shoes", component: Shoes },
  { path: "/accessories", component: Accessories },
  { path: "/sales", component: Sales },
  { path: "/search", component: Search },
  { path: "/account", component: Account },
  { path: "/cart", component: Cart },
  { path: "/auth/signin", component: SignIn, layout: null },
  { path: "/auth/signup", component: SignUp, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
