import "./App.css";
// importing components from react-router-dom package
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
import Login from "./components/Login";
import Fetch from "./components/Fetch";
  
function App() {
  return (
    <>
      
      <Router>
          <Routes>

          <Route exact path="/" element={<Home></Home>} />
            
          <Route path="/login" element={<Login></Login>} />
            
          <Route path="/fetch" element={<Fetch></Fetch>} />

          <Route path="*" element={<Navigate to ="/" />}/>

          </Routes>
          
      </Router>
    </>
  );
}
  
export default App;