import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import logo from '../assets/logo.png'
import viscophiImage from '../assets/1. ViscoPhi şırınga.jpg'
import visocuImage from '../assets/2. VisOcu şırınga.jpg'
import philexirImage from '../assets/3. PhilExir şırınga.jpg'

const Products = () => {

  const products = [
    {
      title: 'ViscoPhi™',
      category: 'Intra-articular Solutions',
      description: 'ViscoPhi™ is a sterile ready-to-use intra-articular viscoelastic implant gel solution to treat human joint disorders such as osteoarthritis and it comes in a prefilled, ready to use syringe.',
      features: [
        'Linear bond, Crosslinked and Combined Hyaluronic Acid',
        'Non-animal source',
        'High viscosity and molecular weight'
      ],
      image: viscophiImage,
      logo: logo
    },
    {
      title: 'VisOcu™',
      category: 'Intra-ocular Solutions',
      description: 'VisOcu™ is a sterile, cohesive, isotonic, pyrogen-free, and viscoelastic preparation of highly purified HA and HPMC.',
      features: [
        '8 different dosages',
        'Lubrication, support and protection of ocular tissues',
        'High molecular weight and viscosity'
      ],
      image: visocuImage,
      logo: logo
    },
    {
      title: 'PhilExir™',
      category: 'Dermal Fillers',
      description: 'PhilExir™ is a cutting-edge injectable designed to revitalize facial contours and awaken skin radiance, helping you look refreshed, lifted, and beautifully renewed.',
      features: [
        'Linear and Crosslinked formulations',
        'Fuller facial features',
        'Bright and youthful appearance',
        'Challenge fatigue and aging with PhilExir'
      ],
      image: philexirImage,
      logo: logo
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
            Our portfolio spans cutting-edge medical solutions, premium bioactive compounds, and revolutionary research platforms that push the boundaries of biotechnology.
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
              {/* Product Image */}
              <div className="relative h-48 rounded-2xl mb-6 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-300`}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-300"></div>
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
                <Link
                  to={index === 0 ? '/products/intraarticular' : index === 1 ? '/products/intraocular' : '/products/dermal-fillers'}
                  className="group/btn w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-6 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </Link>
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