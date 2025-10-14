import React from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  Marker 
} from 'react-simple-maps'
import { 
  Globe, 
  Building2, 
  Users, 
  TrendingUp, 
  Award,
  MapPin,
  CheckCircle2
} from 'lucide-react'

// World map GeoJSON URL
const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const Publications = () => {
  const { t } = useTranslation()

  // Countries where we operate with their coordinates
  const countries = [
    { name: "Germany", coordinates: [10.4515, 51.1657], continent: "europe" },
    { name: "Romania", coordinates: [24.9668, 45.9432], continent: "europe" },
    { name: "Türkiye", coordinates: [35.2433, 38.9637], continent: "europe" },
    { name: "Azerbaijan", coordinates: [47.5769, 40.1431], continent: "asia" },
    { name: "Greece", coordinates: [21.8243, 39.0742], continent: "europe" },
    { name: "Bulgaria", coordinates: [25.4858, 42.7339], continent: "europe" },
    { name: "Mali", coordinates: [-3.9962, 17.5707], continent: "africa" },
    { name: "Pakistan", coordinates: [69.3451, 30.3753], continent: "asia" },
    { name: "Russia", coordinates: [105.3188, 61.5240], continent: "europe" },
    { name: "UAE", coordinates: [53.8478, 23.4241], continent: "middleEast" },
    { name: "France", coordinates: [2.2137, 46.2276], continent: "europe" },
    { name: "Iran", coordinates: [53.6880, 32.4279], continent: "middleEast" },
    { name: "Armenia", coordinates: [45.0382, 40.0691], continent: "asia" },
    { name: "Latvia", coordinates: [24.6032, 56.8796], continent: "europe" },
  ]

  const stats = [
    {
      icon: MapPin,
      value: "14",
      label: t('publications.stats.countries'),
      color: "from-primary-500 to-primary-600"
    },
    {
      icon: Globe,
      value: "4",
      label: t('publications.stats.continents'),
      color: "from-gold-500 to-gold-600"
    },
    {
      icon: Building2,
      value: "50+",
      label: t('publications.stats.partnerships'),
      color: "from-green-500 to-green-600"
    },
    {
      icon: Users,
      value: "500+",
      label: t('publications.stats.healthcare'),
      color: "from-blue-500 to-blue-600"
    },
  ]

  // Group countries by region
  const regions = {
    europe: countries.filter(c => c.continent === "europe"),
    asia: countries.filter(c => c.continent === "asia"),
    middleEast: countries.filter(c => c.continent === "middleEast"),
    africa: countries.filter(c => c.continent === "africa"),
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-gold-50/30" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-medium mb-6"
            >
              <Globe className="h-5 w-5" />
              <span>{t('publications.subtitle')}</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-slate-900 mb-6">
              {t('publications.title')}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-gold-600">
                {t('publications.titleHighlight')}
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t('publications.description')}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
              {t('publications.mapTitle')}
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              {t('publications.mapDescription')}
            </p>
          </motion.div>

          {/* World Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-primary-50 to-gold-50 rounded-3xl p-8 shadow-xl border border-gray-100 mb-12"
          >
            <ComposableMap
              projection="geoMercator"
              projectionConfig={{
                scale: 150,
                center: [30, 40]
              }}
              className="w-full h-[500px]"
            >
              <Geographies geography={geoUrl}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const isActive = countries.some(
                      country => geo.properties.name === country.name || 
                                 (country.name === "Türkiye" && geo.properties.name === "Turkey") ||
                                 (country.name === "UAE" && geo.properties.name === "United Arab Emirates")
                    )
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isActive ? "#10b981" : "#e5e7eb"}
                        stroke="#ffffff"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: { 
                            fill: isActive ? "#059669" : "#d1d5db",
                            outline: "none",
                            transition: "all 0.3s"
                          },
                          pressed: { outline: "none" }
                        }}
                      />
                    )
                  })
                }
              </Geographies>
              
              {/* Markers for each country */}
              {countries.map((country, index) => (
                <Marker key={index} coordinates={country.coordinates}>
                  <g>
                    <circle 
                      r={6} 
                      fill="#ef4444" 
                      stroke="#ffffff" 
                      strokeWidth={2}
                      className="animate-pulse"
                    />
                    <circle 
                      r={10} 
                      fill="#ef4444" 
                      fillOpacity={0.2}
                      className="animate-ping"
                    />
                  </g>
                </Marker>
              ))}
            </ComposableMap>
          </motion.div>

          {/* Countries List by Region */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(regions).map(([region, countryList], index) => (
              <motion.div
                key={region}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <Globe className="h-5 w-5 text-primary-600" />
                  {t(`publications.regions.${region}`)}
                </h3>
                <ul className="space-y-2">
                  {countryList.map((country, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-600">
                      <CheckCircle2 className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{country.name}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-gold-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <Award className="h-16 w-16 text-primary-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-slate-900 mb-4">
              {t('publications.achievements.title')}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              {t('publications.achievements.description')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <TrendingUp className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {t('publications.commitment.title')}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {t('publications.commitment.text')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold-500 to-gold-600 flex items-center justify-center">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  {t('publications.expansion.title')}
                </h3>
              </div>
              <p className="text-slate-600 leading-relaxed">
                {t('publications.expansion.text')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Publications

