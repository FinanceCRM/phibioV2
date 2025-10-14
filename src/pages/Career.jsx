import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  Heart, 
  TrendingUp, 
  Award,
  Upload,
  Mail,
  Phone,
  User,
  FileText,
  Send,
  CheckCircle,
  Globe
} from 'lucide-react'

const Career = () => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
    cvFile: null
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, cvFile: e.target.files[0] }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Form submission logic would go here
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
        cvFile: null
      })
    }, 3000)
  }

  const jobListings = [
    {
      id: 1,
      title: t('career.jobs.biotech.title'),
      department: t('career.jobs.biotech.department'),
      location: t('career.jobs.biotech.location'),
      type: t('career.jobs.biotech.type'),
      description: t('career.jobs.biotech.description'),
      requirements: [
        t('career.jobs.biotech.req1'),
        t('career.jobs.biotech.req2'),
        t('career.jobs.biotech.req3')
      ]
    },
    {
      id: 2,
      title: t('career.jobs.quality.title'),
      department: t('career.jobs.quality.department'),
      location: t('career.jobs.quality.location'),
      type: t('career.jobs.quality.type'),
      description: t('career.jobs.quality.description'),
      requirements: [
        t('career.jobs.quality.req1'),
        t('career.jobs.quality.req2'),
        t('career.jobs.quality.req3')
      ]
    },
    {
      id: 3,
      title: t('career.jobs.regulatory.title'),
      department: t('career.jobs.regulatory.department'),
      location: t('career.jobs.regulatory.location'),
      type: t('career.jobs.regulatory.type'),
      description: t('career.jobs.regulatory.description'),
      requirements: [
        t('career.jobs.regulatory.req1'),
        t('career.jobs.regulatory.req2'),
        t('career.jobs.regulatory.req3')
      ]
    }
  ]

  const values = [
    {
      icon: Users,
      title: t('career.values.teamwork'),
      description: t('career.values.teamworkDesc')
    },
    {
      icon: TrendingUp,
      title: t('career.values.growth'),
      description: t('career.values.growthDesc')
    },
    {
      icon: Heart,
      title: t('career.values.wellbeing'),
      description: t('career.values.wellbeingDesc')
    },
    {
      icon: Award,
      title: t('career.values.excellence'),
      description: t('career.values.excellenceDesc')
    }
  ]

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-900 via-primary-800 to-gold-900 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-white mb-6">
              {t('career.hero.title')} <span className="text-gold-400">{t('career.hero.titleHighlight')}</span>
            </h1>
            <p className="text-xl md:text-2xl text-beige-100 max-w-3xl mx-auto font-inter leading-relaxed mb-8">
              {t('career.hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="#openings"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-gold-600 to-gold-700 text-primary-900 px-8 py-4 rounded-full font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex items-center space-x-2"
              >
                <Briefcase className="h-5 w-5" />
                <span>{t('career.hero.viewPositions')}</span>
              </motion.a>
              <motion.a
                href="#application"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-full font-inter font-semibold hover:bg-white/20 transition-all duration-300"
              >
                {t('career.hero.applyNow')}
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values Section */}
      <section className="py-24 bg-gradient-to-b from-white to-luxury-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
              {t('career.values.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              {t('career.values.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-gold-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow-green transition-all duration-300">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-playfair font-semibold text-primary-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 font-inter leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="openings" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
              {t('career.openings.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              {t('career.openings.description')}
            </p>
          </motion.div>

          <div className="space-y-8">
            {jobListings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-luxury-cream rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 border border-luxury-platinum/20"
              >
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-3xl font-playfair font-bold text-primary-900 mb-3">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center text-gray-600 font-inter">
                        <Briefcase className="h-5 w-5 mr-2 text-primary-600" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-gray-600 font-inter">
                        <MapPin className="h-5 w-5 mr-2 text-primary-600" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-600 font-inter">
                        <Clock className="h-5 w-5 mr-2 text-primary-600" />
                        {job.type}
                      </div>
                    </div>
                  </div>
                  <motion.a
                    href="#application"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-primary-600 to-gold-600 text-white px-6 py-3 rounded-full font-inter font-semibold shadow-lg hover:shadow-xl transition-all duration-300 whitespace-nowrap mt-4 lg:mt-0"
                  >
                    {t('career.openings.apply')}
                  </motion.a>
                </div>

                <p className="text-gray-700 font-inter leading-relaxed mb-6">
                  {job.description}
                </p>

                <div>
                  <h4 className="text-lg font-playfair font-semibold text-primary-900 mb-3">
                    {t('career.openings.requirements')}
                  </h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start text-gray-700 font-inter">
                        <CheckCircle className="h-5 w-5 mr-2 text-primary-600 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="application" className="py-24 bg-gradient-to-b from-luxury-cream to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
              {t('career.form.title')}
            </h2>
            <p className="text-xl text-gray-600 font-inter leading-relaxed">
              {t('career.form.description')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-luxury border border-luxury-platinum/20"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-3xl font-playfair font-bold text-primary-900 mb-4">
                  {t('career.form.successTitle')}
                </h3>
                <p className="text-lg text-gray-600 font-inter">
                  {t('career.form.successMessage')}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      <User className="h-4 w-4 inline mr-2" />
                      {t('career.form.fullName')}
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 font-inter"
                      placeholder={t('career.form.fullNamePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      <Mail className="h-4 w-4 inline mr-2" />
                      {t('career.form.email')}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 font-inter"
                      placeholder={t('career.form.emailPlaceholder')}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      <Phone className="h-4 w-4 inline mr-2" />
                      {t('career.form.phone')}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 font-inter"
                      placeholder={t('career.form.phonePlaceholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                      <Briefcase className="h-4 w-4 inline mr-2" />
                      {t('career.form.position')}
                    </label>
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 font-inter"
                    >
                      <option value="">{t('career.form.selectPosition')}</option>
                      {jobListings.map(job => (
                        <option key={job.id} value={job.title}>{job.title}</option>
                      ))}
                      <option value="other">{t('career.form.otherPosition')}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    <Upload className="h-4 w-4 inline mr-2" />
                    {t('career.form.cv')}
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      name="cvFile"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 font-inter file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                    />
                  </div>
                  <p className="text-sm text-gray-500 mt-2 font-inter">
                    {t('career.form.cvHint')}
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-inter font-semibold text-gray-700 mb-2">
                    <FileText className="h-4 w-4 inline mr-2" />
                    {t('career.form.coverLetter')}
                  </label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleInputChange}
                    rows="6"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-600 focus:ring-2 focus:ring-primary-600/20 transition-all duration-200 font-inter resize-none"
                    placeholder={t('career.form.coverLetterPlaceholder')}
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary-600 via-primary-700 to-gold-600 text-white px-8 py-4 rounded-full font-inter font-semibold shadow-luxury hover:shadow-luxury-lg transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="h-5 w-5" />
                  <span>{t('career.form.submit')}</span>
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-6">
              {t('career.benefits.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
              {t('career.benefits.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Heart, text: t('career.benefits.health') },
              { icon: TrendingUp, text: t('career.benefits.development') },
              { icon: Globe, text: t('career.benefits.global') },
              { icon: Award, text: t('career.benefits.competitive') },
              { icon: Users, text: t('career.benefits.team') },
              { icon: Briefcase, text: t('career.benefits.flexible') }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary-100 to-gold-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <p className="text-gray-700 font-inter leading-relaxed">
                  {benefit.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Career

