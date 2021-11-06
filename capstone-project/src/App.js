
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="logo">
        <a href="#">
        <img src="google-logo-1DDCF/google-logo.svg"/>
         </a>
      </div>
     <div className="form">
       <form>
         <input placeholder="search here!" id="form-search"type="text"/>
       </form>

     </div>
     <div className="button"> 
     <input id="goog" value="google search" type="submit" placeholder="google search"/>
     <input id="go" value="i'm feeling lucky" type="submit" placeholder="i'm feeling lucky"/>
     </div>
     <div>
       <p>google offered in : <a href="#">hausa</a>  <a href="#">Ga</a>  <a href="#">twi</a></p>
     </div>
        
      </div>
     
  
  );
}

export default App;
