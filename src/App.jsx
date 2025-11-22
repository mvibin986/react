import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home.jsx'
import Login from './pages/login/login.jsx'
import Contact from './pages/contact/contact.jsx'
import Destination from './pages/destination/destination.jsx'
import About from './pages/about/about.jsx'
import Booking from './pages/booking/booking.jsx'
export default function App() {
  return (
    <div>
      <Router>
        
          <Routes>
             <Route path="/home" element={<Home />}/>
             <Route path="/" element={<Login />}/>
             <Route path="/contact" element={<Contact />}/>
             <Route path="/destination" element={<Destination />}/>
             <Route path="/about" element={<About />}/>
             <Route path="/booking" element={<Booking />}/>
          </Routes>
      </Router>
    </div>
  )
}
