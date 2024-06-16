import Link from "next/link";
import Parser from "html-react-parser";
import PaginationButton from "../PaginationButton";

interface SearchInformation {
  formattedTotalResults: string;
  formattedSearchTime: string;
}
interface ResultItem {
  link: string;
  formattedUrl: string;
  title: string;
  htmlSnippet: string;
}
interface Results {
  searchInformation?: SearchInformation;
  items?: ResultItem[];
}
interface WebSearchResultsProps {
  results: Results;
}
const WebSearchResults = ({ results }: WebSearchResultsProps) => {
  return (
    <div className="w-full px-3 pb-24 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-sm text-gray-600 mt-3 mb-6">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items &&
        results.items.map((result: ResultItem) => (
          <div key={result.link} className="mb-8 max-w-xl">
            <div className="group flex flex-col gap-1">
              <Link className="text-gray-500 truncate" href={result.link}>
                {result.formattedUrl}
              </Link>
              <Link
                className="text-blue-800 font-medium text-lg truncate group-hover:underline decoration-blue-800 underline-offset-4"
                href={result.link}
              >
                {result.title}
              </Link>
            </div>
            <p className="text-gray-600">{Parser(result.htmlSnippet)}</p>
          </div>
        ))}
      <PaginationButton />
    </div>
  );
};

export default WebSearchResults;
