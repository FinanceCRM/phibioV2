import React from 'react'
import { motion } from 'framer-motion'
import { Beaker, Dna, Atom, TrendingUp } from 'lucide-react'

const Science = () => {
  const research = [
    {
      icon: Dna,
      title: 'Molecular Biology',
      description: 'Advanced genetic engineering and protein synthesis for therapeutic applications.',
      progress: 85
    },
    {
      icon: Beaker,
      title: 'Chemical Analysis',
      description: 'Cutting-edge spectroscopy and chromatography for compound identification.',
      progress: 92
    },
    {
      icon: Atom,
      title: 'Nanotechnology',
      description: 'Nano-scale delivery systems for enhanced bioavailability and targeting.',
      progress: 78
    },
    {
      icon: TrendingUp,
      title: 'Data Science',
      description: 'AI-driven analysis of biological patterns and predictive modeling.',
      progress: 88
    }
  ]

  return (
    <section id="science" className="py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
            The Science Behind
            <span className="gradient-text"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Our multidisciplinary research approach combines traditional botanical knowledge 
            with cutting-edge technology to unlock nature's most powerful compounds.
          </p>
        </motion.div>

        {/* Research Areas */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {research.map((area, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <area.icon className="h-6 w-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-playfair font-semibold text-primary-900 mb-2">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 font-inter mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-500 font-inter">Research Progress</span>
                      <span className="text-primary-600 font-inter font-semibold">{area.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${area.progress}%` }}
                        transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-r from-primary-600 to-gold-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lab Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 border border-white rounded-full"></div>
            <div className="absolute top-20 right-20 w-24 h-24 border border-white rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-16 h-16 border border-white rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Our Research Facilities
              </h3>
              <p className="text-xl text-primary-100 max-w-2xl mx-auto">
                State-of-the-art laboratories equipped with the latest technology 
                for breakthrough discoveries in biotechnology.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { number: '12', label: 'Research Labs' },
                { number: '50K+', label: 'Compounds Analyzed' },
                { number: '200+', label: 'Research Papers' },
                { number: '15+', label: 'Patents Filed' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-playfair font-bold text-gold-400">
                    {stat.number}
                  </div>
                  <div className="text-primary-100 font-inter">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
            Explore Our Research
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Science 