import "./header.css"

export default function Header () {
    return (
        <div className='head'>
            <div className="headLeft">
                <i className="headIcon fab fa-facebook-square"></i>
                <i className="headIcon fab fa-twitter-square"></i>
                <i className="headIcon fab fa-instagram-square"></i>
                <i className="headIcon fab fa-youtube-square"></i>
            </div>
            <div className="headCenter">
                <ul className="headList">
                    <li className="headListItem">HOME</li>
                    <li className="headListItem">ABOUT</li>
                    <li className="headListItem">CONTACT</li>
                    <li className="headListItem">WRITE</li>
                    <li className="headListItem">LOGOUT</li>
                    </ul>
            </div>
            <div className="headRight">
                <img className="headImage" 
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" 
                alt="" />
                <i className="headSearchIcon fas fa-search"></i>
            </div>
        </div>

    )
}

