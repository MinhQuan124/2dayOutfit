import { useState } from "react";

function CustomDropdown({ label, options = [], onClick = () => {}, value }) {
  const [openDropdown, setOpenDropdown] = useState(false);

  const toggleDropdown = () => {
    setOpenDropdown((prev) => !prev);
  };

  const handleSelected = (option) => {
    onClick(option);
    setOpenDropdown(false);
  };

  return (
    <div className="relative w-full min-w-[140px] py-3">
      <button
        onClick={() => toggleDropdown()}
        className="flex w-full items-center justify-between gap-2 px-4 py-2 border border-gray-300 rounded-full text-base font-semibold text-gray-800 cursor-pointer whitespace-nowrap"
      >
        {value ? value : label}
        <svg
          className={`w-4 h-4 transition-transform ${
            openDropdown ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {openDropdown && (
        <div className="absolute left-0 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-56 overflow-y-auto">
          <ul className="py-1">
            {options.map((option, i) => (
              <li
                key={i}
                onClick={() => handleSelected(option)}
                className="px-4 py-2 hover:bg-gray-100 text-sm text-gray-800 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CustomDropdown;
