import { useState, useEffect } from "react";
import { XMarkIcon } from "../Icons";

function Filters({ data, onFilterChange, onSortChange }) {
  const [filters, setFilters] = useState([]);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [selectedFilters, setSelectedFilters] = useState({
    Category: [],
    Size: [],
    Brand: [],
    Color: [],
  });

  useEffect(() => {
    if (data && data.length > 0) {
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

  const handleCheckboxChange = (label, option) => {
    const current = selectedFilters[label] || [];

    const newSelected = current.includes(option)
      ? current.filter((item) => item !== option)
      : [...current, option];

    const updated = {
      ...selectedFilters,
      [label]: newSelected,
    };

    setSelectedFilters(updated);
    onFilterChange(updated);
  };

  const isFilterActive = Object.values(selectedFilters).some(
    (filterArray) => filterArray.length > 0
  );

  const handleClearFilters = () => {
    const clearedFilters = {
      Category: [],
      Size: [],
      Brand: [],
      Color: [],
    };
    setSelectedFilters(clearedFilters);
    onFilterChange(clearedFilters);
  };

  return (
    <div className="flex flex-col fixed px-4 md:px-12 bg-white w-full min-h-fit z-30">
      <div className="pt-5">
        <label
          htmlFor="sort"
          className="text-sm font-semibold text-gray-600 mr-2"
        >
          Sort
        </label>
        <select
          id="sort"
          onChange={onSortChange}
          className="border border-black px-4 py-2 w-52 rounded-full cursor-pointer text-sm focus:outline-none"
        >
          <option>Default</option>
          <option>New In</option>
          <option>Price: Low - High</option>
          <option>Price: High - Low</option>
        </select>
      </div>

      <div className="pb-5 mt-2 w-fit">
        <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
          <span>Filter</span>
          {isFilterActive && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-1 text-red-500 hover:text-red-700"
            >
              <XMarkIcon className="w-4 h-4" /> Clear Filters
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-fit bg-white overflow-visible p-2 pl-0">
          {filters.map((filter, index) => (
            <div key={index} className="relative w-full min-w-[140px]">
              <button
                onClick={() => toggleDropdown(index)}
                className="flex w-full items-center justify-between gap-2 px-4 py-2 border border-gray-300 text-base font-semibold text-gray-800 cursor-pointer whitespace-nowrap"
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

              {openDropdown === index && (
                <div className="absolute left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50 max-h-56 overflow-y-auto">
                  <ul className="py-1">
                    {filter.options.map((option, i) => (
                      <li
                        key={i}
                        className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                      >
                        <label className="flex w-full items-center cursor-pointer py-1">
                          <input
                            type="checkbox"
                            checked={selectedFilters[filter.label]?.includes(
                              option
                            )}
                            onChange={() =>
                              handleCheckboxChange(filter.label, option)
                            }
                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500 mr-2"
                          />
                          <span className="text-sm text-gray-700 first-letter:uppercase line-clamp-1">
                            {option}
                          </span>
                        </label>
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
