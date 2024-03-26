const Button = (props) => {
    return (
      <button
        className={`ml-4 mr-4 pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md font-eb-garamond w-40 shadow-black shadow-[2px_2px_6px] ${
          props.color === "white"
            ? "text-mainBlue bg-white"
            : "text-white bg-mainBlue"
        }`}
      >
        {props.text}
      </button>
    );
  };

export default Button;
