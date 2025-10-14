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
      visuals={[
        { src: img1, name: t('dermalFillers.products.contourLift'), description: t('dermalFillers.products.contourLiftDesc'), badges: [t('dermalFillers.badges.contour')], catalogUrl: '/catalogs/contour-lift.pdf' },
        { src: img2, name: t('dermalFillers.products.silkTouch'), description: t('dermalFillers.products.silkTouchDesc'), badges: [t('dermalFillers.badges.fineLines')], catalogUrl: '/catalogs/silk-touch.pdf' },
        { src: img3, name: t('dermalFillers.products.volumeRestore'), description: t('dermalFillers.products.volumeRestoreDesc'), badges: [t('dermalFillers.badges.volume')], catalogUrl: '/catalogs/volume-restore.pdf' },
      ]}
      catalogUrl="/catalogs/dermal-fillers.pdf"
    />
  )
}

export default DermalFillers


