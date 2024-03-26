
const Button = (props) => {
    return (
        <button className="ml-4 mr-4 pl-3 pr-3 pt-1 pb-1 border border-gray-500 rounded-md text-white bg-mainBlue font-eb-garamond w-40 ">
            {props.text}
        </button>
    )
}

export default Button