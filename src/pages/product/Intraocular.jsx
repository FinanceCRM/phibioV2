import React from 'react'
import ProductDetail from '../../components/ProductDetail'
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
        { src: visco3, name: t('intraocular.products.visocuHMPC'), description: t('intraocular.products.visocuHMPCDesc'), badges: [t('intraocular.badges.cohesive')] },
        { src: visco2, name: t('intraocular.products.visocu'), description: t('intraocular.products.visocuDesc'), badges: [t('intraocular.badges.balanced')] },
      ]}
    />
  )
}

export default Intraocular


