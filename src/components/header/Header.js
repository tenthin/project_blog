import "./header.css"                     //coverpage = header

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Come & Explore</span>
                <span className="headerTitleLg">Tibetan Food</span>
            </div>
            <img 
                className="headerImg" src="https://thumbs.dreamstime.com/z/tibetan-food-21176498.jpg" 
                alt="" 
            /> 
        </div>
    )
}