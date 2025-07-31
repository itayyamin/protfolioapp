import React from 'react';
import { motion } from 'framer-motion';
import { Baby, Users, GraduationCap, Heart } from 'lucide-react';

const audiences = [
  {
    icon: Baby,
    title: "ילדים (2-12)",
    description: "פיתוח כישורי דיבור ושפה בגיל הרך באמצעות אימון משחקי וחווייתי",
    features: ["עיכובי דיבור", "הפרעות הגייה", "העשרת אוצר מילים", "פיתוח כישורי תקשורת"],
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50"
  },
  {
    icon: GraduationCap,
    title: "נוער (13-18)",
    description: "ליווי בגיל ההתבגרות עם דגש על ביטחון עצמי ותקשורת חברתית",
    features: ["כישורי תקשורת חברתית", "הכנה למבחנים", "ביטחון עצמי", "דיבור בציבור"],
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Users,
    title: "מבוגרים",
    description: "שיקום ופיתוח יכולות תקשורת במבוגרים לאחר פגיעות או קשיים",
    features: ["שיקום לאחר שבץ", "הפרעות בליעה", "הפרעות קול", "חרדת דיבור"],
    color: "from-teal-400 to-cyan-500",
    bgColor: "bg-teal-50"
  },
  {
    icon: Heart,
    title: "הורים ומשפחות",
    description: "הדרכה וליווי למשפחות כיצד לתמוך בפיתוח התקשורת בבית",
    features: ["הדרכת הורים", "כלים לבית", "ליווי משפחתי", "תמיכה רגשית"],
    color: "from-purple-400 to-violet-500",
    bgColor: "bg-purple-50"
  }
];

export default function TargetAudienceSection() {
  return (
    <section id="target" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-mint rounded-2xl mx-auto mb-6 flex items-center justify-center">
            <Users className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">למי זה מיועד?</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto leading-relaxed mb-6">
            הטיפולים שלי מותאמים לכל גיל וכל צורך, עם גישה אישית וחמה לכל מטופל
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-mint mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
              className={`${audience.bgColor} rounded-3xl p-8 border-2 border-transparent hover:border-white transition-all duration-300 shadow-lg hover:shadow-xl`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${audience.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <audience.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary">{audience.title}</h3>
                </div>
              </div>

              <p className="text-secondary leading-relaxed mb-6">
                {audience.description}
              </p>

              <div className="space-y-3">
                <h4 className="font-semibold text-primary mb-3">התמחויות:</h4>
                <div className="grid grid-cols-1 gap-2">
                  {audience.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-mint rounded-full flex-shrink-0"></div>
                      <span className="text-secondary text-sm">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary to-mint rounded-3xl p-8 text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-6">הישגים שמדברים בעד עצמם</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { number: "200+", text: "מטופלים בכל הגילים" },
              { number: "95%", text: "שיפור משמעותי" },
              { number: "5+", text: "שנות ניסיון מקצועי" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/90">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}