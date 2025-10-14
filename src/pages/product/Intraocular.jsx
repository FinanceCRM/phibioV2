import React from 'react'
import ProductDetail from '../../components/ProductDetail'
import visco1 from '../../assets/ViscoPhi-intro.jpeg'
import visco2 from '../../assets/visocu-hmpc.jpeg'
import visco3 from '../../assets/Visocu.jpeg'
import { useTranslation } from 'react-i18next'

const Intraocular = () => {
  const { t } = useTranslation()
  
  return (
    <ProductDetail
      title={t('intraocular.title')}
      description={t('intraocular.description')}
      highlights={t('intraocular.highlights', { returnObjects: true })}
      visuals={[
        { src: visco1, name: t('intraocular.products.viscoPhiIntro'), description: t('intraocular.products.viscoPhiIntroDesc'), badges: [t('intraocular.badges.highClarity'), t('intraocular.badges.phaco')], catalogUrl: '/catalogs/viscophi-intro.pdf' },
        { src: visco2, name: t('intraocular.products.visocuHMPC'), description: t('intraocular.products.visocuHMPCDesc'), badges: [t('intraocular.badges.cohesive')], catalogUrl: '/catalogs/visocu-hmpc.pdf' },
        { src: visco3, name: t('intraocular.products.visocu'), description: t('intraocular.products.visocuDesc'), badges: [t('intraocular.badges.balanced')], catalogUrl: '/catalogs/visocu.pdf' },
      ]}
      catalogUrl="/catalogs/intraocular-viscoelastics.pdf"
    />
  )
}

export default Intraocular


