import React from 'react'
import Hero from './components/Sections/Hero'
import Navbar from './components/layout/Navbar'
import About from './components/Sections/About'
import Skills from './components/Sections/Skills'
import Projects from './components/Sections/Projects'
import Serivces from './components/Sections/Services'
import Testomonial from './components/Sections/Testomonial'
import Contact from './components/Sections/Contact'
import Footer from './components/Sections/Footer'

const App = () => {
  return (
   <>
   <div className='min-h-screen bg-black '>
    <Navbar />
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Serivces />
      <Testomonial />
      <Contact />
    </main>
    <Footer />
   </div>
   </>
  )
}

export default App
