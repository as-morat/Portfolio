import React from 'react'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
    </div>
  )
}

export default App