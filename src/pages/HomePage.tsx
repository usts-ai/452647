import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Header from '../components/Header';
import PropertyCard from '../components/PropertyCard';
import PropertyEstimator from '../components/PropertyEstimator';
import MarketTrends from '../components/MarketTrends';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';
import { properties } from '../data/properties';
import { FaChartLine, FaHome, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const HomePage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  // Les avantages mis en avant
  const features = [
    {
      icon: <FaHome size={20} />,
      title: "Expertise immobilière",
      description: "Notre équipe vous accompagne dans tous vos projets immobiliers avec une connaissance approfondie du marché local."
    },
    {
      icon: <FaChartLine size={20} />,
      title: "Estimations précises",
      description: "Un outil d'estimation innovant basé sur les données réelles du marché pour connaître la valeur exacte de votre bien."
    },
    {
      icon: <FaStar size={20} />,
      title: "Service personnalisé",
      description: "Une approche sur mesure pour chaque client, avec un conseiller dédié qui vous accompagne à chaque étape."
    },
    {
      icon: <FaMapMarkerAlt size={20} />,
      title: "Couverture nationale",
      description: "Une présence dans toute la France pour vous aider à trouver le bien idéal, où que vous soyez."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Header />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* Features Section */}
      <motion.section
        id="features"
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Pourquoi nous choisir ?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ImmoPrestige vous accompagne dans tous vos projets immobiliers avec une expertise reconnue et des outils innovants
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
                variants={sectionVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <div className="w-16 h-16 rounded-full bg-[#4A90E2]/10 flex items-center justify-center mx-auto mb-4 text-[#4A90E2] text-2xl">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Properties Section */}
      <motion.section
        id="properties"
        className="py-16 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos biens d'exception
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Découvrez notre sélection de propriétés premium, sélectionnées pour leur qualité et leur emplacement idéal
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.slice(0, 6).map((property, index) => (
              <motion.div
                key={property.id}
                variants={sectionVariants}
                custom={(index % 3) * 0.2}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            className="text-center mt-12"
            variants={sectionVariants}
          >
            <motion.button 
              className="px-8 py-3 bg-[#7D7D7D] text-white rounded-lg font-semibold hover:bg-[#4A90E2] transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Voir tous nos biens
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      
      {/* Estimator Section */}
      <motion.section
        id="estimator"
        className="py-16 md:py-24 bg-gradient-to-br from-[#355E3B]/10 to-[#4A90E2]/10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Estimez votre bien en ligne
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Un outil simple et précis pour connaître la valeur de votre propriété en quelques clics
            </p>
          </motion.div>
          
          <motion.div
            className="max-w-4xl mx-auto"
            variants={sectionVariants}
          >
            <PropertyEstimator />
          </motion.div>
        </div>
      </motion.section>
      
      {/* Market Trends Section */}
      <motion.section
        id="trends"
        className="py-16 md:py-24 bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <MarketTrends />
        </div>
      </motion.section>
      
      {/* Testimonials Section */}
      <motion.section
        id="testimonials"
        className="py-16 md:py-24 bg-gray-50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={sectionVariants}
          >
            <Testimonials />
          </motion.div>
        </div>
      </motion.section>
      
      {/* Contact Section */}
      <motion.section
        id="contact"
        className="py-16 md:py-24 bg-[#4A90E2]/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            variants={sectionVariants}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Contactez-nous
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <motion.div
              className="bg-white p-8 rounded-2xl shadow-lg"
              variants={sectionVariants}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Envoyez-nous un message
              </h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Nom</label>
                    <input 
                      type="text" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                      placeholder="Votre email"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Sujet</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                    placeholder="Sujet de votre message"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                    rows={4}
                    placeholder="Votre message"
                  />
                </div>
                
                <motion.button 
                  type="submit"
                  className="w-full py-3 bg-[#355E3B] text-white font-semibold rounded-lg shadow-md hover:bg-[#4A90E2] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Envoyer
                </motion.button>
              </form>
            </motion.div>
            
            <motion.div
              variants={sectionVariants}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4A90E2]/10 p-4 rounded-full text-[#4A90E2]">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">Notre adresse</h4>
                    <p className="text-gray-600">123 Avenue des Champs-Élysées<br/>75008 Paris, France</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4A90E2]/10 p-4 rounded-full text-[#4A90E2]">
                    <FaPhone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">Téléphone</h4>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <p className="text-gray-600">+33 1 98 76 54 32</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-[#4A90E2]/10 p-4 rounded-full text-[#4A90E2]">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@immoprestige.fr</p>
                    <p className="text-gray-600">info@immoprestige.fr</p>
                  </div>
                </div>
              </div>
              
              <motion.div 
                className="mt-12 p-6 bg-[#355E3B] text-white rounded-xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h4 className="text-xl font-bold mb-2">Horaires d'ouverture</h4>
                <p className="mb-1">Lundi - Vendredi: 9h00 - 18h30</p>
                <p className="mb-1">Samedi: 10h00 - 17h00</p>
                <p>Dimanche: Fermé</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
