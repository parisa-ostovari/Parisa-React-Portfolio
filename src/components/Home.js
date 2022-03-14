import React from 'react';
import { Link } from 'react-scroll';

function Home() {
    return (
        <div id="home"
        className="bg-zinc-200 w-screen">
        <div className="flex w-screen md:w-screen h-screen">
          <div className="m-auto text-center text-orange-700 pt-10 select-none">
          <h1 className="text-5xl md:text-7xl mb-2 transition transform hover:scale-110 duration-500"> Parisa Ostovari </h1>
            <p className="text-3xl md:text-6xl font-satisfy"> a Full Stack Developer </p>
            <Link to="about"><svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 animate-bounce m-auto mt-40 hover:fill-cyan-800 duration-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
              clipRule="evenodd" />
          </svg></Link>
          </div>
        </div>
      </div>
    )
}

export default Home