import React, { useEffect } from 'react';
import Header from './Header.jsx';
import { useAuthStore } from '../login/authStore.js';
import './Home.css';

import { useNavigate } from 'react-router-dom';

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();

  
  useEffect(() => {
    if (!user) {
      
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <>
      <Header />

      <div className='home'>
        <div className='home1'>
          <h1>hi!... {user?.name}</h1>

          <h1>Welcome to Dream Travelers</h1>
          
          <p>Discover beautiful places and book your next adventure today</p>
        </div>
      </div>
    </>
  );
}

