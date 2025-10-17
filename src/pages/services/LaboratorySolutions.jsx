import React from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Building2, Wrench, ClipboardCheck, Settings, Lightbulb, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const LaboratorySolutions = () => {
  const services = [
    {
      title: 'Cleanroom & Lab Design Consulting',
      description: 'Expert consultation for optimal layout, workflow, and compliance with GMP and ISO standards.',
      icon: Lightbulb
    },
    {
      title: 'Equipment Selection & Installation',
      description: 'Comprehensive support in selecting, sourcing, and installing specialized laboratory equipment.',
      icon: Settings
    },
    {
      title: 'Validation & Qualification Services',
      description: 'Complete IQ, OQ, and PQ protocols to ensure your facility meets regulatory requirements.',
      icon: ClipboardCheck
    },
    {
      title: 'Ongoing Maintenance & Compliance',
      description: 'Regular maintenance programs and compliance audits to keep your facility operational.',
      icon: Wrench
    }
  ]

  const capabilities = [
    'ISO 5-8 cleanroom design and construction',
    'HVAC and environmental control systems',
    'Cleanroom qualification and validation',
    'Laboratory information management systems (LIMS)',
    'Equipment calibration and maintenance',
    'Personnel training and certification',
    'Regulatory compliance auditing',
    'Energy-efficient facility solutions'
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-gold-900 to-primary-800 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-1/4 w-[550px] h-[550px] bg-white/5 rounded-full blur-3xl"></div>
        </div>

        {/* Floating Buildings */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [0, -25, 0],
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.25, 0.1]
              }}
              transition={{
                duration: 7 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            >
              <Building2 className="w-10 h-10 text-white" />
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
              <Building2 className="h-10 w-10 text-gold-400" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              Cleanroom & Laboratory Solutions
            </h1>
            <p className="text-xl md:text-2xl text-beige-100 max-w-4xl mx-auto font-inter leading-relaxed">
              Integrated turnkey solutions from design to implementation for biotech, pharmaceutical, and research facilities
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
              Complete Facility Solutions
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto font-inter leading-relaxed text-center">
              From design to implementation, we provide integrated cleanroom and laboratory solutions for biotech, pharmaceutical, and research facilities. Whether you're building a new lab or upgrading an existing one, our experts deliver turnkey environments that meet GMP and ISO standards — with a focus on operational efficiency, compliance, and safety.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-700 font-inter leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Capabilities Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-3xl p-12 shadow-lg"
          >
            <div className="flex items-center justify-center mb-8">
              <Award className="h-12 w-12 text-primary-600 mr-4" />
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900">
                Our Capabilities
              </h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <CheckCircle className="h-6 w-6 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700 font-inter">{capability}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Approach
            </h3>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto font-inter leading-relaxed">
              We follow a systematic approach to ensure your laboratory or cleanroom facility meets all technical, regulatory, and operational requirements:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand requirements and constraints' },
              { step: '02', title: 'Design', desc: 'Create optimal layout and specifications' },
              { step: '03', title: 'Implementation', desc: 'Build, install, and validate' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and compliance' }
            ].map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-gold-600 text-white text-2xl font-playfair font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                  {phase.step}
                </div>
                <h4 className="text-xl font-playfair font-semibold text-primary-900 mb-2">
                  {phase.title}
                </h4>
                <p className="text-gray-600 font-inter">
                  {phase.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-900 via-gold-900 to-primary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
              Ready to Build Your Ideal Laboratory?
            </h2>
            <p className="text-xl text-beige-100 max-w-3xl mx-auto font-inter leading-relaxed mb-8">
              Let's discuss your laboratory or cleanroom project and create a customized solution.
            </p>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-2 bg-white text-primary-900 px-8 py-4 rounded-full font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
            >
              <span>Start Your Project</span>
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default LaboratorySolutions

