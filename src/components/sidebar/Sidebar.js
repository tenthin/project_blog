import "./sidebar.css"

export default function Sidebar() {
    return (
        <div className='sidebar'>
           <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG-zsI_Hl2FUo_VZkQ_KCR63RfECn2f07QZQ&usqp=CAU" 
                alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus 
                    cumque natus delectus. 
                </p>
            </div>

            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">VEG</li>
                    <li className="sidebarListItem">NON-VEG</li>
                    <li className="sidebarListItem">MAIN FOOD</li>
                    <li className="sidebarListItem">APPETIZER</li>
                </ul>
                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="topIcon fab fa-facebook-square"></i>
                        <i className="topIcon fab fa-twitter-square"></i>
                        <i className="topIcon fab fa-instagram-square"></i>
                        <i className="topIcon fab fa-youtube-square"></i> 
                    </div>
                </div>
            </div>
        </div>
    )
}
