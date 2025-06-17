import React from 'react'
import { motion } from 'framer-motion'
import { Leaf, Mail, Phone, MapPin, ArrowRight, Twitter, Linkedin, Youtube, Instagram } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Our Philosophy', href: '#philosophy' },
    { name: 'Products', href: '#products' },
    { name: 'Science', href: '#science' },
    { name: 'Contact', href: '#contact' },
  ]

  const products = [
    { name: 'BioExtract Pro', href: '#' },
    { name: 'NatureTech Compounds', href: '#' },
    { name: 'BioSynth Platform', href: '#' },
    { name: 'Research Tools', href: '#' },
    { name: 'Custom Solutions', href: '#' },
  ]

  const socialLinks = [
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Youtube, href: '#', name: 'YouTube' },
    { icon: Instagram, href: '#', name: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-b from-primary-900 to-primary-950 text-beige-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="border-b border-primary-800 py-16"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gold-400 mb-4">
                Stay Updated with Our Research
              </h3>
              <p className="text-lg text-beige-200 font-inter leading-relaxed">
                Subscribe to our newsletter for the latest breakthroughs in biotechnology, 
                research insights, and product updates.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 backdrop-blur-sm border border-primary-700 text-beige-100 placeholder-beige-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent font-inter"
                />
                <button className="bg-gradient-to-r from-gold-600 to-gold-700 text-primary-900 px-8 py-4 rounded-full font-inter font-semibold hover:from-gold-700 hover:to-gold-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center justify-center space-x-2">
                  <span>Subscribe</span>
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <p className="text-sm text-beige-300 font-inter">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                  <Leaf className="h-7 w-7 text-primary-900" />
                </div>
                <span className="text-2xl font-playfair font-bold text-gold-400">
                  Phibio
                </span>
              </div>
              <p className="text-beige-200 font-inter leading-relaxed mb-6">
                Pioneering sustainable biotechnology solutions that harness 
                nature's power for a healthier tomorrow.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gold-500" />
                  <span className="text-beige-200 font-inter">hello@phibio.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gold-500" />
                  <span className="text-beige-200 font-inter">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-gold-500" />
                  <span className="text-beige-200 font-inter">BioTech Park, CA 94000</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-semibold text-gold-400 mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-beige-200 hover:text-gold-400 transition-colors duration-200 font-inter"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Products */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-semibold text-gold-400 mb-6">
                Products
              </h4>
              <ul className="space-y-3">
                {products.map((product, index) => (
                  <li key={index}>
                    <a
                      href={product.href}
                      className="text-beige-200 hover:text-gold-400 transition-colors duration-200 font-inter"
                    >
                      {product.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Social Media & Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-playfair font-semibold text-gold-400 mb-6">
                Connect With Us
              </h4>
              
              {/* Social Links */}
              <div className="flex space-x-4 mb-8">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center hover:bg-gold-600 transition-colors duration-200 group"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5 text-beige-200 group-hover:text-primary-900" />
                  </a>
                ))}
              </div>

              {/* Certifications */}
              <div>
                <h5 className="text-sm font-inter font-semibold text-gold-400 mb-3">
                  Certifications
                </h5>
                <div className="space-y-2 text-sm text-beige-300 font-inter">
                  <div>ISO 9001:2015</div>
                  <div>GMP Certified</div>
                  <div>Organic Certified</div>
                  <div>USDA Approved</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-primary-800 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-beige-300 font-inter text-sm">
              © 2024 Phibio. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm font-inter">
              <a href="#" className="text-beige-300 hover:text-gold-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-beige-300 hover:text-gold-400 transition-colors duration-200">
                Terms of Service
              </a>
              <a href="#" className="text-beige-300 hover:text-gold-400 transition-colors duration-200">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 