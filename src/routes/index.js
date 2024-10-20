import Home from "../pages/Home";
import Suggestion from "../pages/Suggestion";
import Men from "../pages/Men";
import Women from "../pages/Women";
import Kids from "../pages/Kids";

//Public routes
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/suggestion", component: Suggestion },
  { path: "/men", component: Men },
  { path: "/women", component: Women },
  { path: "/kids", component: Kids },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
