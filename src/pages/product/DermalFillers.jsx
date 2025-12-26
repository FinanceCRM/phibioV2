import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import img1 from '../../assets/Visocu.jpeg'
import img2 from '../../assets/ViscoPhi-intro.jpeg'
import img3 from '../../assets/slide.jpeg'
import { useTranslation } from 'react-i18next'

const DermalFillers = () => {
  const { t } = useTranslation()

  return (
    <>
      <ProductDetail
        title={t('dermalFillers.title')}
        description={t('dermalFillers.description')}
        highlights={t('dermalFillers.highlights', { returnObjects: true })}
        visuals={[]}
      />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white/70 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 shadow-sm text-center">
          <h2 className="text-2xl md:text-3xl font-playfair font-bold text-primary-900 mb-4">PhilExir</h2>
          <p className="text-lg text-gray-700 font-inter">Coming soon in 2026</p>
        </div>
      </section>
    </>
  )
}

export default DermalFillers


