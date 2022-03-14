import React from 'react';
import './index.css';

import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div>
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
