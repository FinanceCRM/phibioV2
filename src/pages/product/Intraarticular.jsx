import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import img1 from '../../assets/Visocu.jpeg'
import img2 from '../../assets/slide.jpeg'
import img3 from '../../assets/ViscoPhi-intro.jpeg'

const Intraarticular = () => {
  return (
    <ProductDetail
      title="Intraarticular Viscoelastics"
      description="Advanced joint injection solutions designed to improve mobility and reduce discomfort with biocompatible formulations."
      highlights={["Smooth injection", "Formulation stability", "Patient comfort"]}
      visuals={[
        { src: img1, name: 'Joint Smooth', description: 'Optimized viscosity for smooth intraarticular injection.', badges: ['Low Force'], catalogUrl: '/catalogs/joint-smooth.pdf' },
        { src: img2, name: 'Stability Max', description: 'Formulation stability to support sustained joint function.', badges: ['Stable'], catalogUrl: '/catalogs/stability-max.pdf' },
        { src: img3, name: 'Comfort Plus', description: 'Engineered for reduced injection force and patient comfort.', badges: ['Comfort'], catalogUrl: '/catalogs/comfort-plus.pdf' },
      ]}
      catalogUrl="/catalogs/intraarticular-viscoelastics.pdf"
    />
  )
}

export default Intraarticular


