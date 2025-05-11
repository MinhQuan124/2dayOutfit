import { ChevronLeftIcon, XMarkIcon } from "../Icons";
import { Link } from "react-router-dom";

function SubMenu({ title, items, onBack, onClose }) {
  return (
    <div className="fixed overflow-x-hidden top-0 h-screen w-80 right-0 z-50 ">
      <div className="flex flex-col right-0 w-80 h-screen bg-white translate-x-0 overflow-y-scroll scroll-smooth">
        {/* Actions button */}
        <div className="flex justify-between items-center py-3 p-1 pr-4">
          {/* Back button */}
          <button
            className="p-3 pl-0 flex hover:text-slate-400"
            onClick={onBack}
          >
            <ChevronLeftIcon />
            <span className="text-base font-semibold pl-2">All</span>
          </button>
          {/* Close button */}
          <button
            className="p-2 rounded-full hover:bg-slate-200"
            onClick={onClose}
          >
            <XMarkIcon />
          </button>
        </div>

        {/* sub menu item*/}
        <div className="w-full space-y-3 pl-9 pr-6">
          <h3 className="font-semibold">{title}</h3>

          <ul className="w-full">
            {items.map((item, index) => (
              <li
                key={index}
                className="w-full text-lg font-semibold text-[#707072] cursor-pointer py-2 hover:text-black"
              >
                {item.onClick ? (
                  <button onClick={item.onClick} className="w-full text-left">
                    {item.label}
                  </button>
                ) : (
                  <Link to={item.link} className="w-full block">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SubMenu;
