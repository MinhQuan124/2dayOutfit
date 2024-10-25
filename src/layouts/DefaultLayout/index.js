import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <div className="container relative max-w-screen-2xl text-base bg-slate-300 h-screen">
      <Header />

      <div className="content h-lvh">{children}</div>

      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
