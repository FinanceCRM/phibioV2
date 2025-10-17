import React from 'react'
import { Routes, Route } from 'react-router-dom'
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

function App() {
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
      </Routes>
      <Footer />
    </div>
  )
}

export default App
