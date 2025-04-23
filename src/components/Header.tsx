import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaBuilding, FaInfoCircle, FaBlog, FaUserPlus } from 'react-icons/fa';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navItems = [
    { name: 'Accueil', icon: <FaHome />, link: '#' },
    { name: 'Nos Biens', icon: <FaBuilding />, link: '#properties' },
    { name: 'Estimateur', icon: <FaSearch />, link: '#estimator' },
    { name: 'Nos Services', icon: <FaInfoCircle />, link: '#services' },
    { name: 'Blog', icon: <FaBlog />, link: '#blog' },
    { name: 'Contact', icon: <FaUserPlus />, link: '#contact' }
  ];

  const headerVariants = {
    initial: { backgroundColor: 'rgba(125, 125, 125, 0)', boxShadow: 'none' },
    scrolled: { 
      backgroundColor: 'rgba(125, 125, 125, 0.95)', 
      boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.1)'
    }
  };

  const logoVariants = {
    initial: { color: '#ffffff', scale: 1.2 },
    scrolled: { color: '#ffffff', scale: 1 }
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3`}
      initial="initial"
      animate={scrolled ? "scrolled" : "initial"}
      variants={headerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center"
            variants={logoVariants}
          >
            <motion.div
              className="mr-2 text-3xl"
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <FaHome />
            </motion.div>
            <motion.h1 
              className="text-xl md:text-2xl font-bold text-white"
              whileHover={{ scale: 1.05 }}
            >
              ImmoPrestige
            </motion.h1>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="text-white hover:text-[#4A90E2] flex items-center gap-2"
                whileHover={{ scale: 1.1, color: '#4A90E2' }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-sm">{item.icon}</span>
                <span>{item.name}</span>
              </motion.a>
            ))}
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.div 
            className="md:hidden flex items-center"
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </motion.div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div 
            className="md:hidden py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  className="text-white hover:text-[#4A90E2] flex items-center gap-2 p-2"
                  whileHover={{ scale: 1.05, x: 10 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="text-sm">{item.icon}</span>
                  <span>{item.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
