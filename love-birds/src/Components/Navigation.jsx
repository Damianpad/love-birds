import logo from "../assets/love_birds.png";
import Button from "./Button";

const Navigation = () => {
  return (
    <div className="flex justify-around items-center bg-#080707 font-inter">
      <img src={logo} className="phone:h-28 h-44" />

      <ul className="phone:hidden tablet:hidden flex justify-between text-mainBlue ">
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

      <section className="phone:hidden">
        <Button text="Login" />
        <Button text="Sign up" />
      </section>
    </div>
  );
};

export default Navigation;
