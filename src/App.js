import "./index.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Members from "./components/Members";
import About from "./components/About";
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  let component;
  switch(window.location.pathname){
    case "/":
      component = <Home />
      break;
    case "/login":
      component = <Members />
      break;
    case "/about":
      component = <About />
      break;
  }
  return(
    <div>
      <Navbar />
      {component}
    </div>
  );
}

export default App;
