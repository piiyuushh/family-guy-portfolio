import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Herosecond from './components/Herosecond'
import About from './components/About'
import Working from './components/Working'
import Projects from './components/Projects'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <Herosecond />
      <About />
      <Working />
      <Projects />
      <Contact />
    </>
  )
}

export default App
