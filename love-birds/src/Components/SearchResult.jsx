import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import videographer from "../assets/lb_videographer.jpg";
import Button from "../Components/Button.jsx";
import { ProfileContext } from "../Contexts/ThemeContext.jsx";

const SearchResult = ({ vendors }) => {

  const { setSelectedVendor } = useContext(ProfileContext);
  const navigate = useNavigate();

  const handleViewProfile = (vendor) => {
    setSelectedVendor(vendor);
    navigate("/vendor-profile");
  };

  return (
    <div className="">
      {vendors.map((vendor) => (
        <div key={vendor.id} className="p-4">
          <img src={vendor.heroImg} alt="" className="rounded-xl h-48 w-full object-cover"/>
          <h3 className="font-eb-garamond ">{vendor.name}</h3>
          <span className="text-sm">Serves {vendor.serviceArea}</span>
          <p className="text-xs">{vendor.bio}</p>
          
          <button onClick={() => handleViewProfile(vendor)} className="pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md font-eb-garamond w-40 text-mainBlue bg-mainBlue text-white p">
            View Profile
          </button>
        </div>
      ))}
    </div>

    // <div className="phone:inline bg-white p-4 m-4 w-full flex rounded-xl justify-between">
    //   <div>
    //     <img
    //       src={videographer}
    //       alt=""
    //       className="rounded-xl object-cover h-48 w-full"
    //     />
    //   </div>

    //   <div className="phone:text-center phone:m-auto phone:w-full m-2 w-1/3">
    //     <h2 className="phone:text-4xl text-xl font-eb-garamond">{}</h2>
    //     {/* Star Rating Component */}
    //     <p className="text-sm ">
    //       I have over 3 years of experience as a wedding videographer. I've shot
    //       weddings all over Texas from North Texas all the way down to South
    //       Padre Island. I've been a part of and have led teams of videographers
    //       and photographers...
    //     </p>
    //   </div>

    //   <div className="phone:flex phone:justify-center phone:p-4">
    //     {/* Starting Price Component */}

    //     <button onClick={() => handleViewProfile(vendor)}>View Actual Profile</button>

    //   </div>
    // </div>
  );
};

export default SearchResult;
