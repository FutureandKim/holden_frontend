import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Day from './pages/Day';
import Quiz from './pages/Quiz';
import Stretching from './pages/Stretching';
import LoginRedirectHandler from './api/auth/LoginRedirectHandler';
import PrivateRoute from './components/PrivateRoute';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/user/kakao/callback' element={<LoginRedirectHandler />} />
        <Route
          path='/day'
          element={
            <PrivateRoute>
              <Day />
            </PrivateRoute>
          }
        />
        <Route
          path='/quiz'
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route
          path='/stretching'
          element={
            <PrivateRoute>
              <Stretching />
            </PrivateRoute>
          }
        />
        <Route path='*' element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
}
