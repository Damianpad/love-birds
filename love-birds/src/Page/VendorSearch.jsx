import Navigation from "../Components/Navigation";
import VendorFilter from "../Components/VendorFilter";
import SearchResultsContainer from "../Components/SearchResultsContainer";

const VendorSearch = () => {
  return (
    <>
      <Navigation />
      <div className="phone:inline flex">
        <VendorFilter />
        <SearchResultsContainer />
      </div>
    </>
  );
};

export default VendorSearch;
