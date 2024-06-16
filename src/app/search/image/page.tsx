import ImageSearchResults from "@/components/search-result/ImageSearchResults";
import Link from "next/link";

type SearchParamsProps = {
  searchParams: {
    searchTerm: string;
    start: "1";
  };
};

const ImageSearchPage = async ({ searchParams }: SearchParamsProps) => {
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.Go_Search_API_KEY}&cx=${process.env.CX_ENGINE_ID}&q=${searchParams.searchTerm}'}&searchType=image&start=${startIndex}`
  );
  if (!response.ok) throw new Error("Something went wrong!");
  const data = await response.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">
          No results found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link href="/" className="text-blue-500">
            Home
          </Link>
        </p>
      </div>
    );
  }
  return <>{results && <ImageSearchResults results={data} />}</>;
};

export default ImageSearchPage;
