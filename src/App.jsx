import Navbar from './components/Navbar'
import LoadingScreen from './components/LoadingScreen'
import MobileMenu from './components/MobileMenu'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'
import "./index.css"

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { useState } from 'react'


function App() {
  const [isload,setIsLoad]=useState(false);
  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <>
    
     {!isload && <LoadingScreen onComplete={()=>setIsLoad(true)}/>}
      <div className={`min-h-screen transition-opacity duration-700 ${isload?"opacity-100":"opacity-0"} bg-black text-gray100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
