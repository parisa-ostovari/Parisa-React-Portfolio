import React from 'react';
import Cooking from './asset/git-cooking-screenshot.png'
import Travel from './asset/covid-travel-guide-screenshot.png'
import Rate from './asset/rate-my-portfolio-screnshot.png'


export default function Work() {
  return (

    <div id="work" className="bg-zinc-100 w-screen m-auto md:m-auto h-fit md:h-fit sm:pt-20 md:pt-20 p-10 pt-14 md:w-screen">
      <div className="sm:pt-0 md:pt-0 sm:mt-0 flex m-auto md:max-w-screen-2xl pb-5">
        <div className="flex w-screen md:w-screen">
          <div className="m-auto text-center text-slate-800">
            <h2 className="text-xl sm:text-xl md:text-3xl font-bold pb-4 text-orange-700 mt-20"> Work </h2>
            <p className="m-auto sm:text-lg md:text-xl md:w-3/5"></p>
          </div>
        </div>
      </div>

      <div className="place-items-center m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 sm:w-fit sm:gap-x-4 md:gap-x-11 md:gap-14 md:w-3/4 md:max-w-screen-xl">
        
        {/* Rate My Portfolio */}
        <div className="text-slate-800 sm:w-fit md:w-fit w-screen p-4 md:p-0">
          <a target="_blank" rel="noreferrer" href="https://floating-fjord-17758.herokuapp.com/"><img
            className="border-slate-100 border-4 hover:border-cyan-800 rounded-lg hover:opacity-80 hover:border-4 md:mb-4 duration-300"
            src={ Rate } alt="Rate My Portfolio" title="Rate My Portfolio" /></a>
        </div>
        <div className="text-slate-800 pb-6">
          <p className="text-lg md:text-2xl font-bold mb-2"> Rate My Portfolio </p>
          <p className="pb-3 md:pb-2 italic text-cyan-800"> "When you need some inspiration and feedback for your portfolio." </p>
          <p className=""> A social media application that allows you to create an account and upload, rate, comment, and follow various developer's portfolios.</p>
          <ul className="flex flex-start mt-4 text-sm text-orange-600">
            <li className="mr-4"> Express.js </li>
            <li className="mr-4"> Node.js </li>
            <li className="mr-4"> GraphQl </li>
          </ul>
          <ul className="flex flex-start mt-1 text-sm text-orange-600">
            <li className="mr-4"> React.js </li>
            <li className="mr-4"> TailwindCSS </li>
          </ul>
          <div className="flex mt-3 float-right">
            <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari/RateMyPortfolio"><svg
              className="h-7 w-7 fill-orange-700 hover:stroke-cyan-800 hover:fill-cyan-800 rounded-full duration-300"
              viewBox="0 0 128 128">
              <title> GitHub </title>
              <desc> GitHub </desc>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
              </path>
              <path
                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
              </path>
            </svg></a>
            <a target="_blank" rel="noreferrer" href="https://floating-fjord-17758.herokuapp.com/"><svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-2 hover:stroke-cyan-800 duration-300 stroke-orange-700" viewBox="0 0 24 24" fill="none">
              <title> Deployed Application </title>
              <desc> Deployed Application </desc>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></a>
          </div>
        </div>

        {/* Covid Travel Guide Project */}
        <div className="text-slate-800 sm:w-fit md:w-fit w-screen p-4 md:p-0">
          <a target="_blank" rel="noreferrer" href="https://intense-mesa-45226.herokuapp.com/"><img
            className="border-slate-100 border-4 hover:border-cyan-800 rounded-lg hover:opacity-80 hover:border-4 md:mb-4 duration-300"
            src={ Travel } alt="Covid Travel Guide" title="Covid Travel Guide" /></a>
        </div>
        <div className="text-slate-800 pb-6">
          <p className="text-lg md:text-2xl font-bold mb-2"> Covid Travel Guide </p>
          <p className="pb-3 md:pb-2 italic text-cyan-800"> "To help you prepare for travel plans with the ever-changing covid guidelines." </p>
          <p className=""> This programs allows an individual to receive information on entry restrictions, risk levels, mask requirements, etc., for any country they wish to travel to.</p>
          <ul className="flex flex-start mt-4 text-sm text-orange-600">
            <li className="mr-4"> JavaScript </li>
            <li className="mr-4"> Node.js </li>
            <li className="mr-4"> Sequelize </li>
            <li className="mr-4"> MySQL </li>
          </ul>
          <ul className="flex flex-start mt-1 text-sm text-orange-600">
            <li className="mr-4"> Axios </li>
            <li className="mr-4"> Handlebars </li>
            <li className="mr-4"> BootstrapCSS</li>
          </ul>
          <div className="flex mt-3 float-right">
            <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari/CovidTravelGuide"><svg
              className="h-7 w-7 fill-orange-700 hover:stroke-cyan-800 hover:fill-cyan-800 rounded-full duration-300"
              viewBox="0 0 128 128">
              <title> GitHub </title>
              <desc> GitHub </desc>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
              </path>
              <path
                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
              </path>
            </svg></a>
            <a target="_blank" rel="noreferrer" href="https://intense-mesa-45226.herokuapp.com/"><svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-2 hover:stroke-cyan-800 duration-300 stroke-orange-700" viewBox="0 0 24 24" fill="none">
              <title> Deployed Application </title>
              <desc> Deployed Application </desc>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></a>
          </div>
        </div>

        {/* Git Cooking Project */}
        <div className="text-slate-800 sm:w-fit md:w-fit w-screen p-4 md:p-0">
          <a target="_blank" rel="noreferrer" href="https://intense-mesa-45226.herokuapp.com/"><img
            className="border-slate-100 border-4 hover:border-cyan-800 rounded-lg hover:opacity-80 hover:border-4 md:mb-4 duration-300"
            src={ Cooking } alt="Rate My Portfolio" title="Rate My Portfolio" /></a>
        </div>
        <div className="text-slate-800 pb-6">
          <p className="text-lg md:text-2xl font-bold mb-2"> GitCooking </p>
          <p className="pb-3 md:pb-2 italic text-cyan-800"> "A food and drink idea generator" </p>
          <p className=""> By using Edamam and Cocktail DB API, the user is able to generate and save drink and food recipe pairings </p>
          <ul className="flex flex-start mt-4 text-sm text-orange-600">
            <li className="mr-4"> JavaScript </li>
            <li className="mr-4"> HTML </li>
            <li className="mr-4"> APIs </li>
            <li className="mr-4"> BulmaCSS</li>
          </ul>
          <div className="flex mt-3 float-right">
            <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari/GitCooking"><svg
              className="h-7 w-7 hover:stroke-cyan-800 hover:fill-cyan-800 rounded-full duration-300 fill-orange-700"
              viewBox="0 0 128 128">
              <title> GitHub </title>
              <desc> GitHub </desc>
              <path fillRule="evenodd" clipRule="evenodd"
                d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z">
              </path>
              <path
                d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0">
              </path>
            </svg></a>
            <a target="_blank" rel="noreferrer" href="https://nmbeilke.github.io/Git-Cooking/"><svg xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 ml-2 hover:stroke-cyan-800 duration-300 stroke-orange-700" fill="none" viewBox="0 0 24 24">
              <title> Deployed Application </title>
              <desc> Deployed Application </desc>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg></a>
          </div>
        </div>
      </div>

      {/* Other Work */}
      <div className="mt-14 m-auto w-5/6 md:w-5/6 md:max-w-screen-2xl  text-slate-700">
        <h2 className="text-center text-xl sm:text-xl md:text-xl font-bold mb-10"> Other Work </h2>
        <div className="grid grid-cols-1 h-fit w-fit sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-y-6 md:gap-x-4 md:max-w-screen-2xl">
          <div className="m-auto border border-2 h-75 p-2 border-cyan-800 rounded-md transition transform hover:-translate-y-4 hover:border-orange-700 duration-300">
            <div className="p-4">
              <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari/E-CommerceBackend"><svg viewBox="0 0 128 128" className="h-7 w-7 mt-1 md:mt-3 float-right fill-orange-700">
                <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14 mb-2 stroke-orange-700" fill="none" viewBox="0 0 30 30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <h2 className="text-md font-bold mb-4"> E-Commerce Backend</h2>
                <p className="text-sm"> Using MySQL, Sequelize, and Express. The database includes tables for products, categories and tags with routes for creating, updating, and deleting within the database. </p></a>
            </div>
          </div>
          <div className="m-auto border border-2 h-75 p-4 border-slate-700 rounded-md transition transform hover:-translate-y-2 hover:border-orange-800 duration-300">
            <div className="p-4">
              <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari/SocialNetworkAPI"><svg viewBox="0 0 128 128" className="h-7 w-7 mt-1 md:mt-3 float-right fill-orange-700">
                <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14 mb-2 stroke-orange-700" fill="none" viewBox="0 0 30 30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h2 className="text-md font-bold mb-4"> Social Network API </h2>
                <p className="text-sm"> A backend Mongo social network api application that is implemented with Mongoose and tested through Insomnia. </p></a>
            </div>
          </div>
          <div className="m-auto border border-2 h-75 p-2 border-slate-700 rounded-md transition transform hover:-translate-y-2 hover:border-amber-700">
            <div className="p-4">
              <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari/EmployeeTracker"><svg viewBox="0 0 128 128" className="h-7 w-7 mt-1 md:mt-3 float-right fill-orange-700">
                <path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path>
              </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-14 md:w-14 mb-2 stroke-orange-700" fill="none" viewBox="0 0 30 30">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h2 className="text-md font-bold mb-4"> Employee Tracker </h2>
                <p className="text-sm "> This command line interface application uses MySQL and Inquirer to allow the user to view and edit an employee database within their company.</p></a>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2 md:pb-8 md:p-12 flex m-auto md:max-w-screen-2xl">
        <div className="flex w-screen md:w-screen">
          <div className="m-auto text-center text-white">
            <a target="_blank" rel="noreferrer" href="https://github.com/parisa-ostovari?tab=repositories"><button
              className="p-2 px-5 mt-12 border rounded-md text-md md:text-lg hover:border-orange-800 hover:text-orange-800 border-cyan-800 text-cyan-800 transition transform hover:scale-110 duration-700">
              More Work </button></a>
          </div>
        </div>
      </div>
    </div>
  );
}
