import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data/properties';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Auto-rotation des témoignages
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 8000);

    return () => clearTimeout(timer);
  }, [currentTestimonial]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 80,
        damping: 15
      }
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9,
      transition: {
        duration: 0.4
      }
    })
  };

  const testimonialIconVariants = {
    initial: { scale: 0, rotate: -180 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <motion.div 
      className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[#4A90E2] to-[#7D7D7D] opacity-10" />
      
      <div className="relative p-8 md:p-12">
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.div 
            className="inline-block rounded-full bg-[#4A90E2] p-3 text-white mb-4"
            variants={testimonialIconVariants}
            initial="initial"
            animate="animate"
          >
            <FaQuoteLeft className="text-xl" />
          </motion.div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Ce que nos clients disent
          </h2>
          <p className="text-gray-600 max-w-lg mx-auto">
            Découvrez les expériences de ceux qui nous ont fait confiance
          </p>
        </motion.div>

        <div className="relative h-80 sm:h-64 overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentTestimonial}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full h-full flex flex-col items-center justify-center"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#4A90E2] mb-4 shadow-lg">
                <img 
                  src={testimonials[currentTestimonial].avatar} 
                  alt={testimonials[currentTestimonial].name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-gray-700 text-center italic mb-4 max-w-lg">
                "{testimonials[currentTestimonial].content}"
              </p>
              <h4 className="font-semibold text-[#4A90E2]">
                {testimonials[currentTestimonial].name}
              </h4>
              <p className="text-sm text-gray-500">
                {testimonials[currentTestimonial].role}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 space-x-3">
          <motion.button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#4A90E2] hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronLeft />
          </motion.button>
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setDirection(index > currentTestimonial ? 1 : -1);
                  setCurrentTestimonial(index);
                }}
                className={`w-2 h-2 rounded-full ${
                  currentTestimonial === index ? 'bg-[#4A90E2] w-4' : 'bg-gray-300'
                } transition-all`}
                whileHover={{ scale: 1.5 }}
                initial={{ scale: currentTestimonial === index ? 1.2 : 1 }}
                animate={{ scale: currentTestimonial === index ? 1.2 : 1 }}
              />
            ))}
          </div>
          <motion.button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-[#4A90E2] hover:text-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaChevronRight />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonials;
