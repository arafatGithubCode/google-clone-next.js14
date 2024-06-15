import Link from "next/link";

type SearchParamsProps = {
  searchParams: {
    searchTerm: string;
  };
};
const SearchWeb = async ({ searchParams }: SearchParamsProps) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.Go_Search_API_KEY}&cx=${process.env.CX_ENGINE_ID}&q=${searchParams.searchTerm}}`
  );
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col items-center justify-center pt-10">
        <h1 className="text-3xl mb-4">
          No result found for {searchParams.searchTerm}
        </h1>
        <p className="text-lg">
          Try searching the web or images for something else{" "}
          <Link
            className="text-blue-500 hover:font-semibold hover:text-blue-600 hover:animate-pulse hoverEffect"
            href="/"
          >
            Home
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  );
};

export default SearchWeb;
