import { useState } from "react";

const FilterCollapse = (props) => {
  const [collapse, setCollapse] = useState(false);

  const handleClick = () => {
    setCollapse(!collapse);
    console.log(collapse);
  };

  if (collapse) {
    return (
      <div className="border p-2">
        <div className="w-full flex justify-between">
          <span className="font-eb-garamond">{props.filterName}</span>
          <button onClick={handleClick}>V</button>
        </div>

        <div className="flex flex-col ">
          <form className="flex flex-col">
            {props.items.map((item, index) => (
              <div>
                <input type="checkbox">{}</input>
                <label key={index}>{item}</label>
              </div>
            ))}
          </form>
          <ul></ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="border p-2">
        <div className="w-full flex justify-between">
          <span className="font-eb-garamond">{props.filterName}</span>
          <button onClick={handleClick}>V</button>
        </div>
      </div>
    );
  }
};

export default FilterCollapse;
