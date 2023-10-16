import React, { useState } from 'react'
import { Link } from 'react-scroll'
import "./Navbar.css"

const Navbar = () => {
    let[menuOpen, setmenuOpen] = useState(false)
  return (
    <nav className=' bg-transparent text-black w-full p-5 font-poppins font-bold sm:fixed backdrop-blur-sm '>
        <div className='sm:flex justify-around'>
            <div className='flex justify-between items-center'>
                <div>
                    <Link to="/"><img src='./img/logo.png' className='h-10'/></Link>
                </div>
                <div onClick={()=>{setmenuOpen(!menuOpen)}}>
                        <img  src='./img/burger.png' className='h-10 sm:hidden'/>
                </div>
            </div>
            <div id='nav' className={menuOpen? 'open':'close'}>
                <div className='text-center  sm:flex items-center gap-40'>
                    <ul className='text-1xl sm:flex'>
                        <li className='cursor-pointer p-1 sm:pl-3'>
                            <Link to="home" spy={true} smooth={true} offset={50} duration={1500}>Home</Link>
                        </li>
                        <li className='cursor-pointer p-1 sm:pl-3'>
                            <Link to="about" spy={true} smooth={true} offset={50} duration={1500}>About</Link>
                        </li>
                        <li className='cursor-pointer p-1 sm:pl-3'>
                            <Link to="portfolio" spy={true} smooth={true} offset={50} duration={1500}>Portfolio</Link>
                        </li>
                        <li className='cursor-pointer p-1 sm:pl-3'>
                            <Link to="contact" spy={true} smooth={true} offset={50} duration={1500}>Contact</Link>
                        </li>
                    </ul>
            
                    <div>
                        <button className="px-6 py-2 font-poppins bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_cyan] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                            <a href='https://docs.google.com/document/d/1zr0kElv399aYcGAF3di9cN5D1ntjbP_A-BQjCWtNnXo/edit?usp=sharing'>RESUME</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar
