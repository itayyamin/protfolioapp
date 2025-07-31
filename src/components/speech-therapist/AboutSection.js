import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Award, Users, BookOpen } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">אודות</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mint mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-primary">שלום, אני [שם המטפלת]</h3>
              <p className="text-lg text-secondary leading-relaxed">
                אני קלינאית תקשורת מוסמכת עם תשוקה לעזור לילדים ומבוגרים להתפתח בתחום התקשורת והדיבור. 
                במשך השנים פיתחתי גישה טיפולית חמה ומקצועית המתאימה לכל גיל ולכל צורך.
              </p>
              <p className="text-secondary leading-relaxed">
                אני מאמינה שכל אדם ראוי לקול ולתקשורת איכותית. במרפאה שלי תמצאו אווירה תומכת, 
                כלים מותאמים אישית ותהליך טיפולי מותאם לקצב של כל מטופל ומטופלת.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                { icon: Award, text: "תואר ראשון בקלינאות תקשורת" },
                { icon: BookOpen, text: "השתלמויות מתקדמות" },
                { icon: Users, text: "מאות מטופלים מרוצים" },
                { icon: Heart, text: "טיפול באהבה ובמקצועיות" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-3 bg-cream-50 rounded-xl"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-secondary">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square bg-gradient-to-br from-cream-50 to-mint/20 rounded-3xl flex items-center justify-center relative overflow-hidden">
              {/* Placeholder for therapist photo */}
              <div className="w-48 h-48 bg-gradient-to-br from-primary/20 to-mint/30 rounded-full flex items-center justify-center">
                <Heart className="w-16 h-16 text-primary/40" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-16 h-16 bg-white/50 rounded-full"></div>
              <div className="absolute bottom-12 left-8 w-12 h-12 bg-mint/30 rounded-full"></div>
              <div className="absolute top-20 left-16 w-8 h-8 bg-primary/20 rounded-full"></div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs"
            >
              <p className="text-sm text-secondary italic mb-2">
                "כל ילד וילדה ראויים לקול שלהם"
              </p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-mint rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-white" />
                </div>
                <span className="text-xs font-medium text-primary">[שם המטפלת]</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}