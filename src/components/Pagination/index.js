import { ChevronLeftIcon, ChevronRightIcon } from "../Icons";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPage = () => {
    const pageNumbers = [];

    //Luon giu page hien thi 5
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage <= 3) {
      endPage = Math.min(5, totalPages);
    }

    if (currentPage >= totalPages - 2) {
      startPage = Math.max(totalPages - 4, 1);
    }

    if (startPage > 1) {
      pageNumbers.push(
        <button
          key={1}
          onClick={() => onPageChange(1)}
          className="px-3 py-1 mx-1 rounded bg-gray-200"
        >
          1
        </button>
      );

      if (startPage > 2) {
        pageNumbers.push(
          <span key="start-ellipsis" className="mx-1">
            ...
          </span>
        );
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 mx-1 rounded-full ${
            i === currentPage ? "bg-black text-white" : "bg-gray-200"
          }`}
        >
          {i}
        </button>
      );
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        pageNumbers.push(
          <span key="end-ellipsis" className="mx-1">
            ...
          </span>
        );
      }
      pageNumbers.push(
        <button
          key={totalPages}
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-1 mx-1 rounded bg-gray-200"
        >
          {totalPages}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="flex justify-center text-[20px] gap-2 mt-4">
      <button
        onClick={handlePrev}
        className={`px-3 py-1 mx-1 rounded-md bg-gray-300 ${
          currentPage === 1 ? "opacity-20 pointer-events-none" : ""
        }`}
      >
        <ChevronLeftIcon />
      </button>

      {renderPage()}

      <button
        onClick={handleNext}
        className={`px-3 py-1 mx-1 rounded-md bg-gray-300 ${
          currentPage === totalPages ? "opacity-20 pointer-events-none" : ""
        }`}
      >
        <ChevronRightIcon />
      </button>
    </div>
  );
}

export default Pagination;
