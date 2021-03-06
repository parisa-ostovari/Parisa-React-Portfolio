import React from 'react'
import Headshot from './asset/headshot.JPG'

export default function About() {
  return (
    <div id="about" className=" bg-zinc-200 bg-auto bg-fixed bg-center bg-repeat flex w-screen md:w-screen pb-52 md:pb-0 lg:pb-0">
      <div className="flex w-screen h-screen md:h-screen md:w-screen md:max-w-screen-2xl m-auto text-sm md:text-md lg:text-lg">
        <div className="m-auto w-5/6 md:w-5/6 text-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="text-justify order-last md:order-first">
              <h2 className="text-xl md:text-3xl sm:text-left md:text-left text-center font-bold pb-5 text-orange-700"> About Me </h2>
              <p className="ml-6 mt-3"> Hi, my name is Parisa Ostovari. I am a Full Stack Web Developer, graduating from UC San Diego extension and transitioning from working as a physical therapist assistant to the world of technology. My unique experience in healthcare, in this fast paced and ever-changing environment, has allowed me to transition into software development with ease. Has years of experience in biotech documentation technology and excels in web accessibility and UI integration. Dedicated leader with exceptional communication and multitasking skills, all with proven success in being able to adapt and learn quickly on the spot.</p>
              <p className="ml-6 mt-3"> I'm eager to learn more and pursue my passion for software development and hope to one day become a leader in helping bridge the gap for more women in tech. </p>
              <p className="ml-6 mt-3"> Technical Skills: </p>
              <div className="ml-4 flex grid-col-2 md:grid-col-2">
                <div className="flex">
                  <ul className="text-sm p-2 sm:ml-5 md:ml-5 list-disc list-inside">
                    <li className="text-orange-700"><span className="text-slate-800"> JavaScript </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Express.js </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Node.js </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> MongoDB </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Sequelize </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> MySQL </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> NoSQL </span></li>
                  </ul>
                </div>
                <div className="sm:ml-4 md:ml-4 flex">
                  <ul className="text-sm p-2 ml-5 list-disc list-inside">
                    <li className="text-orange-700"><span className="text-slate-800"> React.js </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> GraphQL </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Handlebars.js </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> HTML </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Bootstrap CSS </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Tailwind CSS </span></li>
                    <li className="text-orange-700"><span className="text-slate-800"> Bulma CSS </span></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="m-auto mt-20 mb-5">
              <img
                className="h:48 w-32 md:h-64 md:w-48 opacity-90 transition transform hover:scale-110 duration-700 border-2 hover:border-4 border-zinc-200 rounded-md" src={Headshot} alt="Professional Headshot" title="Professional Headshot" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
