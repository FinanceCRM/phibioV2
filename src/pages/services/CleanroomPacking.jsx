import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Package, Shield, FileCheck, Layers, Lock, ClipboardCheck, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const CleanroomPacking = () => {
  const features = [
    {
      title: 'ISO-Certified Cleanroom Environments',
      description: 'All packing operations performed under strict ISO-classified conditions to ensure contamination-free results.',
      icon: Shield
    },
    {
      title: 'Tamper-Evident & Sterile Packaging',
      description: 'Multiple packaging formats including tamper-evident seals and sterile barrier systems.',
      icon: Lock
    },
    {
      title: 'Lot Traceability & Documentation',
      description: 'Complete chain of custody with batch tracking and comprehensive quality documentation.',
      icon: FileCheck
    },
    {
      title: 'Scalable Solutions',
      description: 'Flexible capacity to handle small pilot batches through to large-scale commercial production.',
      icon: Layers
    }
  ]

  const applications = [
    'Biologics and biosimilars',
    'Medical devices and implants',
    'Diagnostic reagents',
    'Pharmaceutical compounds',
    'Sterile consumables',
    'Research materials'
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gold-900 via-gold-800 to-primary-900 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Packages */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [0, -40, 0],
                rotate: [0, 360],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            >
              <Package className="w-8 h-8 text-white" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <Link to="/" className="inline-flex items-center text-white/80 hover:text-white font-inter mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4 mr-2" /> Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Package className="h-10 w-10 text-gold-400" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              Cleanroom Packing
            </h1>
            <p className="text-xl md:text-2xl text-beige-100 max-w-4xl mx-auto font-inter leading-relaxed">
              Professional cleanroom packaging solutions that ensure your sensitive materials are protected from contamination
            </p>
          </motion.div>
        </div>

        {/* Decorative Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-gradient-to-b from-white to-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6 text-center">
              Sterile Packaging Excellence
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter leading-relaxed text-center">
              We offer professional cleanroom packing solutions that ensure your sensitive materials are protected from contamination and meet the highest quality standards. Operating under strict ISO-classified conditions, our team handles biologics, medical devices, reagents, and more — providing secure, compliant packaging tailored to your product's specifications.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gold-100 to-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="h-8 w-8 text-gold-600" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Applications Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-gold-50 to-primary-50 rounded-3xl p-12 shadow-lg"
          >
            <div className="flex items-center justify-center mb-8">
              <ClipboardCheck className="h-12 w-12 text-gold-600 mr-4" />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900">
                Product Applications
              </h3>
            </div>
            <p className="text-gray-700 font-inter text-lg text-center mb-8 max-w-3xl mx-auto">
              Our cleanroom packing services are suitable for a wide range of sensitive products and materials:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {applications.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-gold-600 flex-shrink-0" />
                  <span className="text-gray-700 font-inter">{app}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gold-100 to-primary-100 rounded-full mb-6">
              <Shield className="h-12 w-12 text-gold-600" />
            </div>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900 mb-6">
              Compliance & Quality Assurance
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter leading-relaxed">
              All our cleanroom packing operations comply with international standards including ISO 14644, GMP, and FDA regulations. We maintain comprehensive documentation and validation protocols to ensure your products meet regulatory requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-gold-900 via-gold-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Need Sterile Packaging Solutions?
            </h2>
            <p className="text-xl text-beige-100 max-w-3xl mx-auto font-inter leading-relaxed mb-8">
              Contact us to discuss your cleanroom packing requirements and receive a customized solution.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-900 px-8 py-4 rounded-full font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <span>Get in Touch</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CleanroomPacking

