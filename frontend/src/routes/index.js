import Home from "../pages/Home";
import Mens from "../pages/Mens";
import OurStory from "../pages/OurStory";
import SpecialOffers from "../pages/SpecialOffers";
import Sales from "../pages/Sales";
import SearchPage from "../pages/SearchPage";
import Account from "../pages/Account";
import MyProfile from "../pages/MyProfile";
import Cart from "../pages/Cart";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";

import VerifyEmail from "../pages/VerifyEmail";
import VerifyEmailNotice from "../pages/VerifyEmailNotice";
import VerifySuccess from "../pages/VerifySuccess";
import VerifyError from "../pages/VerifyError";

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
  { path: "/member/my-profile", component: MyProfile },
  { path: "/cart", component: Cart },
  { path: "/auth/login", component: Login, layout: null },
  { path: "/auth/register", component: Register, layout: null },
  {
    path: "/auth/verify-email",
    component: VerifyEmail,
    layout: null,
  },
  {
    path: "/auth/verify-email-notice",
    component: VerifyEmailNotice,
    layout: null,
  },
  { path: "/auth/verify-success", component: VerifySuccess, layout: null },
  { path: "/auth/verify-error", component: VerifyError, layout: null },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
