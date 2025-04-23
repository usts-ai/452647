import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const socialIcons = [
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaTwitter />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaLinkedinIn />, link: '#' }
  ];

  const footerLinks = [
    {
      title: 'À propos',
      links: [
        { text: 'Notre histoire', url: '#' },
        { text: 'Notre équipe', url: '#' },
        { text: 'Carrières', url: '#' },
        { text: 'Témoignages', url: '#' }
      ]
    },
    {
      title: 'Services',
      links: [
        { text: 'Acheter', url: '#' },
        { text: 'Vendre', url: '#' },
        { text: 'Estimer', url: '#' },
        { text: 'Investir', url: '#' }
      ]
    },
    {
      title: 'Assistance',
      links: [
        { text: 'FAQ', url: '#' },
        { text: 'Contact', url: '#' },
        { text: 'Mentions légales', url: '#' },
        { text: 'Politique de confidentialité', url: '#' }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold mb-6 relative inline-block"
              whileHover={{ scale: 1.05 }}
            >
              ImmoPrestige
              <motion.span 
                className="absolute bottom-0 left-0 h-1 bg-[#4A90E2]"
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.5 }}
              />
            </motion.h3>
            <p className="text-gray-300 mb-6">
              Votre partenaire immobilier de confiance depuis 2005. Notre expertise au service de vos projets.
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  className="bg-[#4A90E2] text-white p-2 rounded-full inline-flex items-center justify-center"
                  whileHover={{ 
                    scale: 1.2, 
                    backgroundColor: '#7D7D7D',
                    transition: { duration: 0.3 } 
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((section, index) => (
            <motion.div key={index} variants={itemVariants}>
              <motion.h4 
                className="text-xl font-semibold mb-6 relative inline-block"
                whileHover={{ scale: 1.05 }}
              >
                {section.title}
                <motion.span 
                  className="absolute bottom-0 left-0 h-1 bg-[#4A90E2]"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                />
              </motion.h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li key={linkIndex}
                    whileHover={{ x: 5, color: '#4A90E2' }}
                    transition={{ duration: 0.2 }}
                  >
                    <a href={link.url} className="text-gray-300 hover:text-[#4A90E2] transition-colors">
                      {link.text}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <div className="mb-6 md:mb-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} ImmoPrestige. Tous droits réservés.
            </p>
          </div>
          <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0 text-gray-300">
            <motion.div className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, color: '#4A90E2' }}
            >
              <FaPhone /> <span>+33 1 23 45 67 89</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, color: '#4A90E2' }}
            >
              <FaEnvelope /> <span>contact@immoprestige.fr</span>
            </motion.div>
            <motion.div className="flex items-center space-x-2"
              whileHover={{ scale: 1.05, color: '#4A90E2' }}
            >
              <FaMapMarkerAlt /> <span>Paris, France</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
