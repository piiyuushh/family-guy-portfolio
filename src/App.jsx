import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Herosecond from './components/Herosecond'
import About from './components/About'
import Working from './components/Working'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <div id="hero">
      <Hero />
      </div>
      
      <Herosecond />
      <div id='about'>
        <About />
      </div>
      <Working />
      <div id="project">
        <Projects/>
      </div>
      
      <div id='contact'>
      <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
