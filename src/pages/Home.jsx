import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Philosophy from '../components/Philosophy'
import Products from '../components/Products'
import Science from '../components/Science'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <div className="bg-white overflow-x-hidden">
      <Hero />
      <About />
      <Philosophy />
      <Products />
      <Science />
      <Testimonials />
      <Contact />
      {/* Footer rendered globally in App */}
    </div>
  )
}

export default Home


