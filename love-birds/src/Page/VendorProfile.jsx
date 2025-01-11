import Navigation from "../Components/Navigation";
import { useContext, useState } from "react";
import { ProfileContext } from "../Contexts/ThemeContext";
import StarRating from "../Components/StarRating";

const VendorProfile = () => {
  const { selectedVendor } = useContext(ProfileContext);

  const [rating, setRating] = useState(0);

  const handleRatingChange = (newRating) => {
    setRating(newRating); // Update the rating in the parent component
  };
  return (
    <>
      <Navigation />
      <div className="bg-cardCream w-full min-h-screen justify-between">
        <div>
          <img
            src={selectedVendor.heroImg}
            alt=""
            className="object-cover h-48 w-full  "
          />
        </div>

        <div className="phone:text-center phone:m-auto phone:w-full m-2 w-1/3">
          <h1 className="phone:text-4xl text-xl font-eb-garamond p-3">
            {selectedVendor.name}
          </h1>
          
        </div>

        <div>
          <span className="p-4 text-gray-500 font-eb-garamond">
            {selectedVendor.vendorCategory} in {selectedVendor.serviceArea}
          </span>
          <StarRating totalStars={5} rating={selectedVendor.rating} />
        </div>

        <div className="p-4 font-eb-garamond">
          <h2>About {selectedVendor.name}</h2>
          <div className="flex justify-center items-center p-4">
            <img
              src={selectedVendor.logo}
              alt=""
              className=" w-48 h-48 rounded-full object-cover"
            />
          </div>

          {/* Social icons */}
          <p className="text-md p-4">{selectedVendor.bio}</p>
        </div>

        <div className="p-4 font-eb-garamond">
          <h2>Services</h2>

          {selectedVendor.vendorServices.map((service, index) => (
            <div key={index}>
              <li>{service}</li>
            </div>
          ))}
        </div>

        <div className="p-4 font-eb-garamond">
          <h2>Video Samples</h2>
        </div>

        <div className="p-4 font-eb-garamond">
          <h2>{selectedVendor.name} Packages</h2>
        </div>

        <div className="p-4 font-eb-garamond">
          <div className="flex justify-between">
            <h2>Reviews</h2>
            <button className="pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md font-eb-garamond w-40 text-mainBlue bg-mainBlue text-white p">
              Write a review
            </button>
          </div>

          <StarRating totalStars={5} rating={4} onRatingChange={handleRatingChange}/>

          <div>
            {selectedVendor.review.map((review, index) => (
              <div key={index} className="p-4">
                <h3 className="text-xl">{review.title}</h3>
                <p>{review.reviewMessage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default VendorProfile;
