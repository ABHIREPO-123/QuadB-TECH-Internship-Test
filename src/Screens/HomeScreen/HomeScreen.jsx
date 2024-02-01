import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

const HomeScreen = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await fetch('https://api.tvmaze.com/search/shows?q=all');
        const data = await response.json();
        console.log(data);
        setShows(data);
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  return (
    <div className="container home-container">
      <h1 className='text-warning my-5' style={{fontSize:"50px"}}>TV Shows App</h1>
        {shows.map((show) => (
          <div className='my-4 border-0' key={show.show.id}>
            <Link to={`/show/${show.show.id}`}>
              <div className="show-card border-0">
                <img className='mt-5' src={show.show.image?.medium} alt={show.show.name} />
                <p className='text-light fs-4 my-4' style={{textDecorationColor:"white", textDecoration: "underline"}}>{show.show.name}</p>
              </div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default HomeScreen;