import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Image, Package, Calendar, ChevronDown, ChevronUp } from 'lucide-react'
import { useTranslation } from 'react-i18next'

// Import Product Packaging Images
import viscophiKutu from '../assets/ViscoPhi kutu.jpg'
import visocuHpmcKutu from '../assets/visocu hpmc kutu.jpg'
import visocuAcikKutu from '../assets/visocu açık kutu.jpg'
import visocuHpmcAcikKutu from '../assets/visocu hpmc açık kutu.jpg'
import visocuHpmcCokluKutu from '../assets/visocu hpmc çoklu kutu.jpg'
import visocuHaCokluKutu from '../assets/visocu ha çoklu kutu.jpg'
import viscogeHpmcKutu from '../assets/viscoge hpmc kutu.jpg'
import vspKatalogKutu from '../assets/vsp katalog kutu.JPG'
import vspKatalogKutu2 from '../assets/vsp katalog kutu 2.JPG'

// Import Other Images
import sicot2025 from '../assets/SICOT 2025 Madrid.JPG'
import event1 from '../assets/event_1.jpg'
import kalem from '../assets/kalem.JPG'

const MediaPage = () => {
  const { t } = useTranslation()
  const [expandedCategories, setExpandedCategories] = useState(['packaging', 'events', 'other'])

  const productPackaging = [
    {
      title: 'ViscoPhi™ Packaging',
      image: viscophiKutu,
      description: 'ViscoPhi product packaging'
    },
    {
      title: 'VisOcu HPMC Packaging',
      image: visocuHpmcKutu,
      description: 'VisOcu HPMC product packaging'
    },
    {
      title: 'VisOcu Open Box',
      image: visocuAcikKutu,
      description: 'VisOcu product open box view'
    },
    {
      title: 'VisOcu HPMC Open Box',
      image: visocuHpmcAcikKutu,
      description: 'VisOcu HPMC open box view'
    },
    {
      title: 'VisOcu HPMC Multi-pack',
      image: visocuHpmcCokluKutu,
      description: 'VisOcu HPMC multiple unit packaging'
    },
    {
      title: 'VisOcu HA Multi-pack',
      image: visocuHaCokluKutu,
      description: 'VisOcu HA multiple unit packaging'
    },
    {
      title: 'ViscOge HPMC Packaging',
      image: viscogeHpmcKutu,
      description: 'ViscOge HPMC product packaging'
    },
    {
      title: 'VSP Catalog Box',
      image: vspKatalogKutu,
      description: 'VSP catalog packaging'
    },
    {
      title: 'VSP Catalog Box 2',
      image: vspKatalogKutu2,
      description: 'VSP catalog packaging alternative view'
    }
  ]

  const events = [
    {
      title: 'SICOT 2025 Madrid',
      image: sicot2025,
      description: 'International Society of Orthopaedic Surgery and Traumatology Congress 2025'
    },
    {
      title: 'Phibio WHX Dubai',
      image: event1,
      description: 'Phibio WHX at Dubai Fair'
    }
  ]

  const otherImages = [
    {
      title: 'Product Detail',
      image: kalem,
      description: 'Product detail view'
    }
  ]

  const categories = [
    {
      id: 'packaging',
      title: 'Product Packaging',
      icon: Package,
      items: productPackaging,
      color: 'from-primary-100 to-gold-100'
    },
    {
      id: 'events',
      title: 'Events & Conferences',
      icon: Calendar,
      items: events,
      color: 'from-green-100 to-emerald-100'
    },
    {
      id: 'other',
      title: 'Gallery',
      icon: Image,
      items: otherImages,
      color: 'from-purple-100 to-pink-100'
    }
  ]

  const toggleCategory = (categoryId) => {
    setExpandedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-beige-50 to-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-playfair font-bold text-primary-900 mb-6">
            Media
            <span className="gradient-text"> Center</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Explore our product packaging, events, and gallery. Discover our innovative biotechnology solutions.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="space-y-6">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white rounded-3xl shadow-lg overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <category.icon className="h-6 w-6 text-primary-700" />
                  </div>
                  <div className="text-left">
                    <h2 className="text-2xl font-playfair font-bold text-primary-900">
                      {category.title}
                    </h2>
                    <p className="text-sm text-gray-600 font-inter">
                      {category.items.length} {category.items.length === 1 ? 'item' : 'items'}
                    </p>
                  </div>
                </div>
                {expandedCategories.includes(category.id) ? (
                  <ChevronUp className="h-6 w-6 text-primary-600" />
                ) : (
                  <ChevronDown className="h-6 w-6 text-primary-600" />
                )}
              </button>

              {/* Category Content */}
              {expandedCategories.includes(category.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-6 pt-0"
                >
                  {/* Image Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.items.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                      >
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                            <h3 className="text-white font-playfair font-bold text-lg mb-1">
                              {item.title}
                            </h3>
                            <p className="text-white/90 text-sm font-inter">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        <div className="p-4">
                          <h3 className="font-playfair font-bold text-lg text-primary-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-600 font-inter leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 font-inter mb-6">
            Need more information or have questions about our products?
          </p>
          <a
            href="/#contact"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-8 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default MediaPage

