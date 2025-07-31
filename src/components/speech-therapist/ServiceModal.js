import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
  if (!service) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-8 relative"
        dir="rtl"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 text-gray-400 hover:text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="סגור חלון"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-4 mb-6">
          <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
            <service.icon className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-primary">{service.title}</h2>
        </div>
        
        <div className="text-secondary leading-relaxed space-y-4">
          <p>{service.longDescription}</p>
        </div>

        <div className="mt-8 text-left">
          <button
            onClick={onClose}
            className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-mint transition-colors duration-300"
          >
            סגור
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}