import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Microscope, Factory, FileText, TrendingUp, Droplet, Shield, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const ContractManufacturing = () => {
  const capabilities = [
    {
      title: 'Custom Formulation & Filling',
      description: 'Tailored formulation development and precise filling operations for your specific product requirements.',
      icon: Droplet
    },
    {
      title: 'Aseptic Processing & Sterile Manufacturing',
      description: 'State-of-the-art aseptic processing capabilities with validated sterile manufacturing protocols.',
      icon: Shield
    },
    {
      title: 'Quality Control & Regulatory Documentation',
      description: 'Comprehensive QC testing and complete regulatory documentation for submission readiness.',
      icon: FileText
    },
    {
      title: 'Scalable Production Solutions',
      description: 'Flexible manufacturing from pilot batches to commercial scale with consistent quality.',
      icon: TrendingUp
    }
  ]

  const advantages = [
    'GMP-compliant manufacturing facilities',
    'Flexible batch sizes (pilot to commercial)',
    'Rapid turnaround times',
    'Full regulatory support',
    'Cost-effective production',
    'Quality assurance at every step',
    'Technology transfer expertise',
    'Supply chain management'
  ]

  const productTypes = [
    { name: 'Biotech Products', icon: Microscope },
    { name: 'Pharmaceutical Reagents', icon: Droplet },
    { name: 'Diagnostic Consumables', icon: FileText },
    { name: 'Medical Devices', icon: Shield }
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-700 to-gold-800 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(14)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [0, -35, 0],
                rotate: [0, 180, 360],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <Factory className="w-8 h-8 text-white" />
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
              <Microscope className="h-10 w-10 text-gold-400" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              Contract Manufacturing
            </h1>
            <p className="text-xl md:text-2xl text-beige-100 max-w-4xl mx-auto font-inter leading-relaxed">
              Scale production without compromising on quality or compliance
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
              Comprehensive Manufacturing Services
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter leading-relaxed text-center">
              Our contract manufacturing services allow you to scale production without compromising on quality or compliance. We specialize in the GMP-compliant manufacturing of biotech products, reagents, and consumables — with flexible batch sizes, rapid turnaround times, and full regulatory support. Partner with us to bring your product from bench to market efficiently and reliably.
            </p>
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center mb-6">
                  <capability.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary-900 mb-4">
                  {capability.title}
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Product Types */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900 mb-12 text-center">
              Product Categories We Manufacture
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {productTypes.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-gold-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <product.icon className="h-7 w-7 text-primary-600" />
                  </div>
                  <h4 className="font-playfair font-semibold text-primary-900 text-lg">
                    {product.name}
                  </h4>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Advantages Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-3xl p-12 shadow-lg"
          >
            <div className="flex items-center justify-center mb-8">
              <TrendingUp className="h-12 w-12 text-primary-600 mr-4" />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900">
                Why Choose Us
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-inter">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900 mb-6">
              From Bench to Market
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter leading-relaxed">
              Our streamlined manufacturing process ensures your product reaches the market efficiently:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss requirements' },
              { step: '02', title: 'Development', desc: 'Optimize formulation' },
              { step: '03', title: 'Pilot Batch', desc: 'Validate process' },
              { step: '04', title: 'Scale-Up', desc: 'Commercial production' },
              { step: '05', title: 'Delivery', desc: 'Quality assured product' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-gold-600 text-white text-xl font-playfair font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-lg font-playfair font-semibold text-primary-900 mb-2">
                  {phase.title}
                </h4>
                <p className="text-gray-600 font-inter text-sm">
                  {phase.desc}
                </p>
                {index < 4 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary-300 to-gold-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 via-primary-700 to-gold-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready to Scale Your Production?
            </h2>
            <p className="text-xl text-beige-100 max-w-3xl mx-auto font-inter leading-relaxed mb-8">
              Partner with us to bring your biotech product from concept to commercial success.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-900 px-8 py-4 rounded-full font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <span>Discuss Your Project</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default ContractManufacturing

