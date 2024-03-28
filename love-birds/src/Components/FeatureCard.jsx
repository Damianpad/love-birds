
const FeatureCard = (props) => {
    return (
        <div className="bg-cardCream rounded-xl p-4 m-2 w-1/2 text-center ">
            <h3 className="text-mainBlue">{props.title}</h3>
            <img src={props.image} alt="" />
            <p className="text-#000000 text-sm font-medium">{props.description}</p>
        </div>
    )
}

export default FeatureCard