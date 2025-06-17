import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Products from './components/Products'
import Science from './components/Science'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Philosophy />
      <Products />
      <Science />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
