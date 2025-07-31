import React, { useState, useEffect } from 'react';
import { Phone, Mail, MessageCircle, Star, Users, Heart, Lightbulb, UserCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './input.css';

import Navigation from './components/speech-therapist/Navigation';
import HeroSection from './components/speech-therapist/HeroSection';
import AboutSection from './components/speech-therapist/AboutSection';
import ServicesSection from './components/speech-therapist/ServicesSection';
import TargetAudienceSection from './components/speech-therapist/TargetAudienceSection';
import TipsSection from './components/speech-therapist/TipsSection';
import TestimonialsSection from './components/speech-therapist/TestimonialsSection';
import ContactSection from './components/speech-therapist/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'target', 'tips', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white font-hebrew" dir="rtl">
      <Navigation activeSection={activeSection} />
      
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TargetAudienceSection />
        <TipsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
    </div>
  );
}
