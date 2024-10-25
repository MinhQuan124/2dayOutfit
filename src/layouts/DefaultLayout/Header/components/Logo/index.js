import { Link } from "react-router-dom";

import { LogoIcon } from "../../../../../components/Icons";

function Logo() {
  return (
    <Link to="/">
      <div className="logo flex text-2xl text-center font-semibold basis-3/6">
        <LogoIcon />
        <span className="pt-1.5 pl-1 text-2xl hidden mobile:block">
          2dayOutfit
        </span>
      </div>
    </Link>
  );
}

export default Logo;
