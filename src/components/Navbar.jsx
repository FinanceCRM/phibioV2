import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Leaf, 
  ChevronDown,
  Microscope,
  FlaskConical,
  Building2,
  Package,
  Eye,
  Bone,
  Sparkles,
  ArrowRight,
  Mail,
  Phone
} from 'lucide-react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesItems = [
    {
      icon: FlaskConical,
      title: 'R&D Services',
      description: 'Advanced research and development solutions for biotechnology innovation',
      href: '#rd-services'
    },
    {
      icon: Package,
      title: 'Cleanroom Packing',
      description: 'Sterile packaging solutions in controlled cleanroom environments',
      href: '#cleanroom-packing'
    },
    {
      icon: Building2,
      title: 'Cleanroom & Laboratory Solutions',
      description: 'Complete laboratory setup and cleanroom facility management',
      href: '#laboratory-solutions'
    },
    {
      icon: Microscope,
      title: 'Contract Manufacturing',
      description: 'End-to-end manufacturing services for biotech products',
      href: '#contract-manufacturing'
    }
  ]

  const productsItems = [
    {
      icon: Eye,
      title: 'Intraocular Viscoelastics',
      description: 'Premium ophthalmic viscoelastic solutions for eye surgery',
      href: '#intraocular'
    },
    {
      icon: Bone,
      title: 'Intraarticular Viscoelastics',
      description: 'Advanced joint injection solutions for orthopedic applications',
      href: '#intraarticular'
    },
    {
      icon: Sparkles,
      title: 'Dermal Fillers & Cosmetics',
      description: 'Luxury aesthetic products for cosmetic enhancement',
      href: '#dermal-fillers'
    }
  ]

  const navigationItems = [
    {
      name: 'Services',
      href: '#services',
      hasDropdown: true,
      dropdownItems: servicesItems
    },
    {
      name: 'Products',
      href: '#products',
      hasDropdown: true,
      dropdownItems: productsItems
    },
    {
      name: 'About Us',
      href: '#about',
      hasDropdown: false
    },
    {
      name: 'Contact',
      href: '#contact',
      hasDropdown: false
    }
  ]

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-white/90'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 z-50"
          >
            <div className="w-11 h-11 bg-gradient-to-br from-primary-600 via-primary-700 to-gold-600 rounded-2xl flex items-center justify-center shadow-luxury">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-playfair font-bold text-slate-800 transition-colors duration-300">
              Phibio
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item, index) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <motion.a
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center space-x-1 px-4 py-3 rounded-xl font-inter font-medium transition-colors duration-200 text-slate-700 hover:text-primary-600 hover:bg-gray-100"
                                  >
                    <span>{item.name}</span>
                  {item.hasDropdown && (
                                          <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} 
                      />
                  )}
                </motion.a>

                {/* Mega Menu Dropdown */}
                <AnimatePresence>
                  {item.hasDropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                      className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-96 bg-white rounded-2xl shadow-lg border border-gray-200 p-6"
                    >
                      <div className="space-y-2">
                        {item.dropdownItems.map((dropdownItem, idx) => (
                          <motion.a
                            key={idx}
                            href={dropdownItem.href}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                          >
                                                          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                              <dropdownItem.icon className="h-6 w-6 text-primary-600" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-inter font-semibold text-slate-800 group-hover:text-slate-700 transition-colors duration-300">
                                {dropdownItem.title}
                              </h4>
                              <p className="text-sm text-slate-600 mt-1 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                                {dropdownItem.description}
                              </p>
                            </div>
                            <ArrowRight className="h-5 w-5 text-slate-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-300" />
                          </motion.a>
                        ))}
                      </div>
                      
                      {/* Dropdown Footer */}
                      <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500 font-inter">
                            Need help choosing?
                          </div>
                          <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-inter font-medium text-sm transition-colors duration-300 hover:underline underline-offset-4">
                            <Mail className="h-4 w-4" />
                            <span>Contact Expert</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="ml-6 bg-primary-600 text-white px-6 py-3 rounded-xl font-inter font-semibold shadow-md hover:bg-primary-700 transition-colors duration-200"
                          >
                <span className="flex items-center space-x-2">
                <span>Get Started</span>
                                  <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl transition-colors duration-200 text-slate-700 hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-200/30 shadow-luxury-lg overflow-hidden"
          >
            <div className="px-4 py-6 space-y-6 max-h-screen overflow-y-auto">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="text-slate-800 font-inter font-semibold text-lg hover:text-primary-600 transition-colors duration-300"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.hasDropdown && (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-3 border-l-2 border-primary-100">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <a
                          key={idx}
                          href={dropdownItem.href}
                          className="flex items-center space-x-3 p-3 rounded-xl hover:bg-primary-50 transition-colors duration-300"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          <div className="w-10 h-10 bg-gradient-to-br from-primary-100 to-gold-100 rounded-xl flex items-center justify-center">
                            <dropdownItem.icon className="h-5 w-5 text-primary-600" />
                          </div>
                          <div>
                            <div className="font-inter font-medium text-slate-800">
                              {dropdownItem.title}
                            </div>
                            <div className="text-sm text-slate-600 mt-1">
                              {dropdownItem.description}
                            </div>
                          </div>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-200/50">
                <button className="w-full bg-gradient-to-r from-primary-600 to-gold-600 text-white px-6 py-4 rounded-2xl font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300">
                  Get Started
                </button>
              </div>

              {/* Mobile Contact Info */}
              <div className="pt-6 space-y-4">
                <div className="flex items-center space-x-3 text-slate-600">
                  <Phone className="h-5 w-5 text-primary-600" />
                  <span className="font-inter">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-600">
                  <Mail className="h-5 w-5 text-primary-600" />
                  <span className="font-inter">hello@phibio.com</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 