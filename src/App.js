import React from 'react';

import About from './components/About'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Home from './components/Home'
import Footer from './components/Footer'


function App() {
  return (
    <main>
    <Navbar/>
    <Home/>
    <About/>
    <Projects/>
    <Contact/>
    <Footer/>
  </main>
  );
}

export default App;
