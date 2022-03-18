

import axios from 'axios';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Login from './Components/login.js';
/*import Consignacion from '';
import Retiro from '';*/
import Principal from './Components/principal.js';
import Registro from './Components/registro.js';



//import logo from './logo.svg';

//import './App.css';



function App() {
  return (

    <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path='/principal' element ={<Principal />} />
      </Routes>
    </Suspense>
  </Router>



  );
}

export default App;
