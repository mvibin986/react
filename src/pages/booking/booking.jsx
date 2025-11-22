import React, { useState } from 'react';
import './booking.css';
import Header from '../home/Header'
import { useNavigate } from "react-router-dom"

export default function Booking() {

  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    people: "",
    place: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handlebook() {
    const { name, people, place } = form;

    if (!name || !people || !place) {
      alert("Enter the fields!");
      return;
    }
     navigate('/home')
    alert("Your trip booked!");
  }

  return (
   <> 
   <Header/>
   <div className='box'><div className='table'>
      <h2>Booking</h2>

      <input
        className='bt'
        type="text"
        placeholder='Name'
        name="name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        className='bt'
        type="number"
        placeholder='Number of people'
        name="people"
        value={form.people}
        onChange={handleChange}
      />

      
      <input
        className='bt'
        type="text"
        placeholder='Description'
      />

      <h1 className='h1'>From - To date</h1>

      <input
        className='bt'
        type="text"
        placeholder='DD-MM-YY to DD-MM-YY'
      />

      <h1 className='h1'>Select Place</h1>
      <div>
   
        <select
          name="place"
          value={form.place}
          onChange={handleChange}
        >
          <option value="">Select a place</option>
          <option value="tokiyo">Tokiyo</option>
          <option value="bali">Bali</option>
          <option value="thailand">Thailand</option>
          <option value="vietnam">Vietnam</option>
          <option value="goa">Goa</option>
          <option value="switzerland">Switzerland</option>
        </select>
      </div>

     <div className="btn-group">
      
  <button className="bn" onClick={handlebook}>Book</button>

</div>

    </div></div>
   </> 
  );
}
