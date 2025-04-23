import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaMapMarkerAlt, FaRuler, FaBed, FaChartLine, FaCheck } from 'react-icons/fa';

const PropertyEstimator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    type: '',
    address: '',
    surface: '',
    rooms: '',
    construction: '',
    condition: '',
  });
  const [isEstimating, setIsEstimating] = useState(false);
  const [estimationResult, setEstimationResult] = useState<number | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsEstimating(true);
    
    // Simuler une estimation (ceci serait normalement un appel API)
    setTimeout(() => {
      const basePrice = 3500; // Prix moyen au m² en France
      const surfaceValue = parseInt(formData.surface) || 0;
      const roomFactor = parseInt(formData.rooms) || 1;
      
      // Calcul fictif de l'estimation
      const estimation = basePrice * surfaceValue * (1 + (roomFactor * 0.05));
      setEstimationResult(Math.round(estimation));
      setIsEstimating(false);
    }, 1500);
  };

  const propertyTypes = ['Appartement', 'Maison', 'Villa', 'Loft', 'Studio'];
  const constructionYears = ['Avant 1950', '1950-1980', '1980-2000', 'Après 2000', 'Neuf'];
  const conditionOptions = ['À rénover', 'Correct', 'Bon état', 'Très bon état', 'Excellent état'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const stepVariants = {
    initial: { 
      x: 50, 
      opacity: 0,
    },
    animate: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    },
    exit: { 
      x: -50, 
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="p-2 sm:p-8">
        <motion.div
          className="mb-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div 
            className="text-[#4A90E2] text-4xl mb-2 flex justify-center"
            variants={itemVariants}
          >
            <FaChartLine />
          </motion.div>
          <motion.h2 
            className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2"
            variants={itemVariants}
          >
            Estimez votre bien immobilier
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-md mx-auto"
            variants={itemVariants}
          >
            Obtenez une estimation précise de la valeur de votre propriété en quelques clics
          </motion.p>
        </motion.div>

        <div className="mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((stepNumber) => (
              <motion.div
                key={stepNumber}
                className={`flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10 
                  ${step >= stepNumber 
                    ? 'bg-[#4A90E2] text-white' 
                    : 'bg-gray-200 text-gray-500'}`}
                initial={{ scale: 0.8 }}
                animate={{ 
                  scale: step === stepNumber ? 1.1 : 1,
                  backgroundColor: step >= stepNumber ? '#4A90E2' : '#e5e7eb'
                }}
                transition={{ duration: 0.3 }}
              >
                {step > stepNumber ? (
                  <FaCheck className="text-sm" />
                ) : (
                  <span className="text-sm font-semibold">{stepNumber}</span>
                )}
              </motion.div>
            ))}
          </div>
          <div className="overflow-hidden h-1 mt-2 bg-gray-200 rounded-full">
            <motion.div
              className="h-full bg-[#4A90E2]"
              initial={{ width: '0%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <motion.div
              key="step1"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 flex items-center gap-2">
                  <FaHome /> Type de bien
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {propertyTypes.map((type) => (
                    <motion.div
                      key={type}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <input
                        type="radio"
                        id={type}
                        name="type"
                        value={type}
                        className="hidden peer"
                        onChange={handleInputChange}
                        checked={formData.type === type}
                        required
                      />
                      <label
                        htmlFor={type}
                        className="block w-full p-3 text-center text-gray-700 rounded-lg border border-gray-300 cursor-pointer transition-all peer-checked:bg-[#4A90E2] peer-checked:text-white peer-checked:border-[#4A90E2] hover:bg-gray-50"
                      >
                        {type}
                      </label>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.button
                type="button"
                onClick={nextStep}
                className="w-full py-3 bg-[#4A90E2] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Suivant
              </motion.button>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 flex items-center gap-2">
                  <FaMapMarkerAlt /> Adresse
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Adresse complète"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <FaRuler /> Surface (m²)
                  </label>
                  <input
                    type="number"
                    name="surface"
                    placeholder="Surface en m²"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                    value={formData.surface}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center gap-2">
                    <FaBed /> Nombre de pièces
                  </label>
                  <input
                    type="number"
                    name="rooms"
                    placeholder="Nombre de pièces"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Précédent
                </motion.button>
                <motion.button
                  type="button"
                  onClick={nextStep}
                  className="w-1/2 py-3 bg-[#4A90E2] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Suivant
                </motion.button>
              </div>
            </motion.div>
          )}

          {step === 3 && !isEstimating && !estimationResult && (
            <motion.div
              key="step3"
              variants={stepVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="space-y-6"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Année de construction</label>
                <select
                  name="construction"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                  value={formData.construction}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionner</option>
                  {constructionYears.map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-2">État du bien</label>
                <select
                  name="condition"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4A90E2] focus:border-[#4A90E2] outline-none transition-all"
                  value={formData.condition}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Sélectionner</option>
                  {conditionOptions.map((condition) => (
                    <option key={condition} value={condition}>{condition}</option>
                  ))}
                </select>
              </div>

              <div className="flex gap-3">
                <motion.button
                  type="button"
                  onClick={prevStep}
                  className="w-1/2 py-3 bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md hover:bg-gray-400 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Précédent
                </motion.button>
                <motion.button
                  type="submit"
                  className="w-1/2 py-3 bg-[#355E3B] text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Estimer
                </motion.button>
              </div>
            </motion.div>
          )}

          {isEstimating && (
            <motion.div 
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-16 h-16 border-4 border-t-4 border-[#4A90E2] border-t-transparent rounded-full mx-auto mb-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
              <h3 className="text-xl font-semibold text-gray-700">Calcul en cours...</h3>
              <p className="text-gray-500 mt-2">Nous analysons le marché immobilier dans votre secteur</p>
            </motion.div>
          )}

          {estimationResult && (
            <motion.div 
              className="text-center py-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-20 h-20 bg-[#4A90E2] rounded-full text-white flex items-center justify-center mx-auto mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
              >
                <FaCheck className="text-3xl" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Estimation terminée !</h3>
              <p className="text-gray-600 mb-6">La valeur estimée de votre bien est :</p>
              
              <motion.div 
                className="bg-gray-100 p-6 rounded-xl mb-8 mx-auto max-w-xs"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <span className="text-3xl sm:text-4xl font-bold text-[#4A90E2]">
                  {estimationResult.toLocaleString()} €
                </span>
                <p className="text-gray-500 text-sm mt-1">Estimation approximative</p>
              </motion.div>

              <p className="text-gray-600 mb-6">
                Cette estimation est basée sur les données du marché immobilier actuel et les caractéristiques de votre bien.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  type="button"
                  className="py-3 px-6 bg-[#4A90E2] text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setStep(1);
                    setEstimationResult(null);
                    setFormData({
                      type: '',
                      address: '',
                      surface: '',
                      rooms: '',
                      construction: '',
                      condition: '',
                    });
                  }}
                >
                  Nouvelle estimation
                </motion.button>
                <motion.button
                  type="button"
                  className="py-3 px-6 bg-[#355E3B] text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Contacter un expert
                </motion.button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PropertyEstimator;
