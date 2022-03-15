import React from 'react';
import { Link } from 'react-scroll';
import Pdf from './asset/Parisa-Ostovari-Resume.pdf'

function Navbar() {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 w-full bg-orange-800 opacity-95">
        <div className="flex flex-col h-20 align-middle max-w-screen-2xl md:max-w-screen-2xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
          
          <div className="p-3 flex flex-row items-center justify-between">
            <Link to="home" className="text-lg md:text-xl font-semibold tracking-widest text-white m-auto uppercase rounded-lg hover:text-cyan-900"> Parisa Ostovari </Link>
          </div>
  
          <nav className="text-slate-300 flex-col flex-grow m-auto md:pb-0 md:flex md:justify-end md:flex-row">
            <Link className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold rounded-lg md:mt-0 hover:text-cyan-900" to="about"> About
            </Link>
            <Link className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-cyan-900" to="work">
              Work </Link>
            <Link className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-cyan-900" to="contact">
              Contact </Link>
            <a target="_blank" rel="noreferrer" className="px-4 py-2 mt-2 text-sm md:text-lg font-semibold rounded-lg md:mt-0 md:ml-4 hover:text-cyan-900"
              href={Pdf}> Resume </a>
          </nav>
  
        </div>
      </div>
    );
  }

  export default Navbar
  