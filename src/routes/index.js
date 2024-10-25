import Home from "../pages/Home";
import Suggestion from "../pages/Suggestion";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";
import Sales from "../pages/Sales";
import Search from "../pages/Search";
import Account from "../pages/Account";
import Cart from "../pages/Cart";

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/suggestion", component: Suggestion },
  { path: "/men", component: Men },
  { path: "/women", component: Women },
  { path: "/kids", component: Kids },
  { path: "/sales", component: Sales },
  { path: "/search", component: Search },
  { path: "/account", component: Account },
  { path: "/cart", component: Cart },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
