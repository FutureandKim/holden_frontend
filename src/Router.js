import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Day from './pages/Day';
import Quiz from './pages/Quiz';
import Stretching from './pages/Stretching';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/day' element={<Day />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/stretching' element={<Stretching />} />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
