import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import './login.css'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); 

  function handlelogin() {
    if (!email || !password) {
      alert("Fill the field");
    } else {
      alert("Login success");
      navigate("/booking"); 
    }
  }

  return (
    <>
      <div className='login'>
        <h2>Login</h2>

        <div className='input'><input type="text" placeholder="username" /></div>
        <div className='input'><input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} /></div>
        <div className='input'><input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} /></div>

        <button className='logbt' onClick={handlelogin}>login</button>

      </div>
    </>
  )
}
