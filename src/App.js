import { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layouts";
import ScrollToTop from "./components/ScrollToTop";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";
import SpinnerLoading from "./components/SpinnerLoading";
function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <ScrollToTop />
          <div className="App">
            <Suspense
              fallback={
                <div className="flex justify-center mt-10">
                  <SpinnerLoading />
                </div>
              }
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
