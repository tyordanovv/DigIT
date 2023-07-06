import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import React from 'react';
import NavBar from './components/NavBar';
import Home from './pages/Home'
import Services from './pages/Services'
import Jobs from './pages/Jobs'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar /> 
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/jobs' element={<Jobs />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;