import logo from "../assets/love_birds.png";

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-#080707 font-inter">
      <img src={logo} className="h-32"/>
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
    </div>
  );
};

export default Footer;
