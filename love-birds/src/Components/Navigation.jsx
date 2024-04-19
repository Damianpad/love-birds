import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/love_birds.png";
import Button from "./Button";

const Navigation = () => {
  const [visable, setVisable] = useState(false);

  const handleClick = () => {
    setVisable(!visable);
  };
  if (visable) {
    return (
      <div
        className={`h-screen flex flex-col transform transition-transform duration-50 ${
          visable ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <section className=" flex justify-end">
          <button
            onClick={handleClick}
            className="border-2 rounded-md p-2 w-14 m-4 text-xl"
          >
            X
          </button>
        </section>
        <input type="text" className="bg-cardCream m-4 rounded-2xl h-9" />
        <section>
          <Button text="Login" />
          <Button text="Sign Up" />
        </section>

        <section className="m-4 p-4 text-mainBlue font-eb-garamond text-2xl">
          <ul className="p-4">
            <li className="p-4">
              <NavLink to="/">Planning Tools</NavLink>
            </li>
            <li className="p-4">Vendors</li>
            <li className="p-4">Registry</li>
          </ul>
        </section>
      </div>
    );
  } else {
    return (
      <div className="flex justify-around items-center bg-#080707 font-inter">
        <NavLink to={"/"}>
          <img src={logo} className="phone:h-28 h-44" />
        </NavLink>

        <ul className="phone:hidden tablet:hidden flex justify-between text-mainBlue ">
          <NavLink to={'vendor-search'}>
            <li className="m-4  ">
                Planning Tools
            </li>
          </NavLink>

          <NavLink to={'vendor-search'}>
            <li className="m-4  ">
                Vendors
            </li>
          </NavLink>
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

        <section>
          <button onClick={handleClick}>Nav</button>
        </section>
      </div>
    );
  }
};

export default Navigation;
