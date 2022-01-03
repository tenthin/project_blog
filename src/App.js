import Header from './components/Header'
import Post from './components/Post'
import Button from './components/Button'


function App () {
  return (
      <div >
        <table>
          <tr >
              <td colspan= "2"> <Header /></td>
              
          </tr>
          <tr >
              <td> <Post /></td>
              <td><Button /></td>
          </tr>
        </table>
       
        
       
      
      </div>     
  )
}

export default App
