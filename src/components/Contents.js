const contents = [                   //blogPost is an array
  {
    title: "This Curse is Awesome",              //heading
    body: `JavaScript is the world most popular 
    lightweight, interpreted compiled programming 
    language. It is also known as scripting 
    language for web pages. It is well-known for 
    the development of web pages, many non-browser 
    environments also use it. JavaScript can be 
    used for Client-side developments as well as 
    Server-side developments`,
    author: "Nishant Singh ",
    imgUrl:"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
  },
  {
    title: "I Can Track Everything",              //heading
    body: `JavaScript is the world most popular 
    lightweight, interpreted compiled programming 
    language. It is also known as scripting 
    language for web pages. It is well-known for 
    the development of web pages, many non-browser 
    environments also use it. JavaScript can be 
    used for Client-side developments as well as 
    Server-side developments`,
    author: "Nishant Singh ",
    imgUrl:"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
  },
  {
    title: "Sealed Divine Throne",              //heading
    body: `JavaScript is the world most popular 
    lightweight, interpreted compiled programming 
    language. It is also known as scripting 
    language for web pages. It is well-known for 
    the development of web pages, many non-browser 
    environments also use it. JavaScript can be 
    used for Client-side developments as well as 
    Server-side developments`,
    author: "Nishant Singh ",
    imgUrl:"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
  },
  {
    title: "Starting With 3 S-Class Talents",              //heading
    body: `JavaScript is the world most popular 
    lightweight, interpreted compiled programming 
    language. It is also known as scripting 
    language for web pages. It is well-known for 
    the development of web pages, many non-browser 
    environments also use it. JavaScript can be 
    used for Client-side developments as well as 
    Server-side developments`,
    author: "Nishant Singh ",
    imgUrl:"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
  },
  {
    title: "This Earth Is A Bit Fearsome",              //heading
    body: `JavaScript is the world most popular 
    lightweight, interpreted compiled programming 
    language. It is also known as scripting 
    language for web pages. It is well-known for 
    the development of web pages, many non-browser 
    environments also use it. JavaScript can be 
    used for Client-side developments as well as 
    Server-side developments`,
    author: "Nishant Singh ",
    imgUrl:"https://media.geeksforgeeks.org/img-practice/banner/diving-into-excel-thumbnail.png",
  },

];
const Contents = () => {
return (
    <>
      {contents.map((content) => (
      <h3>{content.title}</h3>
      ))}
    </>
)
}

export default Contents
