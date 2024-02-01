import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowDetailScreen.css';

const ShowDetailScreen = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

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

  if (!show) {
    return <div>Loading...</div>;
  }
  return (
    <div className='container text-center'>
      <h1 className='text-warning my-5' style={{fontSize:"50px"}}>{show.name}</h1>
      <img className='d-inline-block my-4' src={show.image.original} alt={show.name} />
      <p className='text-warning fst-italic fw-light my-3 fs-3' ><b className='text-light fw-bold'>Language:</b> {show.language}</p>
      <p className='text-warning fst-italic fw-light my-3 fs-3' ><b className='text-light fw-bold'>Genres:</b> {show.genres.join(", ")}</p>
      <p className='text-warning fst-italic fw-light my-3 fs-3' ><b className='text-light fw-bold'>Status:</b> {show.status}</p>
      <p className='text-warning fst-italic fw-light my-3 fs-3' ><b className='text-light fw-bold'>Runtime:</b> {show.runtime} minutes</p>
      <p className='text-warning fst-italic fw-light my-3 fs-3' ><b className='text-light fw-bold'>Average Rating</b>: {show.rating.average}</p>
      <p className='text-warning fst-italic fw-light my-3 fs-3' >
        <b className='text-light fw-bold'>Premiered:</b> {new Date(show.premiered).toLocaleDateString("en-US")}
      </p>
      <p className='text-warning my-5 fs-1' ><b>Official Site:</b> <a href={show.officialSite} target="_blank" rel="noopener noreferrer">{show.officialSite}</a></p>
      {/* <p>{show.summary}</p> */}
      <div className='text-light text-start my-5 fs-3' dangerouslySetInnerHTML={{ __html: show.summary }} />
      <Link to={`/book/${id}`} className="book-button">
        Book Movie Ticket
      </Link>
    </div>
  );
};

export default ShowDetailScreen;
