import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Users } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-mint rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Main Heading */}
          <div className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
              className="w-20 h-20 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto flex items-center justify-center shadow-lg"
            >
              <MessageCircle className="w-10 h-10 text-white" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary leading-tight"
            >
              טיפול בתקשורת
              <span className="block text-mint">עם לב חם</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto leading-relaxed"
            >
              מסייעת לילדים, נוער ומבוגרים להתפתח בתחום התקשורת והדיבור
              באווירה חמה, מקצועית ותומכת
            </motion.p>
          </div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12"
          >
            {[
              { icon: Users, number: "200+", text: "מטופלים מרוצים" },
              { icon: Heart, number: "5+", text: "שנות ניסיון" },
              { icon: MessageCircle, number: "100%", text: "מחויבות להצלחה" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-mint rounded-xl mx-auto mb-3 flex items-center justify-center">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="text-sm text-secondary">{stat.text}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="pt-8"
          >
            <motion.button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(74, 144, 226, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-primary to-mint text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              בואי נתחיל את המסע יחד
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}