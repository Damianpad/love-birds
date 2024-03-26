import Button from "./Button";
import Vendor from "./Vendor";

import Photographer from "../assets/lb_photographer.jpg";

const VendorHighlight = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Find your perfect vendors</h2>
      <Vendor
        type="Photographers"
        image={Photographer}
        alt="Wedding Photographer"
      />

      <h3>Fit any budget, background or style</h3>
      <Button text="See more" />
    </div>
  );
};

export default VendorHighlight;
