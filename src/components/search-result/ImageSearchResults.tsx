import Image from "next/image";
import Link from "next/link";
import PaginationButton from "../PaginationButton";

interface ResultItem {
  link: string;
  formattedUrl: string;
  title: string;
  displayLink: string;
  image: {
    contextLink: string;
  };
}

interface Results {
  items?: ResultItem[];
}

interface ImageSearchResultsProps {
  results: Results;
}
const ImageSearchResults = ({ results }: ImageSearchResultsProps) => {
  return (
    <div className="mt-4 pb-24">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-3 space-x-4">
        {results &&
          results.items?.map((result) => (
            <div key={result.link} className="mb-8">
              <div className="group">
                <Link href={result.image.contextLink}>
                  <img
                    src={result.link}
                    alt={result.title}
                    className="w-full group-hover:shadow-lg object-contain transition-shadow duration-200 h-60"
                  />
                </Link>
                <Link href={result.image.contextLink}>
                  <h2 className="group-hover:underline truncate text-xl">
                    {result.title}
                  </h2>
                </Link>
                <Link href={result.image.contextLink}>
                  <p className="truncate text-gray-600 group-hover:underline">
                    {result.displayLink}
                  </p>
                </Link>
              </div>
            </div>
          ))}
      </div>
      <div className="ml-16">
        <PaginationButton />
      </div>
    </div>
  );
};

export default ImageSearchResults;
