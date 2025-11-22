import React, { useState } from 'react' 
import { useAuthStore } from './authStore';
import { useNavigate } from "react-router-dom"; 
import './login.css' 

export default function Login() { 
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState(""); 
  const navigate = useNavigate(); 

const login = useAuthStore((state) => state.login);

  function handlelogin() 
               {
                 if (!username || !email || !password) { 
                alert("Fill the field"); }
                 else {
                  login(username);
                  alert("Login success"); 
                  navigate("/home"); }
                 } 
  return ( 
  <> 
  <div className='back'> 
       <div className='login'> 
        <h2 className='h2'>Login</h2> 
        <div className='input'><input type="text" placeholder="username" onChange={(e)=> setUsername(e.target.value)}/></div> 
       <div className='input'><input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
  </div> <div className='input'><input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
  </div> <button className='logbt' onClick={handlelogin}>login</button> </div> 
  </div> 
  </> 
  ) 
}