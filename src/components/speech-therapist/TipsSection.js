import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Heart, BookOpen, Users, Play, MessageCircle } from 'lucide-react';

const tips = [
  {
    icon: MessageCircle,
    title: "דברו הרבה עם הילד",
    description: "תאמצו דיבור עשיר ומגוון במהלך היום. תארו פעולות, רגשות ומחשבות.",
    tip: "אפילו תינוקות זקוקים לדיבור רב - זה מפתח את המוח שלהם"
  },
  {
    icon: BookOpen,
    title: "קריאה משותפת יומית",
    description: "קיראו יחד לפחות 15 דקות ביום. בחרו ספרים מתאימים לגיל ולתחומי עניין.",
    tip: "שאלו שאלות על הסיפור ועודדו את הילד לספר לכם מה קרה"
  },
  {
    icon: Play,
    title: "משחקי שפה יצירתיים",
    description: "שימוש במשחקי חרוזים, שירים וסיפורים לפיתוח היכולות הלשוניות.",
    tip: "אפשר להמציא סיפורים יחד או לשחק 'איזה מילה מתחילה ב...'"
  },
  {
    icon: Heart,
    title: "סבלנות ועידוד",
    description: "תנו למילדים זמן להביע את עצמם ואל תתקנו כל טעות מיד.",
    tip: "עידוד חיובי עובד הרבה יותר טוב מתיקון מתמיד"
  },
  {
    icon: Users,
    title: "אינטראקציה חברתית",
    description: "עודדו מפגשים עם ילדים אחרים ושיחות משפחתיות.",
    tip: "שולחן האוכל הוא מקום מצוין לתרגל כישורי שיחה"
  },
  {
    icon: Lightbulb,
    title: "למידה דרך חוויה",
    description: "לקחו את הילדים לטיולים, מוזיאונים ופעילויות שמעשירות את אוצר המילים.",
    tip: "חוויות חדשות יוצרות הזדמנויות טבעיות לדיבור ולמידה"
  }
];

export default function TipsSection() {
  return (
    <section id="tips" className="py-20 bg-cream-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Lightbulb className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">טיפים להורים</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            דרכים פשוטות ויעילות לעזור לילדים לפתח כישורי תקשורת ודיבור בבית
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mint mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-primary to-mint rounded-xl mb-5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <tip.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-semibold text-primary mb-3 group-hover:text-mint transition-colors duration-300">
                {tip.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed mb-4">
                {tip.description}
              </p>

              <div className="bg-gradient-to-r from-cream-50 to-mint/10 rounded-xl p-4 border-r-4 border-mint">
                <div className="flex items-start gap-2">
                  <Heart className="w-4 h-4 text-mint mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-secondary italic">
                    <strong className="text-primary">טיפ:</strong> {tip.tip}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-mint rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-primary">רוצים עוד טיפים?</h3>
            </div>
            
            <p className="text-secondary mb-6 leading-relaxed">
              אני מפרסמת באופן קבוע מאמרים, טיפים ופעילויות לפיתוח תקשורת. 
              בואו נקבע פגישת ייעוץ אישית כדי לקבל המלצות מותאמות לילד שלכם.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                className="bg-gradient-to-r from-primary to-mint text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                קבעו ייעוץ אישי
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary text-primary px-6 py-3 rounded-xl font-semibold hover:bg-primary hover:text-white transition-all duration-300"
              >
                הורידו מדריך חינם
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}