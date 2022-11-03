import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Logement from './pages/Logement';
import NotFound from './pages/Not-found';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='*' element={<NotFound />}></Route>
        <Route path="logement/:logementId" element={<Logement />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;