import logo from "../assets/love_birds.png";

const Navigation = () => {
  return (
    <div className="flex justify-around items-center bg-#080707 font-inter">
      <img src={logo} className="h-52" />

      <ul className="flex justify-between text-mainBlue">
        <li className=" ">
          <a href="#" className="m-4  ">
            Planning Tools
          </a>
        </li>
        <li>
          <a href="#" className="m-4">
            Vendors
          </a>
        </li>
        <li>
          <a href="#" className="m-4">
            Registry
          </a>
        </li>
      </ul>

      <section>
        <button className="ml-4 mr-4 pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md text-white bg-mainBlue font-eb-garamond w-40">
          Login
        </button>
        <button className="ml-4 mr-4 pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md text-white bg-mainBlue font-eb-garamond w-40">
          Sign up
        </button>
      </section>
    </div>
  );
};

export default Navigation;
