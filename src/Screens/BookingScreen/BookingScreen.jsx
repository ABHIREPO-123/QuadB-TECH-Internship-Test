// screens/BookingScreen.js

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BookingScreen.css';

const BookingScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const fetchShowDetail = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
        const data = await response.json();
        setShow(data);
      } catch (error) {
        console.error('Error fetching show details:', error);
      }
    };

    fetchShowDetail();
  }, [id]);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Save user details to local storage
    localStorage.setItem('userDetails', JSON.stringify(formData));
    // Perform booking logic here
    alert(`Booking confirmed for ${show.name}!`);
  };

  return (
    <div className="container">
      <h2 className='text-center text-warning fs-1 mt-5'>Book Movie Ticket</h2>
      <div className="ticket">
      <p className='text-center text-light fs-3 pt-5'>Movie: {show?.name}</p>
      <form onSubmit={handleFormSubmit}>
        
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} placeholder='Name' required />
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} placeholder='Email' required />
        <button type="submit">Confirm Booking</button>
      </form>
      </div>
    </div>
  );
};

export default BookingScreen;
