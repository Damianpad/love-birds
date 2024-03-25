import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className="bg-hero-pattern bg-cover bg-center flex flex-col justify-center items-center h-96">
      <h1 className="text-white font-eb-garamond text-5xl ">
        Your Dream Wedding Starts Here
      </h1>
      <GetStarted />
    </div>
  );
};

export default Hero;
