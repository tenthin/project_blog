import "./singlePost.css"

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img className="singlePostImg" src="https://tibetpedia.com/wp-content/uploads/2016/09/2.pic_.jpg" 
                alt="" />
                <h1 className="singlePostTitle">
                    Momo
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fas fa-edit"></i>
                        <i className="singlePostIcon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author: <b>Tenzin </b></span>
                    <span className="singlePostDate">1 hr ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, 
                    placeat! Laudantium ipsum architecto dolorum, porro odio quibusdam 
                    beatae! Exercitationem molestias sequi pariatur sit minima facere 
                    alias vel, deleniti nesciunt atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, 
                    placeat! Laudantium ipsum architecto dolorum, porro odio quibusdam 
                    beatae! Exercitationem molestias sequi pariatur sit minima facere 
                    alias vel, deleniti nesciunt atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, 
                    placeat! Laudantium ipsum architecto dolorum, porro odio quibusdam 
                    beatae! Exercitationem molestias sequi pariatur sit minima facere 
                    alias vel, deleniti nesciunt atqueLorem, ipsum dolor sit amet consectetur adipisicing elit. Libero, 
                    placeat! Laudantium ipsum architecto dolorum, porro odio quibusdam 
                    beatae! Exercitationem molestias sequi pariatur sit minima facere 
                    alias vel, deleniti nesciunt atque!
                </p>
            </div>
        </div>
    )
}
