import React from 'react';
import { motion } from 'framer-motion';
import { FaBed, FaBath, FaRuler, FaTags } from 'react-icons/fa';
import { Property } from '../data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  const formatPrice = (price: number): string => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + ' €';
  };

  return (
    <motion.div 
      className="bg-white rounded-xl overflow-hidden shadow-lg"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10, 
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative">
        <motion.div 
          className="h-56 bg-gray-200 overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <img 
            src={property.image} 
            alt={property.title} 
            className="w-full h-full object-cover transition-transform duration-500"
          />
        </motion.div>
        <div className="absolute top-4 right-4 bg-[#4A90E2] text-white px-3 py-1 rounded-full text-sm font-semibold">
          {property.type}
        </div>
        <motion.div 
          className="absolute -bottom-6 right-6 bg-[#7D7D7D] text-white p-3 rounded-full text-lg font-bold shadow-lg"
          whileHover={{ scale: 1.1, backgroundColor: '#4A90E2' }}
        >
          <FaTags />
        </motion.div>
      </div>
      
      <div className="p-6 pt-8">
        <motion.h3 
          className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2"
          whileHover={{ color: '#4A90E2' }}
        >
          {property.title}
        </motion.h3>
        <p className="text-gray-500 text-sm mb-2 line-clamp-1">{property.address}</p>
        <p className="text-2xl font-bold text-[#4A90E2] mb-4">{formatPrice(property.price)}</p>
        
        <div className="flex flex-wrap gap-4 text-gray-600">
          <div className="flex items-center gap-1" title="Chambres">
            <FaBed className="text-[#7D7D7D]" /> {property.bedrooms}
          </div>
          <div className="flex items-center gap-1" title="Salles de bain">
            <FaBath className="text-[#7D7D7D]" /> {property.bathrooms}
          </div>
          <div className="flex items-center gap-1" title="Surface">
            <FaRuler className="text-[#7D7D7D]" /> {property.surface} m²
          </div>
        </div>
        
        <motion.button 
          className="w-full mt-6 py-3 bg-[#355E3B] text-white font-semibold rounded-lg tracking-wide"
          whileHover={{ 
            backgroundColor: '#4A90E2',
            scale: 1.02
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.2 }}
        >
          Voir le détail
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
