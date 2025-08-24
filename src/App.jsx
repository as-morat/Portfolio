import React from 'react'
import Navbar from './components/Header/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Work from './components/Works/Works'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default App