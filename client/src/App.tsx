import React from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Intro/>
        <About/>
        <Contact/>
        <Footer/>
     </BrowserRouter>
  );
}

export default App;
