import Button from "./Button";

const Vendor = (props) => {
  return (
    <div className="flex items-center flex-col rounded-xl bg-mainBlue laptop:w-1/3 desktop:w-1/3 largeDesktop:w-1/3 h-64 m-2">
      <div className="w-full h-4/5">
        <img
          src={props.image}
          alt={props.alt}
          className="rounded-t-xl w-full h-full object-cover "
        />
      </div>

      <div className="bg-mainBlue h-12 flex items-center justify-center rounded-b-xl">
        <Button
          text={`Find ${props.type}`}
          color={"white"}
        />
      </div>
    </div>
  );
};

export default Vendor;
