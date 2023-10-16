import React, { useEffect, useState } from 'react'
import Transition from '../Transition'
import './Styles/Porfolio.css'

const Portfolio = () => {
  let[contentsOpen, setContentOpen] = useState(false)
  const openGraph = (e) =>{
    e.preventDefault()
    setContentOpen(!contentsOpen);
  }

  let[openUi, setOpenUi] = useState(false)
    const openUser = (e) =>{
    e.preventDefault()
    setOpenUi(!openUi);
  }
  let[openGraphics, setOpenGhraphics] = useState(false)
   const openDesign = (e) =>{
    e.preventDefault()
    setOpenGhraphics(!openGraphics);
   }
  return (
    <div id='portfolio' className='h-5/6 mb-40'>
      {/* CONTAIN PROJECT */}
      <div className='text-gray-800 flex justify-center items-center gap-1 font-bold sm:text-5xl'>
        <p>Explore</p>
        <p className='bg-white px-6 py-2 text-gray-800'>Project</p>
      </div>

      {/* CONTAIN CONTENT */}
      <div className=''>
      <div className='sm:flex gap-4 justify-center p-10'>
        {/* FRONTEND CARD */}
        <div classname=''>   
          <div class="mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">FRONT-END DEVELOPMENT</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These are some of my works</p>
              <a href="#" onClick={openGraph} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                 Explore
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>
          

             {/* UI/UX CARD */}
        <div classname=''>   
          <div class="mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">UI/UX DESIGN</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These are some of works</p>
              <a href="#" onClick={openUser} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Explore
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>

             {/* GRAPHICS DESIGN CARD */}
        <div classname=''>   
          <div class=" mt-2 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">GRAPHICS DESIGN</h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">These are some of my works</p>
              <a href="#" onClick={openDesign} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Explore
                  <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
              </a>
          </div>
        </div>
        {/* GRAPHICS END */}


      </div>

      <div className='flex-col text-center justify-center'>
        {/* PROJECTS */}
        <div id='projects' className={contentsOpen? 'open':'close'}>
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/faq.jpg" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>FAQ WEB DESIGN</p>
                  <p>This is a Faq Page Designed with Html and Css</p>
                </div>
          </div>

          {/* second */}
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/tip.jpg" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>TIP CALCULATOR</p>
                  <p>This is a calcultor built with Javascript,Html and Css</p>
                  <p>It can calculate the tip </p>
                </div>
          </div>

          {/* THIRD */}
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/agecalc.jpg" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>AGE CALCULATOR </p>
                  <p>This is a calcultor built with Javascript,Html and Css</p>
                  <p>It can calculate the precise Age of and individual with</p>
                  <p>Just yoyr Date of Birth</p>
                </div>
          </div>
        </div>


        {/* PROJECTS FOR UI */}
        <div id='Ui' className={openUi? 'open':'close'}>
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/checkout.png" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>Check out page</p>
                  <p>This is a checkout page designed with Figma</p>
                </div>
          </div>

          {/* second */}
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/webpage.png" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>Web Page Design</p>
                  <p>This is a webpage designed for a company</p>
                  <p>It was designed with Figma</p>
                </div>
          </div>

          {/* THIRD */}
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/signup.png" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>Signup/Signin page</p>
                  <p>A sign up and sign in app design</p>
                </div>
          </div>
        </div>

        {/* PROJECTS FOR GRAPHICS */}
        <div id='Graphics' className={openGraphics? 'open':'close'}>
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/augustmadness.jpg" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>AUGUST MADNESS POSTER</p>
                  <p>This is a poster i created using Photoshop</p>
                </div>
          </div>

          {/* second */}
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/playlist.jpg" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>PLAYLIST POSTER</p>
                  <p>This is a poster i created using Photoshop</p>
                </div>
          </div>

          {/* THIRD */}
          <div className='mt-2 sm:flex items-center justify-around'>
                <div>
                  <img class="h-48 sm:h-auto max-w-lg rounded-lg " src="./img/party.jpg" alt="image description"></img>
                </div>
                <div>
                  <p className='font-bold text-3xl'>DEJA VU PARTY POSTER </p>
                  <p>A poster i created using Photoshop</p>
                </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
