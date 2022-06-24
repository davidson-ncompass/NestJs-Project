import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';Y
import Navigator from './Navigate';
export default function Fetch() {

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

    setfirst(data)

    console.log(data);
  })

  }

  useEffect(() => {
    data1()

  }, [])
  
  
  return (

    <>
    <Navigator></Navigator>
    <div>
 
<table>
    <thead><tr>
      <th>id</th>
      <th>username</th>
      <th>repository_name</th>
      <th>repository_url</th>
      <th>email_id</th>
      </tr></thead>
<tbody> {first.map( (e) => {
  return <tr>
    <td>{e.id}</td>
    <td>{e.username}</td>
    <td>{e.repository_name}</td>
    <td>{e.repository_url}</td>
    <td>{e.email}</td>
  </tr>

}  ) } </tbody>

    </table>
</div>
    </>


    
  )
}
