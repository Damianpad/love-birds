import videographer from "../assets/lb_videographer.jpg";
import Button from "../Components/Button.jsx";

const SearchResult = () => {
  return (
    <div className="bg-white p-4 m-4 w-full flex rounded-xl justify-between">
      <div>
        <img
          src={videographer}
          alt=""
          className="rounded-xl object-cover h-48 w-full"
        />
      </div>

      <div className="m-2 w-1/3">
        <h2 className="text-xl font-eb-garamond">Parallax Films</h2>
        {/* Star Rating Component */}
        <p className="text-sm ">
          I have over 3 years of experience as a wedding videographer. I've shot
          weddings all over Texas from North Texas all the way down to South
          Padre Island. I've been a part of and have led teams of videographers
          and photographers...
        </p>
      </div>

      <div>
        {/* Starting Price Component */}
        <Button text="View Profile"/>
      </div>
    </div>
  );
};

export default SearchResult;
