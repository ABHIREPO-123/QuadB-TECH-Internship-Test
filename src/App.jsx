import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomeScreen from './screens/HomeScreen/HomeScreen';
import ShowDetailScreen from './screens/ShowDetailScreen/ShowDetailScreen';
import BookingScreen from './Screens/BookingScreen/BookingScreen';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/show/:id" element={<ShowDetailScreen />} />
        <Route path="/book/:id" element={<BookingScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
