import Button from "./Button";

const GetStarted = () => {
  return (
    <>
      <span className="text-white text-xl m-2 font-eb-garamond">
        Get Started!
      </span>
      <div className="flex p-4 flex justify-around w-96">
        <input
          type="text"
          placeholder="Email"
          className="p-4 m-4 rounded-lg shadow-[2px_2px_9px] font-eb-garamond"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 m-4 rounded-lg shadow-[2px_2px_9px] font-eb-garamond"
        />
      </div>
      <Button text="Sign up" color={'white'}/>
    </>
  );
};

export default GetStarted;
