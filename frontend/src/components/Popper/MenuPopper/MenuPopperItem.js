import { Link } from "react-router-dom";

function MenuPopperItem({ data }) {
  if (data.onClick) {
    return (
      <div
        onClick={data.onClick}
        className="h-7 w-full flex justify-start text-xs font-semibold text-gray-600 hover:text-black cursor-pointer"
      >
        {data.label}
      </div>
    );
  }

  return (
    <div>
      <Link
        to={data.link || "#"}
        className="h-7 w-full flex justify-start text-xs font-semibold text-gray-600 hover:text-black cursor-pointer"
      >
        {data.label}
      </Link>
    </div>
  );
}

export default MenuPopperItem;
