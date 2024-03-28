
const FeatureCard = (props) => {
    return (
        <div className="bg-cardCream rounded-xl p-4 m-2 w-1/2 h-96 text-center ">
            <h3 className="text-mainBlue p-4">{props.title}</h3>
            <img src={props.image} alt=""           className="rounded-xl w-full h-3/5 object-cover "/>
            <p className="text-#000000 text-med font-medium p-4">{props.description}</p>
        </div>
    )
}

export default FeatureCard