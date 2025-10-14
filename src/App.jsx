import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Intraocular from './pages/product/Intraocular'
import Intraarticular from './pages/product/Intraarticular'
import DermalFillers from './pages/product/DermalFillers'

function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/intraocular" element={<Intraocular />} />
        <Route path="/products/intraarticular" element={<Intraarticular />} />
        <Route path="/products/dermal-fillers" element={<DermalFillers />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
