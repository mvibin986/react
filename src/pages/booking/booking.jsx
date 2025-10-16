import React from 'react'
import  './booking.css'

export default function Booking() {
  return (
   <div className='table' >
    
    <h2>Booking</h2>
    
   <input className='bt' type="text" placeholder='Name' />
    
    <input className='bt' type="text" placeholder='Number of adults and children' />
    <input className='bt' type="text" placeholder='Description' />
    <h1 className='h1'>From - To date</h1><input className='bt' type="text" placeholder='DD-MM-YY to DD-MM-YY' />
       <h1 className='h1'>Select Place</h1>   
    <div><select placeholder="Select your destination">
          <option>tokiyo</option>
          <option>bali</option>
          <option>thailand</option>
          <option>vietnam</option>
          <option>Goa</option>
          <option>Switzerland</option>
          
          
        </select></div>
        <button className='bn'>Book Now</button>
        
   </div>
  )
}
