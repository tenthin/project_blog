import "./home.css"
import Header from "../../header/Header"
import Post from "../../post/Post"

export default function home() {
    return (
        <>
        <Header />
        <div className="home">
           <Post />
        </div>
        </>
    )
}
