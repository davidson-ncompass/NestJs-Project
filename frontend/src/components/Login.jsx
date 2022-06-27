import React from 'react'
import { useState } from 'react';
import {  useNavigate} from 'react-router-dom';
import "./styles.css";

export default function Login() {
  const[userName,setUserName] = useState('')
  const[passWord,setpassWord] = useState('');
  const[error, setError] = useState('')
    const Navigate = useNavigate();
    const handleSubmit = async(event) => {
      event.preventDefault();
        const val = {
          email:userName,password:passWord
        }
<<<<<<< HEAD
        const url = 'http://localhost:3000/login';
=======
        const url = 'http://localhost:3000/';
>>>>>>> e40a13b (Done modifications on system architecture design and README file)
        fetch(url,{
            headers:{
              'Content-Type': 'application/json'
            },
          method: 'POST',
          body:JSON.stringify({
            email: val.email,
            password: val.password,
          })
        })
        .then(res =>{ return res.json()})
        .then(data => {
          if(data.statusCode && data.statusCode === 403){
            setError(true);
            return
          }
          if(data.statusCode && data.statusCode === 404){
            setError(true);
            return
          }
          Navigate('/fetch',{replace: true});
          localStorage.setItem('token', data.access_token)
        })
    };
  
    return (
      <div className="form" >
        
        <h1>Login Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Username </label>
            <input type="email" placeholder='Enter Your Email Id'  name="uname" required  onChange={(e)=>{setUserName(e.target.value); setError("")}} value={userName}/>
            {/* {renderErrorMessage("uname")} */}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" placeholder='Enter Your Password'  required onChange={(e)=>{setpassWord(e.target.value); setError("")}} value={passWord} />
            {/* {renderErrorMessage("pass")} */}
          </div>
          {error ? <p style={{color: 'red',backgroundColor: '#ffb2b2', fontSize: 15, padding: 3, borderRadius: 7}}>Check your Email or Password!</p> : null} 
          <br></br>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    );
  }
