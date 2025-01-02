import SearchResult from "./SearchResult";
import videographer from "../assets/lb_videographer.jpg";
import videographer2 from "../assets/lb_video2.jpg";

const SearchResultsContainer = () => {
  const vendors = [
    { id: 1, name: "John Films", bio: "A passionate videographer with a keen eye for storytelling, I specialize in capturing life's most cherished moments with creativity and precision. From weddings to corporate events, my goal is to turn your memories into timeless films.", heroImg: videographer, vendorCategory: "Videographer", serviceArea: "Wetherford, Texas" },
    { id: 2, name: "Josh Wedding Videography", bio: "As a dedicated videographer, I bring stories to life through dynamic and visually compelling videos. With a focus on weddings and special events, I create cinematic experiences that preserve emotions and milestones forever.", heroImg: videographer2, vendorCategory: "Videographer", serviceArea: "DFW, Texas", vendorServices: ["Drone", "Raw Footage", "Extra Hours"] },
  ];
  return (
    <div className="w-full  bg-cardCream">
      <div className="flex justify-center">
        <input
          type="text"
          className=" w-1/2 m-4 border-none rounded-xl h-10 "        />
      </div>

      <div className="flex justify-center flex-col p-4 m-4">
        <SearchResult  vendors={vendors}/>
      </div>
    </div>
  );
};

export default SearchResultsContainer;
