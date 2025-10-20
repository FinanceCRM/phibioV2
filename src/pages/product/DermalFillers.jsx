import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import img1 from '../../assets/Visocu.jpeg'
import img2 from '../../assets/ViscoPhi-intro.jpeg'
import img3 from '../../assets/slide.jpeg'
import { useTranslation } from 'react-i18next'

const DermalFillers = () => {
  const { t } = useTranslation()
  
  return (
    <ProductDetail
      title={t('dermalFillers.title')}
      description={t('dermalFillers.description')}
      highlights={t('dermalFillers.highlights', { returnObjects: true })}
      visuals={[]}
    />
  )
}

export default DermalFillers


