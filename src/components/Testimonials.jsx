import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const Testimonials = () => {
  const { t } = useTranslation()
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief Scientific Officer',
      company: 'BioMed Research Institute',
      image: 'bg-gradient-to-br from-blue-100 to-primary-100',
      rating: 5,
      text: 'Phibio\'s innovative approach to biotechnology has revolutionized our research capabilities. Their plant-based compounds have opened new possibilities in therapeutic development.'
    },
    {
      name: 'Prof. Michael Rodriguez',
      title: 'Director of Innovation',
      company: 'University of Advanced Sciences',
      image: 'bg-gradient-to-br from-primary-100 to-green-100',
      rating: 5,
      text: 'The quality and purity of Phibio\'s bioactive compounds are unmatched. Their commitment to sustainable practices aligns perfectly with our environmental values.'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Lead Researcher',
      company: 'Natural Products Laboratory',
      image: 'bg-gradient-to-br from-gold-100 to-yellow-100',
      rating: 5,
      text: 'Working with Phibio has accelerated our research timeline significantly. Their technical support and product consistency are outstanding.'
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-24 bg-gradient-to-b from-primary-50 to-beige-50">
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
            {t('testimonials.title')}
            <span className="gradient-text"> {t('testimonials.titleHighlight')}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-inter leading-relaxed">
            {t('testimonials.description')}
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-xl"
          >
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-gold-600 rounded-full flex items-center justify-center">
                <Quote className="h-8 w-8 text-white" />
              </div>
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl md:text-2xl text-gray-800 font-inter leading-relaxed text-center mb-8">
              "{testimonials[currentSlide].text}"
            </blockquote>

            {/* Rating */}
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
              ))}
            </div>

            {/* Author Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className={`w-16 h-16 rounded-full ${testimonials[currentSlide].image} flex items-center justify-center`}>
                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-playfair font-bold text-lg">
                    {testimonials[currentSlide].name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>
              <div className="text-center">
                <div className="font-playfair font-semibold text-primary-900 text-lg">
                  {testimonials[currentSlide].name}
                </div>
                <div className="text-primary-600 font-inter">
                  {testimonials[currentSlide].title}
                </div>
                <div className="text-gray-500 font-inter text-sm">
                  {testimonials[currentSlide].company}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200 group"
          >
            <ChevronLeft className="h-6 w-6 text-primary-600 group-hover:text-primary-700" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow duration-200 group"
          >
            <ChevronRight className="h-6 w-6 text-primary-600 group-hover:text-primary-700" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                  index === currentSlide
                    ? 'bg-primary-600'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            { number: '98%', label: t('testimonials.stats.satisfaction') },
            { number: '150+', label: t('testimonials.stats.partners') },
            { number: '50+', label: t('testimonials.stats.countries') }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-playfair font-bold text-primary-900 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-inter font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials 