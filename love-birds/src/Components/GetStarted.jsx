const GetStarted = () => {
  return (
    <>
      <span className="text-white text-xl m-2">Get Started!</span>
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
      <button className="ml-4 mr-4 pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md text-white bg-mainBlue font-eb-garamond w-40 ">
        Sign up
      </button>
    </>
  );
};

export default GetStarted;
