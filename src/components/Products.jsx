import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Zap, Droplets, Flower } from 'lucide-react'

const Products = () => {
  const products = [
    {
      icon: Droplets,
      title: 'BioExtract Pro',
      category: 'Laboratory Solutions',
      description: 'Advanced plant extraction systems for pharmaceutical and cosmetic applications.',
      features: ['99.9% purity', 'Sustainable process', 'Scalable technology'],
      image: 'from-blue-100 to-primary-100'
    },
    {
      icon: Flower,
      title: 'NatureTech Compounds',
      category: 'Active Ingredients',
      description: 'Premium bioactive compounds derived from rare botanical sources.',
      features: ['Clinically tested', 'Zero synthetic additives', 'Traceable sourcing'],
      image: 'from-primary-100 to-green-100'
    },
    {
      icon: Zap,
      title: 'BioSynth Platform',
      category: 'Research Tools',
      description: 'Cutting-edge biosynthesis platform for novel compound development.',
      features: ['AI-driven discovery', 'Rapid prototyping', 'Patent-pending'],
      image: 'from-gold-100 to-yellow-100'
    }
  ]

  return (
    <section id="products" className="py-24 bg-gradient-to-b from-beige-50 to-white">
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
            Innovative
            <span className="gradient-text"> Products</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            Our portfolio spans cutting-edge laboratory solutions, premium bioactive compounds, 
            and revolutionary research platforms that push the boundaries of biotechnology.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 card-hover"
            >
              {/* Product Image/Icon */}
              <div className={`relative h-48 rounded-2xl mb-6 bg-gradient-to-br ${product.image} flex items-center justify-center overflow-hidden`}>
                <div className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <product.icon className="h-8 w-8 text-primary-600" />
                </div>
                
                {/* Floating particles */}
                <div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/40 rounded-full"
                      style={{
                        left: `${20 + Math.random() * 60}%`,
                        top: `${20 + Math.random() * 60}%`,
                      }}
                      animate={{
                        y: [0, -10, 0],
                        opacity: [0.4, 0.8, 0.4],
                      }}
                      transition={{
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-inter font-medium text-primary-600 mb-1">
                    {product.category}
                  </div>
                  <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-3">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 font-inter leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-inter">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="bg-white text-primary-700 px-8 py-4 rounded-full font-inter font-semibold border border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 shadow-lg hover:shadow-xl">
            View Complete Product Catalog
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Products 