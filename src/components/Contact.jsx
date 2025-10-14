import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Contact = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.emailUs'),
      details: 'info@phibio.de',
      subtitle: ''
    },
    {
      icon: Phone,
      title: t('contact.callUs'),
      details: '069 40767397',
      subtitle: '09:00-17:00 Mon-Fri'
    },
    {
      icon: MapPin,
      title: t('contact.visitUs'),
      details: 'Klingerstr. 24',
      subtitle: '60313 Frankfurt am Main'
    }
  ]

  return (
    <section id="contact" className="py-24 bg-white">
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
            {t('contact.title')}
            <span className="gradient-text"> {t('contact.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            {t('contact.description')}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-50 to-beige-50 rounded-3xl p-8"
          >
            <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-6">
              {t('contact.formTitle')}
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    {t('contact.fullName')} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 font-inter"
                    placeholder="Dr. Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    {t('contact.email')} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 font-inter"
                    placeholder="jane@university.edu"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    {t('contact.organization')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 font-inter"
                    placeholder="University of Sciences"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                    {t('contact.subject')} *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 font-inter"
                  >
                    <option value="">{t('contact.selectSubject')}</option>
                    <option value="research">{t('contact.researchCollab')}</option>
                    <option value="products">{t('contact.productInquiry')}</option>
                    <option value="partnership">{t('contact.partnership')}</option>
                    <option value="support">{t('contact.techSupport')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-inter font-medium text-gray-700 mb-2">
                  {t('contact.message')} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors duration-200 font-inter resize-none"
                  placeholder="Tell us about your research needs and how we can help..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-4 px-6 rounded-lg font-inter font-semibold hover:from-primary-700 hover:to-primary-800 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <span>{t('contact.sendBtn')}</span>
                <Send className="h-5 w-5" />
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-playfair font-bold text-primary-900 mb-6">
                {t('contact.getInTouch')}
              </h3>
              <p className="text-lg text-gray-600 font-inter leading-relaxed mb-8">
                {t('contact.getInTouchDesc')}
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 card-hover"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-gold-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-playfair font-semibold text-primary-900 mb-1">
                        {info.title}
                      </h4>
                      <p className="text-primary-700 font-inter font-medium">
                        {info.details}
                      </p>
                      <p className="text-gray-500 font-inter text-sm">
                        {info.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Response Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white"
            >
              <h4 className="text-lg font-playfair font-semibold mb-2">
                {t('contact.responseTitle')}
              </h4>
              <p className="font-inter">
                {t('contact.responseText')}
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          {/* Map Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-gold-600 rounded-full mb-4">
              <MapPin className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-playfair font-bold text-primary-900 mb-4">
              {t('contact.findUs')}
            </h3>
            <p className="text-lg text-gray-600 font-inter max-w-2xl mx-auto">
              Visit our headquarters in the heart of Frankfurt am Main, Germany
            </p>
          </div>

          {/* Map Container with Gradient Border */}
          <div className="relative group">
            {/* Gradient Border Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 via-gold-500 to-primary-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            
            {/* Map Card */}
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Address Banner */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 px-8 py-6">
                <div className="flex items-center justify-center space-x-3 text-white">
                  <MapPin className="h-6 w-6 flex-shrink-0" />
                  <div className="text-center">
                    <p className="font-inter font-semibold text-lg">Klingerstraße 24</p>
                    <p className="font-inter text-sm opacity-90">60313 Frankfurt am Main, Germany</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative w-full h-[500px] bg-gray-100">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2558.4757384716616!2d8.682567776860988!3d50.11355771154698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd0ea3c71e940f%3A0x8c8a5f7c3e3d9a5c!2sKlingerstra%C3%9Fe%2024%2C%2060313%20Frankfurt%20am%20Main%2C%20Germany!5e0!3m2!1sen!2s!4v1697302800000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Phibio Location - Frankfurt am Main"
                  className="w-full h-full"
                ></iframe>
              </div>

              {/* Bottom Info Bar */}
              <div className="bg-gradient-to-r from-beige-50 to-primary-50 px-8 py-4 border-t border-gray-100">
                <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-600 font-inter">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-4 w-4 text-primary-600" />
                    <span>069 40767397</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="h-4 w-4 text-primary-600" />
                    <span>info@phibio.de</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-primary-700">Mon-Fri: 09:00-17:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 