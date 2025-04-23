import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  
  // Effet parallax au scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroTextVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const searchBoxVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.6,
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="relative h-screen max-h-[800px] min-h-[600px] overflow-hidden">
      {/* Image de fond avec effet parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-black"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          transform: `translateY(${scrollY * 0.3}px)`,
          backgroundPosition: `center ${50 + scrollY * 0.05}%`,
          filter: 'brightness(0.7)'
        }}
      />
      
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      
      {/* Contenu du héros */}
      <div className="relative h-full container mx-auto px-6 flex flex-col justify-center items-center text-center z-10">
        <motion.div
          className="max-w-4xl"
          initial="hidden"
          animate="visible"
          variants={heroTextVariants}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            variants={childVariants}
          >
            Trouvez le bien immobilier <br />
            <span className="text-[#4A90E2]">de vos rêves</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-10"
            variants={childVariants}
          >
            Une expertise immobilière à votre service pour concrétiser tous vos projets
          </motion.p>
          
          <motion.div
            className="rounded-full bg-white p-2 md:p-3 shadow-xl flex items-center max-w-2xl mx-auto mb-12"
            variants={searchBoxVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex-1 px-4">
              <input
                type="text"
                placeholder="Où souhaitez-vous habiter ?"
                className="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <motion.button
              className="bg-[#4A90E2] text-white px-6 py-3 rounded-full font-medium flex items-center gap-2"
              whileHover={{ scale: 1.05, backgroundColor: '#3670b0' }}
              whileTap={{ scale: 0.95 }}
            >
              <FaSearch /> Rechercher
            </motion.button>
          </motion.div>
          
          <motion.div
            className="flex justify-center space-x-6"
            variants={childVariants}
          >
            {['Appartement', 'Maison', 'Villa', 'Loft'].map((type, index) => (
              <motion.button
                key={index}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/30 hover:bg-white/20 transition-colors"
                whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                whileTap={{ scale: 0.95 }}
              >
                {type}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Flèche de défilement */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            delay: 1.2,
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          <a href="#properties" className="text-white flex flex-col items-center">
            <span className="mb-2 text-sm font-light">Découvrir</span>
            <FaArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
