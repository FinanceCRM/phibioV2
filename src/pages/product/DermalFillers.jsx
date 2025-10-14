import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import img1 from '../../assets/Visocu.jpeg'
import img2 from '../../assets/ViscoPhi-intro.jpeg'
import img3 from '../../assets/slide.jpeg'

const DermalFillers = () => {
  return (
    <ProductDetail
      title="Dermal Fillers & Cosmetics"
      description="Luxury aesthetic products focused on natural-looking enhancement, safety, and longevity."
      highlights={["Natural look", "Safety first", "Long-lasting"]}
      visuals={[
        { src: img1, name: 'Contour Lift', description: 'Precision contouring filler for cheeks and jawline.', badges: ['Contour'], catalogUrl: '/catalogs/contour-lift.pdf' },
        { src: img2, name: 'Silk Touch', description: 'Fine-line treatment with ultra-smooth flow characteristics.', badges: ['Fine Lines'], catalogUrl: '/catalogs/silk-touch.pdf' },
        { src: img3, name: 'Volume Restore', description: 'Long-lasting volumization with high biocompatibility.', badges: ['Volume'], catalogUrl: '/catalogs/volume-restore.pdf' },
      ]}
      catalogUrl="/catalogs/dermal-fillers.pdf"
    />
  )
}

export default DermalFillers


