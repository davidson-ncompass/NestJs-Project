import React from 'react'
import {  useNavigate} from 'react-router-dom';
import "./styles.css";

export default function Login() {

    const Navigate = useNavigate();

    const handleSubmit = (event) => {

      event.preventDefault();
      Navigate('/fetch', {replace: true});
    };
  
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
