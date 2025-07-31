import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Heart } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    childAge: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('תודה! ניצור איתך קשר בהקדם האפשרי');
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-cream-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary rounded-full"></div>
        <div className="absolute bottom-32 left-16 w-24 h-24 bg-mint rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-primary rounded-full"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">בואו נתחיל את המסע</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            מוזמנים ליצור קשר לקביעת פגישת היכרות חינמית או לכל שאלה
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mint mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">פרטי יצירת קשר</h3>
              
              <div className="space-y-6">
                {/* Phone */}
                <motion.a
                  href="tel:+972-50-123-4567"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary group-hover:text-mint transition-colors duration-300">טלפון</div>
                    <div className="text-secondary">050-123-4567</div>
                  </div>
                </motion.a>

                {/* Email */}
                <motion.a
                  href="mailto:example@speechtherapy.co.il"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary group-hover:text-mint transition-colors duration-300">אימייל</div>
                    <div className="text-secondary">example@speechtherapy.co.il</div>
                  </div>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/972501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary group-hover:text-mint transition-colors duration-300">WhatsApp</div>
                    <div className="text-secondary">שליחת הודעה מהירה</div>
                  </div>
                </motion.a>

                {/* Location */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">מיקום</div>
                    <div className="text-secondary">תל אביב, ישראל</div>
                  </div>
                </motion.div>

                {/* Hours */}
                <motion.div
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">שעות פעילות</div>
                    <div className="text-secondary text-sm">
                      <div>ראשון-חמישי: 8:00-18:00</div>
                      <div>שישי: 8:00-13:00</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Emergency Contact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary to-mint rounded-2xl p-6 text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6" />
                <h4 className="text-lg font-semibold">פגישת היכרות חינמית</h4>
              </div>
              <p className="text-white/90 mb-4">
                מוזמנים לפגישת היכרות של 30 דקות ללא התחייבות כדי להכיר ולהבין איך אני יכולה לעזור
              </p>
              <button className="bg-white text-primary px-6 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300">
                קבעו עכשיו
              </button>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100"
          >
            <h3 className="text-2xl font-semibold text-primary mb-6">שלחו הודעה</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">שם מלא</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="השם שלך"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-secondary mb-2">טלפון</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                    placeholder="מספר הטלפון שלך"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">אימייל</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="האימייל שלך"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">גיל הילד/ה (אם רלוונטי)</label>
                <input
                  type="text"
                  name="childAge"
                  value={formData.childAge}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="למשל: 5 שנים"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary mb-2">הודעה</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="ספרו לי קצת על הצרכים שלכם..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-primary to-mint text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Send className="w-5 h-5" />
                שלחו הודעה
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom spacing for mobile navigation */}
        <div className="h-20 lg:h-0"></div>
      </div>
    </section>
  );
}