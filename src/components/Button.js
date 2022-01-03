import "./button.css"


const Button = ({color,text}) => {
    return (
        <button className="btn btn-success btn-lg float-right" style={{ backgroundColor: color}}>
        New Blog
        </button>
    )
}

export default Button
