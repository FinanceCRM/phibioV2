import React from 'react'
import { motion as Motion } from 'framer-motion'
import slide from '../assets/slide.jpeg'
import { ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image + Overlays */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${slide})` }}
        />
        {/* Soft gradient overlays to improve text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-luxury-cream/30 via-white/20 to-beige-50/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/25 via-transparent to-gold-900/20" />
        {/* Extra top overlay to ensure navbar contrast */}
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black/45 to-transparent" />

        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <Motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary-200/40 rounded-full"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 50 - 25, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <Motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-primary-900 leading-tight"
          >
            Biotechnology
            <br />
            <span className="gradient-text">Inspired by Nature</span>
          </Motion.h1>

          {/* Subtitle */}
          <Motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 font-inter max-w-4xl mx-auto leading-relaxed"
          >
            Pioneering sustainable solutions that harness the power of nature to create 
            innovative biotechnology products for a healthier tomorrow.
          </Motion.p>

          {/* CTA Buttons */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 pt-4"
          >
            <button className="group bg-gradient-to-r from-primary-600 via-primary-700 to-gold-600 text-white px-8 py-4 rounded-2xl font-inter font-semibold text-lg shadow-luxury hover:shadow-luxury-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
              <span>Discover Our Science</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            
            <button className="group flex items-center space-x-3 text-primary-700 hover:text-primary-800 transition-colors duration-300">
              <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-luxury group-hover:shadow-luxury-lg group-hover:scale-105 transition-all duration-300">
                <Play className="h-6 w-6 ml-1" />
              </div>
              <span className="font-inter font-semibold text-lg">Watch Our Story</span>
            </button>
          </Motion.div>

          {/* Features Pills */}
          <Motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap justify-center gap-4 pt-8"
          >
            {['Sustainable Innovation', 'Bio-Technology', 'Natural Solutions'].map((feature, index) => (
              <div 
                key={index}
                className="px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-primary-100 text-primary-700 font-inter font-medium hover:bg-white/80 hover:scale-105 transition-all duration-300"
              >
                {feature}
              </div>
            ))}
          </Motion.div>
        </Motion.div>
      </div>

      {/* Scroll Indicator */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary-600/60 rounded-full flex justify-center cursor-pointer hover:border-primary-600 transition-colors duration-300"
        >
          <Motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary-600 rounded-full mt-2"
          />
        </Motion.div>
      </Motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="w-32 h-32 border border-primary-300/50 rounded-full"
        />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20">
        <Motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 border border-gold-300/50 rounded-full"
        />
      </div>
      
      {/* Additional floating geometric shapes */}
      <div className="absolute top-1/4 right-20 opacity-10">
        <Motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-16 h-16 bg-gradient-to-br from-primary-400 to-gold-400 rounded-2xl"
        />
      </div>
      
      <div className="absolute bottom-1/4 left-20 opacity-10">
        <Motion.div
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-12 h-12 bg-gradient-to-br from-gold-400 to-primary-400 rounded-full"
        />
      </div>
    </section>
  )
}

export default Hero 