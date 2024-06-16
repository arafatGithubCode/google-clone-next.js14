"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const PaginationButton = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") || "";
  const startIndex = +(searchParams.get("start") || "1");

  return (
    <div className="text-blue-700 px-4 pb-10 flex items-center justify-between sm:justify-start sm:space-x-44 sm:px-0 mb-10 sm:mb-0">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div className="flex flex-col items-center hover:underline">
            <BsChevronRight />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default PaginationButton;
