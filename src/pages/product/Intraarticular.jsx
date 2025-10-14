import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import img1 from '../../assets/Visocu.jpeg'
import img2 from '../../assets/slide.jpeg'
import img3 from '../../assets/ViscoPhi-intro.jpeg'
import { useTranslation } from 'react-i18next'

const Intraarticular = () => {
  const { t } = useTranslation()
  
  return (
    <ProductDetail
      title={t('intraarticular.title')}
      description={t('intraarticular.description')}
      highlights={t('intraarticular.highlights', { returnObjects: true })}
      visuals={[
        { src: img1, name: t('intraarticular.products.jointSmooth'), description: t('intraarticular.products.jointSmoothDesc'), badges: [t('intraarticular.badges.lowForce')], catalogUrl: '/catalogs/joint-smooth.pdf' },
        { src: img2, name: t('intraarticular.products.stabilityMax'), description: t('intraarticular.products.stabilityMaxDesc'), badges: [t('intraarticular.badges.stable')], catalogUrl: '/catalogs/stability-max.pdf' },
        { src: img3, name: t('intraarticular.products.comfortPlus'), description: t('intraarticular.products.comfortPlusDesc'), badges: [t('intraarticular.badges.comfort')], catalogUrl: '/catalogs/comfort-plus.pdf' },
      ]}
      catalogUrl="/catalogs/intraarticular-viscoelastics.pdf"
    />
  )
}

export default Intraarticular


