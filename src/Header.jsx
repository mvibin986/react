import React from 'react'
import './Header.css'
import {Link} from "react-router-dom"
export default function Header() {
  return (
    <div>
    <header className="head">
        <Link to="/"><button>Home</button></Link>
        <Link to="/about"><button>About</button></Link>
        <Link to="/destination"><button>Places</button></Link>
        <Link to="/login"><button>Login</button></Link>
        <Link to="/booking"><button>Booking</button></Link>
        <Link to="/contact"><button>Contact</button></Link>
         
    </header>
    </div>
  )
}
