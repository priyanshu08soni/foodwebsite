import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import Orders from './pages/Orders';

function App() {
  return (
    // make react fragments
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          {/* By help of outlet we will using multiple routes in layout. */}
          <Route index element={<Home/>} />
          <Route path='orders' element={<Orders/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
};
export default App;