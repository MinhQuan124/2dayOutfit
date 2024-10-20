import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />

      <div className="container">{children}</div>

      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
