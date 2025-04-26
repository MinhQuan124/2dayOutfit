import { useState, useEffect } from "react";

function Filters({ data }) {
  const [filters, setFilters] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    if (data && data.length > 0) {
      //...new Set(): lay ra cac gia tri khong trung lap
      //flatMap(): de xu ly du lieu long nhau

      const categories = [...new Set(data.map((item) => item.category))];

      const brands = [...new Set(data.map((item) => item.brand))];

      const sizes = [
        ...new Set(
          data.flatMap((item) =>
            item.variations.flatMap((variation) =>
              variation.sizes.map((sizeObj) => sizeObj.size)
            )
          )
        ),
      ];

      const colors = [
        ...new Set(
          data.flatMap((item) =>
            item.variations.map((variation) => variation.color)
          )
        ),
      ];

      setFilters([
        { label: "Category", options: categories },
        { label: "Size", options: sizes },
        { label: "Brand", options: brands },
        { label: "Color", options: colors },
      ]);
    }
  }, [data]);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="flex flex-col fixed px-12 bg-white w-full min-h-fit z-30">
      {/* Sort part */}
      <div className="pt-5">
        <label
          htmlFor="sort"
          className="text-sm font-semibold text-gray-600 mr-2"
        >
          Sort
        </label>
        <select
          id="sort"
          className="border border-black px-4 py-2 w-52 rounded-full cursor-pointer text-sm focus:outline-none"
        >
          <option>Default</option>
          <option>Most Popular</option>
          <option>Price: Low - High</option>
          <option>Price: High - Low</option>
        </select>
      </div>

      {/* Filter part */}
      <div className="pb-5 mt-2">
        <label className="text-sm font-semibold text-gray-600 mb-2 block">
          Filter
        </label>
        <div className="flex items-center w-fit border border-gray-300 bg-white overflow-visible">
          {filters.map((filter, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex items-center justify-between gap-2 px-4 py-2 min-w-[160px] border-r border-gray-300 text-base font-semibold text-gray-800 hover:bg-gray-50 cursor-pointer whitespace-nowrap"
              >
                {filter.label}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    openDropdown === index ? "rotate-180" : ""
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
              {openDropdown === index && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-56 overflow-y-auto">
                  <ul className="py-1">
                    {filter.options.map((option, i) => (
                      <li
                        key={i}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-2"
                        />
                        <span className="text-sm text-gray-700 truncate">
                          {option}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Filters;
