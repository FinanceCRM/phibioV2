import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import visco1 from '../../assets/ViscoPhi-intro.jpeg'
import visco2 from '../../assets/visocu-hmpc.jpeg'
import visco3 from '../../assets/Visocu.jpeg'

const Intraocular = () => {
  return (
    <ProductDetail
      title="Intraocular Viscoelastics"
      description="Premium ophthalmic viscoelastic solutions engineered for optimal surgical control and ocular protection."
      highlights={["High clarity", "Cohesive/Rheology options", "Ocular protection"]}
      visuals={[
        { src: visco1, name: 'ViscoPhi Intro', description: 'High-clarity viscoelastic optimized for phacoemulsification.', badges: ['High Clarity', 'Phaco'], catalogUrl: '/catalogs/viscophi-intro.pdf' },
        { src: visco2, name: 'Visocu HMPC', description: 'Enhanced cohesion for stable anterior chamber maintenance.', badges: ['Cohesive'], catalogUrl: '/catalogs/visocu-hmpc.pdf' },
        { src: visco3, name: 'Visocu', description: 'Balanced viscosity profile for versatile ophthalmic procedures.', badges: ['Balanced'], catalogUrl: '/catalogs/visocu.pdf' },
      ]}
      catalogUrl="/catalogs/intraocular-viscoelastics.pdf"
    />
  )
}

export default Intraocular


