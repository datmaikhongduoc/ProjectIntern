import React from 'react';

import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import UIDesign from './page/UiDesign';
import Header from './components/Header/NavBar';
import Footer from './components/Header/NavBar/footer';
import UiDesign from './page/Home/UiDesign';



const App = () => {
  return (
    <div className='container'>
          <Header/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/ui-design" element={<UiDesign/>}/> 
                <Route path="/template/:id" element={<UIDesign/>}/>
              </Routes>
          <Footer/>
        
    </div>
  )
}

export default App;



