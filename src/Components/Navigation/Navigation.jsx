import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, NotFound, Room } from '../../Pages';

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/room/:room_id" element={<Room />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Navigation;