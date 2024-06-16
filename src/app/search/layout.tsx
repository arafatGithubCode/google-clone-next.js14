import SearchHeader from "@/components/header/SearchHeader";

type Props = {
  children: React.ReactNode;
};
const SearchLayout = ({ children }: Props) => {
  return (
    <>
      <SearchHeader />
      {children}
    </>
  );
};

export default SearchLayout;
