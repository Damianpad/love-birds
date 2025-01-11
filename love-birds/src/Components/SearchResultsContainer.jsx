import SearchResult from "./SearchResult";
import videographer from "../assets/lb_videographer.jpg";
import videographer2 from "../assets/lb_video2.jpg";
import vLogo1 from "../assets/vendor_Logo1.jpg";
import vLogo2 from "../assets/vendor_Logo2.jpg";

const SearchResultsContainer = () => {
  const vendors = [
    {
      id: 1,
      name: "John Films",
      logo: vLogo1,
      bio: "A passionate videographer with a keen eye for storytelling, I specialize in capturing life's most cherished moments with creativity and precision. From weddings to corporate events, my goal is to turn your memories into timeless films.",
      heroImg: videographer,
      vendorCategory: "Videographer",
      serviceArea: "Wetherford, Texas",
      vendorServices: ["Drone", "Raw Footage", "Extra Hours"],
      review: [
        {
          title: "Great Videographer",
          clientName: "Sophia Bennett",
          reviewDate: "Janurary 15, 2024",
          reviewMessage:
            "John captured our special moments beautifully! We were blown away by the editing and how it brought the entire day back to life. Highly recommend for any wedding!",
        },
        {
          title: "Great Videographer",
          clientName: "Ethan Prescott",
          reviewDate: "October 20, 2024",
          reviewMessage:
            "Incredible work! The shots were so creative, and the quality was amazing. Watching the video felt like reliving the best day of our lives",
        },
      
      ],
      rating: 4,
    },
    {
      id: 2,
      name: "Josh Wedding Videography",
      logo: vLogo2,
      bio: "As a dedicated videographer, I bring stories to life through dynamic and visually compelling videos. With a focus on weddings and special events, I create cinematic experiences that preserve emotions and milestones forever.",
      heroImg: videographer2,
      vendorCategory: "Videographer",
      serviceArea: "DFW, Texas",
      vendorServices: ["Drone", "Raw Footage", "Extra Hours"],
      review: [
        {
          title: "Great Videographer",
          clientName: "Emma Caldwell",
          reviewDate: "Janurary 15, 2024",
          reviewMessage:
            "Josh is an amazing videographer! His attention to detail is unmatched. Book him for your next wedding you won't be dissapointed!",
        },
        {
          title: "Great Videographer",
          clientName: "Lucas Grayson",
          reviewDate: "October 20, 2024",
          reviewMessage:
            "From start to finish, Josh was professional and so easy to work with. The final video was better than we could have imagined. A true artist!",
        },
      ],
      rating: 5,
    },
  ];
  return (
    <div className="w-full  bg-cardCream">
      <div className="flex justify-center">
        <input
          type="text"
          className=" w-1/2 m-4 border-none rounded-xl h-10 "
        />
      </div>

      <div className="flex justify-center flex-col p-4 m-4">
        <SearchResult vendors={vendors} />
      </div>
    </div>
  );
};

export default SearchResultsContainer;
