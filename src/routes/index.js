import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const Mens = lazy(() => import("../pages/Mens"));
const OurStory = lazy(() => import("../pages/OurStory"));
const SpecialOffers = lazy(() => import("../pages/SpecialOffers"));
const Sales = lazy(() => import("../pages/Sales"));
const SearchPage = lazy(() => import("../pages/SearchPage"));
const Account = lazy(() => import("../pages/Account"));
const MyProfile = lazy(() => import("../pages/MyProfile"));
const Cart = lazy(() => import("../pages/Cart"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const Order = lazy(() => import("../pages/Order"));
const Login = lazy(() => import("../pages/Auth/Login"));
const Register = lazy(() => import("../pages/Auth/Register"));
const VerifyEmail = lazy(() => import("../pages/VerifyEmail"));
const VerifyEmailNotice = lazy(() => import("../pages/VerifyEmailNotice"));
const VerifySuccess = lazy(() => import("../pages/VerifySuccess"));
const VerifyError = lazy(() => import("../pages/VerifyError"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));

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
  { path: "/checkout", component: CheckoutPage },
  { path: "/orders", component: Order },
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
