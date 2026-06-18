import React from 'react'
import Hero from './components/Sections/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
const App = () => {
  return (
   <>
   <div className='min-h-screen bg-black pb-[100vh]'>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
    </main>
   </div>
   </>
  )
}

export default App
