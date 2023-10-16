import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact'
import { AnimatePresence } from 'framer-motion'

function App() {

  return (
    <div className='explore bg-gradient-to-r from-sky-500 to-indigo-500 p-0 m-0 h-full'>
      <Navbar/>
      <AnimatePresence mode='wait'>
          <div>
            <Home/>
            <About/>
            <Portfolio/>
            <Contact/>
            {/* <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/portfolio' element={<Portfolio/>}/>
            <Route path='/contact' element={<Contact/>}/> */}
          </div>
        </AnimatePresence>
    </div>
  )
}

export default App
