import { Link } from "react-router-dom";

function HeaderMenu({ title, onClick }) {
  return (
    <header className="pb-5">
      <Link className="" to="/" onClick={onClick}>
        <p className="text-lg w-12 h-6 font-medium ">{title}</p>
      </Link>
    </header>
  );
}

export default HeaderMenu;
