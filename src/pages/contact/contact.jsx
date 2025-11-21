import React from 'react'
import './contact.css'
import {Link} from "react-router-dom"
export default function Contact() {
  return (
    <>
    <div className='tact'><div className='con'>
     
       <h2>contact</h2>
          <p>helpline: 1234567890</p>
          
          <p>we have many branch which are given below</p>
          
          <p>chennai</p><p>Salem</p><p>Erode</p><p>Coimbatore</p><p>Tirupur </p><p>kanniyakumari</p><p>kerala</p><p>Delhi</p>
           <p>For any forthere details contact the helpline or E-mail</p>
           
          <p>E-mail: <a href="">sample@gmail.com</a></p>
     <div style={{ display: "flex", justifyContent: "center" }}>
  <Link to="/home">
    <button>Home</button>
  </Link>
</div>
     </div></div>
    </>
    
  )
}
