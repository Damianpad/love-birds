import Button from "./Button";
import Vendor from "./Vendor";

import Photographer from "../assets/lb_photographer.jpg";
import Florist from "../assets/lb_florist.jpg";
import Videographer from "../assets/lb_videographer.jpg";
import Venue from "../assets/lb_venue.jpg";

const VendorHighlight = () => {
  return (
    <div className="flex flex-col justify-center items-center p-4 bg-cardCream">
      <h2 className="font-eb-garamond font-bold m-8 text-xl ">Find your perfect vendors</h2>
      <div className="flex ">
        <Vendor
          type="Photographers"
          image={Photographer}
          alt="Wedding Photographer"
        />
        <Vendor type="Florists" image={Florist} alt="Wedding Florist" />
        <Vendor
          type="Videographers"
          image={Videographer}
          alt="Wedding Videographer"
        />
        <Vendor type="Venues" image={Venue} alt="Wedding Venue" />
      </div>

      <h3 className="font-eb-garamond font-bold m-8 text-xl ">Fit any budget, background or style</h3>
      <Button text="See more" />
    </div>
  );
};

export default VendorHighlight;
