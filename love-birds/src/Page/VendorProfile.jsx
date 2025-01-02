import Navigation from "../Components/Navigation";
import { useContext } from "react";
import { ProfileContext } from "../Contexts/ThemeContext";

const VendorProfile = () => {
  const { selectedVendor } = useContext(ProfileContext);
  return (
    <>
      <Navigation />
      <div className="bg-cardCream w-full justify-between h-screen">
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
          {/*Star rating component*/}
        </div>

        <div>
          <span className="p-4 text-gray-500 font-eb-garamond">
            {selectedVendor.vendorCategory} in {selectedVendor.serviceArea}
          </span>
        </div>

        <div className="p-4 font-eb-garamond">
            <h2>About {selectedVendor.name}</h2>
            <img src="" alt="" className="bg-gray-500"/>
            {/* Social icons */}
          <p className="text-sm">{selectedVendor.bio}</p>
        </div>

        <div className="p-4 font-eb-garamond">
            <h2>Services</h2>

            <ul>
                <li>Drone</li>
                <li>RAW Footage</li>
                <li>Next-day Editing</li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default VendorProfile;
