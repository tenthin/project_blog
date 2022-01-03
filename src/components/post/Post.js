import "./post.css"

export default function Post() {
    return (
        <div className="post">
           <img 
           className="postImg"
           src="https://mk0yowangdudp81eaem4.kinstacdn.com/wp-content/uploads/2017/09/Cooked-Momos-2.jpg" 
           alt="" 
           />
           <div className="postInfo">
               <div className="postCats">
                   <span className="postCat">Veg</span>
                   <span className="postCat">Non-Veg</span>
               </div>
               <span className="postTitle">
                   Lorem ipsum dolor sit amet 
               </span>
               <hr />
               <span className="postDate">1 hr ago</span>
           </div>
        </div>
    )
}
