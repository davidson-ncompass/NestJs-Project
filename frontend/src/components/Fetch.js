import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';Y
export default function Fetch() {
  const Navigate = useNavigate();

  const logout = async(event) => {

      event.preventDefault();
  
       Navigate('/', {replace: true});
  
    }

  const [first, setfirst] = useState([])
  

  const data1 = () => {
    const getToken = localStorage.getItem('token')
  fetch("http://localhost:3000/repositories", {
    method: "GET",
    headers: {
      'Accept': 'application/json',
      "Content-Type": "application/json",
      'Authorization': `Bearer ${getToken}`

    },
  }).then(response => response.json())
  .then(data => {

    setfirst(data.data)
  })
  }

  useEffect(() => {
    data1()

  }, [])
  
  
  return (

    <>
    <br></br>
    <div><h1>User's Details</h1></div>
    <div>
 <br>
 </br>
 <br></br>
<table id='customers'>
    <thead><tr className='table-row'>
      <th className='table-header'>Id</th>
      <th className='table-header'>User's Name</th>
      <th className='table-header'>Repository Name</th>
      <th className='table-header'>URL of Repositories</th>
      <th className='table-header'>User's Email</th>
      </tr></thead>
<tbody>{first.map( (e) => {
  return <tr key={e.id} > 
    <td>{e.id}</td>
    <td>{e.username}</td>
    <td>{e.repository_name}</td>
    <td>{e.repository_url}</td>
    <td>{e.email}</td>
  </tr>

}  ) }</tbody>

    </table>
    <br></br>
    <br></br>
    <div className='button-container'><button className='button-85' onClick={logout}>LOG OUT</button></div>
</div>
    </>


    
  )
}
