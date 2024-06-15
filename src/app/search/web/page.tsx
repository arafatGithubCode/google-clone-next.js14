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

  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  );
};

export default SearchWeb;
