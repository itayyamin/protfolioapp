import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const navItems = [
  { id: 'hero', label: 'בית', href: '#hero' },
  { id: 'about', label: 'אודות', href: '#about' },
  { id: 'services', label: 'שירותים', href: '#services' },
  { id: 'target', label: 'למי זה מיועד', href: '#target' },
  { id: 'tips', label: 'טיפים להורים', href: '#tips' },
  { id: 'testimonials', label: 'המלצות', href: '#testimonials' },
  { id: 'contact', label: 'יצירת קשר', href: '#contact' }
];

export default function Navigation({ activeSection }) {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-mint rounded-full flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-primary hidden sm:block">
              טיפול בתקשורת
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-white shadow-lg'
                    : 'text-secondary hover:text-primary hover:bg-cream-50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex items-center gap-2 overflow-x-auto pb-1">
            {navItems.slice(1, 4).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-secondary hover:text-primary bg-gray-50'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Bottom Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-2 py-2 z-40">
          <div className="flex justify-around items-center max-w-md mx-auto">
            {navItems.slice(1).map((item) => (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-xs font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-primary text-white'
                    : 'text-secondary hover:text-primary'
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}