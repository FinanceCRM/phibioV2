import React from 'react'
import { motion as Motion } from 'framer-motion'
import { Play, Download, FileText, Image, Video } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Media = () => {
  const { t } = useTranslation()
  
  const mediaItems = [
    {
      type: 'video',
      title: 'Company Overview',
      description: 'Learn about our innovative biotechnology solutions',
      icon: Video,
      href: '#',
      thumbnail: '/src/assets/slide.jpeg'
    },
    {
      type: 'document',
      title: 'Product Catalog',
      description: 'Download our comprehensive product catalog',
      icon: FileText,
      href: '#',
      thumbnail: '/src/assets/logo.png'
    },
    {
      type: 'image',
      title: 'Gallery',
      description: 'View our facilities and products',
      icon: Image,
      href: '#',
      thumbnail: '/src/assets/ViscoPhi-intro.jpeg'
    }
  ]

  return (
    <section id="media" className="py-24 bg-gradient-to-b from-luxury-cream to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
            Media
            <span className="gradient-text"> Center</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Explore our multimedia content, download resources, and discover more about our innovative biotechnology solutions.
          </p>
        </Motion.div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <Motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Media Thumbnail */}
              <div className="relative h-48 rounded-2xl mb-6 bg-gradient-to-br from-primary-100 to-gold-100 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.thumbnail} 
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-8 w-8 text-primary-600" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* CTA */}
                <a
                  href={item.href}
                  className="group/btn w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>{item.type === 'video' ? 'Watch' : item.type === 'document' ? 'Download' : 'View'}</span>
                  {item.type === 'video' ? (
                    <Play className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  ) : item.type === 'document' ? (
                    <Download className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  ) : (
                    <Image className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  )}
                </a>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-white text-primary-700 px-8 py-4 rounded-full font-inter font-semibold border border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 shadow-lg hover:shadow-xl">
            View All Media
          </button>
        </Motion.div>
      </div>
    </section>
  )
}

export default Media

