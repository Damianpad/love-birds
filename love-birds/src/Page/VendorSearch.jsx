import Navigation from "../Components/Navigation";
import VendorFilter from "../Components/VendorFilter";
import SearchResults from "../Components/SearchResults";

const VendorSearch = () => {
  return (
    <>
      <Navigation />
      <div className="phone:inline flex">
        <VendorFilter />
        <SearchResults />
      </div>
    </>
  );
};

export default VendorSearch;
