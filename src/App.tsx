import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
   <>
       <Navbar/>
       <Routes>
           <Route path={"/"} element={<Home/>}></Route>
       </Routes>
   </>
  );
}

export default App;
