import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layouts";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Suspense
              fallback={<p className="text-center mt-10">Loading...</p>}
            >
              <Routes>
                {publicRoutes.map((route, index) => {
                  const Layout = route.layout || DefaultLayout;
                  const Page = route.component;
                  return (
                    <Route
                      key={index}
                      exact
                      path={route.path}
                      element={
                        route.layout === null ? (
                          <Page />
                        ) : (
                          <Layout>
                            <Page />
                          </Layout>
                        )
                      }
                    />
                  );
                })}
              </Routes>
            </Suspense>
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
