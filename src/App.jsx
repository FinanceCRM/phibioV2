import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Intraocular from './pages/product/Intraocular'
import Intraarticular from './pages/product/Intraarticular'
import DermalFillers from './pages/product/DermalFillers'
import Publications from './pages/Publications'
import Career from './pages/Career'
import RDServices from './pages/services/RDServices'
import CleanroomPacking from './pages/services/CleanroomPacking'
import LaboratorySolutions from './pages/services/LaboratorySolutions'
import ContractManufacturing from './pages/services/ContractManufacturing'
import ContactPage from './pages/ContactPage'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Handle smooth scrolling for hash links
    const handleHashScroll = () => {
      const hash = window.location.hash
      if (hash) {
        const element = document.querySelector(hash)
        if (element) {
          const navbarHeight = 120 // Account for fixed navbar
          const elementPosition = element.offsetTop - navbarHeight
          window.scrollTo({
            top: elementPosition,
            behavior: 'smooth'
          })
        }
      }
    }

    // Handle initial page load with hash
    handleHashScroll()

    // Handle hash changes
    window.addEventListener('hashchange', handleHashScroll)

    return () => {
      window.removeEventListener('hashchange', handleHashScroll)
    }
  }, [])

  // Scroll to top on route change
  useEffect(() => {
    // Only scroll to top if there's no hash in the URL
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        behavior: 'instant' // Use instant for immediate scroll on page change
      })
    }
  }, [location.pathname])

  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/intraocular" element={<Intraocular />} />
        <Route path="/products/intraarticular" element={<Intraarticular />} />
        <Route path="/products/dermal-fillers" element={<DermalFillers />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services/rd-services" element={<RDServices />} />
        <Route path="/services/cleanroom-packing" element={<CleanroomPacking />} />
        <Route path="/services/laboratory-solutions" element={<LaboratorySolutions />} />
        <Route path="/services/contract-manufacturing" element={<ContractManufacturing />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
