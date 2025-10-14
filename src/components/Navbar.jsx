import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
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
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false)

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
      href: '/products/intraocular'
    },
    {
      icon: Bone,
      title: 'Intraarticular Viscoelastics',
      description: 'Advanced joint injection solutions for orthopedic applications',
      href: '/products/intraarticular'
    },
    {
      icon: Sparkles,
      title: 'Dermal Fillers & Cosmetics',
      description: 'Luxury aesthetic products for cosmetic enhancement',
      href: '/products/dermal-fillers'
    }
  ]

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'zh', label: '中文', flag: '🇨🇳' }
  ]

  const handleLanguageChange = (languageCode) => {
    i18n.changeLanguage(languageCode)
    localStorage.setItem('i18nextLng', languageCode)
    setIsLanguageDropdownOpen(false)
  }

  const navigationItems = [
    {
      name: t('nav.aboutUs'),
      href: '#about',
      hasDropdown: false,
      isRoute: false
    },
    {
      name: t('nav.products'),
      href: '#products',
      hasDropdown: true,
      dropdownItems: productsItems,
      isRoute: false
    },
    {
      name: t('nav.services'),
      href: '#services',
      hasDropdown: true,
      dropdownItems: servicesItems,
      isRoute: false
    },
    {
      name: t('nav.media'),
      href: '#media',
      hasDropdown: false,
      isRoute: false
    },
    {
      name: t('nav.publications'),
      href: '/publications',
      hasDropdown: false,
      isRoute: true
    },
    {
      name: t('nav.career'),
      href: '#career',
      hasDropdown: false,
      isRoute: false
    },
    {
      name: t('nav.contact'),
      href: '#contact',
      hasDropdown: false,
      isRoute: false
    }
  ]

  const handleMouseEnter = (itemName) => {
    setActiveDropdown(itemName)
  }

  const handleMouseLeave = () => {
    setActiveDropdown(null)
  }

  // Close language dropdown when other dropdowns open
  useEffect(() => {
    if (activeDropdown) {
      setIsLanguageDropdownOpen(false)
    }
  }, [activeDropdown])

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isLanguageDropdownOpen && !event.target.closest('.language-dropdown')) {
        setIsLanguageDropdownOpen(false)
      }
    }
    
    if (isLanguageDropdownOpen) {
      document.addEventListener('click', handleClickOutside)
    }
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isLanguageDropdownOpen])

  const isHome = location.pathname === '/'
  const showSolid = isScrolled || !isHome

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? 'bg-white shadow-lg border-b border-gray-200'
          : 'bg-transparent'
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
            <span className={`text-2xl font-playfair font-bold transition-colors duration-300 ${showSolid ? 'text-slate-800' : 'text-white drop-shadow-md'}`}>
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
                {item.isRoute ? (
                  <Link to={item.href}>
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className={`flex items-center space-x-1 px-4 py-3 rounded-xl font-inter transition-colors duration-200 ${
                        showSolid
                          ? 'text-slate-700 font-medium hover:text-primary-600 hover:bg-gray-100'
                          : 'text-white font-semibold drop-shadow hover:text-white bg-transparent hover:bg-white/10'
                      }`}
                    >
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                ) : (
                  <motion.a
                    href={item.href}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`flex items-center space-x-1 px-4 py-3 rounded-xl font-inter transition-colors duration-200 ${
                      showSolid
                        ? 'text-slate-700 font-medium hover:text-primary-600 hover:bg-gray-100'
                        : 'text-white font-semibold drop-shadow hover:text-white bg-transparent hover:bg-white/10'
                    }`}
                  >
                    <span>{item.name}</span>
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`h-4 w-4 transition-transform duration-200 ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        } ${showSolid ? 'text-inherit' : 'text-white drop-shadow'}`} 
                      />
                    )}
                  </motion.a>
                )}

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
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1, ease: [0.4, 0, 0.2, 1] }}
                            className="group flex items-start space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
                          >
                            <Link to={dropdownItem.href} className="flex items-start space-x-4 flex-1">
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
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Dropdown Footer */}
                      <div className="mt-6 pt-6 border-t border-gray-200/50">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-slate-500 font-inter">
                            {t('dropdown.needHelp')}
                          </div>
                          <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-inter font-medium text-sm transition-colors duration-300 hover:underline underline-offset-4">
                            <Mail className="h-4 w-4" />
                            <span>{t('dropdown.contactExpert')}</span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            {/* Language (Desktop) - click dropdown */}
            <div className="relative ml-4 language-dropdown">
              <div 
                className={`flex items-center gap-2 px-2 py-1 rounded-md cursor-pointer ${showSolid ? 'text-slate-700' : 'text-white'}`}
                onClick={() => setIsLanguageDropdownOpen(!isLanguageDropdownOpen)}
              >
                <span className="font-inter">{t('nav.language')}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isLanguageDropdownOpen ? 'rotate-180' : ''} ${showSolid ? 'text-inherit' : 'text-white'}`} />
              </div>
              {isLanguageDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden z-50">
                  <ul className="py-2">
                    {languages.map((lng) => (
                      <li key={lng.code}>
                        <div 
                          className="flex items-center gap-3 px-4 py-2 text-slate-700 hover:bg-gray-50 cursor-pointer"
                          onClick={() => handleLanguageChange(lng.code)}
                        >
                          <span className="text-lg">{lng.flag}</span>
                          <span className="font-inter">{lng.label}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-3 rounded-xl transition-colors duration-200 ${
                isScrolled ? 'text-slate-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
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
              {navigationItems.map((item) => (
                <div key={item.name} className="space-y-3">
                  <div className="flex items-center justify-between">
                    {item.isRoute ? (
                      <Link
                        to={item.href}
                        className="text-slate-800 font-inter font-semibold text-lg hover:text-primary-600 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <a
                        href={item.href}
                        className="text-slate-800 font-inter font-semibold text-lg hover:text-primary-600 transition-colors duration-300"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </a>
                    )}
                    {item.hasDropdown && (
                      <ChevronDown className="h-5 w-5 text-slate-400" />
                    )}
                  </div>
                  
                  {item.hasDropdown && (
                    <div className="pl-4 space-y-3 border-l-2 border-primary-100">
                      {item.dropdownItems.map((dropdownItem, idx) => (
                        <Link
                          key={idx}
                          to={dropdownItem.href}
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
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              <div className="pt-6 border-t border-gray-200/50">
                {/* Languages (Mobile) - collapsible dropdown, no button styling */}
                <details className="group">
                  <summary className="list-none flex items-center justify-between px-2 py-2 cursor-pointer select-none">
                    <span className="text-slate-800 font-inter font-semibold">{t('nav.language')}</span>
                    <ChevronDown className="h-5 w-5 text-slate-500 transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <ul className="mt-2 space-y-2">
                    {languages.map((lng) => (
                      <li 
                        key={lng.code} 
                        className="flex items-center gap-3 px-2 py-2 text-slate-700 cursor-pointer hover:bg-gray-50 rounded-md"
                        onClick={() => handleLanguageChange(lng.code)}
                      >
                        <span className="text-2xl leading-none">{lng.flag}</span>
                        <span className="font-inter">{lng.label}</span>
                      </li>
                    ))}
                  </ul>
                </details>
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