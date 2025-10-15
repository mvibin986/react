import React from 'react'
import  './booking.css'

export default function Booking() {
  return (
   <div className='table' >
    
    <div className='box'><h2>Booking</h2>
    
    <div><input type="text" placeholder='Name' /></div>
    
    <div><input type="text" placeholder='Number of adults and children' /></div>
    <div><input type="text" placeholder='Description' /></div>
    <h1>From - To date</h1><input type="text" placeholder='DD-MM-YY to DD-MM-YY' />
          
    <div><select placeholder="Select your destination">
          <option>tokiyo</option>
          <option>bali</option>
          <option>thailand</option>
          <option>vietnam</option>
          <option>Goa</option>
          <option>Switzerland</option>
          
          
        </select></div>
        <button>Book Now</button>
        </div>
   </div>
  )
}
