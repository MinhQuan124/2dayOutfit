import PropTypes from "prop-types";

import Header from "./Header";
import Footer from "./Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="flex flex-col min-h-screen items-center mx-auto">
        <div className="flex-1 w-full max-w-screen-2xl">{children}</div>
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
