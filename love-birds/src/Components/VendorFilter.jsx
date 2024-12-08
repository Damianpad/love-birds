import { useState } from "react";
import FilterCollapse from "./FilterCollapse";

const VendorFilter = () => {
  let vendorList = ["Photographer", "Videographer", "Florist", "Venue", "DJ"];
  let budgetRanges = ["Under 2000", "Above 5000"];
  let locations = ["Dallas", "Fort Worth", "Denton"];
  let greatDeals = ["Special", "Discounted Services", "Freebie"];

  return (
    <div className="w-1/5 phone:flex phone:w-full flex-col">
      <div>
        <span className="flex justify-center items-center font-eb-garamond text-2xl">
          Filter
        </span>
      </div>

      <FilterCollapse filterName="Vendor" items={vendorList} />
      <FilterCollapse filterName="Budget" items={budgetRanges} slider={true} />
      <FilterCollapse filterName="Location" items={locations} />
      <FilterCollapse filterName="Great Deals" items={greatDeals} />
    </div>
  );
};

export default VendorFilter;
