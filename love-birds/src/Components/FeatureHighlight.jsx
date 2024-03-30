import FeatureCard from "./FeatureCard";
import Button from "./Button";
import Announce from "../assets/lb_announce.jpg";
import Budget from "../assets/lb_budget.jpg";
import Register from "../assets/lb_register.jpg";

const FeatureHighlight = () => {
  return (
    <div className="bg-mainBlue font-eb-garamond text-lg flex items-center justify-center p-4 flex-col">
      <h2 className="text-white">Start your planning journey here</h2>
      <div className="phone:flex phone:flex-col phone:items-center  flex m-2 p-4">
        <FeatureCard title="Announce your special day" image={Announce} description="Use our tool to create a beautiful announcement"/>
        <FeatureCard title="Calculate your budget" 
        image={Budget} description="Set your budget and find the perfect vendors"/>
        <FeatureCard title="Register your wedding" 
        image={Register} description="Quickly send your registry to your guests"/>
      </div>

      <Button color="white" text="Get started"/> 
    </div>
  );
};

export default FeatureHighlight;
