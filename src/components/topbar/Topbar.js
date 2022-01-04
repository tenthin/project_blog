import { Link } from "react-router-dom";
import "./topbar.css"


export default function Topbar () {
    const user = false;
    return (
        <div className='top'>
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
                <i className="topIcon fab fa-youtube-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="/">ABOUT</Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/">CONTACT</Link>
                    </li>

                    <li className="topListItem">
                        <Link className="link" to="/write">WRITE</Link>
                    </li>

                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                       <img 
                       className="topImage" 
                        src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" 
                        alt=""
                        />   
                    ) : (
                    <ul className="topList">
                        <li className="topListItem">                        
                            <Link className="link" to="/login">
                                LOGIN
                            </Link>
                        </li>
                        <li className="topListItem">                        
                            <Link className="link" to="/register">
                            REGISTER
                            </Link>
                        </li>
                    </ul>
                    )}
              
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>

    )
}


