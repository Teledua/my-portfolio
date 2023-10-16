import React from 'react'

const About = () => {
  return (
    // Main Container
    <div id='about' className='h-screen'>
      <div className='font-poppins '>
        {/* INNER CONTAINER */}
          <div className=' sm:h-screen grid'>


            {/* ABOUT ME CONTAINER */}
              <div className='text-gray-800 sm:text-5xl '>
                <div className='flex gap-2 items-center justify-center font-bold'>
                  <p>About</p>
                  <p className='bg-white px-10 py-2 '>Me</p>
                </div>
              </div>
            {/* ABOUT ME CONTAINER ENDS */}

          {/* THE CONTENTS */}
          <div className=' sm:flex justify-around gap-4 p-10'>
            {/* BACKGROUND */}

            <div>
              <p className='underline decoration-white underline-offset-auto font-bold sm:text-3xl mb-3 '>Background</p>
              <div className='sm:text-2xl font-semibold'>
              Currently Studying Computer Engineering,<br/>
              in the University of Lagos,I have equipped<br/>
              myself with various skills in the tech space<br/>
              which includes, FrontEnd Development in which<br/>
              i'm still a Junior Developer<br/>
              Graphics Design with 2 years Exprience annd UI/UX<br/>
              Design with 1 year Experience<br/>
              </div>
            </div>


            {/* SKILLS */}
            <div className=''>
              <p className='font-bold sm:text-3xl '>SKILLS</p>
              {/* FRONTEND */}
              <div>
                <p className='font-bold'>Frontend</p>
                <div className='flex items-center'>
                  <img className='h-20' src="./img/html.png" alt="" />
                  <img className='h-20' src="./img/css.png" alt="" />
                  <img className='h-20' src="./img/js.png" alt="" />
                  <img className='h-20' src="./img/react.png" alt="" />
                </div>
              </div>


              {/* GRAPHICS DESIGN */}
              <div>
                <p className='font-bold'>Graphics</p>
                <div className='flex items-center'>
                  <img className='h-20' src="./img/ps.png" alt="" />
                  <img className='h-20' src="./img/corel.png" alt="" />
                  <img className='h-16' src="./img/illustrator.png" alt="" />
                  <img className='h-20' src="./img/aftereffect.png" alt="" />
                </div>
              </div>

              {/* UI/UX */}
              <div>
                <p className='font-bold'>Ui/Ux</p>
                <div className='flex items-center'>
                  <img className='h-20' src="./img/figma.png" alt="" />
                  {/* <img className='h-20' src="./img/css.png" alt="" />
                  <img className='h-20' src="./img/js.png" alt="" />
                  <img className='h-20' src="./img/react.png" alt="" /> */}
                </div>
              </div>
            </div>
          </div>

          </div>
        {/* INNER CONTAINER ENDS */}
      </div>
    </div>
    // Container Ended
  )
}

export default About

