import Button from "./Button";

const GetStarted = () => {
  return (
    <>
      <div className=" flex p-4 flex justify-around w-96 flex-col">
        <span className="text-white text-xl m-2 font-eb-garamond flex justify-center items-center">
          Get Started!
        </span>
        <div className="phone:flex-col flex flex-row justify-center items-center ">
          <input
            type="text"
            placeholder="Email"
            className="p-4 m-4 h-10 rounded-lg shadow-[2px_2px_9px] font-eb-garamond bg-cardCream"
          />
          <input
            type="text"
            placeholder="Password"
            className="p-4 m-4 h-10 rounded-lg shadow-[2px_2px_9px] font-eb-garamond  bg-cardCream"
          />
        </div>
      </div>
      <Button text="Sign up" color={"white"} />
    </>
  );
};

export default GetStarted;
