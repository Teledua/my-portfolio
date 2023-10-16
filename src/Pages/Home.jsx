import React from 'react'
import Transition from '../Transition'
import {TypeAnimation} from 'react-type-animation'

const Home = () => {
  return (
    <div className='grid place-content-center font-poppins font-bold text-3xl w-screen h-screen sm:h-screen'>
      <div className=''>
        <p className='sm:text-3xl'>Hey</p>
        <p className='sm:text-5xl'>I'm Teledua Adedokun</p>
        <div className='flex gap-3 sm:text-6xl md:text-7xl'>
          <p>I am </p>
            <TypeAnimation className='bg-black text-white px-4 text-2xl sm:text-5xl md:text-7xl'
                sequence={[
                'A FrontEnd Developer ',
                1000,
                'A Ui/Ux Designer',
                1000,
                'A Graphics Designer ',
                1000
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block' }}
              repeat={Infinity}
              />
          </div>
      </div>
    </div>
  )
}

export default Home
