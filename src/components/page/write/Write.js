import "./write.css"

export default function Write() {
    return (
        <div className="write">
            <img 
            className="writeImg"
            src="https://thumbs.dreamstime.com/b/thukpa-tibetan-noodle-soup-selective-focus-thukpa-tibetan-noodle-soup-which-originated-eastern-part-tibet-202491612.jpg" 
            alt="" />
            <form className="writeForm">
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} />
                    <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
                </div>
                <div className="writeFormGroup">
                    <textarea placeholder="Tell your story..." 
                    type = "text" 
                    className="writeInput writeText">
                    </textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
