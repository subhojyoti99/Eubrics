import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Categories from './component/Categories';
import Login from './component/Login';

import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import * as React from 'react';
import Making_decisions from './component/Making_decisions';
import Register from './component/Register';
import Footer from './component/Footer';



function App() {
  return (
    <>
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/categories" element={<Categories/>} />
      <Route path="/assignment/login" element={<Login/>} />
      <Route path="/assignment/register" element={<Register/>} />
      <Route path="/categories/making_decision" element={<Making_decisions/>} />
    </Routes>
  <Footer/>
  </BrowserRouter>
    </>
  );
}


export default App;
