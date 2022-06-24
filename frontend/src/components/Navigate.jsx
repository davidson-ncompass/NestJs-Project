import React from 'react'
import { useNavigate } from 'react-router-dom';



export default function Navigate() {
    const Navigate = useNavigate();

    const logout = async(event) => {

        event.preventDefault();
    
         Navigate('/', {replace: true});
    
         console.log("lol")
      }
  return (
    <div className='navigate' > <button className='log' onClick={logout}>Logout</button></div>
  )
}
