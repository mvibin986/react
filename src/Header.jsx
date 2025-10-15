import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div>
    <header className="head">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/destination">Destination</Link>
        <Link to="/login">Login</Link>
        <Link to="/booking">Booking</Link>
        <Link to="/contact">Contact</Link>
         
    </header>
    </div>
  )
}
