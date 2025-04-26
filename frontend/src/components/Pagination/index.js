function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="flex justify-center text-[20px] gap-2 mt-4">
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`px-4 py-2 rounded ${
            page === currentPage
              ? "bg-black text-white"
              : "bg-gray-200 text-black"
          }`}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;
