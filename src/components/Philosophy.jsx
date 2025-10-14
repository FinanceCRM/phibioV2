import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Shield, Heart, Globe, Leaf } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Philosophy = () => {
  const { t } = useTranslation()
  
  const principles = [
    {
      icon: Sparkles,
      title: t('philosophy.principles.innovation'),
      description: t('philosophy.principles.innovationDesc')
    },
    {
      icon: Shield,
      title: t('philosophy.principles.sustainability'),
      description: t('philosophy.principles.sustainabilityDesc')
    },
    {
      icon: Heart,
      title: t('philosophy.principles.wellbeing'),
      description: t('philosophy.principles.wellbeingDesc')
    },
    {
      icon: Globe,
      title: t('philosophy.principles.globalImpact'),
      description: t('philosophy.principles.globalImpactDesc')
    }
  ]

  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-primary-100 to-beige-100">
              {/* Placeholder for nature/scientist image */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-gold-600/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm">
                    <Leaf className="h-12 w-12 text-primary-700" />
                  </div>
                  <p className="text-primary-800 font-inter text-lg">
                    "{t('philosophy.quote')}"
                  </p>
                </div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute top-8 right-8 w-32 h-32 border border-white/30 rounded-full"></div>
              <div className="absolute bottom-8 left-8 w-24 h-24 border border-white/30 rounded-full"></div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6 leading-tight">
                {t('philosophy.title')}
                <br />
                <span className="gradient-text">{t('philosophy.subtitle')}</span>
              </h2>
              <p className="text-xl text-gray-600 font-inter leading-relaxed">
                {t('philosophy.description')}
              </p>
            </div>

            {/* Principles Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-xl bg-gradient-to-br from-primary-50 to-beige-50 hover:from-primary-100 hover:to-beige-100 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <principle.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-playfair font-semibold text-primary-900 mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-gray-700 font-inter">
                    {principle.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="pt-6">
              <button className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2">
                <span>{t('philosophy.exploreBtn')}</span>
                <div className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-200">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Philosophy 