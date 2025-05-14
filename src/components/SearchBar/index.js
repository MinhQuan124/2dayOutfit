import { useEffect, useRef, useState } from "react";
import { LogoIcon, SearchIcon, XMarkIcon } from "../Icons";
import { useNavigate } from "react-router";

function SeachBar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  //navigate to /products/search
  const navigate = useNavigate();

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    }

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const handleSearch = async (query = searchQuery) => {
    if (!query.trim()) return;

    try {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsSearchOpen(false);
    } catch (error) {
      console.error("error searching!", error);
    }
  };

  //press enter to search
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    inputRef.current.focus();
  };

  return (
    <>
      <div
        onClick={() => setIsSearchOpen(!isSearchOpen)}
        className="action-nav_search flex items-center max-w-fit ct-lg:w-40 h-9 mr-0 ct-lg:mr-2 bg-transparent ct-lg:bg-slate-100 rounded-full overflow-hidden transition-all duration-200 ease-in-out ct-lg:hover:bg-slate-200"
      >
        <button className="bg-transparent p-2 ct-lg:bg-slate-200 hover:bg-slate-300 rounded-full">
          <SearchIcon />
        </button>

        <input
          className="flex-1 w-full bg-transparent placeholder:text-slate-400 text-base py-1 pl-1 pr-3 outline-none border-0 focus:ring-0 focus:border-transparent hidden ct-lg:inline"
          type="text"
          placeholder="Search"
        />
      </div>
      {isSearchOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-30 z-40"></div>

          {/* Search */}
          <div
            ref={searchRef}
            className="fixed top-0 left-0 h-fit w-full flex flex-col py-3 px-4 md:px-8 bg-white z-50"
          >
            <div className="flex flex-row justify-between">
              {/* Logo */}
              <span className="hidden lg:block mr-6">
                <LogoIcon />
              </span>
              {/* Search Bar */}
              <div className="flex items-center w-full max-w-3xl rounded-full h-10 bg-gray-100 flex-1 px-3 py-2 lg:ml-20">
                <span className="rounded-full mr-2">
                  <SearchIcon />
                </span>

                <input
                  ref={inputRef}
                  className="flex-1 bg-transparent outline-none text-sm"
                  type="text"
                  placeholder="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />

                {searchQuery && (
                  <button onClick={handleClearSearch}>
                    <XMarkIcon />
                  </button>
                )}
              </div>
              {/* Actions button */}
              <span className="flex items-center ml-2">
                <span
                  onClick={() => handleSearch(searchQuery)}
                  className="text-sm sm:text-lg h-fit cursor-pointer px-1 sm:px-3 hover:text-slate-500"
                >
                  Search
                </span>
                <span
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-sm sm:text-lg h-fit cursor-pointer px-1 sm:px-3 hover:text-slate-500"
                >
                  Cancel
                </span>
              </span>
            </div>

            {/* Popular Search Terms PArt */}
            <div className="flex flex-col w-full max-w-3xl my-6 mx-auto">
              <p className="text-base font-semibold text-gray-500 mb-3">
                Popular Search Terms
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "air force 1",
                  "shirt",
                  "basketball shoes",
                  "shorts for sport",
                  "jordan 1 low",
                  "hoodie",
                  "suit",
                  "polo",
                  "rolex",
                ].map((term, index) => (
                  <button
                    key={index}
                    onClick={() => handleSearch(term)}
                    className="px-4 py-2 rounded-full bg-gray-100 text-sm font-semibold text-black hover:bg-gray-200"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default SeachBar;
