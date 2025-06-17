import React from 'react'
import { motion } from 'framer-motion'
import { Microscope, Leaf, Award, Users } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Microscope, number: '15+', label: 'Years of Research' },
    { icon: Leaf, number: '500+', label: 'Plant Extracts Studied' },
    { icon: Award, number: '25+', label: 'Awards Won' },
    { icon: Users, number: '100+', label: 'Scientists & Researchers' },
  ]

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-beige-50">
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
            Where Nature Meets
            <span className="gradient-text"> Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            At Phibio, we bridge the gap between nature's wisdom and cutting-edge biotechnology,
            creating sustainable solutions that honor both scientific excellence and environmental responsibility.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-playfair font-semibold text-primary-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                We harness the extraordinary power of natural compounds to develop breakthrough 
                biotechnology solutions. Our research focuses on sustainable extraction methods 
                and innovative applications that benefit both human health and our planet.
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-playfair font-semibold text-primary-900 mb-4">
                Our Approach
              </h3>
              <p className="text-lg text-gray-700 font-inter leading-relaxed">
                Through advanced molecular analysis and bio-mimetic processes, we unlock 
                nature's secrets while maintaining the highest standards of environmental 
                stewardship. Every product we develop represents years of meticulous research 
                and unwavering commitment to quality.
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <button className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-3 rounded-full font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105">
                Learn More
              </button>
              <button className="text-primary-700 font-inter font-semibold hover:text-primary-800 transition-colors duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center card-hover"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-gold-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-playfair font-bold text-primary-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-inter font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 