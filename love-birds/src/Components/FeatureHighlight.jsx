import FeatureCard from "./FeatureCard";
import Button from "./Button";

const FeatureHighlight = () => {
  return (
    <div className="bg-mainBlue font-eb-garamond text-lg flex items-center justify-center p-4 flex-col">
      <h2 className="text-white">Start your planning journey here</h2>
      <div className="flex m-2 p-4">
        <FeatureCard title="Announce your special day" description="Use our tool to create a beautiful announcement"/>
        <FeatureCard title="Calculate your budget" description="Set your budget and find the perfect vendors"/>
        <FeatureCard title="Register your wedding" description="Quickly send your registry to your guests"/>
      </div>

      <Button color="white" text="Get started"/> 
    </div>
  );
};

export default FeatureHighlight;
