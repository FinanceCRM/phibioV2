import React from 'react'
import { motion } from 'framer-motion'
import { FileDown, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ProductDetail = ({
  title,
  description,
  visuals = [],
  highlights = [],
  catalogUrl,
}) => {
  const { t } = useTranslation()
  
  return (
    <section className="pt-24 pb-20 bg-gradient-to-b from-beige-50 to-white min-h-screen">
      <div className="relative">
        <div className="absolute inset-0 -z-10 h-56 bg-gradient-to-r from-primary-50 via-primary-100 to-gold-50" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back */}
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-primary-700 hover:text-primary-800 font-inter">
            <ArrowLeft className="h-4 w-4 mr-2" /> {t('productDetail.backToHome') || 'Back to Home'}
          </Link>
        </div>

        {/* Header */}
        <div className="bg-white/70 backdrop-blur-sm border border-primary-100 rounded-3xl p-8 shadow-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-4">{title}</h1>
            <p className="text-lg text-gray-700 font-inter max-w-3xl">{description}</p>
            {highlights && highlights.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((h, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-inter bg-primary-50 text-primary-700 border border-primary-100"
                  >
                    {h}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        </div>

        {/* Visuals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {visuals.map((v, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="group bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-56 bg-gray-100 relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={v.src} alt={v.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-playfair font-semibold text-primary-900">{v.name}</h3>
                <p className="text-gray-700 font-inter leading-relaxed">{v.description}</p>
                {v.badges && v.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {v.badges.map((b, bi) => (
                      <span key={bi} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                        {b}
                      </span>
                    ))}
                  </div>
                )}
                {v.catalogUrl && (
                  <div className="pt-2">
                    <a
                      href={v.catalogUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-primary-700 hover:text-primary-800 font-inter font-medium"
                    >
                      <FileDown className="h-4 w-4" />
                      <span>{t('productDetail.downloadCatalog') || 'Download Catalog'}</span>
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Page-level Catalog */}
        {catalogUrl && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <a
              href={catalogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-2xl font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <FileDown className="h-5 w-5" />
              <span>{t('productDetail.downloadFullCatalog') || 'Download Full Catalog (PDF)'}</span>
            </a>
            <div className="text-sm text-gray-500 mt-3">Upload your PDF to `public/catalogs/` and keep the same file name.</div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default ProductDetail


