import SearchResult from "./SearchResult";

const SearchResultsContainer = () => {
  return (
    <div className="w-full  bg-cardCream">
      <div className="flex justify-center">
        <input
          type="text"
          className=" w-1/2 m-4 border-none rounded-xl h-10 "
        />
      </div>

      <div className="flex justify-center flex-col p-4 m-4">
        <SearchResult />
        <SearchResult />
        <SearchResult />
      </div>
    </div>
  );
};

export default SearchResultsContainer;
