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
    <section id="about" className="py-24 bg-gradient-to-b from-white to-luxury-cream">
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

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 pt-6">
              <button className="bg-gradient-to-r from-primary-600 via-primary-700 to-gold-600 text-white px-8 py-3 rounded-2xl font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
              <button className="text-primary-700 font-inter font-semibold hover:text-primary-800 transition-colors duration-300 underline underline-offset-4 hover:underline-offset-8">
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
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg hover:-translate-y-2 transition-all duration-300 text-center group border border-luxury-platinum/20"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-glow-green transition-all duration-300">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="text-3xl font-playfair font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-inter font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-24 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow-green transition-all duration-300">
              <Leaf className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-playfair font-semibold text-primary-900 mb-3">
              Sustainable Practices
            </h4>
            <p className="text-gray-600 font-inter leading-relaxed">
              Every process is designed with environmental responsibility at its core.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-glow-gold transition-all duration-300">
              <Microscope className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-playfair font-semibold text-primary-900 mb-3">
              Advanced Research
            </h4>
            <p className="text-gray-600 font-inter leading-relaxed">
              Cutting-edge laboratory facilities and state-of-the-art equipment.
            </p>
          </div>

          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-gold-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:shadow-luxury transition-all duration-300">
              <Award className="h-10 w-10 text-white" />
            </div>
            <h4 className="text-xl font-playfair font-semibold text-primary-900 mb-3">
              Quality Excellence
            </h4>
            <p className="text-gray-600 font-inter leading-relaxed">
              Award-winning commitment to the highest standards of quality and safety.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 