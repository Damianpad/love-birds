import { useState } from "react";

const FilterCollapse = (props) => {
  const [collapse, setCollapse] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [minValue, setMinValue] = useState(0);

  const handleClick = () => {
    setCollapse(!collapse);
    console.log(collapse);
  };

  const handleSliderChange = (event) => {
    setSliderValue(parseInt(event.target.value, 10));
  };

  if (collapse) {
    if (props.slider === true) {
      return (
        <div className="border p-2">
          <div className="w-full flex justify-between">
            <span className="font-eb-garamond">{props.filterName}</span>
            <button onClick={handleClick}>V</button>
          </div>
          <div>
            <input type="text" value={sliderValue} />

            <input
              type="range"
              id="slider"
              name="slider"
              min="0"
              max="1000"
              value={sliderValue}
              onChange={handleSliderChange}
            />
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
    }
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
