import React from 'react'
import { useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import "./styles.css";
import axios from 'axios';

export default function Login() {
  const[userName,setUserName] = useState('')
  const[passWord,setpassWord] = useState('')

  
    const Navigate = useNavigate();

    const handleSubmit = async(event) => {

     event.preventDefault();

      const val = {
        email:userName,password:passWord
      }
      console.log(val)
      const data = (await axios.post("http://localhost:3000/login",val)).data
      console.log(data)
      Navigate('/fetch', {replace: true});
      localStorage.setItem('token',data.access_token)

      
    };
  
    return (
      <div className="form">
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="email" name="uname" required  onChange={(e)=>{setUserName(e.target.value)}}
value={userName}
/>
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required onChange={(e)=>{setpassWord(e.target.value)}}
            value={passWord}

 />
            {/* {renderErrorMessage("pass")} */}
          </div>
          <br></br>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
