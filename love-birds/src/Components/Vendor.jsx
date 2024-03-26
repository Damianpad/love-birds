import Button from "./Button";

const Vendor = (props) => {
  return (
    <div className="flex items-center flex-col rounded-xl bg-mainBlue w-1/3  ">
      <img src={props.image} alt={props.alt} className="rounded-t-xl " />
      <div className="bg-mainBlue h-12 flex items-center justify-center ">
        <Button text={`Find ${props.type}`} color={'white'} className="bg-indigo-500" />
      </div>
    </div>
  );
};

export default Vendor;
