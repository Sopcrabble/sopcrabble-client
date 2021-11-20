import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Registration from 'pages/Registration';
import Relay from 'pages/Relay';
import LikeList from 'pages/LikeList';
import Favorite from 'pages/Favorite';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/relay" element={<Relay />} />
        <Route path="/likelist" element={<LikeList />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/*" element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
