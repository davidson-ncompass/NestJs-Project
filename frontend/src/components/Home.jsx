import React from "react";
// importing Link from react-router-dom to navigate to 
// different end points.
import { Link } from "react-router-dom";
import "./styles.css";

  
const Home = () => {
  return (
    <div className="new" >
   
      <h1>Home Page</h1>
      <br />
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};
  
export default Home;