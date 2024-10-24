import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Home from './pages/home/home';
import Header from './components/layout/header/header'
import Users from './pages/users/users'
import Login from './pages/login/login'
import Register from './pages/register/register';

function App() {


  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
